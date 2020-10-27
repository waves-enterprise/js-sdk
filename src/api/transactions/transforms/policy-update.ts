import { ArrayPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

const BaseSchema = {
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
}

const policyUpdateScheme = new Schema(BaseSchema)

const preUpdatePolicy = (data) => {
  return policyUpdateScheme.parse(data)
}

const postUpdatePolicy = d => {
  return {
    ...d,
    transactionType: null,
  }
}

const policyUpdateSchemeV3 = new Schema({
  ...BaseSchema,
  content: {
    ...BaseSchema.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const preUpdatePolicyV3 = (data) => policyUpdateSchemeV3.parse(data)

const postUpdatePolicyV3 = postUpdatePolicy

export { preUpdatePolicy, postUpdatePolicy, preUpdatePolicyV3, postUpdatePolicyV3 }
