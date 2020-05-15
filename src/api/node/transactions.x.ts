import { TTransactionRequest } from '../../utils/request'

import { Schema, NumberPart, ObjectPart, StringPart, ArrayPart, BasePart } from 'ts-api-validator'
import { TX_TYPE_MAP } from '@vostokplatform/signature-generator'

import schemaFields from '../schemaFields'
import { createRemapper, normalizeAssetId, precisionCheck, removeAliasPrefix } from '../../utils/remap'
import { createFetchWrapper, processJSON, PRODUCTS, VERSIONS, wrapTxRequest } from '../../utils/request'
import * as constants from '../../constants'
import config from '../../config'
import BigNumber from '../../libs/bignumber'

interface signedTx {
  headers: any,
  body: string
}

interface signedTxData {
  data?: any
}

class AnyPart extends BasePart<any> {
  protected getValue<T> (data: T): T {
    return data
  }
}

function getSignedTx (data: signedTx): signedTxData {
  return {
    data: new Promise((resolve) => {
      resolve(JSON.parse(data.body))
    })
  }
}

export class TransactionsRequests {
  constructor(private readonly _fetch: typeof fetch) {
    this._fetch = _fetch;
  }

  sendIssueTx = wrapTxRequest(TX_TYPE_MAP.issue, preIssue, postIssue, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendTransferTx = wrapTxRequest(TX_TYPE_MAP.transfer, preTransfer, postTransfer, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendReissueTx = wrapTxRequest(TX_TYPE_MAP.reissue, preReissue, postReissue, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendBurnTx = wrapTxRequest(TX_TYPE_MAP.burn, preBurn, postBurn, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendLeaseTx = wrapTxRequest(TX_TYPE_MAP.lease, preLease, postLease, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendCancelLeasingTx = wrapTxRequest(TX_TYPE_MAP.cancelLeasing, preCancelLeasing, postCancelLeasing, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendCreateAliasTx = wrapTxRequest(TX_TYPE_MAP.createAlias, preCreateAlias, postCreateAlias, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendMassTransferTx = wrapTxRequest(TX_TYPE_MAP.massTransfer, preMassTransfer, postMassTransfer, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDataTx = wrapTxRequest(TX_TYPE_MAP.data, preData, postData, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendSetScriptTx = wrapTxRequest(TX_TYPE_MAP.setScript, preSetScript, postSetScript, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendSponsorshipTx = wrapTxRequest(TX_TYPE_MAP.sponsorship, preSponsorship, postSponsorship, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendPermissionTx = wrapTxRequest(TX_TYPE_MAP.permit, prePermit, postPermit, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDockerCreateTx = wrapTxRequest(TX_TYPE_MAP.dockerCreate, preDockerCreate, postDockerCreate, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDockerCreateV2Tx = wrapTxRequest(TX_TYPE_MAP.dockerCreateV2, preDockerCreateV2, postDockerCreateV2, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDockerCallTx = wrapTxRequest(TX_TYPE_MAP.dockerCall, preDockerCall, postDockerCall, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDockerCallV2Tx = wrapTxRequest(TX_TYPE_MAP.dockerCallV2, preDockerCallV2, postDockerCallV2, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendDockerDisableTx = wrapTxRequest(TX_TYPE_MAP.dockerDisable, preDockerDisable, postDockerDisable, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendNodeRegistry = wrapTxRequest(TX_TYPE_MAP.policyRegisterNode, preNodeRegistry, postNodeRegistry, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendPolicyCreate = wrapTxRequest(TX_TYPE_MAP.policyCreate, prePolicyCreate, postPolicyCreate, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;

  sendPolicyUpdate = wrapTxRequest(TX_TYPE_MAP.policyUpdate, preUpdateCreate, postUpdateCreate, (postParams: any) => {
    return this._fetch(constants.BROADCAST_PATH, postParams)
  }, true) as TTransactionRequest;
}
/* ISSUE */

export const issueSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    name: {
      type: StringPart,
      required: true
    },
    description: {
      type: StringPart,
      required: false,
      defaultValue: ''
    },
    script: {
      type: StringPart,
      required: false,
      defaultValue: 'base64:AQa3b8tH'
    },
    quantity: { // todo accept as string OR as bignumber
      type: StringPart,
      required: true
    },
    precision: {
      type: NumberPart,
      required: true,
      isValid: precisionCheck
    },
    reissuable: schemaFields.reissuable,
    fee: schemaFields.issueFee,
    timestamp: schemaFields.timestamp,
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    }
  }
});

export const preIssue = (data) => issueSchema.parse(data)
export const postIssue = createRemapper({
  transactionType: null,
  precision: 'decimals',
  type: constants.ISSUE_TX,
  version: constants.ISSUE_TX_VERSION,
  quantity: {
    from: 'string',
    to: 'bignumber'
  },
})

export const sendSignedIssueTx = wrapTxRequest(TX_TYPE_MAP.issue, preIssue, postIssue, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* TRANSFER */

export const transferSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    recipient: schemaFields.recipient,
    assetId: schemaFields.assetId,
    amount: {
      type: StringPart,
      required: true
    },
    feeAssetId: {
      type: StringPart,
      required: false,
      defaultValue: constants.WAVES
    },
    fee: schemaFields.fee,
    attachment: {
      // TODO : make it possible to pass a byte array
      type: StringPart,
      required: false,
      defaultValue: ''
    },
    timestamp: schemaFields.timestamp
  }
})

export const preTransfer = (data) => transferSchema.parse(data)
export const postTransfer = createRemapper({
  transactionType: null,
  assetId: normalizeAssetId,
  feeAssetId: normalizeAssetId,
  attachment: {
    from: 'string',
    to: 'base58'
  },
  recipient: {
    from: 'raw',
    to: 'prefixed'
  },
  amount: {
    from: 'string',
    to: 'bignumber'
  },
  type: constants.TRANSFER_TX,
  version: constants.TRANSFER_TX_VERSION
})

export const sendSignedTransferTx = wrapTxRequest(TX_TYPE_MAP.transfer, preTransfer, postTransfer, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* REISSUE */

export const reissueSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    quantity: {
      type: StringPart,
      required: true
    },
    reissuable: schemaFields.reissuable,
    fee: schemaFields.issueFee,
    timestamp: schemaFields.timestamp,
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    }
  }
})

export const preReissue = (data) => reissueSchema.parse(data)
export const postReissue = createRemapper({
  transactionType: null,
  type: constants.REISSUE_TX,
  version: constants.REISSUE_TX_VERSION,
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})

export const sendSignedReissueTx = wrapTxRequest(TX_TYPE_MAP.reissue, preReissue, postReissue, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* BURN */

export const burnSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    quantity: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp,
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    }
  }
})

export const preBurn = (data) => burnSchema.parse(data)
export const postBurn = createRemapper(({
  transactionType: null,
  type: constants.BURN_TX,
  version: constants.BURN_TX_VERSION,
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
}))

export const sendSignedBurnTx = wrapTxRequest(TX_TYPE_MAP.burn, preBurn, postBurn, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* LEASE */

export const leaseSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    recipient: schemaFields.recipient,
    amount: {
      type: NumberPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp
  }
})

export const preLease = (data) => leaseSchema.parse(data)
export const postLease = createRemapper({
  transactionType: null,
  recipient: {
    from: 'raw',
    to: 'prefixed'
  },
  type: constants.LEASE_TX,
  version: constants.LEASE_TX_VERSION
})

export const sendSignedLeaseTx = wrapTxRequest(TX_TYPE_MAP.lease, preLease, postLease, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* CANCEL LEASING */

export const cancelLeasingSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    leaseId: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp,
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    }
  }
})

export const preCancelLeasing = (data) => cancelLeasingSchema.parse(data)
export const postCancelLeasing = createRemapper({
  transactionType: null,
  transactionId: 'txId',
  type: constants.CANCEL_LEASING_TX,
  version: constants.CANCEL_LEASING_TX_VERSION
})

export const sendSignedCancelLeasingTx = wrapTxRequest(TX_TYPE_MAP.cancelLeasing, preCancelLeasing, postCancelLeasing, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* CREATE ALIAS */

export const createAliasSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    alias: {
      type: StringPart,
      required: true,
      parseValue: removeAliasPrefix
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp
  }
})

export const preCreateAlias = (data) => createAliasSchema.parse(data)
export const postCreateAlias = createRemapper({
  transactionType: null,
  type: constants.CREATE_ALIAS_TX,
  version: constants.CREATE_ALIAS_TX_VERSION
})

export const sendSignedCreateAliasTx = wrapTxRequest(TX_TYPE_MAP.createAlias, preCreateAlias, postCreateAlias, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* MASS TRANSFER */

export const massTransferSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    transfers: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          recipient: schemaFields.recipient,
          amount: {
            type: StringPart,
            required: true
          }
        }
      },
      defaultValue: []
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee,
    attachment: {
      // TODO : make it possible to pass a byte array
      type: StringPart,
      required: false,
      defaultValue: ''
    }
  }
})

