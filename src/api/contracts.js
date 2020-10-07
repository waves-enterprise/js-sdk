"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var request_1 = require("../utils/request");
var Contracts = /** @class */ (function () {
    function Contracts(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Contracts.prototype.get = function (id, offset, limit) {
        if (offset === void 0) { offset = constants_1.DEFAULT_PAGING_OFFSET; }
        if (limit === void 0) { limit = constants_1.DEFAULT_PAGING_LIMIT; }
        return this.fetch("/contracts/" + id + "?offset=" + offset + "&limit=" + limit);
    };
    Contracts.prototype.getKey = function (id, key) {
        return this.fetch("/contracts/" + id + "/" + key);
    };
    Contracts.prototype.getExecutedTxFor = function (id) {
        return this.fetch("/contracts/executed-tx-for/" + id);
    };
    return Contracts;
}());
exports.default = Contracts;
;
//# sourceMappingURL=contracts.js.map