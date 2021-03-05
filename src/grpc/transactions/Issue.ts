import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const IssueTransaction = isNode
  ? require('../compiled-node/managed/issue_transaction_pb').IssueTransaction
  : require('../compiled-web/managed/issue_transaction_pb').IssueTransaction


type IssueTransactionTx = ReturnType<TransactionsType["Issue"]["V2"]>

export default async function issue(
  inputTx: IssueTransactionTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new IssueTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (tx.chainId) {
    callTx.setChainId(tx.chainId)
  }
  if (tx.name) {
    callTx.setName(tx.name)
  }
  if (tx.description) {
    callTx.setDescription(tx.description)
  }
  if (tx.quantity) {
    callTx.setQuantity(tx.quantity)
  }
  if (tx.decimals) {
    callTx.setDecimals(tx.decimals)
  }
  // tslint:disable-next-line:triple-equals
  if (tx.reissuable != undefined) {
    callTx.setReissuable(tx.reissuable)
  }
  if (tx.script) {
    const script = new BytesValue()
    script.setValue(tx.script)
    callTx.setScript(script)
  }
  txGrpc.setIssueTransaction(callTx as any)

  return txGrpc

}