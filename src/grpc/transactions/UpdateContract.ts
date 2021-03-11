import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, notEmpty } from '../utils'

const UpdateContractTransaction = isNode
  ? require('../compiled-node/managed/update_contract_transaction_pb').UpdateContractTransaction
  : require('../compiled-web/managed/update_contract_transaction_pb').UpdateContractTransaction


type UpdateContractTx = ReturnType<TransactionsType["UpdateContract"]["V3"]>

export default async function updateContract(
  inputTx: UpdateContractTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new UpdateContractTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setContractId(tx.contractId)
  if (notEmpty(tx.imageHash)) {
    callTx.setImageHash(tx.imageHash)
  }
  if (notEmpty(tx.image)) {
    callTx.setImage(tx.image)
  }

  txGrpc.setUpdateContractTransaction(callTx as any)

  return txGrpc

}