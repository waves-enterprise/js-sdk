import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { StringValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const RegisterNodeTransaction = isNode
  ? require('../compiled-node/managed/register_node_transaction_pb').RegisterNodeTransaction
  : require('../compiled-web/managed/register_node_transaction_pb').RegisterNodeTransaction


type RegisterNodeTx = ReturnType<TransactionsType["RegisterNode"]["V1"]>

export default async function registerNode(
  inputTx: RegisterNodeTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new RegisterNodeTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (tx.targetPubKey) {
    // TODO
    callTx.setTarget(tx.targetPubKey)
  }

  if (tx.nodeName) {
    const nodeName = new StringValue()
    nodeName.setValue(tx.nodeName)
    callTx.setNodeName(nodeName)
  }

  if (tx.opType) {
    callTx.setOpType(tx.opType)
  }

  txGrpc.setRegisterNodeTransaction(callTx)

  return txGrpc

}