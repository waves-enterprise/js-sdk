// package: wavesenterprise
// file: contract/crypto.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as constants_pb from "../constants_pb"

export class EncryptDataRequest extends jspb.Message {
  getSender(): string
  setSender(value: string): void

  hasPassword(): boolean
  clearPassword(): void
  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): void

  getEncryptionData(): Uint8Array | string
  getEncryptionData_asU8(): Uint8Array
  getEncryptionData_asB64(): string
  setEncryptionData(value: Uint8Array | string): void

  clearRecipientsPublicKeysList(): void
  getRecipientsPublicKeysList(): string[]
  setRecipientsPublicKeysList(value: string[]): void
  addRecipientsPublicKeys(value: string, index?: number): string

  getCryptoAlgo(): constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap]
  setCryptoAlgo(value: constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap]): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EncryptDataRequest.AsObject
  static toObject(includeInstance: boolean, msg: EncryptDataRequest): EncryptDataRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: EncryptDataRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): EncryptDataRequest
  static deserializeBinaryFromReader(message: EncryptDataRequest, reader: jspb.BinaryReader): EncryptDataRequest
}

export namespace EncryptDataRequest {
  export type AsObject = {
    sender: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    encryptionData: Uint8Array | string,
    recipientsPublicKeysList: string[],
    cryptoAlgo: constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap],
  }
}

export class EncryptedSingleResponse extends jspb.Message {
  getEncryptedData(): Uint8Array | string
  getEncryptedData_asU8(): Uint8Array
  getEncryptedData_asB64(): string
  setEncryptedData(value: Uint8Array | string): void

  getPublicKey(): string
  setPublicKey(value: string): void

  getWrappedKey(): string
  setWrappedKey(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EncryptedSingleResponse.AsObject
  static toObject(includeInstance: boolean, msg: EncryptedSingleResponse): EncryptedSingleResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: EncryptedSingleResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): EncryptedSingleResponse
  static deserializeBinaryFromReader(message: EncryptedSingleResponse, reader: jspb.BinaryReader): EncryptedSingleResponse
}

export namespace EncryptedSingleResponse {
  export type AsObject = {
    encryptedData: Uint8Array | string,
    publicKey: string,
    wrappedKey: string,
  }
}

export class EncryptSeparateResponse extends jspb.Message {
  clearResponsesList(): void
  getResponsesList(): EncryptedSingleResponse[]
  setResponsesList(value: EncryptedSingleResponse[]): void
  addResponses(value?: EncryptedSingleResponse, index?: number): EncryptedSingleResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EncryptSeparateResponse.AsObject
  static toObject(includeInstance: boolean, msg: EncryptSeparateResponse): EncryptSeparateResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: EncryptSeparateResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): EncryptSeparateResponse
  static deserializeBinaryFromReader(message: EncryptSeparateResponse, reader: jspb.BinaryReader): EncryptSeparateResponse
}

export namespace EncryptSeparateResponse {
  export type AsObject = {
    responsesList: EncryptedSingleResponse.AsObject[],
  }
}

export class EncryptedForManyResponse extends jspb.Message {
  getEncryptedData(): Uint8Array | string
  getEncryptedData_asU8(): Uint8Array
  getEncryptedData_asB64(): string
  setEncryptedData(value: Uint8Array | string): void

  getRecipientToWrappedStructureMap(): jspb.Map<string, string>
  clearRecipientToWrappedStructureMap(): void
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EncryptedForManyResponse.AsObject
  static toObject(includeInstance: boolean, msg: EncryptedForManyResponse): EncryptedForManyResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: EncryptedForManyResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): EncryptedForManyResponse
  static deserializeBinaryFromReader(message: EncryptedForManyResponse, reader: jspb.BinaryReader): EncryptedForManyResponse
}

export namespace EncryptedForManyResponse {
  export type AsObject = {
    encryptedData: Uint8Array | string,
    recipientToWrappedStructureMap: [string, string][],
  }
}

export class DecryptDataRequest extends jspb.Message {
  getRecipient(): string
  setRecipient(value: string): void

  hasPassword(): boolean
  clearPassword(): void
  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): void

  getEncryptedData(): Uint8Array | string
  getEncryptedData_asU8(): Uint8Array
  getEncryptedData_asB64(): string
  setEncryptedData(value: Uint8Array | string): void

  getWrappedKey(): string
  setWrappedKey(value: string): void

  getSenderPublicKey(): string
  setSenderPublicKey(value: string): void

  getCryptoAlgo(): constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap]
  setCryptoAlgo(value: constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap]): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DecryptDataRequest.AsObject
  static toObject(includeInstance: boolean, msg: DecryptDataRequest): DecryptDataRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: DecryptDataRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DecryptDataRequest
  static deserializeBinaryFromReader(message: DecryptDataRequest, reader: jspb.BinaryReader): DecryptDataRequest
}

export namespace DecryptDataRequest {
  export type AsObject = {
    recipient: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    encryptedData: Uint8Array | string,
    wrappedKey: string,
    senderPublicKey: string,
    cryptoAlgo: constants_pb.CryptoAlgoMap[keyof constants_pb.CryptoAlgoMap],
  }
}

export class DecryptDataResponse extends jspb.Message {
  getDecryptedData(): Uint8Array | string
  getDecryptedData_asU8(): Uint8Array
  getDecryptedData_asB64(): string
  setDecryptedData(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DecryptDataResponse.AsObject
  static toObject(includeInstance: boolean, msg: DecryptDataResponse): DecryptDataResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: DecryptDataResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): DecryptDataResponse
  static deserializeBinaryFromReader(message: DecryptDataResponse, reader: jspb.BinaryReader): DecryptDataResponse
}

export namespace DecryptDataResponse {
  export type AsObject = {
    decryptedData: Uint8Array | string,
  }
}

