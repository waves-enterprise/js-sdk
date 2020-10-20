import { TRANSACTIONS } from '@wavesenterprise/transactions-factory';
import { ArrayPart, BasePart, NumberPart, ObjectPart, Schema, StringPart } from 'ts-api-validator';
import schemaFields from './schemaFields';
import { convertAttachmentToBase58, createRemapper, precisionCheck, removeAliasPrefix } from '../../utils/remap';
import config from '../../config';
import BigNumber from '../../libs/bignumber';


type TRANSFORMS_TYPES = {
  [key in keyof typeof TRANSACTIONS]?: {
    [key1 in keyof typeof TRANSACTIONS[key]]?: {
      pre: (data: object) => Promise<object>,
      post: (data: object) => object,
      postSign?: (data: object) => object,
    }
  }
}

const TRANSFORMS: TRANSFORMS_TYPES = {}
Object.keys(TRANSACTIONS).forEach(key => {
  TRANSFORMS[key] = {}
  Object.keys(TRANSACTIONS[key]).forEach(key1 => {
    TRANSFORMS[key][key1] = {}
  })
})

class AnyPart extends BasePart<any> {
  protected getValue<T>(data: T): T {
    return data
  }
}


/* ISSUE */

const issueSchema = new Schema({
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
      defaultValue: null
    },
    quantity: { // todo accept as string OR as bignumber
      type: StringPart,
      required: true
    },
    decimals: {
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

const preIssue = (data) => issueSchema.parse(data)
const postIssue = createRemapper({
  transactionType: null,
  quantity: {
    from: 'string',
    to: 'bignumber'
  },
})
const postSignIssue = createRemapper({
  quantity: {
    from: 'string',
    to: 'bignumber'
  },
})

// TODO issue no script
TRANSFORMS.ISSUE.V2 = {
  pre: preIssue,
  post: postIssue,
  postSign: postSignIssue,
}


/* TRANSFER */

const transferSchema = new Schema({
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
    feeAssetId: schemaFields.feeAssetId,
    fee: schemaFields.fee,
    attachment: {
      // TODO : make it possible to pass a byte array
      type: StringPart,
      required: false,
      defaultValue: '',
      parseValue: convertAttachmentToBase58
    },
    timestamp: schemaFields.timestamp
  }
})

const preTransfer = (data) => transferSchema.parse(data)
const postTransfer = createRemapper({
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
})
const postSignTransfer = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  },
})

TRANSFORMS.TRANSFER.V2 = {
  pre: preTransfer,
  post: postTransfer,
  postSign: postSignTransfer
}

/* REISSUE */

const reissueSchema = new Schema({
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

const preReissue = (data) => reissueSchema.parse(data)
const postReissue = createRemapper({
  transactionType: null,
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignReissue = createRemapper({
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})

TRANSFORMS.REISSUE.V2 = {
  pre: preReissue,
  post: postReissue,
  postSign: postSignReissue
}

/* BURN */

const burnSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    amount: {
      type: StringPart,
      required: true
    },
    quantity: { // Legacy field to support in {node}/sign method
      type: StringPart,
      required: false
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

const preBurn = (data) => burnSchema.parse(data)
const postBurn = createRemapper({
  transactionType: null,
  amount: {
    from: 'string',
    to: 'bignumber'
  },
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignBurn = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  },
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})

TRANSFORMS.BURN.V2 = {
  pre: preBurn,
  post: postBurn,
  postSign: postSignBurn,
}

/* LEASE */

const leaseSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    recipient: schemaFields.recipient,
    amount: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp
  }
})

const preLease = (data) => leaseSchema.parse(data)
const postLease = createRemapper({
  transactionType: null,
  recipient: {
    from: 'raw',
    to: 'prefixed'
  },
  amount: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignLease = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  }
})

TRANSFORMS.LEASE.V2 = {
  pre: preLease,
  post: postLease,
  postSign: postSignLease,
}

/* CANCEL LEASING */

