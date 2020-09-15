"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addresses_1 = require("./addresses");
var aliases_1 = require("./aliases");
var assets_1 = require("./assets");
var blocks_1 = require("./blocks");
var contracts_1 = require("./contracts");
var leasing_1 = require("./leasing");
var transactions_1 = require("./transactions");
var peers_1 = require("./peers");
var utils_1 = require("./utils");
var NodeAPI = /** @class */ (function () {
    function NodeAPI(fetchInstance) {
        this.addresses = new addresses_1.default(fetchInstance);
        this.aliases = new aliases_1.default(fetchInstance);
        this.assets = new assets_1.default(fetchInstance);
        this.blocks = new blocks_1.default(fetchInstance);
        this.contracts = new contracts_1.default(fetchInstance);
        this.leasing = new leasing_1.default(fetchInstance);
        this.transactions = new transactions_1.default(fetchInstance);
        this.peers = new peers_1.default(fetchInstance);
        this.utils = new utils_1.default(fetchInstance);
    }
    return NodeAPI;
}());
exports.default = NodeAPI;
//# sourceMappingURL=index.js.map