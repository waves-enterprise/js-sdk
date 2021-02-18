import * as jspb from 'google-protobuf'

import * as data_entry_pb from '../data_entry_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as atomic_badge_pb from '../atomic_badge_pb';


export class CreateContractTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): CreateContractTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): CreateContractTransaction;

  getImage(): string;
  setImage(value: string): CreateContractTransaction;

  getImageHash(): string;
  setImageHash(value: string): CreateContractTransaction;

  getContractName(): string;
  setContractName(value: string): CreateContractTransaction;

  getParamsList(): Array<data_entry_pb.DataEntry>;
  setParamsList(value: Array<data_entry_pb.DataEntry>): CreateContractTransaction;
  clearParamsList(): CreateContractTransaction;
  addParams(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry;

  getFee(): number;
  setFee(value: number): CreateContractTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): CreateContractTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): CreateContractTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): CreateContractTransaction;

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined;
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): CreateContractTransaction;
  hasAtomicBadge(): boolean;
  clearAtomicBadge(): CreateContractTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): CreateContractTransaction;
  clearProofsList(): CreateContractTransaction;
  addProofs(value: Uint8Array | string, index?: number): CreateContractTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContractTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContractTransaction): CreateContractTransaction.AsObject;
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

