import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';


const fetch = createFetchWrapper(PRODUCTS.NODE, VERSIONS.V1, processJSON);


export default {

    get(id: string) {
        return fetch(`/contracts/${id}`);
    },

    getKey(id: string, key: string) {
        return fetch(`/contracts/${id}/${key}`);
    },

    getExecutedTxFor(id: string) {
        return fetch(`/contracts/executed-tx-for/${id}`);
    }

};
