import { BooleanPart, NumberPart, ObjectPart, StringPart } from 'ts-api-validator';
import { getTimestamp, removeRecipientPrefix, normalizeAssetId } from '../../utils/remap';
import * as constants from '../../constants';

export default {

    publicKey: {
        type: StringPart,
        required: true
    },

    assetId: {
        type: StringPart,
        required: true,
        parseValue: normalizeAssetId
    },

    feeAssetId: {
        type: StringPart,
        required: false,
        parseValue: normalizeAssetId
    },

    fee: {
        type: NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_FEE
    },

    issueFee: {
        type: NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_ISSUE_FEE
    },

    matcherFee: {
        type: NumberPart,
        required: false,
        defaultValue: constants.MINIMUM_MATCHER_FEE
    },

    recipient: {
        type: StringPart,
        required: true,
        parseValue: removeRecipientPrefix
    },

    reissuable: {
        type: BooleanPart,
        required: false,
        defaultValue: false
    },

    timestamp: {
        type: NumberPart,
        required: true,
        parseValue: getTimestamp
    },

    atomicBadge: {
        type: ObjectPart,
        required: true,
        content: {
            trustedSender: {
                type: StringPart,
                required: false,
                defaultValue: null
            }
        }
    }
}
