import config from '../../config';
import * as constants from '../../constants';
import WavesError from '../../errors/WavesError';
import {
  createFetchWrapper,
  createTxRequestWrapper,
  IFetchWrapper,
  POST_TEMPLATE,
  processJSON,
  PRODUCTS,
  VERSIONS
} from '../../utils/request';
import TRANSFORMS from "./transactions.transforms";
import {getTransactionFactory, TRANSACTION_TYPES} from '@wavesenterprise/transactions-factory'
import { txRequest } from '../../utils/request';
import logger from "../../utils/logger";

export default class Transactions {

  constructor(fetchInstance: IFetchWrapper<any>) {
    this.fetch = createFetchWrapper({
      product: PRODUCTS.NODE,
      version: VERSIONS.V1,
      pipe: processJSON,
      fetchInstance
    });
    this.txRequestFromNodeAddress = createTxRequestWrapper(fetchInstance);
  }

  private readonly fetch: IFetchWrapper<any>;

  private readonly txRequestFromNodeAddress: (
    preRemapAsync: Function,
    postRemap: Function,
    postSignRemap: Function,
    nodeAddress: string,
    data: object,
    extraData: {
      sender: string;
      password: string;
    }
  ) => Promise<any>;

  static getTxMetaInfo(txType) {
    const {type, v: version} = constants.LEGACY_TX_TYPES[txType]
    const key = Object.keys(TRANSACTION_TYPES).find(key => TRANSACTION_TYPES[key] === type)
    return {type, version, key}
  }

  get(id: string) {
    if (id === constants.WAVES) {
      return Promise.resolve(constants.WAVES_V1_ISSUE_TX);
    } else {
      return this.fetch(`/transactions/info/${id}`);
    }
  }

  getList(address: string, limit: number = config.getRequestParams().limit) {
    // In the end of the line a strange response artifact is handled
    return this.fetch(`/transactions/address/${address}/limit/${limit}`).then((array) => array[0]);
  }

  utxSize() {
    return this.fetch('/transactions/unconfirmed/size');
  }

  utxGet(id: string) {
    return this.fetch(`/transactions/unconfirmed/info/${id}`);
  }

  utxGetList() {
    return this.fetch('/transactions/unconfirmed');
  }

  async broadcastFromClientAddress(txType: string, data, keys) {
    const postParams = await this.processTx(txType, data, keys);
    logger.log('Broadcast tx body:', postParams.body)
    return this.fetch(constants.BROADCAST_PATH, postParams)
  }

  async broadcastFromNodeAddress(txType: string, nodeAddress: string, data, extraData) {
    const {type, version, key} = Transactions.getTxMetaInfo(txType)
    if (!type || !key) {
      throw new WavesError(`Wrong transaction type: ${type}`, data);
    }
    const {pre: preRemap, post: postRemap, postSign: postSignRemap} = TRANSFORMS[key][`V${version}`]
    return this.txRequestFromNodeAddress(
      preRemap,
      postRemap,
      postSignRemap,
      nodeAddress,
      {...data, type, version},
      extraData
    );
  }

  async broadcastAtomic(atomicBody, transactions, keyPair) {
    const {
      sender,
      fee = 0,
      timestamp = Date.now()
    } = atomicBody

    const signedTransactions = await Promise.all(transactions.map(async txData => {
      const { type, tx } = txData
      if (type !== 'policyDataHashV3') {
        const signedTx = await this.sign(type, tx, keyPair)
        const id = await this.getTxId(type, tx, keyPair)
        return {
          ...signedTx,
          id
        }
      } else {
        const { apiKey } = txData
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

    const atomicTx = {
      sender,
      fee,
      timestamp,
      transactions: signedTransactions
    }
    return this.broadcastFromClientAddress('atomic', atomicTx, keyPair);
  }

  async sign(txType: string, data, keys) {
    const postParams = await this.processTx(txType, data, keys);
    return JSON.parse(postParams.body)
  }

  processTx(txType: string, data, keys) {
    const {type, version, key} = Transactions.getTxMetaInfo(txType)
    if (!type || !key) {
      throw new WavesError(`Wrong transaction type: ${type}`, data);
    }
    const factory = getTransactionFactory(version, type)
    const {pre, post} = TRANSFORMS[key][`V${version}`]
    return txRequest(
      factory,
      data,
      keys,
      true,
      pre,
      post,
    )
  }

  rawBroadcast(data) {
    return this.fetch(constants.BROADCAST_PATH, {
      ...POST_TEMPLATE,
      body: JSON.stringify(data)
    });
  }

  async getTxId (txType: string, data: object, keyPair: { publicKey: string, privateKey?: string }) {
    const { publicKey } = keyPair
    const { type, version, key } = Transactions.getTxMetaInfo(txType)
    const factory = getTransactionFactory(version, type)
    const { pre } = TRANSFORMS[key][`V${version}`]
    const preData = await pre({
      ...data,
      senderPublicKey: publicKey
    })
    const tx = factory(preData)
    const txId = await tx.getId()
    return txId
  }

};
