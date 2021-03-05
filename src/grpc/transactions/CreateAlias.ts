import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const CreateAliasTransaction = isNode
  ? require('../compiled-node/managed/create_alias_transaction_pb').CreateAliasTransaction
  : require('../compiled-web/managed/create_alias_transaction_pb').CreateAliasTransaction


type CreateAliasTx = ReturnType<TransactionsType["CreateAlias"]["V3"]>

export default async function createAlias(
  inputTx: CreateAliasTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new CreateAliasTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  if (tx.alias) {
    // TODO byte processors
    callTx.setAlias(tx.alias)
  }

  txGrpc.setCreateAliasTransaction(callTx as any)

  return txGrpc

}