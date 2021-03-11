import { ArrayPart, ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import BigNumber from "../../../libs/bignumber"
import { AnyPart } from './common'

const dockerCreateBaseSchema = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    image: {
      type: StringPart,
      required: true
    },
    imageHash: {
      type: StringPart,
      required: true
    },
    contractName: {
      type: StringPart,
      required: true
    },
    params: {
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
}

const dockerCreateSchema = new Schema(dockerCreateBaseSchema)

const preDockerCreate = (data) => {
  return dockerCreateSchema.parse(data)
}

const postDockerCreate = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}



const dockerCreateV2Schema = new Schema({
    ...dockerCreateBaseSchema,
    content: {
      ...dockerCreateBaseSchema.content,
      feeAssetId: schemaFields.feeAssetId
    }
  }
)

const preDockerCreateV2 = (data) => {
  return dockerCreateV2Schema.parse(data)
}

const postDockerCreateV2 = d => {
  const data = JSON.parse(JSON.stringify(d.params))

  data.forEach(e => {
    if (e.type === 'integer' && typeof e.value === 'string') {
      e.value = new BigNumber(e.value)
    }

    return e
  })

  return {
    ...d,
    params: data,
    transactionType: null,
  }
}

const dockerCreateV3Schema = new Schema({
    ...dockerCreateBaseSchema,
    content: {
      ...dockerCreateBaseSchema.content,
      feeAssetId: schemaFields.feeAssetId,
      atomicBadge: schemaFields.atomicBadge
    }
  }
)

const preDockerCreateV3 = (data) => {
  return dockerCreateV3Schema.parse(data)
}

const postDockerCreateV3 = postDockerCreate

export {
  preDockerCreate, postDockerCreate,
  preDockerCreateV2, postDockerCreateV2,
  preDockerCreateV3, postDockerCreateV3
}
