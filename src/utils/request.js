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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTxRequestWrapper = exports.wrapTxRequest = exports.createFetchWrapper = exports.processJSON = exports.normalizePath = exports.normalizeHost = exports.POST_TEMPLATE = exports.SAFE_JSON_STRINGIFY = exports.SAFE_JSON_PARSE = void 0;
var create = require("parse-json-bignumber");
var constants_1 = require("../constants");
var WavesRequestError_1 = require("../errors/WavesRequestError");
var config_1 = require("../config");
var bignumber_1 = require("../libs/bignumber");
exports.SAFE_JSON_PARSE = create({
    BigNumber: bignumber_1.default
}).parse;
exports.SAFE_JSON_STRINGIFY = create({
    BigNumber: bignumber_1.default
}).stringify;
exports.POST_TEMPLATE = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }
};
var key = function (product, version) {
    return product + "/" + version;
};
var hostResolvers = (_a = {},
    _a[key(0 /* NODE */, 0 /* V1 */)] = function () { return config_1.default.getNodeAddress(); },
    _a[key(1 /* MATCHER */, 0 /* V1 */)] = function () { return config_1.default.getMatcherAddress(); },
    _a);
function normalizeHost(host) {
    return host.replace(/\/+$/, '');
}
exports.normalizeHost = normalizeHost;
function normalizePath(path) {
    return ("/" + path).replace(/\/+/g, '/').replace(/\/$/, '');
}
exports.normalizePath = normalizePath;
function processJSON(res) {
    if (res.ok) {
        return res.text().then(exports.SAFE_JSON_PARSE);
    }
    else {
        return res.json().then(Promise.reject.bind(Promise));
    }
}
exports.processJSON = processJSON;
function handleError(url, data) {
    throw new WavesRequestError_1.default(url, data);
}
function createFetchWrapper(config) {
    var product = config.product, version = config.version, pipe = config.pipe, fetchInstance = config.fetchInstance;
    var resolveHost = hostResolvers[key(product, version)];
    return function (path, options) {
        var url = resolveHost() + normalizePath(path);
        var request = fetchInstance(url, options);
        if (pipe) {
            return request.then(pipe).catch(function (data) { return handleError(url, data); });
        }
        else {
            return request.catch(function (data) { return handleError(url, data); });
        }
    };
}
exports.createFetchWrapper = createFetchWrapper;
exports.wrapTxRequest = function (factory, preRemapAsync, postRemap, callback, withProofs) {
    if (withProofs === void 0) { withProofs = false; }
    return function (data, keyPair) { return __awaiter(void 0, void 0, void 0, function () {
        var preData, signature, postData, sendData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    preData = __assign(__assign({}, data), { senderPublicKey: keyPair.publicKey });
                    if (!preRemapAsync) return [3 /*break*/, 2];
                    return [4 /*yield*/, preRemapAsync(preData)];
                case 1:
                    preData = _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, factory(preData).getSignature(keyPair.privateKey)];
                case 3:
                    signature = _a.sent();
                    postData = __assign(__assign({}, preData), (withProofs ? { proofs: [signature] } : { signature: signature }));
                    if (postRemap) {
                        postData = postRemap(postData);
                    }
                    sendData = __assign(__assign({}, exports.POST_TEMPLATE), { rejectUnauthorized: false, 
                        // allow cookies
                        // used to implement sticky sessions
                        // by kubernetes ingress balancer
                        // https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/
                        credentials: 'include', body: exports.SAFE_JSON_STRINGIFY(postData, null, null) });
                    return [2 /*return*/, callback(sendData)];
            }
        });
    }); };
};
exports.createTxRequestWrapper = function (fetchInstance) {
    return function (preRemapAsync, postRemap, nodeAddress, data, extraData) { return __awaiter(void 0, void 0, void 0, function () {
        var newData, body, tx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nodeAddress = nodeAddress.replace(/\/+$/, '');
                    newData = data;
                    if (!preRemapAsync) return [3 /*break*/, 2];
                    return [4 /*yield*/, preRemapAsync(newData)];
                case 1:
                    newData = _a.sent();
                    _a.label = 2;
                case 2:
                    if (postRemap) {
                        newData = postRemap(newData);
                    }
                    body = __assign(__assign({}, newData), extraData);
                    if (body.assetId === '') {
                        body.assetId = null;
                    }
                    if (body.feeAssetId === '') {
                        body.feeAssetId = null;
                    }
                    return [4 /*yield*/, fetchInstance(nodeAddress + constants_1.SIGN_PATH, __assign(__assign({}, exports.POST_TEMPLATE), { credentials: 'include', body: exports.SAFE_JSON_STRINGIFY(body, null, null) })).then(processJSON)];
                case 3:
                    tx = _a.sent();
                    return [2 /*return*/, fetchInstance(nodeAddress + constants_1.BROADCAST_PATH, __assign(__assign({}, exports.POST_TEMPLATE), { credentials: 'include', body: exports.SAFE_JSON_STRINGIFY(tx, null, null) })).then(processJSON)];
            }
        });
    }); };
};
//# sourceMappingURL=request.js.map