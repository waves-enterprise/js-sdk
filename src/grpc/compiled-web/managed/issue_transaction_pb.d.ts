import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class IssueTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): IssueTransaction;

  getChainId(): number;
  setChainId(value: number): IssueTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): IssueTransaction;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): IssueTransaction;

  getDescription(): Uint8Array | string;
  getDescription_asU8(): Uint8Array;
  getDescription_asB64(): string;
  setDescription(value: Uint8Array | string): IssueTransaction;

  getQuantity(): number;
  setQuantity(value: number): IssueTransaction;

  getDecimals(): number;
  setDecimals(value: number): IssueTransaction;

  getReissuable(): boolean;
  setReissuable(value: boolean): IssueTransaction;

  getFee(): number;
  setFee(value: number): IssueTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): IssueTransaction;

  getScript(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setScript(value?: google_protobuf_wrappers_pb.BytesValue): IssueTransaction;
  hasScript(): boolean;
  clearScript(): IssueTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): IssueTransaction;
  clearProofsList(): IssueTransaction;
  addProofs(value: Uint8Array | string, index?: number): IssueTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: IssueTransaction): IssueTransaction.AsObject;
  static serializeBinaryToWriter(message: IssueTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueTransaction;
  static deserializeBinaryFromReader(message: IssueTransaction, reader: jspb.BinaryReader): IssueTransaction;
}

export namespace IssueTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    chainId: number,
    senderPublicKey: Uint8Array | string,
    name: Uint8Array | string,
    description: Uint8Array | string,
    quantity: number,
    decimals: number,
    reissuable: boolean,
    fee: number,
    timestamp: number,
    script?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

