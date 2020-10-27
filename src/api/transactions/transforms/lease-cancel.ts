import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import config from "../../../config";
import { createRemapper } from "../../../utils/remap";

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

export { preCancelLeasing, postCancelLeasing }
