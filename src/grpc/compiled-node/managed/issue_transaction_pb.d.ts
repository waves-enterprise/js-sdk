// package: wavesenterprise
// file: managed/issue_transaction.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"

export class IssueTransaction extends jspb.Message {
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

  getName(): Uint8Array | string
  getName_asU8(): Uint8Array
  getName_asB64(): string
  setName(value: Uint8Array | string): void

  getDescription(): Uint8Array | string
  getDescription_asU8(): Uint8Array
  getDescription_asB64(): string
  setDescription(value: Uint8Array | string): void

  getQuantity(): number
  setQuantity(value: number): void

  getDecimals(): number
  setDecimals(value: number): void

  getReissuable(): boolean
  setReissuable(value: boolean): void

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

  hasScript(): boolean
  clearScript(): void
  getScript(): google_protobuf_wrappers_pb.BytesValue | undefined
  setScript(value?: google_protobuf_wrappers_pb.BytesValue): void

  clearProofsList(): void
  getProofsList(): (Uint8Array | string)[]
  getProofsList_asU8(): Uint8Array[]
  getProofsList_asB64(): string[]
  setProofsList(value: (Uint8Array | string)[]): void
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): IssueTransaction.AsObject
  static toObject(includeInstance: boolean, msg: IssueTransaction): IssueTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: IssueTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): IssueTransaction
  static deserializeBinaryFromReader(message: IssueTransaction, reader: jspb.BinaryReader): IssueTransaction
}

export namespace IssueTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    name: Uint8Array | string,
    description: Uint8Array | string,
    quantity: number,
    decimals: number,
    reissuable: boolean,
    fee: number,
    timestamp: number,
    script?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: (Uint8Array | string)[],
  }
}

