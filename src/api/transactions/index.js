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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config");
var constants = require("../../constants");
var WavesError_1 = require("../../errors/WavesError");
var request_1 = require("../../utils/request");
var transactions_transforms_1 = require("./transactions.transforms");
var transactions_factory_1 = require("@vostokplatform/transactions-factory");
var request_2 = require("../../utils/request");
var Transactions = /** @class */ (function () {
    function Transactions(fetchInstance) {
        this.fetch = request_1.createFetchWrapper({
            product: 0 /* NODE */,
            version: 0 /* V1 */,
            pipe: request_1.processJSON,
            fetchInstance: fetchInstance
        });
        this.txRequestFromNodeAddress = request_1.createTxRequestWrapper(fetchInstance);
    }
    Transactions.getTxMetaInfo = function (txType) {
        var _a = constants.LEGACY_TX_TYPES[txType], type = _a.type, version = _a.v;
        var key = Object.keys(transactions_factory_1.TRANSACTION_TYPES).find(function (key) { return transactions_factory_1.TRANSACTION_TYPES[key] === type; });
        return { type: type, version: version, key: key };
    };
    Transactions.prototype.get = function (id) {
        if (id === constants.WAVES) {
            return Promise.resolve(constants.WAVES_V1_ISSUE_TX);
        }
        else {
            return this.fetch("/transactions/info/" + id);
        }
    };
    Transactions.prototype.getList = function (address, limit) {
        if (limit === void 0) { limit = config_1.default.getRequestParams().limit; }
        // In the end of the line a strange response artifact is handled
        return this.fetch("/transactions/address/" + address + "/limit/" + limit).then(function (array) { return array[0]; });
    };
    Transactions.prototype.utxSize = function () {
        return this.fetch('/transactions/unconfirmed/size');
    };
    Transactions.prototype.utxGet = function (id) {
        return this.fetch("/transactions/unconfirmed/info/" + id);
    };
    Transactions.prototype.utxGetList = function () {
        return this.fetch('/transactions/unconfirmed');
    };
    Transactions.prototype.broadcastFromClientAddress = function (txType, data, keys) {
        var _this = this;
        return this.processTx(txType, data, keys, function (postParams) { return _this.fetch(constants.BROADCAST_PATH, postParams); });
    };
    Transactions.prototype.broadcastFromNodeAddress = function (txType, nodeAddress, data, extraData) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, type, version, key, _b, preRemap, postRemap;
            return __generator(this, function (_c) {
                _a = Transactions.getTxMetaInfo(txType), type = _a.type, version = _a.version, key = _a.key;
                if (!type || !key) {
                    throw new WavesError_1.default("Wrong transaction type: " + type, data);
                }
                _b = transactions_transforms_1.default[key]["V" + version], preRemap = _b.pre, postRemap = _b.post;
                return [2 /*return*/, this.txRequestFromNodeAddress(preRemap, postRemap, nodeAddress, data, extraData)];
            });
        });
    };
    Transactions.prototype.sign = function (txType, data, keys) {
        return this.processTx(txType, data, keys, function (postParams) { return JSON.parse(postParams.body); });
    };
    Transactions.prototype.processTx = function (txType, data, keys, callback) {
        var _a = Transactions.getTxMetaInfo(txType), type = _a.type, version = _a.version, key = _a.key;
        if (!type || !key) {
            throw new WavesError_1.default("Wrong transaction type: " + type, data);
        }
        var factory = transactions_factory_1.getTransactionFactory(version, type);
        var _b = transactions_transforms_1.default[key]["V" + version], pre = _b.pre, post = _b.post;
        return request_2.wrapTxRequest(factory, pre, post, callback, true)(data, keys);
    };
    Transactions.prototype.rawBroadcast = function (data) {
        return this.fetch(constants.BROADCAST_PATH, __assign(__assign({}, request_1.POST_TEMPLATE), { body: JSON.stringify(data) }));
    };
    Transactions.prototype.signOnNode = function (data) {
        return this.fetch('/transactions/sign');
    };
    return Transactions;
}());
exports.default = Transactions;
;
//# sourceMappingURL=index.js.map