import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as atomic_badge_pb from '../atomic_badge_pb';


export class TransferTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): TransferTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): TransferTransaction;

  getAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setAssetId(value?: google_protobuf_wrappers_pb.BytesValue): TransferTransaction;
  hasAssetId(): boolean;
  clearAssetId(): TransferTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): TransferTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): TransferTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): TransferTransaction;

  getAmount(): number;
  setAmount(value: number): TransferTransaction;

  getFee(): number;
  setFee(value: number): TransferTransaction;

  getRecipient(): Uint8Array | string;
  getRecipient_asU8(): Uint8Array;
  getRecipient_asB64(): string;
  setRecipient(value: Uint8Array | string): TransferTransaction;

  getAttachment(): Uint8Array | string;
  getAttachment_asU8(): Uint8Array;
  getAttachment_asB64(): string;
  setAttachment(value: Uint8Array | string): TransferTransaction;

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined;
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): TransferTransaction;
  hasAtomicBadge(): boolean;
  clearAtomicBadge(): TransferTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): TransferTransaction;
  clearProofsList(): TransferTransaction;
  addProofs(value: Uint8Array | string, index?: number): TransferTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: TransferTransaction): TransferTransaction.AsObject;
  static serializeBinaryToWriter(message: TransferTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferTransaction;
  static deserializeBinaryFromReader(message: TransferTransaction, reader: jspb.BinaryReader): TransferTransaction;
}

export namespace TransferTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    assetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    timestamp: number,
    amount: number,
    fee: number,
    recipient: Uint8Array | string,
    attachment: Uint8Array | string,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

