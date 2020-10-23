import { ArrayPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

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

const preUpdatePolicy = (data) => {
  return policyUpdateScheme.parse(data)
}

const postUpdatePolicy = d => {
  return {
    ...d,
    transactionType: null,
  }
}

export { preUpdatePolicy, postUpdatePolicy }
