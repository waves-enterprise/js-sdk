// package: wavesenterprise
// file: managed/sponsor_fee_transaction.proto

import * as jspb from "google-protobuf";

export class SponsorFeeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getAssetId(): Uint8Array | string;
  getAssetId_asU8(): Uint8Array;
  getAssetId_asB64(): string;
  setAssetId(value: Uint8Array | string): void;

  getIsEnabled(): boolean;
  setIsEnabled(value: boolean): void;

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
  toObject(includeInstance?: boolean): SponsorFeeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorFeeTransaction): SponsorFeeTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SponsorFeeTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SponsorFeeTransaction;
  static deserializeBinaryFromReader(message: SponsorFeeTransaction, reader: jspb.BinaryReader): SponsorFeeTransaction;
}

export namespace SponsorFeeTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    assetId: Uint8Array | string,
    isEnabled: boolean,
    fee: number,
    timestamp: number,
    proofsList: Array<Uint8Array | string>,
  }
}

