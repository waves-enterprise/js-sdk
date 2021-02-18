import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as atomic_badge_pb from '../atomic_badge_pb'


export class DisableContractTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): DisableContractTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): DisableContractTransaction

  getContractId(): Uint8Array | string
  getContractId_asU8(): Uint8Array
  getContractId_asB64(): string
  setContractId(value: Uint8Array | string): DisableContractTransaction

  getFee(): number
  setFee(value: number): DisableContractTransaction

  getTimestamp(): number
  setTimestamp(value: number): DisableContractTransaction

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): DisableContractTransaction
  hasFeeAssetId(): boolean
  clearFeeAssetId(): DisableContractTransaction

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): DisableContractTransaction
  hasAtomicBadge(): boolean
  clearAtomicBadge(): DisableContractTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): DisableContractTransaction
  clearProofsList(): DisableContractTransaction
  addProofs(value: Uint8Array | string, index?: number): DisableContractTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DisableContractTransaction.AsObject
  static toObject(includeInstance: boolean, msg: DisableContractTransaction): DisableContractTransaction.AsObject
  static serializeBinaryToWriter(message: DisableContractTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DisableContractTransaction
  static deserializeBinaryFromReader(message: DisableContractTransaction, reader: jspb.BinaryReader): DisableContractTransaction
}

export namespace DisableContractTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    contractId: Uint8Array | string,
    fee: number,
    timestamp: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

