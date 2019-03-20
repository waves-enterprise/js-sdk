import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';
import {DEFAULT_PAGING_OFFSET, DEFAULT_PAGING_LIMIT} from '../../constants';

const fetch = createFetchWrapper(PRODUCTS.NODE, VERSIONS.V1, processJSON);


export default {

    get(id: string, offset: number = DEFAULT_PAGING_OFFSET, limit: number = DEFAULT_PAGING_LIMIT) {
        return fetch(`/contracts/${id}?offset=${offset}&limit=${limit}`);
    },

    getKey(id: string, key: string) {
        return fetch(`/contracts/${id}/${key}`);
    },

    getExecutedTxFor(id: string) {
        return fetch(`/contracts/executed-tx-for/${id}`);
    }

};
