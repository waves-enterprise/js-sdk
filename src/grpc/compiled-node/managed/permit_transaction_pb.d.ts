// package: wavesenterprise
// file: managed/permit_transaction.proto

import * as jspb from "google-protobuf"
import * as permission_op_pb from "../permission_op_pb"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as atomic_badge_pb from "../atomic_badge_pb"

export class PermitTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getTarget(): Uint8Array | string
  getTarget_asU8(): Uint8Array
  getTarget_asB64(): string
  setTarget(value: Uint8Array | string): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getFee(): number
  setFee(value: number): void

  hasPermissionOp(): boolean
  clearPermissionOp(): void
  getPermissionOp(): permission_op_pb.PermissionOp | undefined
  setPermissionOp(value?: permission_op_pb.PermissionOp): void

  hasAtomicBadge(): boolean
  clearAtomicBadge(): void
  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): void

  clearProofsList(): void
  getProofsList(): (Uint8Array | string)[]
  getProofsList_asU8(): Uint8Array[]
  getProofsList_asB64(): string[]
  setProofsList(value: (Uint8Array | string)[]): void
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermitTransaction.AsObject
  static toObject(includeInstance: boolean, msg: PermitTransaction): PermitTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
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

