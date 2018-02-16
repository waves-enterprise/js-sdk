import * as Crypto from 'crypto-gost';
import converters from '../libs/converters';
import {IKeyPairBytes} from "../../interfaces";

const gostEngine = (Crypto as any).GostEngine;
const gostCrypto = (Crypto as any).CryptoGost;
const { coding } = gostCrypto;

const algoritmKey = {
    keySize:32,
    length:256,
    mode:'SIGN',
    name:'GOST R 34.10',
    procreator:'CP',
    version:2012,
};

const algorithmGostSign = {
    name: 'GOST R 34.10',
    version: 2012,
    mode: 'SIGN',
    length: 256,
    procreator: 'CP',
    keySize: 32,
    namedCurve: 'S-256-A',
    hash:
        {
            name: 'GOST R 34.11',
            version: 2012,
            mode: 'HASH',
            length: 256,
            procreator: 'CP',
            keySize: 32
        },
    id: 'id-tc26-gost3410-12-256'
};


export default {
    streebog256 (data: Uint8Array | string): Uint8Array {
        if (typeof data === 'string') {
            data = Uint8Array.from(converters.stringToByteArray(data));
        }
        const GostDigest = gostEngine.getGostDigest({
            name: 'GOST R 34.11'
        });
        return new Uint8Array(GostDigest.digest(data));
    },

    generateKey (ukm: Uint8Array): IKeyPairBytes {
        const GostSign = gostEngine.getGostSign({...algorithmGostSign,ukm});
        const keys =  GostSign.generateKey();
        const privateKeyObject = convertKey(algoritmKey, false, null, keys.privateKey, 'private');
        const publicKeyObject = convertKey(algoritmKey, false, null, keys.publicKey, 'public');
        return {
                publicKey: this.exportKey('raw',publicKeyObject),
                privateKey: this.exportKey('raw',privateKeyObject)
        }
    },

    sign (privateKey: Uint8Array, dataBytes: Uint8Array) {
        const GostSign = gostEngine.getGostSign({...algorithmGostSign});

        const signature = GostSign.sign(privateKey.buffer, dataBytes);

        if (signature instanceof ArrayBuffer) {
            return new Uint8Array(signature);
        } else {
            throw new Error('Signature format not supported');
        }
    },

    importKey (format: string, key: ArrayBuffer, type: string) {
        let decodeKey = null;
        switch (format) {
            case 'spki':
                decodeKey = gostCrypto.asn1.GostSubjectPublicKeyInfo.decode(key);
                break;
            case 'pkcs8':
                decodeKey = gostCrypto.asn1.GostPrivateKeyInfo.decode(key);
                break;
            case 'raw':
                decodeKey = key;
                break;
        }

        if (decodeKey) {
            return convertKey(algoritmKey,
                false, null, decodeKey, type);
        } else {
            throw new Error('Key format not supported');
        }

    },

    exportKey (format: string, key): ArrayBuffer {
        let encodeKey = null;
        switch (format) {
            case 'spki':
                encodeKey = gostCrypto.asn1.GostSubjectPublicKeyInfo.encode(key);
                break;
            case 'pkcs8':
                encodeKey = gostCrypto.asn1.GostPrivateKeyInfo.encode(key);
                break;
            case 'raw':
                encodeKey = extractKey(null, null, key);
                break;
        }
        if (encodeKey) {
            return encodeKey;
        } else {
            throw new Error('Key format not supported');
        }

    },

    verify (publicKey: Uint8Array, signature: Uint8Array, data: Uint8Array) {
        const GostSign = gostEngine.getGostSign({...algorithmGostSign});

        return GostSign.verify(publicKey, signature, data);
    },

    encrypt (password: string, seed: string) {

    },
    decrypt (password: string, encreptedSeed: string) {

    },

    decodeHex(input: string): ArrayBuffer {
        return coding.Hex.decode(input);
    },

    encodeHex(input: ArrayBuffer): string {
        return coding.Hex.encode(input);
    },

    decodeChars(input: string, charset: string): ArrayBuffer {
        return coding.Chars.decode(input, charset);
    },

    encodeChars(input: ArrayBuffer, charset: string): string {
        return coding.Chars.encode(input, charset);
    }
}

function convertKey(algorithm, extractable: boolean, keyUsages: [string] | null, keyData: ArrayBuffer, keyType: string) {
    return {
        type: keyType || (algorithm.name === 'GOST R 34.10' ? 'private' : 'secret'),
        extractable: extractable || 'false',
        algorithm: algorithm,
        usages: keyUsages || [],
        buffer: keyData
    }
}

function extractKey(method, algorithm, key):ArrayBuffer {
    if (algorithm) {
        let params = null;
        switch (algorithm.mode) {
            case 'ES':
                params = ['sBox', 'keyMeshing', 'padding', 'block'];
                break;
            case 'SIGN':
                params = ['namedCurve', 'namedParam', 'sBox', 'curve', 'param', 'modulusLength'];
                break;
            case 'MAC':
                params = ['sBox'];
                break;
            case 'KW':
                params = ['keyWrapping', 'ukm'];
                break;
            case 'DH':
                params = ['namedCurve', 'namedParam', 'sBox', 'ukm', 'curve', 'param', 'modulusLength'];
                break;
            case 'KDF':
                params = ['context', 'label'];
                break;
            case 'PBKDF2':
                params = ['sBox', 'iterations', 'salt'];
                break;
            case 'PFXKDF':
                params = ['sBox', 'iterations', 'salt', 'diversifier'];
                break;
            case 'CPKDF':
                params = ['sBox', 'salt'];
                break;
        }
        if (params)
            params.forEach(function (name) {
                key.algorithm[name] && (algorithm[name] = key.algorithm[name]);
            });
    }
    return key.buffer;
}


