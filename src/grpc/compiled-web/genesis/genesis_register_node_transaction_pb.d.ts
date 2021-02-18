import * as jspb from 'google-protobuf'



export class GenesisRegisterNodeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): GenesisRegisterNodeTransaction;

  getTargetPublicKey(): Uint8Array | string;
  getTargetPublicKey_asU8(): Uint8Array;
  getTargetPublicKey_asB64(): string;
  setTargetPublicKey(value: Uint8Array | string): GenesisRegisterNodeTransaction;

  getFee(): number;
  setFee(value: number): GenesisRegisterNodeTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): GenesisRegisterNodeTransaction;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): GenesisRegisterNodeTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisRegisterNodeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisRegisterNodeTransaction): GenesisRegisterNodeTransaction.AsObject;
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

