// package: wavesenterprise
// file: managed/data_transaction.proto

import * as jspb from "google-protobuf";
import * as data_entry_pb from "../data_entry_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class DataTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getAuthorPublicKey(): Uint8Array | string;
  getAuthorPublicKey_asU8(): Uint8Array;
  getAuthorPublicKey_asB64(): string;
  setAuthorPublicKey(value: Uint8Array | string): void;

  clearDataList(): void;
  getDataList(): Array<data_entry_pb.DataEntry>;
  setDataList(value: Array<data_entry_pb.DataEntry>): void;
  addData(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  hasFeeAssetId(): boolean;
  clearFeeAssetId(): void;
  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void;

  clearProofsList(): void;
  getProofsList(): Array<Uint8Array | string>;
  getProofsList_asU8(): Array<Uint8Array>;
  getProofsList_asB64(): Array<string>;
  setProofsList(value: Array<Uint8Array | string>): void;
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: DataTransaction): DataTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTransaction;
  static deserializeBinaryFromReader(message: DataTransaction, reader: jspb.BinaryReader): DataTransaction;
}

export namespace DataTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    authorPublicKey: Uint8Array | string,
    dataList: Array<data_entry_pb.DataEntry.AsObject>,
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

