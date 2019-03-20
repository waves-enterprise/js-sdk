import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';
import {DEFAULT_PAGING_OFFSET, DEFAULT_PAGING_LIMIT} from '../../constants';

const fetch = createFetchWrapper(PRODUCTS.NODE, VERSIONS.V1, processJSON);


export default {

    balance(address: string, confirmations?: number) {
        if (!confirmations) {
            return fetch(`/addresses/balance/${address}`);
        } else {
            return fetch(`/addresses/balance/${address}/${confirmations}`);
        }
    },

    balanceDetails(address: string) {
        return fetch(`/addresses/balance/details/${address}`);
    },

    data(address: string, offset: number = DEFAULT_PAGING_OFFSET, limit: number = DEFAULT_PAGING_LIMIT) {
        return fetch(`/addresses/data/${address}?offset=${offset}&limit=${limit}`);
    }

};
