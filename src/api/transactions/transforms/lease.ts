import { ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import { createRemapper } from "../../../utils/remap";

const leaseSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    recipient: schemaFields.recipient,
    amount: {
      type: StringPart,
      required: true
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp
  }
})

const preLease = (data) => leaseSchema.parse(data)
const postLease = createRemapper({
  transactionType: null,
  recipient: {
    from: 'raw',
    to: 'prefixed'
  },
  amount: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignLease = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  }
})

export {
  preLease,
  postLease,
  postSignLease
}
