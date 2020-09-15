import { createFetchWrapper, IFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "../utils/request";

export default class Peers {

    constructor(fetchInstance: IFetchWrapper<any>) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        });
    }

    private readonly fetch: IFetchWrapper<any>;

    connected() {
        return this.fetch('/peers/connected');
    }
};
