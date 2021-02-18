// package: wavesenterprise
// file: permission_op.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"
import * as op_type_pb from "./op_type_pb"
import * as role_pb from "./role_pb"

export class PermissionOp extends jspb.Message {
  getOpType(): op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap]
  setOpType(value: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap]): void

  hasRole(): boolean
  clearRole(): void
  getRole(): role_pb.Role | undefined
  setRole(value?: role_pb.Role): void

  getTimestamp(): number
  setTimestamp(value: number): void

  hasDueTimestamp(): boolean
  clearDueTimestamp(): void
  getDueTimestamp(): google_protobuf_wrappers_pb.Int64Value | undefined
  setDueTimestamp(value?: google_protobuf_wrappers_pb.Int64Value): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermissionOp.AsObject
  static toObject(includeInstance: boolean, msg: PermissionOp): PermissionOp.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: PermissionOp, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PermissionOp
  static deserializeBinaryFromReader(message: PermissionOp, reader: jspb.BinaryReader): PermissionOp
}

export namespace PermissionOp {
  export type AsObject = {
    opType: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap],
    role?: role_pb.Role.AsObject,
    timestamp: number,
    dueTimestamp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

