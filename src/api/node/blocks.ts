export default class Blocks {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = fetchInstance;
    }

    private readonly fetch: typeof fetch;

    get(signature: string) {
        return this.fetch(`/blocks/signature/${signature}`);
    }

    at(height: number) {
        return this.fetch(`/blocks/at/${height}`);
    }

    first() {
        return this.fetch('/blocks/first');
    }

    last() {
        return this.fetch('/blocks/last');
    }

    height() {
        return this.fetch('/blocks/height');
    }

};
