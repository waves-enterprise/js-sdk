import { IKeyPair } from '../../../interfaces'
import { TransactionsType } from '../../api/transactions/transactionsV2'
import isNode from '../../utils/isNode'
import { initGrpcTx } from '../utils'

const PermitTransaction = isNode
  ? require('../compiled-node/managed/permit_transaction_pb').PermitTransaction
  : require('../compiled-web/managed/permit_transaction_pb').PermitTransaction

const PermissionOp = isNode
  ? require('../compiled-node/permission_op_pb').PermissionOp
  : require('../compiled-web/permission_op_pb').PermissionOp

const Role = isNode
  ? require('../compiled-node/role_pb').Role
  : require('../compiled-web/role_pb').Role

type PermitTx = ReturnType<TransactionsType["Permit"]["V2"]>

export default async function permit(
  inputTx: PermitTx,
  keyPair: IKeyPair,
  isAtomic = false
) : Promise<any> {
  const tx = await inputTx.getGrpcTx(keyPair)
  const callTx = new PermitTransaction()

  const txGrpc = initGrpcTx(callTx, tx, isAtomic)

  const permissionOp = new PermissionOp()

  permissionOp.setTimestamp(tx.timestamp)
  if (tx.dueTimestamp) {
    permissionOp.setDueTimestamp(tx.dueTimestamp)
  }
  if (tx.opType) {
    permissionOp.setOpType(tx.opType)
  }
  if (tx.role) {
    const role = new Role()
    role.setId(tx.role)
    permissionOp.setRole(role)
  }

  callTx.setPermissionOp(permissionOp)
  callTx.setTarget(tx.target)

  txGrpc.setPermitTransaction(callTx as any)

  return txGrpc

}