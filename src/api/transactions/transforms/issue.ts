import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator";
import schemaFields from "../schemaFields";
import { createRemapper, precisionCheck } from "../../../utils/remap";
import config from "../../../config";

const issueSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    name: {
      type: StringPart,
      required: true
    },
    description: {
      type: StringPart,
      required: false,
      defaultValue: ''
    },
    script: {
      type: StringPart,
      required: false,
      defaultValue: null
    },
    quantity: { // todo accept as string OR as bignumber
      type: StringPart,
      required: true
    },
    decimals: {
      type: NumberPart,
      required: true,
      isValid: precisionCheck
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
});

const preIssue = (data) => issueSchema.parse(data)
const postIssue = createRemapper({
  transactionType: null,
  quantity: {
    from: 'string',
    to: 'bignumber'
  },
})
const postSignIssue = createRemapper({
  quantity: {
    from: 'string',
    to: 'bignumber'
  },
})

export {
  preIssue,
  postIssue,
  postSignIssue
}
