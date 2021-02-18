import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as atomic_badge_pb from '../atomic_badge_pb'


export class CreatePolicyTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): CreatePolicyTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): CreatePolicyTransaction

  getPolicyName(): string
  setPolicyName(value: string): CreatePolicyTransaction

  getDescription(): string
  setDescription(value: string): CreatePolicyTransaction

  getRecipientsList(): (Uint8Array | string)[]
  setRecipientsList(value: (Uint8Array | string)[]): CreatePolicyTransaction
  clearRecipientsList(): CreatePolicyTransaction
  addRecipients(value: Uint8Array | string, index?: number): CreatePolicyTransaction

  getOwnersList(): (Uint8Array | string)[]
  setOwnersList(value: (Uint8Array | string)[]): CreatePolicyTransaction
  clearOwnersList(): CreatePolicyTransaction
  addOwners(value: Uint8Array | string, index?: number): CreatePolicyTransaction

  getTimestamp(): number
  setTimestamp(value: number): CreatePolicyTransaction

  getFee(): number
  setFee(value: number): CreatePolicyTransaction

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): CreatePolicyTransaction
  hasFeeAssetId(): boolean
  clearFeeAssetId(): CreatePolicyTransaction

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): CreatePolicyTransaction
  hasAtomicBadge(): boolean
  clearAtomicBadge(): CreatePolicyTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): CreatePolicyTransaction
  clearProofsList(): CreatePolicyTransaction
  addProofs(value: Uint8Array | string, index?: number): CreatePolicyTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CreatePolicyTransaction.AsObject
  static toObject(includeInstance: boolean, msg: CreatePolicyTransaction): CreatePolicyTransaction.AsObject
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

