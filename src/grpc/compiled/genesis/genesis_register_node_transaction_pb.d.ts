// package: wavesenterprise
// file: genesis/genesis_register_node_transaction.proto

import * as jspb from "google-protobuf";

export class GenesisRegisterNodeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getTargetPublicKey(): Uint8Array | string;
  getTargetPublicKey_asU8(): Uint8Array;
  getTargetPublicKey_asB64(): string;
  setTargetPublicKey(value: Uint8Array | string): void;

  getFee(): number;
  setFee(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisRegisterNodeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisRegisterNodeTransaction): GenesisRegisterNodeTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisRegisterNodeTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisRegisterNodeTransaction;
  static deserializeBinaryFromReader(message: GenesisRegisterNodeTransaction, reader: jspb.BinaryReader): GenesisRegisterNodeTransaction;
}

export namespace GenesisRegisterNodeTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    targetPublicKey: Uint8Array | string,
    fee: number,
    timestamp: number,
    signature: Uint8Array | string,
  }
}

