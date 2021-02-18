// package: wavesenterprise
// file: validation_proof.proto

import * as jspb from "google-protobuf"

export class ValidationProof extends jspb.Message {
  getValidatorPublicKey(): Uint8Array | string
  getValidatorPublicKey_asU8(): Uint8Array
  getValidatorPublicKey_asB64(): string
  setValidatorPublicKey(value: Uint8Array | string): void

  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ValidationProof.AsObject
  static toObject(includeInstance: boolean, msg: ValidationProof): ValidationProof.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: ValidationProof, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ValidationProof
  static deserializeBinaryFromReader(message: ValidationProof, reader: jspb.BinaryReader): ValidationProof
}

export namespace ValidationProof {
  export type AsObject = {
    validatorPublicKey: Uint8Array | string,
    signature: Uint8Array | string,
  }
}

