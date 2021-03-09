import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const SetScriptTransaction = isNode
  ? require('../compiled-node/managed/set_script_transaction_pb').SetScriptTransaction
  : require('../compiled-web/managed/set_script_transaction_pb').SetScriptTransaction


type SetScriptTx = ReturnType<TransactionsType["SetScript"]["V1"]>

export default async function setScript(
  inputTx: SetScriptTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new SetScriptTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (notEmpty(tx.chainId)) {
    callTx.setChainId(tx.chainId)
  }
  if (notEmpty(tx.script)) {
    const script = new BytesValue()
    script.setValue(tx.script)
    callTx.setScript(script)
  }
  if (notEmpty(tx.name)) {
    callTx.setName(tx.name)
  }
  if (notEmpty(tx.description)) {
    callTx.setDescription(tx.description)
  }

  txGrpc.setSetScriptTransaction(callTx as any)

  return txGrpc

}