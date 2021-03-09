import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx, mapDataEntry, notEmpty } from '../utils'

const DataTransaction = isNode
  ? require('../compiled-node/managed/data_transaction_pb').DataTransaction
  : require('../compiled-web/managed/data_transaction_pb').DataTransaction


type DataTx = ReturnType<TransactionsType["Data"]["V2"]>

export default async function data(
  inputTx: DataTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new DataTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (notEmpty(tx.authorPublicKey)) {
    callTx.setAuthorPublicKey(tx.authorPublicKey)
  }

  if (notEmpty(tx.data)) {
    callTx.setDataList(tx.data.map(mapDataEntry))
  }

  txGrpc.setDataTransaction(callTx as any)

  return txGrpc

}