import * as constants from '../../constants'
import {
  createFetchWrapper,
  IFetchWrapper,
  POST_TEMPLATE,
  processJSON,
  PRODUCTS,
  VERSIONS,
  txRequestV2,
} from '../../utils/request'
import OldTxService from './index'
import {
  TransactionFactory,
  TRANSACTION_TYPES,
  TRANSACTIONS,
  TransactionType,
} from '@wavesenterprise/transactions-factory'
import config from '../../config'
import { IKeyPair } from '../../../interfaces'
import logger from "../../utils/logger"
import { WeSdk } from '../../index'
import { callContract, createContract, sendGrpcTx } from '../../grpc'


// Additional methods for TRANSACTIONS
type TransactionDecorator<T> = {
  broadcast: (keys: IKeyPair) => Promise<object>,
  broadcastGrpc: (keys: IKeyPair) => Promise<object>,
  getSignedGrpcTx: (keys: IKeyPair) => Promise<Uint8Array>,
  getBody: () => {
    version: number,
    type: number
  } & T,
  getSignedTx: (keys: IKeyPair) => Promise<{
    senderPublicKey: string,
    proofs: string[],
    version: number,
    type: number
  } & T>
}
export type TransactionTypeWithDecorator = TransactionDecorator<any> & TransactionType<any>
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
type ArgType<T> = T extends (arr: infer R) => any ? R : any
type TX_TYPES = {
  [key in keyof typeof TRANSACTIONS]: {
    [key1 in keyof typeof TRANSACTIONS[key]]: (tx: ArgType<typeof TRANSACTIONS[key][key1]>) =>
      ReturnType<typeof TRANSACTIONS[key][key1]>
      & TransactionDecorator<
        Omit<ReturnType<typeof TRANSACTIONS[key][key1]>,
          'getId' | 'getBytes' | 'getErrors' | 'getSignature' | 'isValid' | 'tx_type'>
      >
  }
}

export type TransactionsType = TransactionsCommon & TX_TYPES


export function Transactions(api: WeSdk) : TransactionsType {
  const txs = new TransactionsCommon(api)
  Object.keys(TRANSACTIONS).forEach(name => {
    Object.keys(TRANSACTIONS[name]).forEach(version => {
      if (!txs[name]) {
        txs[name] = {}
      }
      txs[name][version] = decorateFactory(
        TRANSACTIONS[name][version],
        txs,
        api
      )
    })
  })
  api.API.Transactions = txs as TransactionsType
  return txs as TransactionsType
}

function decorateFactory(
  factory: TransactionFactory<any>,
  txClass: TransactionsCommon,
  api: WeSdk
) {
  return (...args) => {
    const tx = factory(...args)

    tx.broadcast = async (keys: IKeyPair) => {
      const postParams = await txRequestV2(tx as TransactionTypeWithDecorator, keys)
      logger.log('Broadcast tx body:', postParams.body)
      return txClass.fetch(constants.BROADCAST_PATH, postParams)
    }

    tx.getBody = () => {
      const data = {} as any
      Object.keys(tx).forEach(key => {
        if (typeof tx[key] !== 'function' && key !== 'val') {
          data[key] = tx[key]
        }
      })
      if (!data.fee && config.get().minimumFee) {
        tx.fee = config.getFee(tx.tx_type as number)
        data.fee = config.getFee(tx.tx_type as number)
      }
      delete data.tx_type
      return {
        ...data,
        version: tx.version,
        type: tx.tx_type
      }
    }

    tx.getSignedTx = async (keyPair: IKeyPair) => {
      const data = (tx as any).getBody()
      tx.senderPublicKey = keyPair.publicKey
      const signature = await tx.getSignature(keyPair.privateKey)
      return {
        ...data,
        senderPublicKey: keyPair.publicKey,
        proofs: [signature]
      }
    }

    function getGrpcTx(keyPair: IKeyPair) {
      switch (tx.tx_type) {
        case 103:
          return createContract(
            tx as any,
            api,
            keyPair
          )
        case 104:
          return callContract(
            tx as any,
            api,
            keyPair
          )
        default:
          throw new Error('Support only docker call and docker create transactions')
      }
    }

    tx.getSignedGrpcTx = async (keyPair: IKeyPair) => {
      return (await getGrpcTx(keyPair)).serializeBinary()
    }

    tx.broadcastGrpc = async (keyPair: IKeyPair) => {
      return sendGrpcTx(api, await getGrpcTx(keyPair))
    }

    return tx
  }
}

class TransactionsCommon {
  // TODO cut old service
  private oldTxService: OldTxService
  readonly fetch: IFetchWrapper<any>

  constructor(api: WeSdk) {
    this.fetch = createFetchWrapper({
      product: PRODUCTS.NODE,
      version: VERSIONS.V1,
      pipe: processJSON,
      fetchInstance: api.API.Node.fetchInstance
    })
    this.oldTxService = api.API.Node.transactions
  }

  static getTxMetaInfo(txType) {
    const {type, v: version} = constants.LEGACY_TX_TYPES[txType]
    const key = Object.keys(TRANSACTION_TYPES).find(k => TRANSACTION_TYPES[k] === type)
    return {type, version, key}
  }

  get(id: string) {
    if (id === constants.WAVES) {
      return Promise.resolve(constants.WAVES_V1_ISSUE_TX)
    } else {
      return this.fetch(`/transactions/info/${id}`)
    }
  }

  getList(address: string, limit: number = config.getRequestParams().limit) {
    // In the end of the line a strange response artifact is handled
    return this.fetch(`/transactions/address/${address}/limit/${limit}`).then((array) => array[0])
  }

  utxSize() {
    return this.fetch('/transactions/unconfirmed/size')
  }

  utxGet(id: string) {
    return this.fetch(`/transactions/unconfirmed/info/${id}`)
  }

  utxGetList() {
    return this.fetch('/transactions/unconfirmed')
  }

  rawBroadcast(data) {
    return this.fetch(constants.BROADCAST_PATH, {
      ...POST_TEMPLATE,
      body: JSON.stringify(data)
    })
  }

  async getTxId (txType: string, data: object, keyPair: IKeyPair) {
    return this.oldTxService.getTxId(txType, data, keyPair)
  }

  async broadcastAtomic(
    atomicTx: ReturnType<typeof TRANSACTIONS.Atomic.V1>,
    keyPair: IKeyPair
  ) {
    const {
      timestamp = Date.now()
    } = atomicTx

    const signedTransactions = await Promise.all(atomicTx.transactions.map(async tx => {
      if (tx.val.tx_type.type !== 114) {
        const signedTx = await tx.getSignedTx(keyPair)
        const id = await tx.getId()
        return {
          ...signedTx,
          id
        }
      } else {
        const { apiKey } = tx
        const result = await this.fetch(`/privacy/sendData?broadcast=false`, {
          ...POST_TEMPLATE,
          headers: {
            ...POST_TEMPLATE.headers,
            'X-API-KEY': apiKey
          },
          body: JSON.stringify(tx)
        })
        return result
      }
    }))

    const atomicTxBody = {
      timestamp: timestamp as number,
      transactions: signedTransactions
    }
    return (this as unknown as TransactionsType).Atomic.V1(atomicTxBody).broadcast(keyPair)
  }
}
