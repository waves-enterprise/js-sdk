import * as jspb from 'google-protobuf'

import * as data_entry_pb from '../data_entry_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class DataTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): DataTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): DataTransaction;

  getAuthorPublicKey(): Uint8Array | string;
  getAuthorPublicKey_asU8(): Uint8Array;
  getAuthorPublicKey_asB64(): string;
  setAuthorPublicKey(value: Uint8Array | string): DataTransaction;

  getDataList(): Array<data_entry_pb.DataEntry>;
  setDataList(value: Array<data_entry_pb.DataEntry>): DataTransaction;
  clearDataList(): DataTransaction;
  addData(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry;

  getTimestamp(): number;
  setTimestamp(value: number): DataTransaction;

  getFee(): number;
  setFee(value: number): DataTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): DataTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): DataTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): DataTransaction;
  clearProofsList(): DataTransaction;
  addProofs(value: Uint8Array | string, index?: number): DataTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: DataTransaction): DataTransaction.AsObject;
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

