// package: wavesenterprise
// file: managed/register_node_transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as op_type_pb from "../op_type_pb";

export class RegisterNodeTransaction extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getTarget(): Uint8Array | string;
  getTarget_asU8(): Uint8Array;
  getTarget_asB64(): string;
  setTarget(value: Uint8Array | string): void;

  hasNodeName(): boolean;
  clearNodeName(): void;
  getNodeName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNodeName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getOpType(): op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap];
  setOpType(value: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap]): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  clearProofsList(): void;
  getProofsList(): Array<Uint8Array | string>;
  getProofsList_asU8(): Array<Uint8Array>;
  getProofsList_asB64(): Array<string>;
  setProofsList(value: Array<Uint8Array | string>): void;
  addProofs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterNodeTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterNodeTransaction): RegisterNodeTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    opType: op_type_pb.OpTypeMap[keyof op_type_pb.OpTypeMap],
    timestamp: number,
    fee: number,
    proofsList: Array<Uint8Array | string>,
  }
}

