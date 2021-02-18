// package: wavesenterprise
// file: managed/transfer_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as atomic_badge_pb from "../atomic_badge_pb"

export class TransferTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  hasAssetId(): boolean
  clearAssetId(): void
  getAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void

  hasFeeAssetId(): boolean
  clearFeeAssetId(): void
  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getAmount(): number
  setAmount(value: number): void

  getFee(): number
  setFee(value: number): void

  getRecipient(): Uint8Array | string
  getRecipient_asU8(): Uint8Array
  getRecipient_asB64(): string
  setRecipient(value: Uint8Array | string): void

  getAttachment(): Uint8Array | string
  getAttachment_asU8(): Uint8Array
  getAttachment_asB64(): string
  setAttachment(value: Uint8Array | string): void

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
  toObject(includeInstance?: boolean): TransferTransaction.AsObject
  static toObject(includeInstance: boolean, msg: TransferTransaction): TransferTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: TransferTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TransferTransaction
  static deserializeBinaryFromReader(message: TransferTransaction, reader: jspb.BinaryReader): TransferTransaction
}

export namespace TransferTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    assetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    timestamp: number,
    amount: number,
    fee: number,
    recipient: Uint8Array | string,
    attachment: Uint8Array | string,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

