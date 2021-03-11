import { ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import { convertAttachmentToBase58, createRemapper } from "../../../utils/remap"

const transferBaseScheme = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    recipient: schemaFields.recipient,
    assetId: schemaFields.assetId,
    amount: {
      type: StringPart,
      required: true
    },
    feeAssetId: schemaFields.feeAssetId,
    fee: schemaFields.fee,
    attachment: {
      // TODO : make it possible to pass a byte array
      type: StringPart,
      required: false,
      defaultValue: '',
      parseValue: convertAttachmentToBase58
    },
    timestamp: schemaFields.timestamp
  }
}

const transferSchema = new Schema(transferBaseScheme)

const preTransfer = (data) => transferSchema.parse(data)
const postTransfer = createRemapper({
  transactionType: null,
  // Attachment should be encoded to base58 before calculate signature
  // attachment: {
  //   from: 'string',
  //   to: 'base58'
  // },
  recipient: {
    from: 'raw',
    to: 'prefixed'
  },
  amount: {
    from: 'string',
    to: 'bignumber'
  },
})

const postSignTransfer = createRemapper({
  amount: {
    from: 'string',
    to: 'bignumber'
  },
})

const transferV3Schema = new Schema({
  ...transferBaseScheme,
  content: {
    ...transferBaseScheme.content,
    atomicBadge: schemaFields.atomicBadge
  }
})

const preTransferV3 = (data) => transferV3Schema.parse(data)

const postTransferV3 = postTransfer

const postSignTransferV3 = postSignTransfer

export {
  preTransfer,
  postTransfer,
  postSignTransfer,
  preTransferV3,
  postTransferV3,
  postSignTransferV3
}
