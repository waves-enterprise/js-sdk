"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var Leasing = /** @class */ (function () {
    function Leasing(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Leasing.prototype.getAllActiveLeases = function (address) {
        return this.fetch("/leasing/active/" + address).then(function (list) {
            return list.map(function (tx) {
                tx.status = 'active';
                return tx;
            });
        });
    };
    return Leasing;
}());
exports.default = Leasing;
;
//# sourceMappingURL=leasing.js.map