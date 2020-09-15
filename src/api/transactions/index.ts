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
import {getTransactionFactory, TRANSACTION_TYPES} from '@vostokplatform/transactions-factory'
import { wrapTxRequest } from '../../utils/request';

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

    broadcastFromClientAddress(txType: string, data, keys) {
        return this.processTx(txType, data, keys,
          (postParams: any) => this.fetch(constants.BROADCAST_PATH, postParams)
          )
    }

    async broadcastFromNodeAddress(txType: string, nodeAddress: string, data, extraData) {
        const {type, version, key} = Transactions.getTxMetaInfo(txType)
        if (!type || !key) {
            throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
        const {pre: preRemap, post: postRemap} = TRANSFORMS[key][`V${version}`]
        return this.txRequestFromNodeAddress(preRemap, postRemap, nodeAddress, data, extraData);
    }

    sign(txType: string, data, keys) {
        return this.processTx(txType, data, keys,
          (postParams: any) => JSON.parse(postParams.body)
        )
    }

    processTx(txType: string, data, keys, callback) {
        const {type, version, key} = Transactions.getTxMetaInfo(txType)
        if (!type || !key) {
            throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
        const factory = getTransactionFactory(version, type)
        const {pre, post} = TRANSFORMS[key][`V${version}`]
        return wrapTxRequest(
          factory,
          pre,
          post,
          callback,
          true
        )(data, keys)
    }

    rawBroadcast(data) {
        return this.fetch(constants.BROADCAST_PATH, {
            ...POST_TEMPLATE,
            body: JSON.stringify(data)
        });
    }

    signOnNode(data) {
        return this.fetch('/transactions/sign');
    }

};
