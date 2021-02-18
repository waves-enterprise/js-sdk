import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'


export class CreateAliasTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): CreateAliasTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): CreateAliasTransaction

  getAlias(): Uint8Array | string
  getAlias_asU8(): Uint8Array
  getAlias_asB64(): string
  setAlias(value: Uint8Array | string): CreateAliasTransaction

  getFee(): number
  setFee(value: number): CreateAliasTransaction

  getTimestamp(): number
  setTimestamp(value: number): CreateAliasTransaction

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): CreateAliasTransaction
  hasFeeAssetId(): boolean
  clearFeeAssetId(): CreateAliasTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): CreateAliasTransaction
  clearProofsList(): CreateAliasTransaction
  addProofs(value: Uint8Array | string, index?: number): CreateAliasTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CreateAliasTransaction.AsObject
  static toObject(includeInstance: boolean, msg: CreateAliasTransaction): CreateAliasTransaction.AsObject
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

