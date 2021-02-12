import * as jspb from 'google-protobuf'



export class GenesisTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): GenesisTransaction;

  getRecipient(): Uint8Array | string;
  getRecipient_asU8(): Uint8Array;
  getRecipient_asB64(): string;
  setRecipient(value: Uint8Array | string): GenesisTransaction;

  getAmount(): number;
  setAmount(value: number): GenesisTransaction;

  getFee(): number;
  setFee(value: number): GenesisTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): GenesisTransaction;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): GenesisTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisTransaction): GenesisTransaction.AsObject;
  static serializeBinaryToWriter(message: GenesisTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisTransaction;
  static deserializeBinaryFromReader(message: GenesisTransaction, reader: jspb.BinaryReader): GenesisTransaction;
}

export namespace GenesisTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    recipient: Uint8Array | string,
    amount: number,
    fee: number,
    timestamp: number,
    signature: Uint8Array | string,
  }
}

