import { createFetchWrapper, IFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "../utils/request";

export default class Leasing {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        });
    }

    private readonly fetch: IFetchWrapper<any>;

    getAllActiveLeases(address) {
        return this.fetch(`/leasing/active/${address}`).then((list) => {
            return list.map((tx) => {
                tx.status = 'active';
                return tx;
            });
        });
    }

};
