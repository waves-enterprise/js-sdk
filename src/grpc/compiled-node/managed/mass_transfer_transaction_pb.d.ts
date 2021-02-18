// package: wavesenterprise
// file: managed/mass_transfer_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as transfer_pb from "../transfer_pb"

export class MassTransferTransaction extends jspb.Message {
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

  clearTransfersList(): void
  getTransfersList(): transfer_pb.Transfer[]
  setTransfersList(value: transfer_pb.Transfer[]): void
  addTransfers(value?: transfer_pb.Transfer, index?: number): transfer_pb.Transfer

  getTimestamp(): number
  setTimestamp(value: number): void

  getFee(): number
  setFee(value: number): void

  getAttachment(): Uint8Array | string
  getAttachment_asU8(): Uint8Array
  getAttachment_asB64(): string
  setAttachment(value: Uint8Array | string): void

  hasFeeAssetId(): boolean
  clearFeeAssetId(): void
  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void

  clearProofsList(): void
  getProofsList(): (Uint8Array | string)[]
  getProofsList_asU8(): Uint8Array[]
  getProofsList_asB64(): string[]
  setProofsList(value: (Uint8Array | string)[]): void
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MassTransferTransaction.AsObject
  static toObject(includeInstance: boolean, msg: MassTransferTransaction): MassTransferTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: MassTransferTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): MassTransferTransaction
  static deserializeBinaryFromReader(message: MassTransferTransaction, reader: jspb.BinaryReader): MassTransferTransaction
}

export namespace MassTransferTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    assetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    transfersList: transfer_pb.Transfer.AsObject[],
    timestamp: number,
    fee: number,
    attachment: Uint8Array | string,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

