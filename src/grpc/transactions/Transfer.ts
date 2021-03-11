import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const TransferTransaction = isNode
  ? require('../compiled-node/managed/transfer_transaction_pb').TransferTransaction
  : require('../compiled-web/managed/transfer_transaction_pb').TransferTransaction


type TransferTx = ReturnType<TransactionsType["Transfer"]["V3"]>

export default async function transfer(
  inputTx: TransferTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new TransferTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setAmount(tx.amount)
  if (notEmpty(tx.assetId)) {
    const bytesValue = new BytesValue()
    bytesValue.setValue(tx.assetId)
    callTx.setAssetId(bytesValue)
  }
  callTx.setRecipient(tx.recipient)
  if (notEmpty(tx.attachment)) {
    callTx.setAttachment(tx.attachment)
  }

  txGrpc.setTransferTransaction(callTx as any)

  return txGrpc

}