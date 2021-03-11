import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const MassTransferTransaction = isNode
  ? require('../compiled-node/managed/mass_transfer_transaction_pb').MassTransferTransaction
  : require('../compiled-web/managed/mass_transfer_transaction_pb').MassTransferTransaction

const Transfer = isNode
  ? require('../compiled-node/transfer_pb').Transfer
  : require('../compiled-web/transfer_pb').Transfer

type MassTransferTx = ReturnType<TransactionsType["MassTransfer"]["V2"]>

export default async function massTransfer(
  inputTx: MassTransferTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new MassTransferTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (notEmpty(tx.assetId)) {
    const bytesValue = new BytesValue()
    bytesValue.setValue(tx.assetId)
    callTx.setAssetId(bytesValue)
  }
  if (notEmpty(tx.attachment)) {
    callTx.setAttachment(tx.attachment)
  }

  callTx.setTransfersList(tx.transfers.map(transfer => {
    const tr = new Transfer()
    tr.setRecipient(transfer.recipient)
    tr.setAmount(transfer.amount)
    return tr
  }))

  txGrpc.setMassTransferTransaction(callTx as any)

  return txGrpc

}