import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as atomic_badge_pb from '../atomic_badge_pb';


export class UpdateContractTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): UpdateContractTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): UpdateContractTransaction;

  getContractId(): Uint8Array | string;
  getContractId_asU8(): Uint8Array;
  getContractId_asB64(): string;
  setContractId(value: Uint8Array | string): UpdateContractTransaction;

  getImage(): string;
  setImage(value: string): UpdateContractTransaction;

  getImageHash(): string;
  setImageHash(value: string): UpdateContractTransaction;

  getFee(): number;
  setFee(value: number): UpdateContractTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): UpdateContractTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): UpdateContractTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): UpdateContractTransaction;

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined;
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): UpdateContractTransaction;
  hasAtomicBadge(): boolean;
  clearAtomicBadge(): UpdateContractTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): UpdateContractTransaction;
  clearProofsList(): UpdateContractTransaction;
  addProofs(value: Uint8Array | string, index?: number): UpdateContractTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContractTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContractTransaction): UpdateContractTransaction.AsObject;
  static serializeBinaryToWriter(message: UpdateContractTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContractTransaction;
  static deserializeBinaryFromReader(message: UpdateContractTransaction, reader: jspb.BinaryReader): UpdateContractTransaction;
}

export namespace UpdateContractTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    contractId: Uint8Array | string,
    image: string,
    imageHash: string,
    fee: number,
    timestamp: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

