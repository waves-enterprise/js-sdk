// package: wavesenterprise
// file: contract/pki.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"

export class PkiSignRequest extends jspb.Message {
  getInputData(): Uint8Array | string
  getInputData_asU8(): Uint8Array
  getInputData_asB64(): string
  setInputData(value: Uint8Array | string): void

  getKeystoreAlias(): string
  setKeystoreAlias(value: string): void

  hasPassword(): boolean
  clearPassword(): void
  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): void

  getSigType(): PkiSignatureTypeMap[keyof PkiSignatureTypeMap]
  setSigType(value: PkiSignatureTypeMap[keyof PkiSignatureTypeMap]): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PkiSignRequest.AsObject
  static toObject(includeInstance: boolean, msg: PkiSignRequest): PkiSignRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: PkiSignRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PkiSignRequest
  static deserializeBinaryFromReader(message: PkiSignRequest, reader: jspb.BinaryReader): PkiSignRequest
}

export namespace PkiSignRequest {
  export type AsObject = {
    inputData: Uint8Array | string,
    keystoreAlias: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sigType: PkiSignatureTypeMap[keyof PkiSignatureTypeMap],
  }
}

export class PkiSignResponse extends jspb.Message {
  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PkiSignResponse.AsObject
  static toObject(includeInstance: boolean, msg: PkiSignResponse): PkiSignResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: PkiSignResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PkiSignResponse
  static deserializeBinaryFromReader(message: PkiSignResponse, reader: jspb.BinaryReader): PkiSignResponse
}

export namespace PkiSignResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class PkiVerifyRequest extends jspb.Message {
  getInputData(): Uint8Array | string
  getInputData_asU8(): Uint8Array
  getInputData_asB64(): string
  setInputData(value: Uint8Array | string): void

  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): void

  getSigType(): PkiSignatureTypeMap[keyof PkiSignatureTypeMap]
  setSigType(value: PkiSignatureTypeMap[keyof PkiSignatureTypeMap]): void

  clearExtendedKeyUsageListList(): void
  getExtendedKeyUsageListList(): string[]
  setExtendedKeyUsageListList(value: string[]): void
  addExtendedKeyUsageList(value: string, index?: number): string

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PkiVerifyRequest.AsObject
  static toObject(includeInstance: boolean, msg: PkiVerifyRequest): PkiVerifyRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: PkiVerifyRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PkiVerifyRequest
  static deserializeBinaryFromReader(message: PkiVerifyRequest, reader: jspb.BinaryReader): PkiVerifyRequest
}

export namespace PkiVerifyRequest {
  export type AsObject = {
    inputData: Uint8Array | string,
    signature: Uint8Array | string,
    sigType: PkiSignatureTypeMap[keyof PkiSignatureTypeMap],
    extendedKeyUsageListList: string[],
  }
}

export class PkiVerifyResponse extends jspb.Message {
  getStatus(): boolean
  setStatus(value: boolean): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PkiVerifyResponse.AsObject
  static toObject(includeInstance: boolean, msg: PkiVerifyResponse): PkiVerifyResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: PkiVerifyResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PkiVerifyResponse
  static deserializeBinaryFromReader(message: PkiVerifyResponse, reader: jspb.BinaryReader): PkiVerifyResponse
}

export namespace PkiVerifyResponse {
  export type AsObject = {
    status: boolean,
  }
}

export interface PkiSignatureTypeMap {
  UNKNOWN: 0
  CADES_BES: 1
  CADES_X_LONG_TYPE_1: 2
  CADES_T: 3
}

export const PkiSignatureType: PkiSignatureTypeMap

