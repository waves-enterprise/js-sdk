import { NumberPart, ObjectPart, Schema } from "ts-api-validator"
import schemaFields from "../schemaFields"
import { createRemapper } from "../../../utils/remap"

const sponsorshipSchema = new Schema({
  type: ObjectPart,
  required: true,
  content: {
    senderPublicKey: schemaFields.publicKey,
    assetId: schemaFields.assetId,
    minSponsoredAssetFee: {
      type: NumberPart,
      required: true
    },
    timestamp: schemaFields.timestamp,
    fee: schemaFields.fee
  }
})

const preSponsorship = (data) => sponsorshipSchema.parse(data)
const postSponsorship = createRemapper({
  transactionType: null,
})

export { preSponsorship, postSponsorship }
