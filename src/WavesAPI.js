"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TESTNET_CONFIG = exports.MAINNET_CONFIG = exports.create = void 0;
var transactions_factory_1 = require("@vostokplatform/transactions-factory");
var api_1 = require("./api");
var config_1 = require("./config");
var constants = require("./constants");
var fetch_1 = require("./libs/fetch");
var tools_1 = require("./tools");
var request = require("./utils/request");
var WavesAPI = /** @class */ (function () {
    function WavesAPI(params) {
        this.Seed = transactions_factory_1.Seed;
        this.byteProcessors = transactions_factory_1.ByteProcessor;
        this.config = config_1.default;
        this.constants = constants;
        this.crypto = transactions_factory_1.utils.crypto;
        this.request = request;
        this.tools = tools_1.default;
        var initialConfiguration = params.initialConfiguration, _a = params.fetchInstance, fetchInstance = _a === void 0 ? fetch_1.default : _a;
        this.API = {
            Node: new api_1.default(fetchInstance),
        };
        if (this instanceof WavesAPI) {
            this.config.clear();
            this.config.set(initialConfiguration);
            if (WavesAPI._instance === null) {
                WavesAPI._instance = this;
            }
            else {
                return WavesAPI._instance;
            }
        }
        else {
            return new WavesAPI({
                initialConfiguration: initialConfiguration,
                fetchInstance: fetchInstance,
            });
        }
    }
    return WavesAPI;
}());
function create(_a) {
    var initialConfiguration = _a.initialConfiguration, fetchInstance = _a.fetchInstance;
    return new WavesAPI({ initialConfiguration: initialConfiguration, fetchInstance: fetchInstance });
}
exports.create = create;
exports.MAINNET_CONFIG = constants.DEFAULT_MAINNET_CONFIG;
exports.TESTNET_CONFIG = constants.DEFAULT_TESTNET_CONFIG;
//# sourceMappingURL=WavesAPI.js.map