export const preMassTransfer = (data) => massTransferSchema.parse(data)
export const postMassTransfer = createRemapper({
  transactionType: null,
  assetId: normalizeAssetId,
  attachment: {
    from: 'string',
    to: 'base58'
  },
  transfers: {
    from: 'raw',
    to: 'prefixed',
    path: 'transfers'
  },
  type: constants.MASS_TRANSFER_TX,
  version: constants.MASS_TRANSFER_TX_VERSION
})

export const sendSignedMassTransferTx = wrapTxRequest(TX_TYPE_MAP.massTransfer, preMassTransfer, postMassTransfer, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* DATA */

export const dataSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    authorPublicKey: schemaFields.publicKey,
    data: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          type: {
            type: StringPart,
            required: true
          },
          key: {
            type: StringPart,
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
    fee: schemaFields.fee, // TODO : validate against the transaction size in bytes
    timestamp: schemaFields.timestamp
  }
})

export const preData = (data) => dataSchema.parse(data)
/*export const postData = createRemapper({
    transactionType: null,
    type: constants.DATA_TX,
    version: constants.DATA_TX_VERSION
});*/
export const postData = d => {
  const data = JSON.parse(JSON.stringify(d.data))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  const result = {
    ...d,
    data,
    transactionType: null,
    type: constants.DATA_TX,
    version: constants.DATA_TX_VERSION
  }

  return result
}

