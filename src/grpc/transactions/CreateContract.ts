import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, mapDataEntry } from '../utils'

const CreateContractTransaction = isNode
  ? require('../compiled-node/managed/create_contract_transaction_pb').CreateContractTransaction
  : require('../compiled-web/managed/create_contract_transaction_pb').CreateContractTransaction


type DockerCreateTx = ReturnType<TransactionsType["CreateContract"]["V3"]>

export default async function createContract(
  inputTx: DockerCreateTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const createTx = new CreateContractTransaction()

  const txGrpc = initGrpcTx(createTx, tx, isAtomic)

  createTx.setContractName(tx.contractName)
  createTx.setImage(tx.image)
  createTx.setImageHash(tx.imageHash)
  if (tx.params.length) {
    createTx.setParamsList(tx.params.map(mapDataEntry))
  }

  txGrpc.setCreateContractTransaction(createTx as any)

  return txGrpc
}