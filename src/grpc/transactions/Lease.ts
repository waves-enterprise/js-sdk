import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const LeaseTransaction = isNode
  ? require('../compiled-node/managed/lease_transaction_pb').LeaseTransaction
  : require('../compiled-web/managed/lease_transaction_pb').LeaseTransaction


type LeaseTx = ReturnType<TransactionsType["Lease"]["V2"]>

export default async function lease(
  inputTx: LeaseTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new LeaseTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setAmount(tx.amount)
  if (tx.assetId) {
    const bytesValue = new BytesValue()
    bytesValue.setValue(tx.assetId)
    callTx.setAssetId(bytesValue)
  }
  callTx.setRecipient(tx.recipient)

  txGrpc.setLeaseTransaction(callTx as any)

  return txGrpc
}