export const sendSignedDataTx = wrapTxRequest(TX_TYPE_MAP.data, preData, postData, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* SET SCRIPT */

export const setScriptSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    name: {
      type: StringPart,
      required: true
    },
    description: {
      type: StringPart,
      required: false,
      defaultValue: ''
    },
    senderPublicKey: schemaFields.publicKey,
    script: {
      type: StringPart,
      required: true
    },
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee // TODO : validate against the transaction size in bytes
  }
})

export const preSetScript = (data) => setScriptSchema.parse(data)
export const postSetScript = createRemapper({
  transactionType: null,
  type: constants.SET_SCRIPT_TX,
  version: constants.SET_SCRIPT_TX_VERSION
})

export const sendSignedSetScriptTx = wrapTxRequest(TX_TYPE_MAP.setScript, preSetScript, postSetScript, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* SPONSORSHIP */

export const sponsorshipSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    minSponsoredAssetFee: {
      type: NumberPart,
      required: true
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee
  }
})

export const preSponsorship = (data) => sponsorshipSchema.parse(data)
export const postSponsorship = createRemapper({
  transactionType: null,
  type: constants.SPONSORSHIP_TX,
  version: constants.SPONSORSHIP_TX_VERSION
})

export const sendSignedSponsorshipTx = wrapTxRequest(TX_TYPE_MAP.sponsorship, preSponsorship, postSponsorship, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

/* PERMISSION */

export const permissionSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    timestamp: schemaFields.timestamp,
    opType: {
      type: StringPart,
      required: true
    },
    role: {
      type: StringPart,
      required: true
    },
    target: {
      type: StringPart,
      required: true
    },
    dueTimestamp: {
      type: NumberPart,
      required: false,
    },
    fee: schemaFields.fee
  }
})

