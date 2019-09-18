import fetchInstance from '../../libs/fetch'
import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON } from '../../utils/request';


const fetch = createFetchWrapper({
    product: PRODUCTS.MATCHER,
    version: VERSIONS.V1,
    pipe: processJSON,
    fetchInstance
});


export default {

    getMatcherKey() {
        return fetch('/');
    }

};
