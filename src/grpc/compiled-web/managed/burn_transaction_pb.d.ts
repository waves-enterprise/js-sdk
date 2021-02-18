import * as jspb from 'google-protobuf'



export class BurnTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): BurnTransaction;

  getChainId(): number;
  setChainId(value: number): BurnTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): BurnTransaction;

  getAssetId(): Uint8Array | string;
  getAssetId_asU8(): Uint8Array;
  getAssetId_asB64(): string;
  setAssetId(value: Uint8Array | string): BurnTransaction;

  getAmount(): number;
  setAmount(value: number): BurnTransaction;

  getFee(): number;
  setFee(value: number): BurnTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): BurnTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): BurnTransaction;
  clearProofsList(): BurnTransaction;
  addProofs(value: Uint8Array | string, index?: number): BurnTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BurnTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: BurnTransaction): BurnTransaction.AsObject;
  static serializeBinaryToWriter(message: BurnTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BurnTransaction;
  static deserializeBinaryFromReader(message: BurnTransaction, reader: jspb.BinaryReader): BurnTransaction;
}

export namespace BurnTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    assetId: Uint8Array | string,
    amount: number,
    fee: number,
    timestamp: number,
    proofsList: Array<Uint8Array | string>,
  }
}

