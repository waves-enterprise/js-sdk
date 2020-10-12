"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WavesError_1 = require("./WavesError");
var FAILED_TO_FETCH = 'Failed to fetch';
function normalizeErrorData(data) {
    if (!data.error && data.message && data.message.indexOf(FAILED_TO_FETCH) !== -1) {
        return {
            error: -1,
            message: 'failed to fetch'
        };
    }
    else {
        return data;
    }
}
var WavesRequestError = /** @class */ (function (_super) {
    __extends(WavesRequestError, _super);
    function WavesRequestError(url, data) {
        var _this = _super.call(this, "Server request to '" + url + "' has failed", normalizeErrorData(data)) || this;
        _this.name = 'WavesRequestError';
        return _this;
    }
    return WavesRequestError;
}(WavesError_1.default));
exports.default = WavesRequestError;
//# sourceMappingURL=WavesRequestError.js.map