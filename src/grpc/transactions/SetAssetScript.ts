import { IKeyPair } from '../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'
// tslint:disable-next-line:no-submodule-imports
import { BytesValue } from 'google-protobuf/google/protobuf/wrappers_pb'

const SetAssetScriptTransaction = isNode
  ? require('../compiled-node/managed/set_asset_script_transaction_pb').SetAssetScriptTransaction
  : require('../compiled-web/managed/set_asset_script_transaction_pb').SetAssetScriptTransaction


type SetAssetScriptTx = ReturnType<TransactionsType["SetAssetScript"]["V1"]>

export default async function setAssetScript(
  inputTx: SetAssetScriptTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new SetAssetScriptTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setAssetId(tx.assetId)
  if (notEmpty(tx.chainId)) {
    callTx.setChainId(tx.chainId)
  }
  if (notEmpty(tx.script)) {
    const script = new BytesValue()
    script.setValue(tx.script)
    callTx.setScript(script)
  }

  txGrpc.setSetAssetScriptTransaction(callTx as any)

  return txGrpc

}