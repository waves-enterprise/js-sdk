"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var addresses_1 = require("./addresses");
var constants = require("../constants");
var Assets = /** @class */ (function () {
    function Assets(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
        this.addresses = new addresses_1.default(this.fetch);
    }
    Assets.prototype.balances = function (address) {
        return this.fetch("/assets/balance/" + address);
    };
    Assets.prototype.balance = function (address, assetId) {
        if (assetId === constants.WAVES) {
            return this.addresses.balance(address);
        }
        else {
            return this.fetch("/assets/balance/" + address + "/" + assetId);
        }
    };
    Assets.prototype.distribution = function (assetId) {
        return this.fetch("/assets/" + assetId + "/distribution");
    };
    return Assets;
}());
exports.default = Assets;
;
//# sourceMappingURL=assets.js.map