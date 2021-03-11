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
import { IKeyPair } from '../../interfaces'
import logger from "../../utils/logger"
import { WeSdk } from '../../index'
import {
  sendGrpcTx,
  TX_PROTO_MAPPING
} from '../../grpc'


// Additional methods for TRANSACTIONS
type TransactionDecorator<T> = {
  broadcast: (keys: IKeyPair) => Promise<object>,
  broadcastGrpc: (keys: IKeyPair) => Promise<object>,
  getSignedGrpcTx: (keys: IKeyPair) => Promise<Uint8Array>
  getGrpcDecorator: (keys: IKeyPair, isAtomic?: boolean) => Promise<any>
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
        api,
        name
      )
    })
  })
  api.API.Transactions = txs as TransactionsType
  return txs as TransactionsType
}

function decorateFactory(
  factory: TransactionFactory<any>,
  txClass: TransactionsCommon,
  api: WeSdk,
  txName: string
) {
  return (...args) => {
    const tx = factory(...args)

    const getSignedTxOriginal = tx.getSignedTx
    tx.getSignedTx = (keys: IKeyPair) => {
      if (!tx.fee && config.get().minimumFee) {
        tx.fee = config.getFee(tx.tx_type as number)
      }
      return getSignedTxOriginal.call(tx, keys)
    }

    tx.getGrpcDecorator = (keiPair: IKeyPair, isAtomic = false) => {
      const grpcTx = TX_PROTO_MAPPING[txName]
      if (!grpcTx) {
        throw new Error(`GRPC transaction ${txName} not supported yet`)
      }
      return grpcTx(tx, keiPair, isAtomic)
    }

    tx.broadcast = async (keys: IKeyPair) => {
      const postParams = await txRequestV2(tx as TransactionTypeWithDecorator, keys)
      logger.log('Broadcast tx body:', postParams.body)
      return txClass.fetch(constants.BROADCAST_PATH, postParams)
    }

    tx.getSignedGrpcTx = async (keyPair: IKeyPair) => {
      return (await (tx as any).getGrpcDecorator(keyPair)).serializeBinary()
    }

    tx.broadcastGrpc = async (keyPair: IKeyPair) => {
      return sendGrpcTx(api, await (tx as any).getGrpcDecorator(keyPair))
    }

    return tx
  }
}

class TransactionsCommon {
  // TODO cut old service
  private api: WeSdk
  readonly fetch: IFetchWrapper<any>

  constructor(api: WeSdk) {
    this.fetch = createFetchWrapper({
      product: PRODUCTS.NODE,
      version: VERSIONS.V1,
      pipe: processJSON,
      fetchInstance: api.API.Node.fetchInstance
    })
    this.api = api
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
    return this.api.API.Node.transactions.getTxId(txType, data, keyPair)
  }

  async getAtomicTxBody(
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

    return (this as unknown as TransactionsType).Atomic.V1(atomicTxBody)
  }

  async broadcastAtomicGrpc(
    atomicTx: ReturnType<typeof TRANSACTIONS.Atomic.V1>,
    keyPair: IKeyPair
  ) {
    return sendGrpcTx(this.api, await TX_PROTO_MAPPING.Atomic(atomicTx, keyPair))
  }

  async broadcastAtomic(
    atomicTx: ReturnType<typeof TRANSACTIONS.Atomic.V1>,
    keyPair: IKeyPair
  ) {
    return (await this.getAtomicTxBody(atomicTx, keyPair)).broadcast(keyPair)
  }
}
