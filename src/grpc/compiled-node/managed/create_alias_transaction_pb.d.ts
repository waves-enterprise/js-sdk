// package: wavesenterprise
// file: managed/create_alias_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"

export class CreateAliasTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getAlias(): Uint8Array | string
  getAlias_asU8(): Uint8Array
  getAlias_asB64(): string
  setAlias(value: Uint8Array | string): void

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

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
  toObject(includeInstance?: boolean): CreateAliasTransaction.AsObject
  static toObject(includeInstance: boolean, msg: CreateAliasTransaction): CreateAliasTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: CreateAliasTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CreateAliasTransaction
  static deserializeBinaryFromReader(message: CreateAliasTransaction, reader: jspb.BinaryReader): CreateAliasTransaction
}

export namespace CreateAliasTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    alias: Uint8Array | string,
    fee: number,
    timestamp: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

