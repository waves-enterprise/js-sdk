// package: wavesenterprise
// file: atomic_badge.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class AtomicBadge extends jspb.Message {
  hasTrustedSender(): boolean;
  clearTrustedSender(): void;
  getTrustedSender(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setTrustedSender(value?: google_protobuf_wrappers_pb.BytesValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtomicBadge.AsObject;
  static toObject(includeInstance: boolean, msg: AtomicBadge): AtomicBadge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AtomicBadge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtomicBadge;
  static deserializeBinaryFromReader(message: AtomicBadge, reader: jspb.BinaryReader): AtomicBadge;
}

export namespace AtomicBadge {
  export type AsObject = {
    trustedSender?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

