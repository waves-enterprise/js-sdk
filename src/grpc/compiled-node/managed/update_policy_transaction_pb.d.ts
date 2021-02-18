// package: wavesenterprise
// file: managed/update_policy_transaction.proto

import * as jspb from "google-protobuf"
import * as op_type_pb from "../op_type_pb"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as atomic_badge_pb from "../atomic_badge_pb"

export class UpdatePolicyTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getPolicyId(): Uint8Array | string
  getPolicyId_asU8(): Uint8Array
  getPolicyId_asB64(): string
  setPolicyId(value: Uint8Array | string): void

  clearRecipientsList(): void
  getRecipientsList(): (Uint8Array | string)[]
  getRecipientsList_asU8(): Uint8Array[]
  getRecipientsList_asB64(): string[]
  setRecipientsList(value: (Uint8Array | string)[]): void
  addRecipients(value: Uint8Array | string, index?: number): Uint8Array | string

  clearOwnersList(): void
  getOwnersList(): (Uint8Array | string)[]
  getOwnersList_asU8(): Uint8Array[]
  getOwnersList_asB64(): string[]
  setOwnersList(value: (Uint8Array | string)[]): void
  addOwners(value: Uint8Array | string, index?: number): Uint8Array | string

  getOpType(): op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap]
  setOpType(value: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap]): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getFee(): number
  setFee(value: number): void

  hasFeeAssetId(): boolean
  clearFeeAssetId(): void
  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void

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
  toObject(includeInstance?: boolean): UpdatePolicyTransaction.AsObject
  static toObject(includeInstance: boolean, msg: UpdatePolicyTransaction): UpdatePolicyTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: UpdatePolicyTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyTransaction
  static deserializeBinaryFromReader(message: UpdatePolicyTransaction, reader: jspb.BinaryReader): UpdatePolicyTransaction
}

export namespace UpdatePolicyTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    policyId: Uint8Array | string,
    recipientsList: (Uint8Array | string)[],
    ownersList: (Uint8Array | string)[],
    opType: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap],
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