export const prePermit = (data) => permissionSchema.parse(data)
export const postPermit = createRemapper({
  transactionType: null,
  type: constants.PERMISSION_TX,
  version: constants.PERMISSION_TX_VERSION
})

export const sendSignedPermissionTx = wrapTxRequest(TX_TYPE_MAP.permit, prePermit, postPermit, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

const dockerCreateBaseSchema = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    image: {
      type: StringPart,
      required: true
    },
    imageHash: {
      type: StringPart,
      required: true
    },
    contractName: {
      type: StringPart,
      required: true
    },
    params: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          type: {
            type: StringPart,
            required: true
          },
          key: {
            type: StringPart,
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
    fee: schemaFields.fee, // TODO : validate against the transaction size in bytes
    timestamp: schemaFields.timestamp
  }
}

export const dockerCreateSchema = new Schema(dockerCreateBaseSchema)

export const preDockerCreate = (data) => {
  return dockerCreateSchema.parse(data)
}

export const postDockerCreate = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  const result = {
    ...d,
    params: data,
    transactionType: null,
    type: constants.DOCKER_CREATE_TX,
    version: constants.DOCKER_CREATE_TX_VERSION
  }

  return result
}

export const sendSignedDockerCreateTx = wrapTxRequest(TX_TYPE_MAP.dockerCreate, preDockerCreate, postDockerCreate, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

export const dockerCreateV2Schema = new Schema({
    ...dockerCreateBaseSchema,
    content: {
      ...dockerCreateBaseSchema.content,
      feeAssetId: {
        ...schemaFields.assetId,
        required: false,
        defaultValue: constants.WAVES
      }
    }
  }
)

export const preDockerCreateV2 = (data) => {
  return dockerCreateV2Schema.parse(data)
}

export const postDockerCreateV2 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  const result = {
    ...d,
    feeAssetId: normalizeAssetId(d.feeAssetId),
    params: data,
    transactionType: null,
    type: constants.DOCKER_CREATE_TX_V2,
    version: constants.DOCKER_CREATE_TX_VERSION_V2
  }

  return result
}

export const sendSignedDockerCreateV2Tx = wrapTxRequest(TX_TYPE_MAP.dockerCreateV2, preDockerCreateV2, postDockerCreateV2, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

const dockerCallSchemaBase = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    authorPublicKey: schemaFields.publicKey,
    contractId: {
      type: StringPart,
      required: true
    },
    params: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          type: {
            type: StringPart,
            required: true
          },
          key: {
            type: StringPart,
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
    fee: schemaFields.fee, // TODO : validate against the transaction size in bytes
    timestamp: schemaFields.timestamp
  }
}

export const dockerCallSchema = new Schema(dockerCallSchemaBase)

export const preDockerCall = (data) => {
  return dockerCallSchema.parse(data)
}

// todo DRY
export const postDockerCall = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  const result = {
    ...d,
    params: data,
    transactionType: null,
    type: constants.DOCKER_CALL_TX,
    version: constants.DOCKER_CALL_TX_VERSION
  }

  return result
}

