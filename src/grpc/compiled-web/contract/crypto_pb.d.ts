import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as constants_pb from '../constants_pb';


export class EncryptDataRequest extends jspb.Message {
  getSender(): string;
  setSender(value: string): EncryptDataRequest;

  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): EncryptDataRequest;
  hasPassword(): boolean;
  clearPassword(): EncryptDataRequest;

  getEncryptionData(): Uint8Array | string;
  getEncryptionData_asU8(): Uint8Array;
  getEncryptionData_asB64(): string;
  setEncryptionData(value: Uint8Array | string): EncryptDataRequest;

  getRecipientsPublicKeysList(): Array<string>;
  setRecipientsPublicKeysList(value: Array<string>): EncryptDataRequest;
  clearRecipientsPublicKeysList(): EncryptDataRequest;
  addRecipientsPublicKeys(value: string, index?: number): EncryptDataRequest;

  getCryptoAlgo(): constants_pb.CryptoAlgo;
  setCryptoAlgo(value: constants_pb.CryptoAlgo): EncryptDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptDataRequest): EncryptDataRequest.AsObject;
  static serializeBinaryToWriter(message: EncryptDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptDataRequest;
  static deserializeBinaryFromReader(message: EncryptDataRequest, reader: jspb.BinaryReader): EncryptDataRequest;
}

export namespace EncryptDataRequest {
  export type AsObject = {
    sender: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    encryptionData: Uint8Array | string,
    recipientsPublicKeysList: Array<string>,
    cryptoAlgo: constants_pb.CryptoAlgo,
  }
}

export class EncryptedSingleResponse extends jspb.Message {
  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): EncryptedSingleResponse;

  getPublicKey(): string;
  setPublicKey(value: string): EncryptedSingleResponse;

  getWrappedKey(): string;
  setWrappedKey(value: string): EncryptedSingleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedSingleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedSingleResponse): EncryptedSingleResponse.AsObject;
  static serializeBinaryToWriter(message: EncryptedSingleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedSingleResponse;
  static deserializeBinaryFromReader(message: EncryptedSingleResponse, reader: jspb.BinaryReader): EncryptedSingleResponse;
}

export namespace EncryptedSingleResponse {
  export type AsObject = {
    encryptedData: Uint8Array | string,
    publicKey: string,
    wrappedKey: string,
  }
}

export class EncryptSeparateResponse extends jspb.Message {
  getResponsesList(): Array<EncryptedSingleResponse>;
  setResponsesList(value: Array<EncryptedSingleResponse>): EncryptSeparateResponse;
  clearResponsesList(): EncryptSeparateResponse;
  addResponses(value?: EncryptedSingleResponse, index?: number): EncryptedSingleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptSeparateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptSeparateResponse): EncryptSeparateResponse.AsObject;
  static serializeBinaryToWriter(message: EncryptSeparateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptSeparateResponse;
  static deserializeBinaryFromReader(message: EncryptSeparateResponse, reader: jspb.BinaryReader): EncryptSeparateResponse;
}

export namespace EncryptSeparateResponse {
  export type AsObject = {
    responsesList: Array<EncryptedSingleResponse.AsObject>,
  }
}

export class EncryptedForManyResponse extends jspb.Message {
  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): EncryptedForManyResponse;

  getRecipientToWrappedStructureMap(): jspb.Map<string, string>;
  clearRecipientToWrappedStructureMap(): EncryptedForManyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedForManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedForManyResponse): EncryptedForManyResponse.AsObject;
  static serializeBinaryToWriter(message: EncryptedForManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedForManyResponse;
  static deserializeBinaryFromReader(message: EncryptedForManyResponse, reader: jspb.BinaryReader): EncryptedForManyResponse;
}

export namespace EncryptedForManyResponse {
  export type AsObject = {
    encryptedData: Uint8Array | string,
    recipientToWrappedStructureMap: Array<[string, string]>,
  }
}

export class DecryptDataRequest extends jspb.Message {
  getRecipient(): string;
  setRecipient(value: string): DecryptDataRequest;

  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): DecryptDataRequest;
  hasPassword(): boolean;
  clearPassword(): DecryptDataRequest;

  getEncryptedData(): Uint8Array | string;
  getEncryptedData_asU8(): Uint8Array;
  getEncryptedData_asB64(): string;
  setEncryptedData(value: Uint8Array | string): DecryptDataRequest;

  getWrappedKey(): string;
  setWrappedKey(value: string): DecryptDataRequest;

  getSenderPublicKey(): string;
  setSenderPublicKey(value: string): DecryptDataRequest;

  getCryptoAlgo(): constants_pb.CryptoAlgo;
  setCryptoAlgo(value: constants_pb.CryptoAlgo): DecryptDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptDataRequest): DecryptDataRequest.AsObject;
  static serializeBinaryToWriter(message: DecryptDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptDataRequest;
  static deserializeBinaryFromReader(message: DecryptDataRequest, reader: jspb.BinaryReader): DecryptDataRequest;
}

export namespace DecryptDataRequest {
  export type AsObject = {
    recipient: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    encryptedData: Uint8Array | string,
    wrappedKey: string,
    senderPublicKey: string,
    cryptoAlgo: constants_pb.CryptoAlgo,
  }
}

export class DecryptDataResponse extends jspb.Message {
  getDecryptedData(): Uint8Array | string;
  getDecryptedData_asU8(): Uint8Array;
  getDecryptedData_asB64(): string;
  setDecryptedData(value: Uint8Array | string): DecryptDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptDataResponse): DecryptDataResponse.AsObject;
  static serializeBinaryToWriter(message: DecryptDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptDataResponse;
  static deserializeBinaryFromReader(message: DecryptDataResponse, reader: jspb.BinaryReader): DecryptDataResponse;
}

export namespace DecryptDataResponse {
  export type AsObject = {
    decryptedData: Uint8Array | string,
  }
}

