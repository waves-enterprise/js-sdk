import * as constants from '../../constants';
import {
  createFetchWrapper,
  IFetchWrapper,
  POST_TEMPLATE,
  processJSON,
  PRODUCTS,
  VERSIONS,
  txRequestV2,
} from '../../utils/request';
import NodeAPI from '../';
import OldTxService from './index';
import { TransactionFactory, TRANSACTION_TYPES, TRANSACTIONS } from '@wavesenterprise/transactions-factory';
import config from '../../config';
import { IKeyPair } from '../../../interfaces';


// Additional methods for TRANSACTIONS
type TransactionDecorator = {
  broadcast: (keys: IKeyPair) => Promise<object>,
}
// EXPORTED TYPES
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type ArgType<T> = T extends (arr: infer R) => any ? R : any;
type TX_TYPES = {
  [key in keyof typeof TRANSACTIONS]?: {
    [key1 in keyof typeof TRANSACTIONS[key]]?: (tx: ArgType<typeof TRANSACTIONS[key][key1]>) =>
      ReturnType<typeof TRANSACTIONS[key][key1]> & TransactionDecorator
  }
}

export type TransactionsType = TransactionsCommon & TX_TYPES;

export function Transactions(nodeApi: NodeAPI) : TransactionsType {
  const txs = new TransactionsCommon(nodeApi);
  Object.keys(TRANSACTIONS).forEach(name => {
    Object.keys(TRANSACTIONS[name]).forEach(version => {
      if (!txs[name]) {
        txs[name] = {}
      }
      txs[name][version] = decorateFactory(TRANSACTIONS[name][version], txs);
    })
  })
  return txs;
}

function decorateFactory(factory: TransactionFactory<any>, txClass: TransactionsCommon) {
  return function(...args) {
    const tx = factory(...args);
    tx.broadcast = async (keys: IKeyPair) => {
      const postParams = await txRequestV2(tx, keys)
      return txClass.fetch(constants.BROADCAST_PATH, postParams)
    };
    return tx;
  }
}

class TransactionsCommon {
  // TODO cut old service
  private oldTxService: OldTxService;
  public readonly fetch: IFetchWrapper<any>;

  constructor(nodeApi: NodeAPI) {
    this.fetch = createFetchWrapper({
      product: PRODUCTS.NODE,
      version: VERSIONS.V1,
      pipe: processJSON,
      fetchInstance: nodeApi.fetchInstance
    });
    this.oldTxService = nodeApi.transactions;
  }

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

  rawBroadcast(data) {
    return this.fetch(constants.BROADCAST_PATH, {
      ...POST_TEMPLATE,
      body: JSON.stringify(data)
    });
  }

  async getTxId (txType: string, data: object, keyPair: { publicKey: string, privateKey?: string }) {
    return this.oldTxService.getTxId(txType, data, keyPair);
  }

};
