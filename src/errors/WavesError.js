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
function paddedMessage(message) {
    return "\n" + message + "\n";
}
function resolveData(data) {
    if (data instanceof Error) {
        return paddedMessage(data.toString());
    }
    else if (data) {
        try {
            return paddedMessage(JSON.stringify(data, null, 2));
        }
        catch (e) {
            return paddedMessage('Not possible to retrieve error data');
        }
    }
    else {
        return paddedMessage('No additional data provided');
    }
}
var WavesError = /** @class */ (function (_super) {
    __extends(WavesError, _super);
    function WavesError(message, data) {
        var _this = _super.call(this, message + ":\n" + resolveData(data)) || this;
        _this.name = 'WavesError';
        _this.data = data;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, WavesError);
        }
        return _this;
    }
    return WavesError;
}(Error));
exports.default = WavesError;
//# sourceMappingURL=WavesError.js.map