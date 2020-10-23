import { ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

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

export { preDockerDisable, postDockerDisable }
