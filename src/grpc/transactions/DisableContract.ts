import { IKeyPair } from '../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const DisableContractTransaction = isNode
  ? require('../compiled-node/managed/disable_contract_transaction_pb').DisableContractTransaction
  : require('../compiled-web/managed/disable_contract_transaction_pb').DisableContractTransaction


type DisableContractTx = ReturnType<TransactionsType["DisableContract"]["V3"]>

export default async function disableContract(
  inputTx: DisableContractTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new DisableContractTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setContractId(tx.contractId)

  txGrpc.setDisableContractTransaction(callTx as any)

  return txGrpc

}