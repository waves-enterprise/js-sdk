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
var transactions_factory_1 = require("@wavesenterprise/transactions-factory");
var ts_api_validator_1 = require("ts-api-validator");
var schemaFields_1 = require("./schemaFields");
var remap_1 = require("../../utils/remap");
var config_1 = require("../../config");
var bignumber_1 = require("../../libs/bignumber");
var TRANSFORMS = {};
Object.keys(transactions_factory_1.TRANSACTIONS).forEach(function (key) {
    TRANSFORMS[key] = {};
    Object.keys(transactions_factory_1.TRANSACTIONS[key]).forEach(function (key1) {
        TRANSFORMS[key][key1] = {};
    });
});
var AnyPart = /** @class */ (function (_super) {
    __extends(AnyPart, _super);
    function AnyPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnyPart.prototype.getValue = function (data) {
        return data;
    };
    return AnyPart;
}(ts_api_validator_1.BasePart));
/* ISSUE */
var issueSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        name: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        description: {
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: ''
        },
        script: {
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: null
        },
        quantity: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        decimals: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            isValid: remap_1.precisionCheck
        },
        reissuable: schemaFields_1.default.reissuable,
        fee: schemaFields_1.default.issueFee,
        timestamp: schemaFields_1.default.timestamp,
        chainId: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: function () { return config_1.default.getNetworkByte(); }
        }
    }
});
var preIssue = function (data) { return issueSchema.parse(data); };
var postIssue = remap_1.createRemapper({
    transactionType: null,
    quantity: {
        from: 'string',
        to: 'bignumber'
    },
});
var postSignIssue = remap_1.createRemapper({
    quantity: {
        from: 'string',
        to: 'bignumber'
    },
});
// TODO issue no script
TRANSFORMS.ISSUE.V2 = {
    pre: preIssue,
    post: postIssue,
    postSign: postSignIssue,
};
/* TRANSFER */
var transferSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        recipient: schemaFields_1.default.recipient,
        assetId: schemaFields_1.default.assetId,
        amount: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        feeAssetId: schemaFields_1.default.feeAssetId,
        fee: schemaFields_1.default.fee,
        attachment: {
            // TODO : make it possible to pass a byte array
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: '',
            parseValue: remap_1.convertAttachmentToBase58
        },
        timestamp: schemaFields_1.default.timestamp
    }
});
var preTransfer = function (data) { return transferSchema.parse(data); };
var postTransfer = remap_1.createRemapper({
    transactionType: null,
    // Attachment should be encoded to base58 before calculate signature
    // attachment: {
    //   from: 'string',
    //   to: 'base58'
    // },
    recipient: {
        from: 'raw',
        to: 'prefixed'
    },
    amount: {
        from: 'string',
        to: 'bignumber'
    },
});
var postSignTransfer = remap_1.createRemapper({
    amount: {
        from: 'string',
        to: 'bignumber'
    },
});
TRANSFORMS.TRANSFER.V2 = {
    pre: preTransfer,
    post: postTransfer,
    postSign: postSignTransfer
};
/* REISSUE */
var reissueSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        assetId: schemaFields_1.default.assetId,
        quantity: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        reissuable: schemaFields_1.default.reissuable,
        fee: schemaFields_1.default.issueFee,
        timestamp: schemaFields_1.default.timestamp,
        chainId: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: function () { return config_1.default.getNetworkByte(); }
        }
    }
});
var preReissue = function (data) { return reissueSchema.parse(data); };
var postReissue = remap_1.createRemapper({
    transactionType: null,
    quantity: {
        from: 'string',
        to: 'bignumber'
    }
});
var postSignReissue = remap_1.createRemapper({
    quantity: {
        from: 'string',
        to: 'bignumber'
    }
});
TRANSFORMS.REISSUE.V2 = {
    pre: preReissue,
    post: postReissue,
    postSign: postSignReissue
};
/* BURN */
var burnSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        assetId: schemaFields_1.default.assetId,
        amount: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        quantity: {
            type: ts_api_validator_1.StringPart,
            required: false
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp,
        chainId: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: function () { return config_1.default.getNetworkByte(); }
        }
    }
});
var preBurn = function (data) { return burnSchema.parse(data); };
var postBurn = remap_1.createRemapper({
    transactionType: null,
    amount: {
        from: 'string',
        to: 'bignumber'
    },
    quantity: {
        from: 'string',
        to: 'bignumber'
    }
});
var postSignBurn = remap_1.createRemapper({
    amount: {
        from: 'string',
        to: 'bignumber'
    },
    quantity: {
        from: 'string',
        to: 'bignumber'
    }
});
TRANSFORMS.BURN.V2 = {
    pre: preBurn,
    post: postBurn,
    postSign: postSignBurn,
};
/* LEASE */
var leaseSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        recipient: schemaFields_1.default.recipient,
        amount: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
});
var preLease = function (data) { return leaseSchema.parse(data); };
var postLease = remap_1.createRemapper({
    transactionType: null,
    recipient: {
        from: 'raw',
        to: 'prefixed'
    },
    amount: {
        from: 'string',
        to: 'bignumber'
    }
});
var postSignLease = remap_1.createRemapper({
    amount: {
        from: 'string',
        to: 'bignumber'
    }
});
TRANSFORMS.LEASE.V2 = {
    pre: preLease,
    post: postLease,
    postSign: postSignLease,
};
/* CANCEL LEASING */
var cancelLeasingSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        leaseId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp,
        chainId: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: function () { return config_1.default.getNetworkByte(); }
        }
    }
});
var preCancelLeasing = function (data) { return cancelLeasingSchema.parse(data); };
var postCancelLeasing = remap_1.createRemapper({
    transactionType: null,
    transactionId: 'txId',
});
TRANSFORMS.LEASE_CANCEL.V2 = {
    pre: preCancelLeasing,
    post: postCancelLeasing
};
/* CREATE ALIAS */
var createAliasSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        alias: {
            type: ts_api_validator_1.StringPart,
            required: true,
            parseValue: remap_1.removeAliasPrefix
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
});
var preCreateAlias = function (data) { return createAliasSchema.parse(data); };
var postCreateAlias = remap_1.createRemapper({
    transactionType: null,
});
TRANSFORMS.CREATE_ALIAS.V2 = {
    pre: preCreateAlias,
    post: postCreateAlias
};
/* MASS TRANSFER */
var massTransferSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        assetId: schemaFields_1.default.assetId,
        transfers: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.ObjectPart,
                required: true,
                content: {
                    recipient: schemaFields_1.default.recipient,
                    amount: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    }
                }
            },
            defaultValue: []
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee,
        attachment: {
            // TODO : make it possible to pass a byte array
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: '',
            parseValue: remap_1.convertAttachmentToBase58
        }
    }
});
var preMassTransfer = function (data) { return massTransferSchema.parse(data); };
var postMassTransfer = remap_1.createRemapper({
    transactionType: null,
    // Attachment should be encoded to base58 before calculate signature
    // attachment: {
    //   from: 'string',
    //   to: 'base58'
    // },
    transfers: {
        from: 'raw',
        to: 'prefixed',
        path: 'transfers'
    },
});
TRANSFORMS.MASS_TRANSFER.V1 = {
    pre: preMassTransfer,
    post: postMassTransfer
};
/* DATA */
var dataSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        authorPublicKey: schemaFields_1.default.publicKey,
        data: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.ObjectPart,
                required: true,
                content: {
                    type: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    key: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    value: {
                        type: AnyPart,
                        required: true
                    }
                }
            },
            defaultValue: []
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
});
var preData = function (data) { return dataSchema.parse(data); };
var postData = function (d) {
    var data = JSON.parse(JSON.stringify(d.data));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { data: data, transactionType: null });
};
TRANSFORMS.DATA.V1 = {
    pre: preData,
    post: postData
};
/* SET SCRIPT */
var setScriptSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        name: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        description: {
            type: ts_api_validator_1.StringPart,
            required: false,
            defaultValue: ''
        },
        senderPublicKey: schemaFields_1.default.publicKey,
        script: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        chainId: {
            type: ts_api_validator_1.NumberPart,
            required: true,
            parseValue: function () { return config_1.default.getNetworkByte(); }
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee // TODO : validate against the transaction size in bytes
    }
});
var preSetScript = function (data) { return setScriptSchema.parse(data); };
var postSetScript = remap_1.createRemapper({
    transactionType: null,
});
TRANSFORMS.SET_SCRIPT.V1 = {
    pre: preSetScript,
    post: postSetScript
};
/* SPONSORSHIP */
var sponsorshipSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        assetId: schemaFields_1.default.assetId,
        minSponsoredAssetFee: {
            type: ts_api_validator_1.NumberPart,
            required: true
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee
    }
});
var preSponsorship = function (data) { return sponsorshipSchema.parse(data); };
var postSponsorship = remap_1.createRemapper({
    transactionType: null,
});
TRANSFORMS.SPONSOR_FEE.V1 = {
    pre: preSponsorship,
    post: postSponsorship
};
/* PERMISSION */
var permissionSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        timestamp: schemaFields_1.default.timestamp,
        opType: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        role: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        target: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        dueTimestamp: {
            type: ts_api_validator_1.NumberPart,
            required: false,
        },
        fee: schemaFields_1.default.fee
    }
});
var prePermit = function (data) { return permissionSchema.parse(data); };
var postPermit = remap_1.createRemapper({
    transactionType: null,
});
TRANSFORMS.PERMIT.V1 = {
    pre: prePermit,
    post: postPermit
};
/* DOCKER CREATE */
var dockerCreateBaseSchema = {
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        image: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        imageHash: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        contractName: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        params: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.ObjectPart,
                required: true,
                content: {
                    type: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    key: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    value: {
                        type: AnyPart,
                        required: true
                    }
                }
            },
            defaultValue: []
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
};
var dockerCreateSchema = new ts_api_validator_1.Schema(dockerCreateBaseSchema);
var preDockerCreate = function (data) {
    return dockerCreateSchema.parse(data);
};
var postDockerCreate = function (d) {
    var data = JSON.parse(JSON.stringify(d.params));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { params: data, transactionType: null });
};
TRANSFORMS.CREATE_CONTRACT.V1 = {
    pre: preDockerCreate,
    post: postDockerCreate
};
var dockerCreateV2Schema = new ts_api_validator_1.Schema(__assign({}, dockerCreateBaseSchema, { content: __assign({}, dockerCreateBaseSchema.content, { feeAssetId: schemaFields_1.default.feeAssetId }) }));
var preDockerCreateV2 = function (data) {
    return dockerCreateV2Schema.parse(data);
};
var postDockerCreateV2 = function (d) {
    var data = JSON.parse(JSON.stringify(d.params));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { params: data, transactionType: null });
};
TRANSFORMS.CREATE_CONTRACT.V2 = {
    pre: preDockerCreateV2,
    post: postDockerCreateV2
};
/* DOCKER CALL */
var dockerCallSchemaBase = {
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        authorPublicKey: schemaFields_1.default.publicKey,
        contractId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        params: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.ObjectPart,
                required: true,
                content: {
                    type: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    key: {
                        type: ts_api_validator_1.StringPart,
                        required: true
                    },
                    value: {
                        type: AnyPart,
                        required: true
                    }
                }
            },
            defaultValue: []
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
};
var dockerCallSchema = new ts_api_validator_1.Schema(dockerCallSchemaBase);
var preDockerCall = function (data) {
    return dockerCallSchema.parse(data);
};
// todo DRY
var postDockerCall = function (d) {
    var data = JSON.parse(JSON.stringify(d.params));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { params: data, transactionType: null });
};
TRANSFORMS.CALL_CONTRACT.V1 = {
    pre: preDockerCall,
    post: postDockerCall
};
var dockerCallSchemaV2 = new ts_api_validator_1.Schema(__assign({}, dockerCallSchemaBase, { content: __assign({}, dockerCallSchemaBase.content, { contractVersion: {
            type: ts_api_validator_1.NumberPart,
            required: true
        } }) }));
