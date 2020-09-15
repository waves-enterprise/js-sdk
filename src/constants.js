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
exports.SIGN_PATH = exports.BROADCAST_PATH = exports.WAVES_V1_ISSUE_TX = exports.DEFAULT_TESTNET_CONFIG = exports.DEFAULT_MAINNET_CONFIG = exports.DEFAULT_BASIC_CONFIG = exports.DEFAULT_PAGING_OFFSET = exports.DEFAULT_PAGING_LIMIT = exports.DEFAULT_ORDER_EXPIRATION_DAYS = exports.DEFAULT_MIN_SEED_LENGTH = exports.TRANSFER_ATTACHMENT_BYTE_LIMIT = exports.MINIMUM_DATA_FEE_PER_KB = exports.MINIMUM_MATCHER_FEE = exports.MINIMUM_ISSUE_FEE = exports.MINIMUM_FEE = exports.PUBLIC_KEY_GOST_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.PRIVATE_KEY_LENGTH = exports.LEGACY_TX_TYPES = exports.ALIAS_BYTE = exports.ADDRESS_BYTE = exports.INITIAL_NONCE = exports.TESTNET_BYTE = exports.MAINNET_BYTE = exports.WAVES = void 0;
exports.WAVES = 'WAVES';
exports.MAINNET_BYTE = 'D'.charCodeAt(0); // todo
exports.TESTNET_BYTE = 'D'.charCodeAt(0);
exports.INITIAL_NONCE = 0;
exports.ADDRESS_BYTE = 1;
exports.ALIAS_BYTE = 2;
/*
    LEGACY TRANSACTIONS SUPPORT
    type - tx type,
    v - version
 */
exports.LEGACY_TX_TYPES = {
    issue: { type: 3, v: 2 },
    issue_no_script: { type: 3, v: 2 },
    transfer: { type: 4, v: 2 },
    reissue: { type: 5, v: 2 },
    burn: { type: 6, v: 2 },
    exchange: { type: 7, v: 2 },
    lease: { type: 8, v: 2 },
    cancelLeasing: { type: 9, v: 2 },
    createAlias: { type: 10, v: 2 },
    massTransfer: { type: 11, v: 1 },
    data: { type: 12, v: 1 },
    setScript: { type: 13, v: 1 },
    sponsorship: { type: 14, v: 1 },
    permit: { type: 102, v: 1 },
    dockerCreate: { type: 103, v: 1 },
    dockerCreateV2: { type: 103, v: 2 },
    dockerCall: { type: 104, v: 1 },
    dockerCallV2: { type: 104, v: 2 },
    dockerCallV3: { type: 104, v: 3 },
    dockerDisable: { type: 106, v: 1 },
    dockerUpdateV2: { type: 107, v: 2 },
    policyRegisterNode: { type: 111, v: 1 },
    policyCreate: { type: 112, v: 1 },
    policyUpdate: { type: 113, v: 1 },
    policyDataHash: { type: 114, v: 1 },
};
exports.PRIVATE_KEY_LENGTH = 32;
exports.PUBLIC_KEY_LENGTH = 32;
exports.PUBLIC_KEY_GOST_LENGTH = 64;
exports.MINIMUM_FEE = 100000;
exports.MINIMUM_ISSUE_FEE = 100000000;
exports.MINIMUM_MATCHER_FEE = 300000;
exports.MINIMUM_DATA_FEE_PER_KB = 100000;
exports.TRANSFER_ATTACHMENT_BYTE_LIMIT = 140;
exports.DEFAULT_MIN_SEED_LENGTH = 25;
exports.DEFAULT_ORDER_EXPIRATION_DAYS = 20;
exports.DEFAULT_PAGING_LIMIT = 50;
exports.DEFAULT_PAGING_OFFSET = 0;
exports.DEFAULT_BASIC_CONFIG = {
    minimumSeedLength: exports.DEFAULT_MIN_SEED_LENGTH,
    requestOffset: 0,
    requestLimit: 100,
    logLevel: 'warning',
    timeDiff: 0,
    crypto: 'waves'
};
exports.DEFAULT_MAINNET_CONFIG = __assign(__assign({}, exports.DEFAULT_BASIC_CONFIG), { networkByte: exports.MAINNET_BYTE, nodeAddress: 'https://nodes.wavesplatform.com', matcherAddress: 'https://matcher.wavesplatform.com/matcher' });
exports.DEFAULT_TESTNET_CONFIG = __assign(__assign({}, exports.DEFAULT_BASIC_CONFIG), { networkByte: exports.TESTNET_BYTE, nodeAddress: 'https://testnet1.wavesnodes.com', matcherAddress: 'https://testnet1.wavesnodes.com/matcher' });
exports.WAVES_V1_ISSUE_TX = {
    assetId: exports.WAVES,
    decimals: 8,
    description: '',
    fee: 0,
    height: 0,
    id: exports.WAVES,
    name: 'Waves',
    quantity: 100000000 * Math.pow(10, 8),
    reissuable: false,
    sender: exports.WAVES,
    senderPublicKey: '',
    signature: '',
    timestamp: 1460419200000,
    type: 3
};
exports.BROADCAST_PATH = '/transactions/broadcast';
exports.SIGN_PATH = '/transactions/sign';
//# sourceMappingURL=constants.js.map