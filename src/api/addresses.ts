import {DEFAULT_PAGING_OFFSET, DEFAULT_PAGING_LIMIT} from '../constants'
import { createFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "../utils/request"

export default class Addresses {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        })
    }

    private readonly fetch: typeof fetch

    balance(address: string, confirmations?: number) {
        if (!confirmations) {
            return this.fetch(`/addresses/balance/${address}`)
        } else {
            return this.fetch(`/addresses/balance/${address}/${confirmations}`)
        }
    }

    balanceDetails(address: string) {
        return this.fetch(`/addresses/balance/details/${address}`)
    }

    data(address: string, offset: number = DEFAULT_PAGING_OFFSET, limit: number = DEFAULT_PAGING_LIMIT) {
        return this.fetch(`/addresses/data/${address}?offset=${offset}&limit=${limit}`)
    }

}
