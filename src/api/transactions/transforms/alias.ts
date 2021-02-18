import { ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import { createRemapper, removeAliasPrefix } from "../../../utils/remap"

const createAliasSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    alias: {
      type: StringPart,
      required: true,
      parseValue: removeAliasPrefix
    },
    fee: schemaFields.fee,
    timestamp: schemaFields.timestamp
  }
})

const preCreateAlias = (data) => createAliasSchema.parse(data)
const postCreateAlias = createRemapper({
  transactionType: null,
})

export {
  preCreateAlias, postCreateAlias
}
