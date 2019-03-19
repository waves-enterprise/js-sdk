import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';


const fetch = createFetchWrapper(PRODUCTS.NODE, VERSIONS.V1, processJSON);


export default {

    get(id: string, offset?: number, limit?: number) {
        let params = '';
        if (typeof offset !== 'undefined') {
            params += `&offset=${offset}`
        }
        if (typeof limit !== 'undefined') {
            params += `&limit=${limit}`
        }
        return fetch(`/contracts/${id}${params}`);
    },

    getKey(id: string, key: string) {
        return fetch(`/contracts/${id}/${key}`);
    },

    getExecutedTxFor(id: string) {
        return fetch(`/contracts/executed-tx-for/${id}`);
    }

};
