// package: wavesenterprise
// file: genesis/genesis_transaction.proto

import * as jspb from "google-protobuf";

export class GenesisTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisTransaction): GenesisTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

