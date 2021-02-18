import { libs, utils } from '@wavesenterprise/transactions-factory'
import config from './config'
import { base58ToString } from './utils/base58ToString'
import { sha256 } from 'js-sha256'
import {encryptCommon, encryptSeparate, decrypt} from './libs/cryptoTool'

const hexAlphabet = '0123456789abcdefABCDEF'
function stripInvalidCharacters(s, alphabet) {
    let r = ''
    for (let i = 0; i < s.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (alphabet.indexOf(s.charAt(i)) != -1)
            r += s.charAt(i)
    }
    return r
}

function fromHex(s) {
    const r = []

    // add a leading 0 if there are an odd number of nybbles (thanks Elias C)
    if (s.length % 2 !== 0)
        s = '0' + s

    for (let i = 0; i < s.length; i += 2)
        r.push(parseInt(s.substr(i, 2), 16))
    return r
}

export default {

    getAddressFromPublicKey(publicKey: string) {
        const publicKeyBytes = libs.base58.decode(publicKey)
        return config.isCryptoGost()
            ? utils.cryptoGost.buildRawAddress(publicKeyBytes)
            : utils.crypto.buildRawAddress(publicKeyBytes)
    },

    calculateTimeDiff(nodeTime, userTime) {
         return nodeTime - userTime
    },

    base58: {
        encode: (val: Uint8Array | number[] | string) => {
            if (typeof val === 'string') {
                val = libs.converters.stringToByteArray(val)
            }
            return libs.base58.encode(Uint8Array.from(val))
        },
        decode: libs.base58.decode,
        base58ToString
    },

    convert: utils.convert,

    encodePolicyData (uint8array: number[]) {
        const base64Text = libs.base64.fromByteArray(uint8array)
        const sha = sha256(uint8array)
        const strip = stripInvalidCharacters(sha, hexAlphabet)
        const plain = fromHex(strip)
        const hash = libs.base58.encode(plain)
        return {
            base64Text,
            hash
        }
    },

    data: {
        encryptCommon,
        encryptSeparate,
        decrypt
    }

}
