"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var Aliases = /** @class */ (function () {
    function Aliases(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Aliases.prototype.byAlias = function (alias) {
        return this.fetch("/alias/by-alias/" + alias);
    };
    Aliases.prototype.byAddress = function (address) {
        return this.fetch("/alias/by-address/" + address);
    };
    return Aliases;
}());
exports.default = Aliases;
;
//# sourceMappingURL=aliases.js.map