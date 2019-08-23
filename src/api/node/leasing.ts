import { IFetchWrapper } from "../../utils/request";

export default class Leasing {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = fetchInstance;
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
