// package: wavesenterprise
// file: contract/util.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb"

export class NodeTimeResponse extends jspb.Message {
  getSystem(): number
  setSystem(value: number): void

  getNtp(): number
  setNtp(value: number): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): NodeTimeResponse.AsObject
  static toObject(includeInstance: boolean, msg: NodeTimeResponse): NodeTimeResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: NodeTimeResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): NodeTimeResponse
  static deserializeBinaryFromReader(message: NodeTimeResponse, reader: jspb.BinaryReader): NodeTimeResponse
}

export namespace NodeTimeResponse {
  export type AsObject = {
    system: number,
    ntp: number,
  }
}

