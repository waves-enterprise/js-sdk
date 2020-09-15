import {libs} from '@vostokplatform/transactions-factory';

declare function escape(s: string): string;

// usage: Waves.tools.base58.base58ToString(str)
export function base58ToString(base58String) {
    const arr = libs.base58.decode(base58String);
    const str = String.fromCharCode.apply(null, arr);
    return decodeURIComponent(escape(str))
}
