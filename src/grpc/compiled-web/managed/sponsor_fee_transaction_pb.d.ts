import * as jspb from 'google-protobuf'



export class SponsorFeeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): SponsorFeeTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): SponsorFeeTransaction;

  getAssetId(): Uint8Array | string;
  getAssetId_asU8(): Uint8Array;
  getAssetId_asB64(): string;
  setAssetId(value: Uint8Array | string): SponsorFeeTransaction;

  getIsEnabled(): boolean;
  setIsEnabled(value: boolean): SponsorFeeTransaction;

  getFee(): number;
  setFee(value: number): SponsorFeeTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): SponsorFeeTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): SponsorFeeTransaction;
  clearProofsList(): SponsorFeeTransaction;
  addProofs(value: Uint8Array | string, index?: number): SponsorFeeTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SponsorFeeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: SponsorFeeTransaction): SponsorFeeTransaction.AsObject;
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

