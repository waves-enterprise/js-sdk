import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import { createRemapper } from "../../../utils/remap";
import Base = Mocha.reporters.Base;

const BaseSchema = {
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
}

const permissionSchema = new Schema(BaseSchema)

const prePermit = (data) => permissionSchema.parse(data)
const postPermit = createRemapper({
  transactionType: null,
})

const permissionSchemaV2 = new Schema({
  ...BaseSchema,
  content: {
    ...BaseSchema.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const prePermitV2 = (data) => permissionSchemaV2.parse(data)

const postPermitV2 = postPermit

export { prePermit, postPermit, prePermitV2, postPermitV2 }
