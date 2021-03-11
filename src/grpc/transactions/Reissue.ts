import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'

const ReissueTransaction = isNode
  ? require('../compiled-node/managed/reissue_transaction_pb').ReissueTransaction
  : require('../compiled-web/managed/reissue_transaction_pb').ReissueTransaction


type ReissueTx = ReturnType<TransactionsType["Reissue"]["V2"]>

export default async function reissue(
  inputTx: ReissueTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new ReissueTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (notEmpty(tx.chainId)) {
    callTx.setChainId(tx.chainId)
  }
  if (notEmpty(tx.assetId)) {
    callTx.setAssetId(tx.assetId)
  }
  if (notEmpty(tx.quantity)) {
    callTx.setQuantity(tx.quantity)
  }
  if (notEmpty(tx.reissuable)) {
    callTx.setReissuable(tx.reissuable)
  }

  txGrpc.setReissueTransaction(callTx as any)

  return txGrpc

}