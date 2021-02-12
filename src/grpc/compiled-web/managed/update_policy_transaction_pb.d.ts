import * as jspb from 'google-protobuf'

import * as op_type_pb from '../op_type_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as atomic_badge_pb from '../atomic_badge_pb';


export class UpdatePolicyTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): UpdatePolicyTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): UpdatePolicyTransaction;

  getPolicyId(): Uint8Array | string;
  getPolicyId_asU8(): Uint8Array;
  getPolicyId_asB64(): string;
  setPolicyId(value: Uint8Array | string): UpdatePolicyTransaction;

  getRecipientsList(): Array<Uint8Array | string>;
  setRecipientsList(value: Array<Uint8Array | string>): UpdatePolicyTransaction;
  clearRecipientsList(): UpdatePolicyTransaction;
  addRecipients(value: Uint8Array | string, index?: number): UpdatePolicyTransaction;

  getOwnersList(): Array<Uint8Array | string>;
  setOwnersList(value: Array<Uint8Array | string>): UpdatePolicyTransaction;
  clearOwnersList(): UpdatePolicyTransaction;
  addOwners(value: Uint8Array | string, index?: number): UpdatePolicyTransaction;

  getOpType(): op_type_pb.OpType;
  setOpType(value: op_type_pb.OpType): UpdatePolicyTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): UpdatePolicyTransaction;

  getFee(): number;
  setFee(value: number): UpdatePolicyTransaction;

  getFeeAssetId(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setFeeAssetId(value?: google_protobuf_wrappers_pb.BytesValue): UpdatePolicyTransaction;
  hasFeeAssetId(): boolean;
  clearFeeAssetId(): UpdatePolicyTransaction;

  getAtomicBadge(): atomic_badge_pb.AtomicBadge | undefined;
  setAtomicBadge(value?: atomic_badge_pb.AtomicBadge): UpdatePolicyTransaction;
  hasAtomicBadge(): boolean;
  clearAtomicBadge(): UpdatePolicyTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): UpdatePolicyTransaction;
  clearProofsList(): UpdatePolicyTransaction;
  addProofs(value: Uint8Array | string, index?: number): UpdatePolicyTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePolicyTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePolicyTransaction): UpdatePolicyTransaction.AsObject;
  static serializeBinaryToWriter(message: UpdatePolicyTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyTransaction;
  static deserializeBinaryFromReader(message: UpdatePolicyTransaction, reader: jspb.BinaryReader): UpdatePolicyTransaction;
}

export namespace UpdatePolicyTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    policyId: Uint8Array | string,
    recipientsList: Array<Uint8Array | string>,
    ownersList: Array<Uint8Array | string>,
    opType: op_type_pb.OpType,
    timestamp: number,
    fee: number,
    feeAssetId?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    atomicBadge?: atomic_badge_pb.AtomicBadge.AsObject,
    proofsList: Array<Uint8Array | string>,
  }
}

