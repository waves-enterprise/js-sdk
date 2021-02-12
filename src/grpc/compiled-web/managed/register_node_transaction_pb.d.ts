import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as op_type_pb from '../op_type_pb';


export class RegisterNodeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): RegisterNodeTransaction;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): RegisterNodeTransaction;

  getTarget(): Uint8Array | string;
  getTarget_asU8(): Uint8Array;
  getTarget_asB64(): string;
  setTarget(value: Uint8Array | string): RegisterNodeTransaction;

  getNodeName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNodeName(value?: google_protobuf_wrappers_pb.StringValue): RegisterNodeTransaction;
  hasNodeName(): boolean;
  clearNodeName(): RegisterNodeTransaction;

  getOpType(): op_type_pb.OpType;
  setOpType(value: op_type_pb.OpType): RegisterNodeTransaction;

  getTimestamp(): number;
  setTimestamp(value: number): RegisterNodeTransaction;

  getFee(): number;
  setFee(value: number): RegisterNodeTransaction;

  getProofsList(): Array<Uint8Array | string>;
  setProofsList(value: Array<Uint8Array | string>): RegisterNodeTransaction;
  clearProofsList(): RegisterNodeTransaction;
  addProofs(value: Uint8Array | string, index?: number): RegisterNodeTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterNodeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterNodeTransaction): RegisterNodeTransaction.AsObject;
  static serializeBinaryToWriter(message: RegisterNodeTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterNodeTransaction;
  static deserializeBinaryFromReader(message: RegisterNodeTransaction, reader: jspb.BinaryReader): RegisterNodeTransaction;
}

export namespace RegisterNodeTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    target: Uint8Array | string,
    nodeName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    opType: op_type_pb.OpType,
    timestamp: number,
    fee: number,
    proofsList: Array<Uint8Array | string>,
  }
}

