// package: wavesenterprise
// file: managed/policy_data_hash_transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as atomic_badge_pb from "../atomic_badge_pb";

export class PolicyDataHashTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getDataHash(): Uint8Array | string;
  getDataHash_asU8(): Uint8Array;
  getDataHash_asB64(): string;
  setDataHash(value: Uint8Array | string): void;

  getPolicyId(): Uint8Array | string;
  getPolicyId_asU8(): Uint8Array;
  getPolicyId_asB64(): string;
  setPolicyId(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFee(): number;
  setFee(value: number): void;

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
  toObject(includeInstance?: boolean): PolicyDataHashTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyDataHashTransaction): PolicyDataHashTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyDataHashTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyDataHashTransaction;
  static deserializeBinaryFromReader(message: PolicyDataHashTransaction, reader: jspb.BinaryReader): PolicyDataHashTransaction;
}

export namespace PolicyDataHashTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    dataHash: Uint8Array | string,
    policyId: Uint8Array | string,
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

