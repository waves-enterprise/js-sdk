import { ArrayPart, NumberPart, ObjectPart, Schema, StringPart } from 'ts-api-validator'
import schemaFields from "../schemaFields"
import { convertAttachmentToBase58, createRemapper } from "../../../utils/remap"


const massTransferSchemaBase = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    transfers: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          recipient: schemaFields.recipient,
          amount: {
            type: StringPart,
            required: true
          }
        }
      },
      defaultValue: []
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee,
    attachment: {
      // TODO : make it possible to pass a byte array
      type: StringPart,
      required: false,
      defaultValue: '',
      parseValue: convertAttachmentToBase58
    }
  }
}

const massTransferSchema = new Schema(massTransferSchemaBase)

const preMassTransfer = (data) => massTransferSchema.parse(data)
const postMassTransfer = createRemapper({
  transactionType: null,
  // Attachment should be encoded to base58 before calculate signature
  // attachment: {
  //   from: 'string',
  //   to: 'base58'
  // },
  transfers: {
    from: 'raw',
    to: 'prefixed',
    path: 'transfers'
  },
})

const massTransferSchemaV2 = new Schema({
  ...massTransferSchemaBase,
  content: {
    ...massTransferSchemaBase.content,
    feeAssetId: schemaFields.feeAssetId
  }
})

const preMassTransferV2 = (data) => {
  return massTransferSchemaV2.parse(data)
}

const postMassTransferV2 = postMassTransfer

export {
  preMassTransfer,
  postMassTransfer,
  preMassTransferV2,
  postMassTransferV2
}
