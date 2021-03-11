import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import { initGrpcTx, mapDataEntry } from '../utils'
import isNode from '../../utils/isNode'

const CallContractTransaction = isNode
  ? require('../compiled-node/managed/call_contract_transaction_pb').CallContractTransaction
  : require('../compiled-web/managed/call_contract_transaction_pb').CallContractTransaction

type DockerCallTx = ReturnType<TransactionsType["CallContract"]["V4"]>

export default async function callContract(
  inputTx: DockerCallTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new CallContractTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setContractId(tx.contractId)
  callTx.setContractVersion(tx.contractVersion)
  if (tx.params.length) {
    callTx.setParamsList(tx.params.map(mapDataEntry))
  }

  txGrpc.setCallContractTransaction(callTx as any)

  return txGrpc

}