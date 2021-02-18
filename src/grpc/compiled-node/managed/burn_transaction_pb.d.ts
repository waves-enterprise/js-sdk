// package: wavesenterprise
// file: managed/burn_transaction.proto

import * as jspb from "google-protobuf"

export class BurnTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getChainId(): number
  setChainId(value: number): void

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): void

  getAssetId(): Uint8Array | string
  getAssetId_asU8(): Uint8Array
  getAssetId_asB64(): string
  setAssetId(value: Uint8Array | string): void

  getAmount(): number
  setAmount(value: number): void

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

  clearProofsList(): void
  getProofsList(): (Uint8Array | string)[]
  getProofsList_asU8(): Uint8Array[]
  getProofsList_asB64(): string[]
  setProofsList(value: (Uint8Array | string)[]): void
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): BurnTransaction.AsObject
  static toObject(includeInstance: boolean, msg: BurnTransaction): BurnTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: BurnTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): BurnTransaction
  static deserializeBinaryFromReader(message: BurnTransaction, reader: jspb.BinaryReader): BurnTransaction
}

export namespace BurnTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    assetId: Uint8Array | string,
    amount: number,
    fee: number,
    timestamp: number,
    proofsList: (Uint8Array | string)[],
  }
}

