// package: wavesenterprise
// file: contract/address.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as data_entry_pb from "../data_entry_pb";

export class AddressesResponse extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): void;
  addAddresses(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressesResponse): AddressesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressesResponse;
  static deserializeBinaryFromReader(message: AddressesResponse, reader: jspb.BinaryReader): AddressesResponse;
}

export namespace AddressesResponse {
  export type AsObject = {
    addressesList: Array<string>,
  }
}

export class AddressDataRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setOffset(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddressDataRequest): AddressDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressDataRequest;
  static deserializeBinaryFromReader(message: AddressDataRequest, reader: jspb.BinaryReader): AddressDataRequest;
}

export namespace AddressDataRequest {
  export type AsObject = {
    address: string,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    offset?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class AddressDataResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<data_entry_pb.DataEntry>;
  setEntriesList(value: Array<data_entry_pb.DataEntry>): void;
  addEntries(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressDataResponse): AddressDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressDataResponse;
  static deserializeBinaryFromReader(message: AddressDataResponse, reader: jspb.BinaryReader): AddressDataResponse;
}

export namespace AddressDataResponse {
  export type AsObject = {
    entriesList: Array<data_entry_pb.DataEntry.AsObject>,
  }
}

