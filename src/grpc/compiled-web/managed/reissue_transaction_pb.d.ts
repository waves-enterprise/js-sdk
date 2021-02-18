import * as jspb from 'google-protobuf'



export class ReissueTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): ReissueTransaction;

  getChainId(): number;
  setChainId(value: number): ReissueTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): ReissueTransaction;

  getAssetId(): Uint8Array | string;
  getAssetId_asU8(): Uint8Array;
  getAssetId_asB64(): string;
  setAssetId(value: Uint8Array | string): ReissueTransaction;

  getQuantity(): number;
  setQuantity(value: number): ReissueTransaction;

  getReissuable(): boolean;
  setReissuable(value: boolean): ReissueTransaction;

  getFee(): number;
  setFee(value: number): ReissueTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): ReissueTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): ReissueTransaction;
  clearProofsList(): ReissueTransaction;
  addProofs(value: Uint8Array | string, index?: number): ReissueTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReissueTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ReissueTransaction): ReissueTransaction.AsObject;
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

