import * as jspb from 'google-protobuf'

import * as role_pb from '../role_pb'


export class GenesisPermitTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): GenesisPermitTransaction

  getTarget(): Uint8Array | string
  getTarget_asU8(): Uint8Array
  getTarget_asB64(): string
  setTarget(value: Uint8Array | string): GenesisPermitTransaction

  getRole(): role_pb.Role | undefined
  setRole(value?: role_pb.Role): GenesisPermitTransaction
  hasRole(): boolean
  clearRole(): GenesisPermitTransaction

  getFee(): number
  setFee(value: number): GenesisPermitTransaction

  getTimestamp(): number
  setTimestamp(value: number): GenesisPermitTransaction

  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): GenesisPermitTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GenesisPermitTransaction.AsObject
  static toObject(includeInstance: boolean, msg: GenesisPermitTransaction): GenesisPermitTransaction.AsObject
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

