// package: wavesenterprise
// file: managed/reissue_transaction.proto

import * as jspb from "google-protobuf";

export class ReissueTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getChainId(): number;
  setChainId(value: number): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getAssetId(): Uint8Array | string;
  getAssetId_asU8(): Uint8Array;
  getAssetId_asB64(): string;
  setAssetId(value: Uint8Array | string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getReissuable(): boolean;
  setReissuable(value: boolean): void;

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
  toObject(includeInstance?: boolean): ReissueTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ReissueTransaction): ReissueTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReissueTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReissueTransaction;
  static deserializeBinaryFromReader(message: ReissueTransaction, reader: jspb.BinaryReader): ReissueTransaction;
}

export namespace ReissueTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    assetId: Uint8Array | string,
    quantity: number,
    reissuable: boolean,
    fee: number,
    timestamp: number,
    proofsList: Array<Uint8Array | string>,
  }
}

