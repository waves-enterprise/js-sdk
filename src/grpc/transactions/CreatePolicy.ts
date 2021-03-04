import { initGrpcTx } from '../utils'
import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'

const CreatePolicyTransaction = isNode
  ? require('../compiled-node/managed/create_policy_transaction_pb').CreatePolicyTransaction
  : require('../compiled-web/managed/create_policy_transaction_pb').CreatePolicyTransaction


type CreatePolicyTx = ReturnType<TransactionsType["CreatePolicy"]["V3"]>

export default async function createPolicy(
  inputTx: CreatePolicyTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new CreatePolicyTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setPolicyName(tx.policyName)
  if (tx.description) {
    callTx.setDescription(tx.description)
  }
  callTx.setRecipientsList(tx.recipients)
  callTx.setOwnersList(tx.owners)

  txGrpc.setCreatePolicyTransaction(callTx as any)

  return txGrpc

}