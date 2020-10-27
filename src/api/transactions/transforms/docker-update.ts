import { ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

const BaseSchema = {
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
}
const dockerUpdateV2Schema = new Schema(BaseSchema)

const preDockerUpdateV2 = (data) => {
  return dockerUpdateV2Schema.parse(data)
}

const postDockerUpdateV2 = d => {
  return {
    ...d,
    transactionType: null,
  }
}

const dockerUpdateSchemaV3 = new Schema({
  ...BaseSchema,
  content: {
    ...BaseSchema.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const preDockerUpdateV3 = (data) => dockerUpdateSchemaV3.parse(data)

const postDockerUpdateV3 = postDockerUpdateV2

export { preDockerUpdateV2, postDockerUpdateV2, preDockerUpdateV3, postDockerUpdateV3 }
