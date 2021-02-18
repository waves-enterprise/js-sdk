import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as op_type_pb from './op_type_pb'
import * as role_pb from './role_pb'


export class PermissionOp extends jspb.Message {
  getOpType(): op_type_pb.OpType
  setOpType(value: op_type_pb.OpType): PermissionOp

  getRole(): role_pb.Role | undefined
  setRole(value?: role_pb.Role): PermissionOp
  hasRole(): boolean
  clearRole(): PermissionOp

  getTimestamp(): number
  setTimestamp(value: number): PermissionOp

  getDueTimestamp(): google_protobuf_wrappers_pb.Int64Value | undefined
  setDueTimestamp(value?: google_protobuf_wrappers_pb.Int64Value): PermissionOp
  hasDueTimestamp(): boolean
  clearDueTimestamp(): PermissionOp

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermissionOp.AsObject
  static toObject(includeInstance: boolean, msg: PermissionOp): PermissionOp.AsObject
  static serializeBinaryToWriter(message: PermissionOp, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PermissionOp
  static deserializeBinaryFromReader(message: PermissionOp, reader: jspb.BinaryReader): PermissionOp
}

export namespace PermissionOp {
  export type AsObject = {
    opType: op_type_pb.OpType,
    role?: role_pb.Role.AsObject,
    timestamp: number,
    dueTimestamp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

