import { libs, utils, TX_TYPE_MAP } from '@vostokplatform/signature-generator';
import config from './config'
import { MINIMUM_DATA_FEE_PER_KB } from './constants';
import { createTransaction, ITransactionWrapper } from './utils/transactions'; // TODO : fix this issue with interface

import { base58ToString } from './utils/base58ToString';

export default {

    getAddressFromPublicKey(publicKey: string) {
        const publicKeyBytes = libs.base58.decode(publicKey);
        return config.isCryptoGost()
            ? utils.cryptoGost.buildRawAddress(publicKeyBytes)
            : utils.crypto.buildRawAddress(publicKeyBytes);
    },

    calculateTimeDiff(nodeTime, userTime) {
         return nodeTime - userTime;
    },

    base58: {
        encode: libs.base58.encode,
        decode: libs.base58.decode,
        base58ToString
    },

    getMinimumDataTxFee(data: any[]): Promise<number> {
        const emptyDataTx = new TX_TYPE_MAP.data({
            senderPublicKey: '11111111111111111111111111111111', // 32 bytes
            timestamp: 0,
            fee: '',
            data
        });

        return emptyDataTx.getBytes().then((bytes) => Math.ceil(bytes.length / 1024) * MINIMUM_DATA_FEE_PER_KB);
    },

    createTransaction

};
