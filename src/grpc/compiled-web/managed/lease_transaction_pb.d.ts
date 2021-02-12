import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class LeaseTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): LeaseTransaction;

  getAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setAssetId(value?: google_protobuf_wrappers_pb.BytesValue): LeaseTransaction;
  hasAssetId(): boolean;
  clearAssetId(): LeaseTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): LeaseTransaction;

  getRecipient(): Uint8Array | string;
  getRecipient_asU8(): Uint8Array;
  getRecipient_asB64(): string;
  setRecipient(value: Uint8Array | string): LeaseTransaction;

  getAmount(): number;
  setAmount(value: number): LeaseTransaction;

  getFee(): number;
  setFee(value: number): LeaseTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): LeaseTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): LeaseTransaction;
  clearProofsList(): LeaseTransaction;
  addProofs(value: Uint8Array | string, index?: number): LeaseTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTransaction): LeaseTransaction.AsObject;
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

