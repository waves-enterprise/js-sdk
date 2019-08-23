import Addresses from './addresses';
import * as constants from '../../constants';


export default class Assets {

    constructor(fetchInstance: typeof fetch) {
        this.fetch = fetchInstance;
        this.addresses = new Addresses(fetchInstance);
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
