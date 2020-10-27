import { ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";

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

export { preDockerUpdateV2, postDockerUpdateV2 }
