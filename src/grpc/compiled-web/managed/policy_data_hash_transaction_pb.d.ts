import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as atomic_badge_pb from '../atomic_badge_pb'


export class PolicyDataHashTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): PolicyDataHashTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): PolicyDataHashTransaction

  getDataHash(): Uint8Array | string
  getDataHash_asU8(): Uint8Array
  getDataHash_asB64(): string
  setDataHash(value: Uint8Array | string): PolicyDataHashTransaction

  getPolicyId(): Uint8Array | string
  getPolicyId_asU8(): Uint8Array
  getPolicyId_asB64(): string
  setPolicyId(value: Uint8Array | string): PolicyDataHashTransaction

  getTimestamp(): number
  setTimestamp(value: number): PolicyDataHashTransaction

  getFee(): number
  setFee(value: number): PolicyDataHashTransaction

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): PolicyDataHashTransaction
  hasFeeAssetId(): boolean
  clearFeeAssetId(): PolicyDataHashTransaction

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): PolicyDataHashTransaction
  hasAtomicBadge(): boolean
  clearAtomicBadge(): PolicyDataHashTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): PolicyDataHashTransaction
  clearProofsList(): PolicyDataHashTransaction
  addProofs(value: Uint8Array | string, index?: number): PolicyDataHashTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PolicyDataHashTransaction.AsObject
  static toObject(includeInstance: boolean, msg: PolicyDataHashTransaction): PolicyDataHashTransaction.AsObject
  static serializeBinaryToWriter(message: PolicyDataHashTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PolicyDataHashTransaction
  static deserializeBinaryFromReader(message: PolicyDataHashTransaction, reader: jspb.BinaryReader): PolicyDataHashTransaction
}

export namespace PolicyDataHashTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    dataHash: Uint8Array | string,
    policyId: Uint8Array | string,
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

