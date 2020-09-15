"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_factory_1 = require("@vostokplatform/transactions-factory");
var constants_1 = require("./constants");
var request_1 = require("./utils/request");
var config = Object.create(null);
function checkRequiredFields(conf) {
    if (!conf.networkByte)
        throw new Error('Missing network byte');
    if (!conf.nodeAddress)
        throw new Error('Missing node address');
    if (!conf.matcherAddress)
        throw new Error('Missing matcher address');
}
exports.default = {
    getNetworkByte: function () {
        return config.networkByte;
    },
    getNodeAddress: function () {
        return config.nodeAddress;
    },
    isCryptoGost: function () {
        return config.crypto === 'gost';
    },
    getMatcherAddress: function () {
        return config.matcherAddress;
    },
    getMinimumSeedLength: function () {
        return config.minimumSeedLength;
    },
    getRequestParams: function () {
        return {
            offset: config.requestOffset,
            limit: config.requestLimit
        };
    },
    getAssetFactory: function () {
        return config.assetFactory;
    },
    getLogLevel: function () {
        return config.logLevel;
    },
    getTimeDiff: function () {
        return config.timeDiff;
    },
    get: function () {
        return __assign({}, config);
    },
    set: function (newConfig) {
        transactions_factory_1.config.set(newConfig);
        // Extend incoming objects only when `config` is empty
        if (Object.keys(config).length === 0) {
            newConfig = __assign(__assign({}, constants_1.DEFAULT_BASIC_CONFIG), newConfig);
        }
        Object.keys(newConfig).forEach(function (key) {
            switch (key) {
                case 'nodeAddress':
                case 'matcherAddress':
                    config[key] = request_1.normalizeHost(newConfig[key]);
                    break;
                default:
                    config[key] = newConfig[key];
                    break;
            }
        });
        checkRequiredFields(config);
    },
    clear: function () {
        Object.keys(config).forEach(function (key) {
            delete config[key];
        });
    }
};
//# sourceMappingURL=config.js.map