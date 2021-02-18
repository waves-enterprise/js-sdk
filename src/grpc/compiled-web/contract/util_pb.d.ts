import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'


export class NodeTimeResponse extends jspb.Message {
  getSystem(): number
  setSystem(value: number): NodeTimeResponse

  getNtp(): number
  setNtp(value: number): NodeTimeResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): NodeTimeResponse.AsObject
  static toObject(includeInstance: boolean, msg: NodeTimeResponse): NodeTimeResponse.AsObject
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

