import * as jspb from 'google-protobuf'



export class Transfer extends jspb.Message {
  getRecipient(): Uint8Array | string
  getRecipient_asU8(): Uint8Array
  getRecipient_asB64(): string
  setRecipient(value: Uint8Array | string): Transfer

  getAmount(): number
  setAmount(value: number): Transfer

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Transfer.AsObject
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Transfer
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer
}

export namespace Transfer {
  export type AsObject = {
    recipient: Uint8Array | string,
    amount: number,
  }
}

