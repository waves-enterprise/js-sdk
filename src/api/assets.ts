import { createFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "../utils/request";
import Addresses from './addresses';
import * as constants from '../constants';


export default class Assets {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        });
        this.addresses = new Addresses(this.fetch);
    }

    private readonly fetch: typeof fetch;

    private readonly addresses: Addresses;

    balances(address: string) {
        return this.fetch(`/assets/balance/${address}`);
    }

    balance(address: string, assetId: string) {
        if (assetId === constants.WAVES) {
            return this.addresses.balance(address);
        } else {
            return this.fetch(`/assets/balance/${address}/${assetId}`);
        }
    }

    distribution(assetId: string) {
        return this.fetch(`/assets/${assetId}/distribution`);
    }

};
