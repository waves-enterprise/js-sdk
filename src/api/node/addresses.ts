import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';


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

    data(address: string, offset?: number, limit?: number) {
        let params = '';
        if (typeof offset !== 'undefined') {
            params += `&offset=${offset}`
        }
        if (typeof limit !== 'undefined') {
            params += `&limit=${limit}`
        }
        return fetch(`/addresses/data/${address}${params}`)
    }

};
