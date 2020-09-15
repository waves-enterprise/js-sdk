"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var Blocks = /** @class */ (function () {
    function Blocks(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Blocks.prototype.get = function (signature) {
        return this.fetch("/blocks/signature/" + signature);
    };
    Blocks.prototype.at = function (height) {
        return this.fetch("/blocks/at/" + height);
    };
    Blocks.prototype.first = function () {
        return this.fetch('/blocks/first');
    };
    Blocks.prototype.last = function () {
        return this.fetch('/blocks/last');
    };
    Blocks.prototype.height = function () {
        return this.fetch('/blocks/height');
    };
    return Blocks;
}());
exports.default = Blocks;
;
//# sourceMappingURL=blocks.js.map