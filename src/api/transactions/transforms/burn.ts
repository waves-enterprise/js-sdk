import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import config from "../../../config";
import { createRemapper } from "../../../utils/remap";

const burnSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    amount: {
      type: StringPart,
      required: true
    },
    quantity: { // Legacy field to support in {node}/sign method
      type: StringPart,
      required: false
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

const preBurn = (data) => burnSchema.parse(data)
const postBurn = createRemapper({
  transactionType: null,
  amount: {
    from: 'string',
    to: 'bignumber'
  },
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignBurn = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  },
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})

export {
  preBurn,
  postBurn,
  postSignBurn
}
