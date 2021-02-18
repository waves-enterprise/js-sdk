import { ArrayPart, ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import BigNumber from "../../../libs/bignumber"
import { createRemapper } from "../../../utils/remap"
import { AnyPart } from './common'

const dataSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    authorPublicKey: schemaFields.publicKey,
    data: {
      type: ArrayPart,
      content: {
        type: ObjectPart,
        required: true,
        content: {
          type: {
            type: StringPart,
            required: true
          },
          key: {
            type: StringPart,
            required: true
          },
          value: {
            type: AnyPart,
            required: true
          }
        }
      },
      defaultValue: []
    },
    fee: schemaFields.fee, // TODO : validate against the transaction size in bytes
    timestamp: schemaFields.timestamp
  }
})

const preData = (data) => dataSchema.parse(data)

const postData = d => {
  const data = JSON.parse(JSON.stringify(d.data))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    data,
    transactionType: null,
  }
}

const postSignData = createRemapper({
  data: (data) => {
    return data.map(item => {
      const { type, value } = item
      if (type !== 'integer') {
        return item
      }
      return {
        ...item,
        value: new BigNumber(value)
      }
    })
  }
})

export { preData, postData, postSignData }
