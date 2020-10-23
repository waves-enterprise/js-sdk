import { ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

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

export { preNodeRegistry, postNodeRegistry }
