import * as jspb from 'google-protobuf'



export class LeaseCancelTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): LeaseCancelTransaction;

  getChainId(): number;
  setChainId(value: number): LeaseCancelTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): LeaseCancelTransaction;

  getFee(): number;
  setFee(value: number): LeaseCancelTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): LeaseCancelTransaction;

  getLeaseId(): Uint8Array | string;
  getLeaseId_asU8(): Uint8Array;
  getLeaseId_asB64(): string;
  setLeaseId(value: Uint8Array | string): LeaseCancelTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): LeaseCancelTransaction;
  clearProofsList(): LeaseCancelTransaction;
  addProofs(value: Uint8Array | string, index?: number): LeaseCancelTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseCancelTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseCancelTransaction): LeaseCancelTransaction.AsObject;
  static serializeBinaryToWriter(message: LeaseCancelTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseCancelTransaction;
  static deserializeBinaryFromReader(message: LeaseCancelTransaction, reader: jspb.BinaryReader): LeaseCancelTransaction;
}

export namespace LeaseCancelTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    fee: number,
    timestamp: number,
    leaseId: Uint8Array | string,
    proofsList: Array<Uint8Array | string>,
  }
}

