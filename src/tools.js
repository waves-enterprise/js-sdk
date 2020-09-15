"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_factory_1 = require("@vostokplatform/transactions-factory");
var config_1 = require("./config");
var base58ToString_1 = require("./utils/base58ToString");
exports.default = {
    getAddressFromPublicKey: function (publicKey) {
        var publicKeyBytes = transactions_factory_1.libs.base58.decode(publicKey);
        return config_1.default.isCryptoGost()
            ? transactions_factory_1.utils.cryptoGost.buildRawAddress(publicKeyBytes)
            : transactions_factory_1.utils.crypto.buildRawAddress(publicKeyBytes);
    },
    calculateTimeDiff: function (nodeTime, userTime) {
        return nodeTime - userTime;
    },
    base58: {
        encode: transactions_factory_1.libs.base58.encode,
        decode: transactions_factory_1.libs.base58.decode,
        base58ToString: base58ToString_1.base58ToString
    }
};
//# sourceMappingURL=tools.js.map