const cancelLeasingSchema = new Schema({
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

const preCancelLeasing = (data) => cancelLeasingSchema.parse(data)
const postCancelLeasing = createRemapper({
  transactionType: null,
  transactionId: 'txId',
})

TRANSFORMS.LEASE_CANCEL.V2 = {
  pre: preCancelLeasing,
  post: postCancelLeasing
}

/* CREATE ALIAS */

const createAliasSchema = new Schema({
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

const preCreateAlias = (data) => createAliasSchema.parse(data)
const postCreateAlias = createRemapper({
  transactionType: null,
})

TRANSFORMS.CREATE_ALIAS.V2 = {
  pre: preCreateAlias,
  post: postCreateAlias
}

/* MASS TRANSFER */

const massTransferSchema = new Schema({
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
      defaultValue: '',
      parseValue: convertAttachmentToBase58
    }
  }
})

const preMassTransfer = (data) => massTransferSchema.parse(data)
const postMassTransfer = createRemapper({
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
})

TRANSFORMS.MASS_TRANSFER.V1 = {
  pre: preMassTransfer,
  post: postMassTransfer
}

/* DATA */

const dataSchema = new Schema({
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

const preData = (data) => dataSchema.parse(data)

const postData = d => {
  const data = JSON.parse(JSON.stringify(d.data))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    data,
    transactionType: null,
  }
}

const postSignData = createRemapper({
  data: (data) => {
    return data.map(item => {
      const { type, value } = item
      if (type !== 'integer') {
        return item
      }
      return {
        ...item,
        value: new BigNumber(value)
      }
    })
  }
})

TRANSFORMS.DATA.V1 = {
  pre: preData,
  post: postData,
  postSign: postSignData
}

/* SET SCRIPT */

const setScriptSchema = new Schema({
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

const preSetScript = (data) => setScriptSchema.parse(data)
const postSetScript = createRemapper({
  transactionType: null,
})


TRANSFORMS.SET_SCRIPT.V1 = {
  pre: preSetScript,
  post: postSetScript
}

/* SPONSORSHIP */

const sponsorshipSchema = new Schema({
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

const preSponsorship = (data) => sponsorshipSchema.parse(data)
const postSponsorship = createRemapper({
  transactionType: null,
})

TRANSFORMS.SPONSOR_FEE.V1 = {
  pre: preSponsorship,
  post: postSponsorship
}

/* PERMISSION */

const permissionSchema = new Schema({
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

const prePermit = (data) => permissionSchema.parse(data)
const postPermit = createRemapper({
  transactionType: null,
})

TRANSFORMS.PERMIT.V1 = {
  pre: prePermit,
  post: postPermit
}

/* DOCKER CREATE */

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

const dockerCreateSchema = new Schema(dockerCreateBaseSchema)

const preDockerCreate = (data) => {
  return dockerCreateSchema.parse(data)
}

const postDockerCreate = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

TRANSFORMS.CREATE_CONTRACT.V1 = {
  pre: preDockerCreate,
  post: postDockerCreate
}


const dockerCreateV2Schema = new Schema({
    ...dockerCreateBaseSchema,
    content: {
      ...dockerCreateBaseSchema.content,
      feeAssetId: schemaFields.feeAssetId
    }
  }
)

const preDockerCreateV2 = (data) => {
  return dockerCreateV2Schema.parse(data)
}

const postDockerCreateV2 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

TRANSFORMS.CREATE_CONTRACT.V2 = {
  pre: preDockerCreateV2,
  post: postDockerCreateV2
}

/* DOCKER CALL */

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

const dockerCallSchema = new Schema(dockerCallSchemaBase)

const preDockerCall = (data) => {
  return dockerCallSchema.parse(data)
}

// todo DRY
const postDockerCall = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

TRANSFORMS.CALL_CONTRACT.V1 = {
  pre: preDockerCall,
  post: postDockerCall
}

const dockerCallSchemaV2 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    }
  }
})

const preDockerCallV2 = (data) => {
  return dockerCallSchemaV2.parse(data)
}

const postDockerCallV2 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

TRANSFORMS.CALL_CONTRACT.V2 = {
  pre: preDockerCallV2,
  post: postDockerCallV2
}

const dockerCallSchemaV3 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    },
    feeAssetId: schemaFields.feeAssetId
  }
})

const preDockerCallV3 = (data) => {
  return dockerCallSchemaV3.parse(data)
}

// todo DRY
const postDockerCallV3 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

TRANSFORMS.CALL_CONTRACT.V3 = {
  pre: preDockerCallV3,
  post: postDockerCallV3
}

/* DOCKER DISABLE */

const dockerDisableSchema = new Schema({
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

const preDockerDisable = (data) => {
  return dockerDisableSchema.parse(data)
}

const postDockerDisable = d => {
  return {
    ...d,
    transactionType: null,
  }
}

TRANSFORMS.DISABLE_CONTRACT.V1 = {
  pre: preDockerDisable,
  post: postDockerDisable
}

/* DOCKER UPDATE */

const dockerUpdateV2Schema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    contractId: {
      type: StringPart,
      required: true
    },
    image: {
      type: StringPart,
      required: true
    },
    imageHash: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp,
    feeAssetId: schemaFields.feeAssetId
  }
})

const preDockerUpdateV2 = (data) => {
  return dockerUpdateV2Schema.parse(data)
}

const postDockerUpdateV2 = d => {
  return {
    ...d,
    transactionType: null,
  }
}

TRANSFORMS.UPDATE_CONTRACT.V2 = {
  pre: preDockerUpdateV2,
  post: postDockerUpdateV2
}

/* REGISTRY */

const nodeRegistrySchema = new Schema({
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

const preNodeRegistry = (data) => {
  return nodeRegistrySchema.parse(data)
}

const postNodeRegistry = d => {
  return {
    ...d,
    transactionType: null,
  }
}

TRANSFORMS.REGISTER_NODE.V1 = {
  pre: preNodeRegistry,
  post: postNodeRegistry
}

/* POLICY CREATE */

const policyCreateScheme = new Schema({
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

const prePolicyCreate = (data) => {
  return policyCreateScheme.parse(data)
}

const postPolicyCreate = d => {
  return {
    ...d,
    transactionType: null,
  }
}

TRANSFORMS.CREATE_POLICY.V1 = {
  pre: prePolicyCreate,
  post: postPolicyCreate
}

/* POLICY UPDATE */

const policyUpdateScheme = new Schema({
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

const preUpdateCreate = (data) => {
  return policyUpdateScheme.parse(data)
}

const postUpdateCreate = d => {
  return {
    ...d,
    transactionType: null,
  }
}

TRANSFORMS.UPDATE_POLICY.V1 = {
  pre: preUpdateCreate,
  post: postUpdateCreate
}


export default TRANSFORMS
