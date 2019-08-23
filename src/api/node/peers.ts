import { IFetchWrapper } from "../../utils/request";

export default class Peers {

    constructor(fetchInstance: IFetchWrapper<any>) {
        this.fetch = fetchInstance;
    }

    private readonly fetch: IFetchWrapper<any>;

    connected() {
        return this.fetch('/peers/connected');
    }
};
