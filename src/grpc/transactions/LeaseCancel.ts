import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'

const LeaseCancelTransaction = isNode
  ? require('../compiled-node/managed/lease_cancel_transaction_pb').LeaseCancelTransaction
  : require('../compiled-web/managed/lease_cancel_transaction_pb').LeaseCancelTransaction


type LeaseCancelTx = ReturnType<TransactionsType["LeaseCancel"]["V2"]>

export default async function leaseCancel(
  inputTx: LeaseCancelTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new LeaseCancelTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (notEmpty(tx.chainId)) {
    callTx.setChainId(tx.chainId)
  }
  callTx.setLeaseId(tx.leaseId)

  txGrpc.setLeaseCancelTransaction(callTx as any)

  return txGrpc

}