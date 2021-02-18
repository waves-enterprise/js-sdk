import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'


export class SetAssetScriptTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): SetAssetScriptTransaction

  getChainId(): number
  setChainId(value: number): SetAssetScriptTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): SetAssetScriptTransaction

  getAssetId(): Uint8Array | string
  getAssetId_asU8(): Uint8Array
  getAssetId_asB64(): string
  setAssetId(value: Uint8Array | string): SetAssetScriptTransaction

  getScript(): google_protobuf_wrappers_pb.BytesValue | undefined
  setScript(value?: google_protobuf_wrappers_pb.BytesValue): SetAssetScriptTransaction
  hasScript(): boolean
  clearScript(): SetAssetScriptTransaction

  getFee(): number
  setFee(value: number): SetAssetScriptTransaction

  getTimestamp(): number
  setTimestamp(value: number): SetAssetScriptTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): SetAssetScriptTransaction
  clearProofsList(): SetAssetScriptTransaction
  addProofs(value: Uint8Array | string, index?: number): SetAssetScriptTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SetAssetScriptTransaction.AsObject
  static toObject(includeInstance: boolean, msg: SetAssetScriptTransaction): SetAssetScriptTransaction.AsObject
  static serializeBinaryToWriter(message: SetAssetScriptTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): SetAssetScriptTransaction
  static deserializeBinaryFromReader(message: SetAssetScriptTransaction, reader: jspb.BinaryReader): SetAssetScriptTransaction
}

export namespace SetAssetScriptTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    assetId: Uint8Array | string,
    script?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    fee: number,
    timestamp: number,
    proofsList: (Uint8Array | string)[],
  }
}

