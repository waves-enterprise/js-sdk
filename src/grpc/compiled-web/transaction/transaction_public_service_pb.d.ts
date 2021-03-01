import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as managed_transaction_pb from '../managed/transaction_pb';


export class UtxSize extends jspb.Message {
  getSize(): number;
  setSize(value: number): UtxSize;

  getSizeInBytes(): number;
  setSizeInBytes(value: number): UtxSize;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UtxSize.AsObject;
  static toObject(includeInstance: boolean, msg: UtxSize): UtxSize.AsObject;
  static serializeBinaryToWriter(message: UtxSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UtxSize;
  static deserializeBinaryFromReader(message: UtxSize, reader: jspb.BinaryReader): UtxSize;
}

export namespace UtxSize {
  export type AsObject = {
    size: number,
    sizeInBytes: number,
  }
}

