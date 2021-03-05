import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const SponsorFeeTransaction = isNode
  ? require('../compiled-node/managed/sponsor_fee_transaction_pb').SponsorFeeTransaction
  : require('../compiled-web/managed/sponsor_fee_transaction_pb').SponsorFeeTransaction


type SponsorFeeTx = ReturnType<TransactionsType["SponsorFee"]["V1"]>

export default async function sponsorFee(
  inputTx: SponsorFeeTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new SponsorFeeTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  callTx.setAssetId(tx.assetId)
  if (tx.isEnabled) {
    callTx.setIsEnabled(tx.isEnabled)
  }

  txGrpc.setSponsorFeeTransaction(callTx as any)

  return txGrpc

}