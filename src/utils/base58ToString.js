"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base58ToString = void 0;
var transactions_factory_1 = require("@vostokplatform/transactions-factory");
// usage: Waves.tools.base58.base58ToString(str)
function base58ToString(base58String) {
    var arr = transactions_factory_1.libs.base58.decode(base58String);
    var str = String.fromCharCode.apply(null, arr);
    return decodeURIComponent(escape(str));
}
exports.base58ToString = base58ToString;
//# sourceMappingURL=base58ToString.js.map