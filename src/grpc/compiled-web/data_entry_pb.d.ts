import * as jspb from 'google-protobuf'



export class DataEntry extends jspb.Message {
  getKey(): string;
  setKey(value: string): DataEntry;

  getIntValue(): number;
  setIntValue(value: number): DataEntry;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): DataEntry;

  getBinaryValue(): Uint8Array | string;
  getBinaryValue_asU8(): Uint8Array;
  getBinaryValue_asB64(): string;
  setBinaryValue(value: Uint8Array | string): DataEntry;

  getStringValue(): string;
  setStringValue(value: string): DataEntry;

  getValueCase(): DataEntry.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataEntry.AsObject;
  static toObject(includeInstance: boolean, msg: DataEntry): DataEntry.AsObject;
  static serializeBinaryToWriter(message: DataEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataEntry;
  static deserializeBinaryFromReader(message: DataEntry, reader: jspb.BinaryReader): DataEntry;
}

export namespace DataEntry {
  export type AsObject = {
    key: string,
    intValue: number,
    boolValue: boolean,
    binaryValue: Uint8Array | string,
    stringValue: string,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    INT_VALUE = 10,
    BOOL_VALUE = 11,
    BINARY_VALUE = 12,
    STRING_VALUE = 13,
  }
}

