import Addresses from './addresses';
import Aliases from './aliases';
import Assets from './assets';
import Blocks from './blocks';
import Contracts from './contracts'
import Leasing from './leasing';
import Transactions from './transactions';
import Peers from './peers'
import {IPeers} from './peers.interfaces'
import Utils from './utils';


export interface INodeAPI {
    addresses: {
        balance(address: string, confirmations?: number): Promise<any>;
        balanceDetails(address: string): Promise<any>;
        data(address: string, offset: number, limit: number): Promise<any>;
    },
    aliases: {
        byAlias(alias: string): Promise<any>;
        byAddress(address: string): Promise<any>;
    },
    assets: {
        balances(address: string): Promise<any>;
        balance(address: string, assetId: string): Promise<any>;
        distribution(assetId: string): Promise<any>;
    },
    blocks: {
        get(signature: string): Promise<any>;
        at(height: number): Promise<any>;
        first(): Promise<any>;
        last(): Promise<any>;
        height(): Promise<any>;
    },
    contracts: {
        get(id: string, offset: number, limit: number): Promise<any>;
        getKey(id: string, key: string): Promise<any>;
        getExecutedTxFor(id: string): Promise<any>;
    },
    leasing: {
        getAllActiveLeases(address: string): Promise<any>;
    },
    transactions: {
        get(id: string): Promise<any>;
        getList(address: string): Promise<any>;
        utxSize(): Promise<any>;
        utxGet(id: string): Promise<any>;
        utxGetList(): Promise<any>;
    },
    peers: {
        connected(): Promise<{peers: IPeers[]}>;
    }
    utils: {
        time(): Promise<number>;
        script: {
            compile(code: string): Promise<string>;
        }
    }
}


export default class NodeAPI implements INodeAPI {
    constructor(fetchInstance: typeof fetch) {
        this.addresses = new Addresses(fetchInstance);
        this.aliases = new Aliases(fetchInstance);
        this.assets = new Assets(fetchInstance);
        this.blocks = new Blocks(fetchInstance);
        this.contracts = new Contracts(fetchInstance);
        this.leasing = new Leasing(fetchInstance);
        this.transactions = new Transactions(fetchInstance);
        this.peers = new Peers(fetchInstance);
        this.utils = new Utils(fetchInstance);
    }

    addresses: {
        balance(address: string, confirmations?: number): Promise<any>;
        balanceDetails(address: string): Promise<any>;
        data(address: string, offset: number, limit: number): Promise<any>;
    };

    aliases: {
        byAlias(alias: string): Promise<any>;
        byAddress(address: string): Promise<any>;
    };

    assets: {
        balances(address: string): Promise<any>;
        balance(address: string, assetId: string): Promise<any>;
        distribution(assetId: string): Promise<any>;
    };

    blocks: {
        get(signature: string): Promise<any>;
        at(height: number): Promise<any>;
        first(): Promise<any>;
        last(): Promise<any>;
        height(): Promise<any>;
    };

    contracts: {
        get(id: string, offset: number, limit: number): Promise<any>;
        getKey(id: string, key: string): Promise<any>;
        getExecutedTxFor(id: string): Promise<any>;
    };

    leasing: {
        getAllActiveLeases(address: string): Promise<any>;
    };

    transactions: {
        get(id: string): Promise<any>;
        getList(address: string): Promise<any>;
        utxSize(): Promise<any>;
        utxGet(id: string): Promise<any>;
        utxGetList(): Promise<any>;
    };

    peers: {
        connected(): Promise<{ peers: IPeers[] }>;
    };

    utils: {
        time(): Promise<number>;
        script: {
            compile(code: string): Promise<string>;
        }
    }
}
