import Addresses from './addresses'
import Aliases from './aliases'
import Assets from './assets'
import Blocks from './blocks'
import Contracts from './contracts'
import Leasing from './leasing'
import Transactions from './transactions'
import Peers from './peers'
import Utils from './utils'

export default class NodeAPI {
    addresses: Addresses
    aliases: Aliases
    assets: Assets
    blocks: Blocks
    contracts: Contracts
    leasing: Leasing
    transactions: Transactions
    peers: Peers
    utils: Utils
    fetchInstance: typeof fetch

    constructor(fetchInstance: typeof fetch) {
        this.fetchInstance = fetchInstance
        this.addresses = new Addresses(fetchInstance)
        this.aliases = new Aliases(fetchInstance)
        this.assets = new Assets(fetchInstance)
        this.blocks = new Blocks(fetchInstance)
        this.contracts = new Contracts(fetchInstance)
        this.leasing = new Leasing(fetchInstance)
        this.transactions = new Transactions(fetchInstance)
        this.peers = new Peers(fetchInstance)
        this.utils = new Utils(fetchInstance)
    }
}
