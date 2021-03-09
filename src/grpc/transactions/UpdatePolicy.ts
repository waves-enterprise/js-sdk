import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'

const UpdatePolicyTransaction = isNode
  ? require('../compiled-node/managed/update_policy_transaction_pb').UpdatePolicyTransaction
  : require('../compiled-web/managed/update_policy_transaction_pb').UpdatePolicyTransaction


type UpdatePolicyTx = ReturnType<TransactionsType["UpdatePolicy"]["V3"]>

export default async function updatePolicy(
  inputTx: UpdatePolicyTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new UpdatePolicyTransaction()
  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setPolicyId(tx.policyId)
  if (notEmpty(tx.recipients)) {
    callTx.setRecipientsList(tx.recipients)
  }
  if (notEmpty(tx.owners)) {
    callTx.setOwnersList(tx.owners)
  }
  if (notEmpty(tx.opType)) {
    callTx.setOpType(tx.opType)
  }

  txGrpc.setUpdatePolicyTransaction(callTx as any)

  return txGrpc

}