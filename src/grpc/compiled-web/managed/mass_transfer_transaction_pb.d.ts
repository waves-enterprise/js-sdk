import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as transfer_pb from '../transfer_pb';


export class MassTransferTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): MassTransferTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): MassTransferTransaction;

  getAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setAssetId(value?: google_protobuf_wrappers_pb.BytesValue): MassTransferTransaction;
  hasAssetId(): boolean;
  clearAssetId(): MassTransferTransaction;

  getTransfersList(): Array<transfer_pb.Transfer>;
  setTransfersList(value: Array<transfer_pb.Transfer>): MassTransferTransaction;
  clearTransfersList(): MassTransferTransaction;
  addTransfers(value?: transfer_pb.Transfer, index?: number): transfer_pb.Transfer;

  getTimestamp(): number;
  setTimestamp(value: number): MassTransferTransaction;

  getFee(): number;
  setFee(value: number): MassTransferTransaction;

  getAttachment(): Uint8Array | string;
  getAttachment_asU8(): Uint8Array;
  getAttachment_asB64(): string;
  setAttachment(value: Uint8Array | string): MassTransferTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): MassTransferTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): MassTransferTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): MassTransferTransaction;
  clearProofsList(): MassTransferTransaction;
  addProofs(value: Uint8Array | string, index?: number): MassTransferTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MassTransferTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MassTransferTransaction): MassTransferTransaction.AsObject;
  static serializeBinaryToWriter(message: MassTransferTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MassTransferTransaction;
  static deserializeBinaryFromReader(message: MassTransferTransaction, reader: jspb.BinaryReader): MassTransferTransaction;
}

export namespace MassTransferTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    assetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    transfersList: Array<transfer_pb.Transfer.AsObject>,
    timestamp: number,
    fee: number,
    attachment: Uint8Array | string,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

