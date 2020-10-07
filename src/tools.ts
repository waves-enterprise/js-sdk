import { libs, utils } from '@wavesenterprise/transactions-factory';
import config from './config'
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
    }

};