export const sendSignedDockerCallTx = wrapTxRequest(TX_TYPE_MAP.dockerCall, preDockerCall, postDockerCall, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest


export const dockerCallSchemaV2 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    },
    feeAssetId: {
      ...schemaFields.assetId,
      required: false,
      defaultValue: constants.WAVES
    }
  }
})

export const preDockerCallV2 = (data) => {
  return dockerCallSchemaV2.parse(data)
}

// todo DRY
export const postDockerCallV2 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  const result = {
    ...d,
    params: data,
    transactionType: null,
    type: constants.DOCKER_CALL_TX_V2,
    version: constants.DOCKER_CALL_TX_VERSION_V2
  }

  return result
}

export const sendSignedDockerCallV2Tx = wrapTxRequest(TX_TYPE_MAP.dockerCallV2, preDockerCallV2, postDockerCallV2, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest


export const dockerDisableSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    contractId: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee, // TODO : validate against the transaction size in bytes
    timestamp: schemaFields.timestamp
  }
})

export const preDockerDisable = (data) => {
  return dockerDisableSchema.parse(data)
}

export const postDockerDisable = d => {
  return {
    ...d,
    transactionType: null,
    type: constants.DOCKER_DISABLE_TX,
    version: constants.DOCKER_DISABLE_TX_VERSION
  }
}

export const sendSignedDockerDisableTx = wrapTxRequest(TX_TYPE_MAP.dockerDisable, preDockerDisable, postDockerDisable, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

export const nodeRegistrySchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    targetPubKey: schemaFields.publicKey,
    nodeName: {
      type: StringPart,
      required: true
    },
    opType: {
      type: StringPart,
      required: true
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee
  }
})

export const preNodeRegistry = (data) => {
  return nodeRegistrySchema.parse(data)
}

export const postNodeRegistry = d => {
  return {
    ...d,
    transactionType: null,
    type: constants.POLICY_REGISTER_NODE_TX,
    version: constants.POLICY_REGISTER_NODE_TX_VERSION
  }
}

export const signNodeRegistry = wrapTxRequest(TX_TYPE_MAP.policyRegisterNode, preNodeRegistry, postNodeRegistry, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

export const policyCreateScheme = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    policyName: {
      type: StringPart,
      required: true
    },
    description: {
      type: StringPart,
      required: true
    },
    recipients: {
      type: ArrayPart,
      content: {
        type: StringPart,
        required: true
      },
      defaultValue: []
    },
    owners: {
      type: ArrayPart,
      content: {
        type: StringPart,
        required: true
      },
      defaultValue: []
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee
  }
})

export const prePolicyCreate = (data) => {
  return policyCreateScheme.parse(data)
}

export const postPolicyCreate = d => {
  return {
    ...d,
    transactionType: null,
    type: constants.POLICY_CREATE_TX,
    version: constants.POLICY_CREATE_TX_VERSION
  }
}

export const signPolicyCreate = wrapTxRequest(TX_TYPE_MAP.policyCreate, prePolicyCreate, postPolicyCreate, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest

export const policyUpdateScheme = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    policyId: {
      type: StringPart,
      required: true
    },
    recipients: {
      type: ArrayPart,
      content: {
        type: StringPart,
        required: true
      },
      defaultValue: []
    },
    owners: {
      type: ArrayPart,
      content: {
        type: StringPart,
        required: true
      },
      defaultValue: []
    },
    opType: {
      type: StringPart,
      required: true
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee
  }
})

export const preUpdateCreate = (data) => {
  return policyUpdateScheme.parse(data)
}

export const postUpdateCreate = d => {
  return {
    ...d,
    transactionType: null,
    type: constants.POLICY_UPDATE_TX,
    version: constants.POLICY_UPDATE_TX_VERSION
  }
}

export const signPolicyUpdate = wrapTxRequest(TX_TYPE_MAP.policyUpdate, preUpdateCreate, postUpdateCreate, (postParams: any) => {
  return getSignedTx(postParams).data
}, true) as TTransactionRequest
