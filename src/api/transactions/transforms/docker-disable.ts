import { ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"

const BaseSchema = {
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
}

const dockerDisableSchema = new Schema(BaseSchema)

const preDockerDisable = (data) => {
  return dockerDisableSchema.parse(data)
}

const postDockerDisable = d => {
  return {
    ...d,
    transactionType: null,
  }
}

const dockerDisableSchemaV3 = new Schema({
  ...BaseSchema,
  content: {
    ...BaseSchema.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const preDockerDisableV3 = (data) => dockerDisableSchemaV3.parse(data)

const postDockerDisableV3 = postDockerDisable

export { preDockerDisable, postDockerDisable, preDockerDisableV3, postDockerDisableV3 }
