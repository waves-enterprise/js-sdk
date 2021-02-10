// package: wavesenterprise
// file: managed/lease_transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class LeaseTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasAssetId(): boolean;
  clearAssetId(): void;
  getAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getRecipient(): Uint8Array | string;
  getRecipient_asU8(): Uint8Array;
  getRecipient_asB64(): string;
  setRecipient(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  clearProofsList(): void;
  getProofsList(): Array<Uint8Array | string>;
  getProofsList_asU8(): Array<Uint8Array>;
  getProofsList_asB64(): Array<string>;
  setProofsList(value: Array<Uint8Array | string>): void;
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTransaction): LeaseTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaseTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTransaction;
  static deserializeBinaryFromReader(message: LeaseTransaction, reader: jspb.BinaryReader): LeaseTransaction;
}

export namespace LeaseTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    assetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    senderPublicKey: Uint8Array | string,
    recipient: Uint8Array | string,
    amount: number,
    fee: number,
    timestamp: number,
    proofsList: Array<Uint8Array | string>,
  }
}

