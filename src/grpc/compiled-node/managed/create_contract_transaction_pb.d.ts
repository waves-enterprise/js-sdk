// package: wavesenterprise
// file: managed/create_contract_transaction.proto

import * as jspb from "google-protobuf";
import * as data_entry_pb from "../data_entry_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as atomic_badge_pb from "../atomic_badge_pb";

export class CreateContractTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getImage(): string;
  setImage(value: string): void;

  getImageHash(): string;
  setImageHash(value: string): void;

  getContractName(): string;
  setContractName(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<data_entry_pb.DataEntry>;
  setParamsList(value: Array<data_entry_pb.DataEntry>): void;
  addParams(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry;

  getFee(): number;
  setFee(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasFeeAssetId(): boolean;
  clearFeeAssetId(): void;
  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): void;

  hasAtomicBadge(): boolean;
  clearAtomicBadge(): void;
  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined;
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): void;

  clearProofsList(): void;
  getProofsList(): Array<Uint8Array | string>;
  getProofsList_asU8(): Array<Uint8Array>;
  getProofsList_asB64(): Array<string>;
  setProofsList(value: Array<Uint8Array | string>): void;
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContractTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContractTransaction): CreateContractTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContractTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContractTransaction;
  static deserializeBinaryFromReader(message: CreateContractTransaction, reader: jspb.BinaryReader): CreateContractTransaction;
}

export namespace CreateContractTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    image: string,
    imageHash: string,
    contractName: string,
    paramsList: Array<data_entry_pb.DataEntry.AsObject>,
    fee: number,
    timestamp: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

