import { ArrayPart, ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"

const policyCreateSchemeBase = {
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
}
const policyCreateScheme = new Schema(policyCreateSchemeBase)

const prePolicyCreate = (data) => {
  return policyCreateScheme.parse(data)
}

const postPolicyCreate = d => {
  return {
    ...d,
    transactionType: null,
  }
}


const policyCreateSchemeV3 = new Schema({
  ...policyCreateSchemeBase,
  content: {
    ...policyCreateSchemeBase.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const prePolicyCreateV3 = (data) => {
  return policyCreateSchemeV3.parse(data)
}

const postPolicyCreateV3 = postPolicyCreate

export {
  prePolicyCreate, postPolicyCreate,
  prePolicyCreateV3, postPolicyCreateV3
}
