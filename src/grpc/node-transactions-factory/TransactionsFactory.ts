import { ByteProcessor } from '@wavesenterprise/signature-generator'
import { NODE_TXS_PARSERS } from './NodeTransactions'
import { Transaction } from '../compiled-web/managed/transaction_pb'

type getTxType <T> = { [key in keyof T]: T[key] extends ByteProcessor<infer P> ? Exclude<P, Uint8Array> : getTxType<T[key]> }
export type ParsedIncomingFullGrpcTxType = { [key in keyof typeof IncomingGrpcTxParsers]: ReturnType<typeof IncomingGrpcTxParsers[key]> }
export type GrpcTxKeys = keyof Transaction.AsObject
export type ParsedIncomingGrpcTxType = NonNullable<ParsedIncomingFullGrpcTxType[keyof ParsedIncomingFullGrpcTxType]>

export const IncomingGrpcTxParsers = {
  genesisTransaction: getParser(NODE_TXS_PARSERS.Genesis),
  genesisPermitTransaction: getParser(NODE_TXS_PARSERS.GenesisPermit),
  genesisRegisterNodeTransaction: getParser(NODE_TXS_PARSERS.GenesisRegisterNode),
  registerNodeTransaction: getParser(NODE_TXS_PARSERS.RegisterNode),
  createAliasTransaction: getParser(NODE_TXS_PARSERS.CreateAlias),
  issueTransaction: getParser(NODE_TXS_PARSERS.Issue),
  reissueTransaction: getParser(NODE_TXS_PARSERS.Reissue),
  burnTransaction: getParser(NODE_TXS_PARSERS.Burn),
  leaseTransaction: getParser(NODE_TXS_PARSERS.Lease),
  leaseCancelTransaction: getParser(NODE_TXS_PARSERS.LeaseCancel),
  sponsorFeeTransaction: getParser(NODE_TXS_PARSERS.SponsorFee),
  setAssetScriptTransaction: getParser(NODE_TXS_PARSERS.SetAssetScript),
  dataTransaction: getParser(NODE_TXS_PARSERS.Data),
  transferTransaction: getParser(NODE_TXS_PARSERS.Transfer),
  massTransferTransaction: getParser(NODE_TXS_PARSERS.MassTransfer),
  permitTransaction: getParser(NODE_TXS_PARSERS.Permit),
  createPolicyTransaction: getParser(NODE_TXS_PARSERS.CreatePolicy),
  updatePolicyTransaction: getParser(NODE_TXS_PARSERS.UpdatePolicy),
  policyDataHashTransaction: getParser(NODE_TXS_PARSERS.PolicyDataHash),
  createContractTransaction: getParser(NODE_TXS_PARSERS.CreateContract),
  callContractTransaction: getParser(NODE_TXS_PARSERS.CallContract),
  executedContractTransaction: getParser(NODE_TXS_PARSERS.ExecutedContractTransaction),
  disableContractTransaction: getParser(NODE_TXS_PARSERS.DisableContract),
  updateContractTransaction: getParser(NODE_TXS_PARSERS.UpdateContract),
  setScriptTransaction: getParser(NODE_TXS_PARSERS.SetScript),
  atomicTransaction: parseAtomic,
}

function parseAtomic(tx) : getTxType<typeof NODE_TXS_PARSERS.Atomic> & {version: number} & {grpcType: GrpcTxKeys} {
  const {transactionsList, ...atomicTx } = tx
  const result = parseGRpsTx(NODE_TXS_PARSERS.Atomic, atomicTx)
  result.transactionsList = transactionsList.map(parseIncomingFullTx)
  return result
}

export function parseIncomingFullTx({version, ...tx}) {
  let result
  Object.keys(tx).forEach(key => {
    if (tx[key] && IncomingGrpcTxParsers[key]) {
      result = IncomingGrpcTxParsers[key](tx[key])
      result.version = version
      result.grpcType = key
    }
  })
  if (!result) {
    throw new Error('Unknown tx type')
  }
  return result
}

function getParser<T>(txInterface: T)  {
    return (tx) : getTxType<T> & {version: number} & {grpcType: GrpcTxKeys}  => parseGRpsTx<T>(txInterface, tx)
}

function parseGRpsTx<T>(txInterface: T, tx: object) {
  const result = {}
  if (!tx || typeof tx !== 'object' || typeof txInterface !== 'object') {
    return
  }
  Object.keys(txInterface).forEach(key => {
    result[key] = txInterface[key] instanceof ByteProcessor
      ? (txInterface[key] as any).parseGrpc(tx[key])
      : parseGRpsTx(txInterface[key], tx[key])
  })
  return result as any
}