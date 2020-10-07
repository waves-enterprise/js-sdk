"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var Utils = /** @class */ (function () {
    function Utils(fetchInstance) {
        this.script = {
            compile: function (code) {
                return this.fetch('/utils/script/compile', {
                    method: 'POST',
                    body: code
                }).then(function (response) {
                    return response.script;
                });
            }
        };
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
    }
    Utils.prototype.time = function () {
        return this.fetch('/utils/time').then(function (t) { return t.system; });
    };
    return Utils;
}());
exports.default = Utils;
;
//# sourceMappingURL=utils.js.map