import { IKeyPair } from '../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const PolicyDataHashTransaction = isNode
  ? require('../compiled-node/managed/policy_data_hash_transaction_pb').PolicyDataHashTransaction
  : require('../compiled-web/managed/policy_data_hash_transaction_pb').PolicyDataHashTransaction


type PolicyDataHashTx = ReturnType<TransactionsType["PolicyDataHash"]["V3"]>

export default async function policyDataHash(
  inputTx: PolicyDataHashTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new PolicyDataHashTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)
  callTx.setPolicyId(tx.policyId)
  callTx.setDataHash(tx.dataHash)
  txGrpc.setPolicyDataHashTransaction(callTx as any)

  return txGrpc

}