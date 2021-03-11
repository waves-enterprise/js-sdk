import { IKeyPair } from '../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import { initGrpcTx } from '../utils'
import isNode from '../../utils/isNode'

const AtomicTransaction  = isNode
  ? require('../compiled-node/managed/atomic_transaction_pb').AtomicTransaction
  : require('../compiled-web/managed/atomic_transaction_pb').AtomicTransaction

type AtomicTx = ReturnType<TransactionsType["Atomic"]["V1"]>

export default async function atomic(
  inputTx: AtomicTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  for (const innerTx of inputTx.transactions) {
    await innerTx.getSignedTx(keyPair)
  }
  const tx = await inputTx.getGrpcTx(keyPair)
  tx.transactions = await Promise.all(inputTx.transactions.map(inTx =>
    inTx.getGrpcDecorator(keyPair, true)
  ))

  const atomicTx = new AtomicTransaction()
  const txGrpc = initGrpcTx(atomicTx, tx, isAtomic)
  atomicTx.setTransactionsList(tx.transactions)
  txGrpc.setAtomicTransaction(atomicTx as any)

  return txGrpc
}