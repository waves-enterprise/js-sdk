export default class Aliases {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = fetchInstance;
    }

    private readonly fetch: typeof fetch;

    byAlias(alias: string) {
        return this.fetch(`/alias/by-alias/${alias}`);
    }

    byAddress(address: string) {
        return this.fetch(`/alias/by-address/${address}`);
    }

};
