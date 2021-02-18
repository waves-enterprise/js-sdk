import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'


export class PermissionsRequest extends jspb.Message {
  getAddress(): string
  setAddress(value: string): PermissionsRequest

  getTimestamp(): google_protobuf_wrappers_pb.Int64Value | undefined
  setTimestamp(value?: google_protobuf_wrappers_pb.Int64Value): PermissionsRequest
  hasTimestamp(): boolean
  clearTimestamp(): PermissionsRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermissionsRequest.AsObject
  static toObject(includeInstance: boolean, msg: PermissionsRequest): PermissionsRequest.AsObject
  static serializeBinaryToWriter(message: PermissionsRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PermissionsRequest
  static deserializeBinaryFromReader(message: PermissionsRequest, reader: jspb.BinaryReader): PermissionsRequest
}

export namespace PermissionsRequest {
  export type AsObject = {
    address: string,
    timestamp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class PermissionsResponse extends jspb.Message {
  getRolesList(): RoleInfo[]
  setRolesList(value: RoleInfo[]): PermissionsResponse
  clearRolesList(): PermissionsResponse
  addRoles(value?: RoleInfo, index?: number): RoleInfo

  getTimestamp(): number
  setTimestamp(value: number): PermissionsResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PermissionsResponse.AsObject
  static toObject(includeInstance: boolean, msg: PermissionsResponse): PermissionsResponse.AsObject
  static serializeBinaryToWriter(message: PermissionsResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PermissionsResponse
  static deserializeBinaryFromReader(message: PermissionsResponse, reader: jspb.BinaryReader): PermissionsResponse
}

export namespace PermissionsResponse {
  export type AsObject = {
    rolesList: RoleInfo.AsObject[],
    timestamp: number,
  }
}

export class RoleInfo extends jspb.Message {
  getRole(): string
  setRole(value: string): RoleInfo

  getDueTimestamp(): google_protobuf_wrappers_pb.Int64Value | undefined
  setDueTimestamp(value?: google_protobuf_wrappers_pb.Int64Value): RoleInfo
  hasDueTimestamp(): boolean
  clearDueTimestamp(): RoleInfo

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RoleInfo.AsObject
  static toObject(includeInstance: boolean, msg: RoleInfo): RoleInfo.AsObject
  static serializeBinaryToWriter(message: RoleInfo, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RoleInfo
  static deserializeBinaryFromReader(message: RoleInfo, reader: jspb.BinaryReader): RoleInfo
}

export namespace RoleInfo {
  export type AsObject = {
    role: string,
    dueTimestamp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class AddressesPermissionsRequest extends jspb.Message {
  getAddressesList(): string[]
  setAddressesList(value: string[]): AddressesPermissionsRequest
  clearAddressesList(): AddressesPermissionsRequest
  addAddresses(value: string, index?: number): AddressesPermissionsRequest

  getTimestamp(): number
  setTimestamp(value: number): AddressesPermissionsRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressesPermissionsRequest.AsObject
  static toObject(includeInstance: boolean, msg: AddressesPermissionsRequest): AddressesPermissionsRequest.AsObject
  static serializeBinaryToWriter(message: AddressesPermissionsRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AddressesPermissionsRequest
  static deserializeBinaryFromReader(message: AddressesPermissionsRequest, reader: jspb.BinaryReader): AddressesPermissionsRequest
}

export namespace AddressesPermissionsRequest {
  export type AsObject = {
    addressesList: string[],
    timestamp: number,
  }
}

export class AddressesPermissionsResponse extends jspb.Message {
  getAddressToRolesList(): RolesForAddressResponse[]
  setAddressToRolesList(value: RolesForAddressResponse[]): AddressesPermissionsResponse
  clearAddressToRolesList(): AddressesPermissionsResponse
  addAddressToRoles(value?: RolesForAddressResponse, index?: number): RolesForAddressResponse

  getTimestamp(): number
  setTimestamp(value: number): AddressesPermissionsResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressesPermissionsResponse.AsObject
  static toObject(includeInstance: boolean, msg: AddressesPermissionsResponse): AddressesPermissionsResponse.AsObject
  static serializeBinaryToWriter(message: AddressesPermissionsResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AddressesPermissionsResponse
  static deserializeBinaryFromReader(message: AddressesPermissionsResponse, reader: jspb.BinaryReader): AddressesPermissionsResponse
}

export namespace AddressesPermissionsResponse {
  export type AsObject = {
    addressToRolesList: RolesForAddressResponse.AsObject[],
    timestamp: number,
  }
}

export class RolesForAddressResponse extends jspb.Message {
  getAddress(): string
  setAddress(value: string): RolesForAddressResponse

  getRolesList(): RoleInfo[]
  setRolesList(value: RoleInfo[]): RolesForAddressResponse
  clearRolesList(): RolesForAddressResponse
  addRoles(value?: RoleInfo, index?: number): RoleInfo

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RolesForAddressResponse.AsObject
  static toObject(includeInstance: boolean, msg: RolesForAddressResponse): RolesForAddressResponse.AsObject
  static serializeBinaryToWriter(message: RolesForAddressResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RolesForAddressResponse
  static deserializeBinaryFromReader(message: RolesForAddressResponse, reader: jspb.BinaryReader): RolesForAddressResponse
}

export namespace RolesForAddressResponse {
  export type AsObject = {
    address: string,
    rolesList: RoleInfo.AsObject[],
  }
}

