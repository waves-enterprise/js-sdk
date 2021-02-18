// package: wavesenterprise
// file: managed/lease_cancel_transaction.proto

import * as jspb from "google-protobuf"

export class LeaseCancelTransaction extends jspb.Message {
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

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getLeaseId(): Uint8Array | string
  getLeaseId_asU8(): Uint8Array
  getLeaseId_asB64(): string
  setLeaseId(value: Uint8Array | string): void

  clearProofsList(): void
  getProofsList(): (Uint8Array | string)[]
  getProofsList_asU8(): Uint8Array[]
  getProofsList_asB64(): string[]
  setProofsList(value: (Uint8Array | string)[]): void
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): LeaseCancelTransaction.AsObject
  static toObject(includeInstance: boolean, msg: LeaseCancelTransaction): LeaseCancelTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: LeaseCancelTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): LeaseCancelTransaction
  static deserializeBinaryFromReader(message: LeaseCancelTransaction, reader: jspb.BinaryReader): LeaseCancelTransaction
}

export namespace LeaseCancelTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    fee: number,
    timestamp: number,
    leaseId: Uint8Array | string,
    proofsList: (Uint8Array | string)[],
  }
}

