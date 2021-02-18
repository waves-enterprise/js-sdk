// package: wavesenterprise
// file: genesis/genesis_permit_transaction.proto

import * as jspb from "google-protobuf"
import * as role_pb from "../role_pb"

export class GenesisPermitTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): void

  getTarget(): Uint8Array | string
  getTarget_asU8(): Uint8Array
  getTarget_asB64(): string
  setTarget(value: Uint8Array | string): void

  hasRole(): boolean
  clearRole(): void
  getRole(): role_pb.Role | undefined
  setRole(value?: role_pb.Role): void

  getFee(): number
  setFee(value: number): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GenesisPermitTransaction.AsObject
  static toObject(includeInstance: boolean, msg: GenesisPermitTransaction): GenesisPermitTransaction.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: GenesisPermitTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GenesisPermitTransaction
  static deserializeBinaryFromReader(message: GenesisPermitTransaction, reader: jspb.BinaryReader): GenesisPermitTransaction
}

export namespace GenesisPermitTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    target: Uint8Array | string,
    role?: role_pb.Role.AsObject,
    fee: number,
    timestamp: number,
    signature: Uint8Array | string,
  }
}

