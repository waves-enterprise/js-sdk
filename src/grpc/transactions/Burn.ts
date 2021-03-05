import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const BurnTransaction = isNode
  ? require('../compiled-node/managed/burn_transaction_pb').BurnTransaction
  : require('../compiled-web/managed/burn_transaction_pb').BurnTransaction


type BurnTx = ReturnType<TransactionsType["Burn"]["V2"]>

export default async function burn(
  inputTx: BurnTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new BurnTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setAmount(tx.amount)
  if (tx.assetId) {
    callTx.setAssetId(tx.assetId)
  }
  if (tx.chainId) {
    callTx.setChainId(tx.chainId)
  }

  txGrpc.setBurnTransaction(callTx as any)

  return txGrpc

}