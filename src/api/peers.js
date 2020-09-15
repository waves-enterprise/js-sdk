"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var Peers = /** @class */ (function () {
    function Peers(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Peers.prototype.connected = function () {
        return this.fetch('/peers/connected');
    };
    return Peers;
}());
exports.default = Peers;
;
//# sourceMappingURL=peers.js.map