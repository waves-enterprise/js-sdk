import { ArrayPart, NumberPart, ObjectPart, Schema, StringPart } from "ts-api-validator"
import schemaFields from "../schemaFields"
import BigNumber from "../../../libs/bignumber"
import { AnyPart } from "./common"

const dockerCallSchemaBase = {
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    authorPublicKey: schemaFields.publicKey,
    contractId: {
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

const dockerCallSchema = new Schema(dockerCallSchemaBase)

const preDockerCall = (data) => {
  return dockerCallSchema.parse(data)
}

// todo DRY
const postDockerCall = d => {
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


const dockerCallSchemaV2 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    }
  }
})

const preDockerCallV2 = (data) => {
  return dockerCallSchemaV2.parse(data)
}

const postDockerCallV2 = d => {
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


const dockerCallSchemaV3 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    },
    feeAssetId: schemaFields.feeAssetId
  }
})

const preDockerCallV3 = (data) => {
  return dockerCallSchemaV3.parse(data)
}

// todo DRY
const postDockerCallV3 = d => {
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

const dockerCallSchemaV4 = new Schema({
  ...dockerCallSchemaBase,
  content: {
    ...dockerCallSchemaBase.content,
    contractVersion: {
      type: NumberPart,
      required: true
    },
    feeAssetId: schemaFields.feeAssetId,
    atomicBadge: schemaFields.atomicBadge
  }
})

const preDockerCallV4 = (data) => {
  return dockerCallSchemaV4.parse(data)
}

const postDockerCallV4 = postDockerCall

export {
  preDockerCall, postDockerCall,
  preDockerCallV2, postDockerCallV2,
  preDockerCallV3, postDockerCallV3,
  preDockerCallV4, postDockerCallV4
}
