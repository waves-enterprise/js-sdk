import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import config from "../../../config";
import { createRemapper } from "../../../utils/remap";

const reissueSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    quantity: {
      type: StringPart,
      required: true
    },
    reissuable: schemaFields.reissuable,
    fee: schemaFields.issueFee,
    timestamp: schemaFields.timestamp,
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    }
  }
})

const preReissue = (data) => reissueSchema.parse(data)
const postReissue = createRemapper({
  transactionType: null,
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})
const postSignReissue = createRemapper({
  quantity: {
    from: 'string',
    to: 'bignumber'
  }
})

export {
  preReissue,
  postReissue,
  postSignReissue
}
