import { NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import config from "../../../config"
import { createRemapper } from "../../../utils/remap"

const setScriptSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    name: {
      type: StringPart,
      required: true
    },
    description: {
      type: StringPart,
      required: false,
      defaultValue: ''
    },
    senderPublicKey: schemaFields.publicKey,
    script: {
      type: StringPart,
      required: true
    },
    chainId: {
      type: NumberPart,
      required: true,
      parseValue: () => config.getNetworkByte()
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee // TODO : validate against the transaction size in bytes
  }
})

const preSetScript = (data) => setScriptSchema.parse(data)
const postSetScript = createRemapper({
  transactionType: null,
})

export { preSetScript, postSetScript }
