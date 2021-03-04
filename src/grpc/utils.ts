import isNode from '../utils/isNode'
import { libs } from '@wavesenterprise/transactions-factory'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'


const DataEntry = isNode
  ? require('./compiled-node/data_entry_pb').DataEntry
  : require('./compiled-web/data_entry_pb').DataEntry

const AtomicBadge = isNode
  ? require('./compiled-node/atomic_badge_pb').AtomicBadge
  : require('./compiled-web/atomic_badge_pb').AtomicBadge

const Transaction = isNode
  ? require('./compiled-node/managed/transaction_pb').Transaction
  : require('./compiled-web/managed/transaction_pb').Transaction

const AtomicInnerTransaction = isNode
  ? require('./compiled-node/managed/atomic_inner_transaction_pb').AtomicInnerTransaction
  : require('./compiled-web/managed/atomic_inner_transaction_pb').AtomicInnerTransaction


export const mapDataEntry = (param: {
  type: 'string' | 'binary' | 'integer' | 'boolean',
  value: any,
  key: string
}): typeof DataEntry => {
  const dataEntry = new DataEntry()
  dataEntry.setKey(param.key)
  switch (param.type) {
    case 'binary':
      dataEntry.setBinaryValue(param.value)
      break
    case 'boolean':
      dataEntry.setBoolValue(param.value)
      break
    case 'integer':
      dataEntry.setIntValue(param.value)
      break
    case 'string':
      dataEntry.setStringValue(param.value)
      break
    default:
      throw new Error(`Wrong docker param type: ${param.type}, must be: 'string' | 'binary' | 'integer' | 'boolean'`)
  }
  return dataEntry
}

export const initGrpcTx = (
  subGrpcTx: any,
  weTx: any,
  isAtomic = false
): typeof Transaction | typeof AtomicInnerTransaction => {
  const txGrpc = isAtomic ? new AtomicInnerTransaction() : new Transaction()
  subGrpcTx.setSenderPublicKey(weTx.senderPublicKey)
  if (subGrpcTx.setFee) {
    subGrpcTx.setFee(weTx.fee)
  }
  subGrpcTx.setTimestamp(weTx.timestamp)
  subGrpcTx.addProofs(weTx.proofs[0])
  txGrpc.setVersion(weTx.version)

  if (weTx.atomicBadge) {
    const atomicBadge = new AtomicBadge()
    if (weTx.atomicBadge.trustedSender) {
      const bytesValue = new BytesValue()
      bytesValue.setValue(libs.base58.decode(weTx.atomicBadge.trustedSender))
      atomicBadge.setTrustedSender(bytesValue)
    }
    subGrpcTx.setAtomicBadge(atomicBadge)
  }

  if (weTx.feeAssetId) {
    subGrpcTx.setFeeAssetId(weTx.feeAssetId)
  }

  return txGrpc
}
