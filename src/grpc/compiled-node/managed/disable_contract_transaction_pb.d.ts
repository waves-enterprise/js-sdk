// package: wavesenterprise
// file: managed/disable_contract_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as atomic_badge_pb from "../atomic_badge_pb"

export class DisableContractTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getContractId(): Uint8Array | string
  getContractId_asU8(): Uint8Array
  getContractId_asB64(): string
  setContractId(value: Uint8Array | string): void

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

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
  toObject(includeInstance?: boolean): DisableContractTransaction.AsObject
  static toObject(includeInstance: boolean, msg: DisableContractTransaction): DisableContractTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
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

