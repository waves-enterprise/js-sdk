"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_api_validator_1 = require("ts-api-validator");
var remap_1 = require("../../utils/remap");
var constants = require("../../constants");
exports.default = {
    publicKey: {
        type: ts_api_validator_1.StringPart,
        required: true
    },
    assetId: {
        type: ts_api_validator_1.StringPart,
        required: true
    },
    fee: {
        type: ts_api_validator_1.NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_FEE
    },
    issueFee: {
        type: ts_api_validator_1.NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_ISSUE_FEE
    },
    matcherFee: {
        type: ts_api_validator_1.NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_MATCHER_FEE
    },
    recipient: {
        type: ts_api_validator_1.StringPart,
        required: true,
        parseValue: remap_1.removeRecipientPrefix
    },
    reissuable: {
        type: ts_api_validator_1.BooleanPart,
        required: false,
        defaultValue: false
    },
    timestamp: {
        type: ts_api_validator_1.NumberPart,
        required: true,
        parseValue: remap_1.getTimestamp
    }
};
//# sourceMappingURL=schemaFields.js.map