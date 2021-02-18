import * as jspb from 'google-protobuf'

import * as permission_op_pb from '../permission_op_pb'
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as atomic_badge_pb from '../atomic_badge_pb'


export class PermitTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): PermitTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): PermitTransaction

  getTarget(): Uint8Array | string
  getTarget_asU8(): Uint8Array
  getTarget_asB64(): string
  setTarget(value: Uint8Array | string): PermitTransaction

  getTimestamp(): number
  setTimestamp(value: number): PermitTransaction

  getFee(): number
  setFee(value: number): PermitTransaction

  getPermissionOp(): permission_op_pb.PermissionOp | undefined
  setPermissionOp(value?: permission_op_pb.PermissionOp): PermitTransaction
  hasPermissionOp(): boolean
  clearPermissionOp(): PermitTransaction

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): PermitTransaction
  hasAtomicBadge(): boolean
  clearAtomicBadge(): PermitTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): PermitTransaction
  clearProofsList(): PermitTransaction
  addProofs(value: Uint8Array | string, index?: number): PermitTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermitTransaction.AsObject
  static toObject(includeInstance: boolean, msg: PermitTransaction): PermitTransaction.AsObject
  static serializeBinaryToWriter(message: PermitTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PermitTransaction
  static deserializeBinaryFromReader(message: PermitTransaction, reader: jspb.BinaryReader): PermitTransaction
}

export namespace PermitTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    target: Uint8Array | string,
    timestamp: number,
    fee: number,
    permissionOp?: permission_op_pb.PermissionOp.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

