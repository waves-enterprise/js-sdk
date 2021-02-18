// package: wavesenterprise
// file: managed/atomic_transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as managed_atomic_inner_transaction_pb from "../managed/atomic_inner_transaction_pb";

export class AtomicTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  hasMiner(): boolean;
  clearMiner(): void;
  getMiner(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setMiner(value?: google_protobuf_wrappers_pb.BytesValue): void;

  clearTransactionsList(): void;
  getTransactionsList(): Array<managed_atomic_inner_transaction_pb.AtomicInnerTransaction>;
  setTransactionsList(value: Array<managed_atomic_inner_transaction_pb.AtomicInnerTransaction>): void;
  addTransactions(value?: managed_atomic_inner_transaction_pb.AtomicInnerTransaction, index?: number): managed_atomic_inner_transaction_pb.AtomicInnerTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  clearProofsList(): void;
  getProofsList(): Array<Uint8Array | string>;
  getProofsList_asU8(): Array<Uint8Array>;
  getProofsList_asB64(): Array<string>;
  setProofsList(value: Array<Uint8Array | string>): void;
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtomicTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: AtomicTransaction): AtomicTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AtomicTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtomicTransaction;
  static deserializeBinaryFromReader(message: AtomicTransaction, reader: jspb.BinaryReader): AtomicTransaction;
}

export namespace AtomicTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    miner?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    transactionsList: Array<managed_atomic_inner_transaction_pb.AtomicInnerTransaction.AsObject>,
    timestamp: number,
    proofsList: Array<Uint8Array | string>,
  }
}

