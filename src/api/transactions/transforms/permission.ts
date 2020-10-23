import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import { createRemapper } from "../../../utils/remap";

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

export { prePermit, postPermit }
