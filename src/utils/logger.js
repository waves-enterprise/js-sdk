"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var LOG_LEVELS = {
    none: 0,
    error: 1,
    warning: 2,
    info: 3
};
exports.default = {
    log: function (message, data) {
        if (LOG_LEVELS[config_1.default.getLogLevel()] >= LOG_LEVELS.info) {
            console.log(message, data);
        }
    },
    warn: function (message, data) {
        if (LOG_LEVELS[config_1.default.getLogLevel()] >= LOG_LEVELS.warning) {
            console.warn(message, data);
        }
    },
    error: function (message, data) {
        if (LOG_LEVELS[config_1.default.getLogLevel()] >= LOG_LEVELS.error) {
            console.error(message, data);
        }
    }
};
//# sourceMappingURL=logger.js.map