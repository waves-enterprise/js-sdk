import { WeSdk } from '../index'
import isNode from '../utils/isNode'
import { Transaction as TransactionWeb } from './compiled-web/managed/transaction_pb'
import { IKeyPair } from '../../interfaces'
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

export const TX_PROTO_MAPPING: TX_PROTO_MAPPING_TYPE = {
  CallContract: callContract,
  CreateContract: createContract,
  Transfer: transfer,
  CreatePolicy: createPolicy,
  Atomic: atomic,
  Permit: permit
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
