// package: wavesenterprise
// file: managed/create_policy_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as atomic_badge_pb from "../atomic_badge_pb"

export class CreatePolicyTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getPolicyName(): string
  setPolicyName(value: string): void

  getDescription(): string
  setDescription(value: string): void

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
  toObject(includeInstance?: boolean): CreatePolicyTransaction.AsObject
  static toObject(includeInstance: boolean, msg: CreatePolicyTransaction): CreatePolicyTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: CreatePolicyTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CreatePolicyTransaction
  static deserializeBinaryFromReader(message: CreatePolicyTransaction, reader: jspb.BinaryReader): CreatePolicyTransaction
}

export namespace CreatePolicyTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    policyName: string,
    description: string,
    recipientsList: (Uint8Array | string)[],
    ownersList: (Uint8Array | string)[],
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

