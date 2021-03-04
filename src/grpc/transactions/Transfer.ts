import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

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
  if (tx.assetId) {
    callTx.setAssetId(tx.assetId)
  }
  callTx.setRecipient(tx.recipient)
  if (tx.attachment) {
    callTx.setAttachment(tx.attachment)
  }

  txGrpc.setTransferTransaction(callTx as any)

  return txGrpc

}