var preDockerCallV2 = function (data) {
    return dockerCallSchemaV2.parse(data);
};
var postDockerCallV2 = function (d) {
    var data = JSON.parse(JSON.stringify(d.params));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { params: data, transactionType: null });
};
TRANSFORMS.CALL_CONTRACT.V2 = {
    pre: preDockerCallV2,
    post: postDockerCallV2
};
var dockerCallSchemaV3 = new ts_api_validator_1.Schema(__assign({}, dockerCallSchemaBase, { content: __assign({}, dockerCallSchemaBase.content, { contractVersion: {
            type: ts_api_validator_1.NumberPart,
            required: true
        }, feeAssetId: schemaFields_1.default.feeAssetId }) }));
var preDockerCallV3 = function (data) {
    return dockerCallSchemaV3.parse(data);
};
// todo DRY
var postDockerCallV3 = function (d) {
    var data = JSON.parse(JSON.stringify(d.params));
    data.forEach(function (e) {
        if (e.type === 'integer' && typeof e.value === 'string') {
            e.value = new bignumber_1.default(e.value);
        }
        return e;
    });
    return __assign({}, d, { params: data, transactionType: null });
};
TRANSFORMS.CALL_CONTRACT.V3 = {
    pre: preDockerCallV3,
    post: postDockerCallV3
};
/* DOCKER DISABLE */
var dockerDisableSchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        contractId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp
    }
});
var preDockerDisable = function (data) {
    return dockerDisableSchema.parse(data);
};
var postDockerDisable = function (d) {
    return __assign({}, d, { transactionType: null });
};
TRANSFORMS.DISABLE_CONTRACT.V1 = {
    pre: preDockerDisable,
    post: postDockerDisable
};
/* DOCKER UPDATE */
var dockerUpdateV2Schema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        contractId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        image: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        imageHash: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        fee: schemaFields_1.default.fee,
        timestamp: schemaFields_1.default.timestamp,
        feeAssetId: schemaFields_1.default.feeAssetId
    }
});
var preDockerUpdateV2 = function (data) {
    return dockerUpdateV2Schema.parse(data);
};
var postDockerUpdateV2 = function (d) {
    return __assign({}, d, { transactionType: null });
};
TRANSFORMS.UPDATE_CONTRACT.V2 = {
    pre: preDockerUpdateV2,
    post: postDockerUpdateV2
};
/* REGISTRY */
var nodeRegistrySchema = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        targetPubKey: schemaFields_1.default.publicKey,
        nodeName: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        opType: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee
    }
});
var preNodeRegistry = function (data) {
    return nodeRegistrySchema.parse(data);
};
var postNodeRegistry = function (d) {
    return __assign({}, d, { transactionType: null });
};
TRANSFORMS.REGISTER_NODE.V1 = {
    pre: preNodeRegistry,
    post: postNodeRegistry
};
/* POLICY CREATE */
var policyCreateScheme = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        policyName: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        description: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        recipients: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            defaultValue: []
        },
        owners: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            defaultValue: []
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee
    }
});
var prePolicyCreate = function (data) {
    return policyCreateScheme.parse(data);
};
var postPolicyCreate = function (d) {
    return __assign({}, d, { transactionType: null });
};
TRANSFORMS.CREATE_POLICY.V1 = {
    pre: prePolicyCreate,
    post: postPolicyCreate
};
/* POLICY UPDATE */
var policyUpdateScheme = new ts_api_validator_1.Schema({
    type: ts_api_validator_1.ObjectPart,
    required: true,
    content: {
        senderPublicKey: schemaFields_1.default.publicKey,
        policyId: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        recipients: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            defaultValue: []
        },
        owners: {
            type: ts_api_validator_1.ArrayPart,
            content: {
                type: ts_api_validator_1.StringPart,
                required: true
            },
            defaultValue: []
        },
        opType: {
            type: ts_api_validator_1.StringPart,
            required: true
        },
        timestamp: schemaFields_1.default.timestamp,
        fee: schemaFields_1.default.fee
    }
});
var preUpdateCreate = function (data) {
    return policyUpdateScheme.parse(data);
};
var postUpdateCreate = function (d) {
    return __assign({}, d, { transactionType: null });
};
TRANSFORMS.UPDATE_POLICY.V1 = {
    pre: preUpdateCreate,
    post: postUpdateCreate
};
exports.default = TRANSFORMS;
//# sourceMappingURL=transactions.transforms.js.map