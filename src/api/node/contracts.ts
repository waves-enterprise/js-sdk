import {DEFAULT_PAGING_OFFSET, DEFAULT_PAGING_LIMIT} from '../../constants';


export default class Contracts {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = fetchInstance;
    }

    private readonly fetch: typeof fetch;

    get(id: string, offset: number = DEFAULT_PAGING_OFFSET, limit: number = DEFAULT_PAGING_LIMIT) {
        return this.fetch(`/contracts/${id}?offset=${offset}&limit=${limit}`);
    }

    getKey(id: string, key: string) {
        return this.fetch(`/contracts/${id}/${key}`);
    }

    getExecutedTxFor(id: string) {
        return this.fetch(`/contracts/executed-tx-for/${id}`);
    }

};
