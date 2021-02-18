// package: wavesenterprise
// file: contract/transaction.proto

import * as jspb from "google-protobuf"
import * as managed_transaction_pb from "../managed/transaction_pb"

export class TransactionExistsRequest extends jspb.Message {
  getTxId(): string
  setTxId(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TransactionExistsRequest.AsObject
  static toObject(includeInstance: boolean, msg: TransactionExistsRequest): TransactionExistsRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: TransactionExistsRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TransactionExistsRequest
  static deserializeBinaryFromReader(message: TransactionExistsRequest, reader: jspb.BinaryReader): TransactionExistsRequest
}

export namespace TransactionExistsRequest {
  export type AsObject = {
    txId: string,
  }
}

export class TransactionExistsResponse extends jspb.Message {
  getExists(): boolean
  setExists(value: boolean): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TransactionExistsResponse.AsObject
  static toObject(includeInstance: boolean, msg: TransactionExistsResponse): TransactionExistsResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: TransactionExistsResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TransactionExistsResponse
  static deserializeBinaryFromReader(message: TransactionExistsResponse, reader: jspb.BinaryReader): TransactionExistsResponse
}

export namespace TransactionExistsResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export class TransactionInfoRequest extends jspb.Message {
  getTxId(): string
  setTxId(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TransactionInfoRequest.AsObject
  static toObject(includeInstance: boolean, msg: TransactionInfoRequest): TransactionInfoRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: TransactionInfoRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TransactionInfoRequest
  static deserializeBinaryFromReader(message: TransactionInfoRequest, reader: jspb.BinaryReader): TransactionInfoRequest
}

export namespace TransactionInfoRequest {
  export type AsObject = {
    txId: string,
  }
}

export class TransactionInfoResponse extends jspb.Message {
  getHeight(): number
  setHeight(value: number): void

  hasTransaction(): boolean
  clearTransaction(): void
  getTransaction(): managed_transaction_pb.Transaction | undefined
  setTransaction(value?: managed_transaction_pb.Transaction): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TransactionInfoResponse.AsObject
  static toObject(includeInstance: boolean, msg: TransactionInfoResponse): TransactionInfoResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: TransactionInfoResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): TransactionInfoResponse
  static deserializeBinaryFromReader(message: TransactionInfoResponse, reader: jspb.BinaryReader): TransactionInfoResponse
}

export namespace TransactionInfoResponse {
  export type AsObject = {
    height: number,
    transaction?: managed_transaction_pb.Transaction.AsObject,
  }
}

