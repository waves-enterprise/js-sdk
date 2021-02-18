import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class PkiSignRequest extends jspb.Message {
  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): PkiSignRequest;

  getKeystoreAlias(): string;
  setKeystoreAlias(value: string): PkiSignRequest;

  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): PkiSignRequest;
  hasPassword(): boolean;
  clearPassword(): PkiSignRequest;

  getSigType(): PkiSignatureType;
  setSigType(value: PkiSignatureType): PkiSignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PkiSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PkiSignRequest): PkiSignRequest.AsObject;
  static serializeBinaryToWriter(message: PkiSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PkiSignRequest;
  static deserializeBinaryFromReader(message: PkiSignRequest, reader: jspb.BinaryReader): PkiSignRequest;
}

export namespace PkiSignRequest {
  export type AsObject = {
    inputData: Uint8Array | string,
    keystoreAlias: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sigType: PkiSignatureType,
  }
}

export class PkiSignResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): PkiSignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PkiSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PkiSignResponse): PkiSignResponse.AsObject;
  static serializeBinaryToWriter(message: PkiSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PkiSignResponse;
  static deserializeBinaryFromReader(message: PkiSignResponse, reader: jspb.BinaryReader): PkiSignResponse;
}

export namespace PkiSignResponse {
  export type AsObject = {
    signature: Uint8Array | string,
  }
}

export class PkiVerifyRequest extends jspb.Message {
  getInputData(): Uint8Array | string;
  getInputData_asU8(): Uint8Array;
  getInputData_asB64(): string;
  setInputData(value: Uint8Array | string): PkiVerifyRequest;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): PkiVerifyRequest;

  getSigType(): PkiSignatureType;
  setSigType(value: PkiSignatureType): PkiVerifyRequest;

  getExtendedKeyUsageListList(): Array<string>;
  setExtendedKeyUsageListList(value: Array<string>): PkiVerifyRequest;
  clearExtendedKeyUsageListList(): PkiVerifyRequest;
  addExtendedKeyUsageList(value: string, index?: number): PkiVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PkiVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PkiVerifyRequest): PkiVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: PkiVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PkiVerifyRequest;
  static deserializeBinaryFromReader(message: PkiVerifyRequest, reader: jspb.BinaryReader): PkiVerifyRequest;
}

export namespace PkiVerifyRequest {
  export type AsObject = {
    inputData: Uint8Array | string,
    signature: Uint8Array | string,
    sigType: PkiSignatureType,
    extendedKeyUsageListList: Array<string>,
  }
}

export class PkiVerifyResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): PkiVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PkiVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PkiVerifyResponse): PkiVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: PkiVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PkiVerifyResponse;
  static deserializeBinaryFromReader(message: PkiVerifyResponse, reader: jspb.BinaryReader): PkiVerifyResponse;
}

export namespace PkiVerifyResponse {
  export type AsObject = {
    status: boolean,
  }
}

export enum PkiSignatureType { 
  UNKNOWN = 0,
  CADES_BES = 1,
  CADES_X_LONG_TYPE_1 = 2,
  CADES_T = 3,
}
