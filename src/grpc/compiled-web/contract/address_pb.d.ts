import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import * as data_entry_pb from '../data_entry_pb'


export class AddressesResponse extends jspb.Message {
  getAddressesList(): string[]
  setAddressesList(value: string[]): AddressesResponse
  clearAddressesList(): AddressesResponse
  addAddresses(value: string, index?: number): AddressesResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressesResponse.AsObject
  static toObject(includeInstance: boolean, msg: AddressesResponse): AddressesResponse.AsObject
  static serializeBinaryToWriter(message: AddressesResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AddressesResponse
  static deserializeBinaryFromReader(message: AddressesResponse, reader: jspb.BinaryReader): AddressesResponse
}

export namespace AddressesResponse {
  export type AsObject = {
    addressesList: string[],
  }
}

export class AddressDataRequest extends jspb.Message {
  getAddress(): string
  setAddress(value: string): AddressDataRequest

  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): AddressDataRequest
  hasLimit(): boolean
  clearLimit(): AddressDataRequest

  getOffset(): google_protobuf_wrappers_pb.Int32Value | undefined
  setOffset(value?: google_protobuf_wrappers_pb.Int32Value): AddressDataRequest
  hasOffset(): boolean
  clearOffset(): AddressDataRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressDataRequest.AsObject
  static toObject(includeInstance: boolean, msg: AddressDataRequest): AddressDataRequest.AsObject
  static serializeBinaryToWriter(message: AddressDataRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AddressDataRequest
  static deserializeBinaryFromReader(message: AddressDataRequest, reader: jspb.BinaryReader): AddressDataRequest
}

export namespace AddressDataRequest {
  export type AsObject = {
    address: string,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    offset?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class AddressDataResponse extends jspb.Message {
  getEntriesList(): data_entry_pb.DataEntry[]
  setEntriesList(value: data_entry_pb.DataEntry[]): AddressDataResponse
  clearEntriesList(): AddressDataResponse
  addEntries(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddressDataResponse.AsObject
  static toObject(includeInstance: boolean, msg: AddressDataResponse): AddressDataResponse.AsObject
  static serializeBinaryToWriter(message: AddressDataResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AddressDataResponse
  static deserializeBinaryFromReader(message: AddressDataResponse, reader: jspb.BinaryReader): AddressDataResponse
}

export namespace AddressDataResponse {
  export type AsObject = {
    entriesList: data_entry_pb.DataEntry.AsObject[],
  }
}

