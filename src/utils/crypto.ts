import {IKeyPairBytes} from '../../interfaces';
import * as CryptoJS from 'crypto-js';
import base58 from '../libs/base58';
import converters from '../libs/converters';
import secureRandom from '../libs/secure-random';
import cryptoGost from '../libs/crypto-gost';
import {concatUint8Arrays} from './concat';
import * as constants from '../constants';
import config from '../config';


function buildSeedHash(seedBytes: Uint8Array): Uint8Array {
    const nonce = new Uint8Array(converters.int32ToBytes(constants.INITIAL_NONCE, true));
    const seedBytesWithNonce = concatUint8Arrays(nonce, seedBytes);
    return cryptoGost.streebog256(seedBytesWithNonce);
}


function strengthenPassword(password: string, rounds: number = 5000): string {
    const pass = Uint8Array.from(converters.stringToByteArray(password));
    while (rounds--) password = converters.byteArrayToHexString(cryptoGost.streebog256(pass));
    return password;
}

export default {

    buildTransactionSignature(dataBytes: Uint8Array, privateKey: string): string {

        if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
            throw new Error('Missing or invalid data');
        }

        if (!privateKey || typeof privateKey !== 'string') {
            throw new Error('Missing or invalid private key');
        }

        const privateKeyBytes = base58.decode(privateKey);
        const signature = cryptoGost.sign(privateKeyBytes, dataBytes);

        return base58.encode(signature);
    },

    verifySignature(publicKey: string, signature: string, dataBytes: Uint8Array) {
        if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
            throw new Error('Missing or invalid data');
        }
        if (!publicKey || typeof publicKey !== 'string') {
            throw new Error('Missing or invalid publicKey key');
        }

        const publicKeyBytes = base58.decode(publicKey);
        const signatureBytes = base58.decode(signature);

        return cryptoGost.verify(publicKeyBytes,signatureBytes,dataBytes);
    },

    buildTransactionId(dataBytes: Uint8Array): string {

        if (!dataBytes || !(dataBytes instanceof Uint8Array)) {
            throw new Error('Missing or invalid data');
        }

        const hash = cryptoGost.streebog256(dataBytes);

        return base58.encode(hash);
    },

    buildKeyPair(seed: string): IKeyPairBytes {

        if (!seed || typeof seed !== 'string') {
            throw new Error('Missing or invalid seed phrase');
        }


        const seedBytes = Uint8Array.from(converters.stringToByteArray(seed));
        const seedHash = buildSeedHash(seedBytes);

        const keys = cryptoGost.generateKey(seedHash);
        const publicKey = new Uint8Array(keys.publicKey);
        const privateKey = new Uint8Array(keys.privateKey);
        return {
            publicKey,
            privateKey
        };

    },


    isValidAddress(address: string): boolean {

        if (!address || typeof address !== 'string') {
            throw new Error('Missing or invalid address');
        }

        const addressBytes = base58.decode(address);

        if (addressBytes[0] !== 1 || addressBytes[1] !== config.getNetworkByte()) {
            return false;
        }

        const key = addressBytes.slice(0, 22);
        const check = addressBytes.slice(22, 26);
        const keyHash = cryptoGost.streebog256(key).slice(0, 4);

        for (let i = 0; i < 4; i++) {
            if (check[i] !== keyHash[i]) {
                return false;
            }
        }

        return true;

    },

    buildRawAddress(publicKeyBytes: Uint8Array | ArrayBuffer): string {
        if (publicKeyBytes instanceof ArrayBuffer) {
            publicKeyBytes = new Uint8Array(publicKeyBytes);
        }
        if (!publicKeyBytes || publicKeyBytes.byteLength !== constants.PUBLIC_KEY_LENGTH || !(publicKeyBytes instanceof Uint8Array)) {
            throw new Error('Missing or invalid public key');
        }

        const prefix = Uint8Array.from([constants.ADDRESS_VERSION, config.getNetworkByte()]);
        const publicKeyHashPart = cryptoGost.streebog256(publicKeyBytes).slice(0, 20);

        const rawAddress = concatUint8Arrays(prefix, publicKeyHashPart);
        const addressHash = cryptoGost.streebog256(rawAddress).slice(0, 4);

        return base58.encode(concatUint8Arrays(rawAddress, addressHash));

    },

    encryptSeed(seed: string, password: string, encryptionRounds?: number): string {

        if (!seed || typeof seed !== 'string') {
            throw new Error('Seed is required');
        }

        if (!password || typeof password !== 'string') {
            throw new Error('Password is required');
        }

        password = strengthenPassword(password, encryptionRounds);
        return CryptoJS.AES.encrypt(seed, password).toString();

    },

    decryptSeed(encryptedSeed: string, password: string, encryptionRounds?: number): string {

        if (!encryptedSeed || typeof encryptedSeed !== 'string') {
            throw new Error('Encrypted seed is required');
        }

        if (!password || typeof password !== 'string') {
            throw new Error('Password is required');
        }

        password = strengthenPassword(password, encryptionRounds);
        const hexSeed = CryptoJS.AES.decrypt(encryptedSeed, password);
        return converters.hexStringToString(hexSeed.toString());

    },

    generateRandomUint32Array(length: number): Uint32Array {

        if (!length || length < 0) {
            throw new Error('Missing or invalid array length');
        }

        const a = secureRandom.randomUint8Array(length);
        const b = secureRandom.randomUint8Array(length);
        const result = new Uint32Array(length);

        for (let i = 0; i < length; i++) {
            const hash = converters.byteArrayToHexString(cryptoGost.streebog256(`${a[i]}${b[i]}`));
            const randomValue = parseInt(hash.slice(0, 13), 16);
            result.set([randomValue], i);
        }

        return result;

    }

}


