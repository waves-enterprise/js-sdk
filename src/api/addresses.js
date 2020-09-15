"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var request_1 = require("../utils/request");
var Addresses = /** @class */ (function () {
    function Addresses(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Addresses.prototype.balance = function (address, confirmations) {
        if (!confirmations) {
            return this.fetch("/addresses/balance/" + address);
        }
        else {
            return this.fetch("/addresses/balance/" + address + "/" + confirmations);
        }
    };
    Addresses.prototype.balanceDetails = function (address) {
        return this.fetch("/addresses/balance/details/" + address);
    };
    Addresses.prototype.data = function (address, offset, limit) {
        if (offset === void 0) { offset = constants_1.DEFAULT_PAGING_OFFSET; }
        if (limit === void 0) { limit = constants_1.DEFAULT_PAGING_LIMIT; }
        return this.fetch("/addresses/data/" + address + "?offset=" + offset + "&limit=" + limit);
    };
    return Addresses;
}());
exports.default = Addresses;
;
//# sourceMappingURL=addresses.js.map