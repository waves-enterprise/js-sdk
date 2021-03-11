import { WeSdk } from '../index'
import { IKeyPair } from '../interfaces'
import isNode from '../utils/isNode'
import { Transaction as TransactionWeb } from './compiled-web/managed/transaction_pb'
import { TRANSACTIONS, TransactionType } from '@wavesenterprise/transactions-factory'

type TX_PROTO_MAPPING_TYPE = {
  [key in keyof typeof TRANSACTIONS]?:
    (inputTx: TransactionType<any>, keyPair: IKeyPair, isAtomic?: boolean)
      => Promise<TransactionWeb>
}

import callContract from './transactions/CallContract'
import createContract from './transactions/CreateContract'
import transfer from './transactions/Transfer'
import createPolicy from './transactions/CreatePolicy'
import atomic from './transactions/Atomic'
import permit from './transactions/Permit'
import data from './transactions/Data'
import registerNode from './transactions/RegisterNode'
import createAlias from './transactions/CreateAlias'
import issue from './transactions/Issue'
import reissue from './transactions/Reissue'
import burn from './transactions/Burn'
import lease from './transactions/Lease'
import leaseCancel from './transactions/LeaseCancel'
import sponsorFee from './transactions/SponsorFee'
import setAssetScript from './transactions/SetAssetScript'
import setScript from './transactions/SetScript'
import massTransfer from './transactions/MassTransfer'
import updatePolicy from './transactions/UpdatePolicy'
import policyDataHash from './transactions/PolicyDataHash'
import disableContract from './transactions/DisableContract'
import updateContract from './transactions/UpdateContract'

export const TX_PROTO_MAPPING: TX_PROTO_MAPPING_TYPE = {
  CallContract: callContract,
  CreateContract: createContract,
  Transfer: transfer,
  CreatePolicy: createPolicy,
  Atomic: atomic,
  Permit: permit,
  Data: data,
  RegisterNode: registerNode,
  CreateAlias: createAlias,
  Issue: issue,
  Reissue: reissue,
  Burn: burn,
  Lease: lease,
  LeaseCancel: leaseCancel,
  SponsorFee: sponsorFee,
  SetAssetScript: setAssetScript,
  SetScript: setScript,
  MassTransfer: massTransfer,
  UpdatePolicy: updatePolicy,
  PolicyDataHash: policyDataHash,
  DisableContract: disableContract,
  UpdateContract: updateContract
}

export function sendGrpcTx(api: WeSdk, tx: TransactionWeb) {
  return new Promise(async (resolve, reject) => {
    const callback = (err, res) => {
      if (err) {
        reject((err as any).metadata ? (err as any).metadata : err)
      }
      resolve(res)
    }
    type ArgsType = [typeof tx, null, typeof callback]
    const args: ArgsType = isNode
      ? [tx, callback] as unknown as ArgsType
      : [tx, null, callback]

    api.grpcService.broadcast(...args)
  })
}
