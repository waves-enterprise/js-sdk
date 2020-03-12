import { createFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "../../utils/request";

export default class Aliases {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        });
    }

    private readonly fetch: typeof fetch;

    byAlias(alias: string) {
        return this.fetch(`/alias/by-alias/${alias}`);
    }

    byAddress(address: string) {
        return this.fetch(`/alias/by-address/${address}`);
    }

};
