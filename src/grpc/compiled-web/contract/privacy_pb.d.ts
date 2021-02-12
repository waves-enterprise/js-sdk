import * as jspb from 'google-protobuf'



export class PolicyRecipientsRequest extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): PolicyRecipientsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRecipientsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRecipientsRequest): PolicyRecipientsRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyRecipientsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRecipientsRequest;
  static deserializeBinaryFromReader(message: PolicyRecipientsRequest, reader: jspb.BinaryReader): PolicyRecipientsRequest;
}

export namespace PolicyRecipientsRequest {
  export type AsObject = {
    policyId: string,
  }
}

export class PolicyRecipientsResponse extends jspb.Message {
  getRecipientsList(): Array<string>;
  setRecipientsList(value: Array<string>): PolicyRecipientsResponse;
  clearRecipientsList(): PolicyRecipientsResponse;
  addRecipients(value: string, index?: number): PolicyRecipientsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRecipientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRecipientsResponse): PolicyRecipientsResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyRecipientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRecipientsResponse;
  static deserializeBinaryFromReader(message: PolicyRecipientsResponse, reader: jspb.BinaryReader): PolicyRecipientsResponse;
}

export namespace PolicyRecipientsResponse {
  export type AsObject = {
    recipientsList: Array<string>,
  }
}

export class PolicyOwnersRequest extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): PolicyOwnersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyOwnersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyOwnersRequest): PolicyOwnersRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyOwnersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyOwnersRequest;
  static deserializeBinaryFromReader(message: PolicyOwnersRequest, reader: jspb.BinaryReader): PolicyOwnersRequest;
}

export namespace PolicyOwnersRequest {
  export type AsObject = {
    policyId: string,
  }
}

export class PolicyOwnersResponse extends jspb.Message {
  getOwnersList(): Array<string>;
  setOwnersList(value: Array<string>): PolicyOwnersResponse;
  clearOwnersList(): PolicyOwnersResponse;
  addOwners(value: string, index?: number): PolicyOwnersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyOwnersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyOwnersResponse): PolicyOwnersResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyOwnersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyOwnersResponse;
  static deserializeBinaryFromReader(message: PolicyOwnersResponse, reader: jspb.BinaryReader): PolicyOwnersResponse;
}

export namespace PolicyOwnersResponse {
  export type AsObject = {
    ownersList: Array<string>,
  }
}

export class PolicyHashesRequest extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): PolicyHashesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyHashesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyHashesRequest): PolicyHashesRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyHashesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyHashesRequest;
  static deserializeBinaryFromReader(message: PolicyHashesRequest, reader: jspb.BinaryReader): PolicyHashesRequest;
}

export namespace PolicyHashesRequest {
  export type AsObject = {
    policyId: string,
  }
}

export class PolicyHashesResponse extends jspb.Message {
  getHashesList(): Array<string>;
  setHashesList(value: Array<string>): PolicyHashesResponse;
  clearHashesList(): PolicyHashesResponse;
  addHashes(value: string, index?: number): PolicyHashesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyHashesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyHashesResponse): PolicyHashesResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyHashesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyHashesResponse;
  static deserializeBinaryFromReader(message: PolicyHashesResponse, reader: jspb.BinaryReader): PolicyHashesResponse;
}

export namespace PolicyHashesResponse {
  export type AsObject = {
    hashesList: Array<string>,
  }
}

export class PolicyItemDataRequest extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): PolicyItemDataRequest;

  getItemHash(): string;
  setItemHash(value: string): PolicyItemDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyItemDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyItemDataRequest): PolicyItemDataRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyItemDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyItemDataRequest;
  static deserializeBinaryFromReader(message: PolicyItemDataRequest, reader: jspb.BinaryReader): PolicyItemDataRequest;
}

export namespace PolicyItemDataRequest {
  export type AsObject = {
    policyId: string,
    itemHash: string,
  }
}

export class PolicyItemDataResponse extends jspb.Message {
  getData(): string;
  setData(value: string): PolicyItemDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyItemDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyItemDataResponse): PolicyItemDataResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyItemDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyItemDataResponse;
  static deserializeBinaryFromReader(message: PolicyItemDataResponse, reader: jspb.BinaryReader): PolicyItemDataResponse;
}

export namespace PolicyItemDataResponse {
  export type AsObject = {
    data: string,
  }
}

export class PolicyItemInfoRequest extends jspb.Message {
  getPolicyId(): string;
  setPolicyId(value: string): PolicyItemInfoRequest;

  getItemHash(): string;
  setItemHash(value: string): PolicyItemInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyItemInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyItemInfoRequest): PolicyItemInfoRequest.AsObject;
  static serializeBinaryToWriter(message: PolicyItemInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyItemInfoRequest;
  static deserializeBinaryFromReader(message: PolicyItemInfoRequest, reader: jspb.BinaryReader): PolicyItemInfoRequest;
}

export namespace PolicyItemInfoRequest {
  export type AsObject = {
    policyId: string,
    itemHash: string,
  }
}

export class PolicyItemInfoResponse extends jspb.Message {
  getSender(): string;
  setSender(value: string): PolicyItemInfoResponse;

  getPolicyId(): string;
  setPolicyId(value: string): PolicyItemInfoResponse;

  getType(): string;
  setType(value: string): PolicyItemInfoResponse;

  getInfo(): PolicyItemFileInfo | undefined;
  setInfo(value?: PolicyItemFileInfo): PolicyItemInfoResponse;
  hasInfo(): boolean;
  clearInfo(): PolicyItemInfoResponse;

  getHash(): string;
  setHash(value: string): PolicyItemInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyItemInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyItemInfoResponse): PolicyItemInfoResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyItemInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyItemInfoResponse;
  static deserializeBinaryFromReader(message: PolicyItemInfoResponse, reader: jspb.BinaryReader): PolicyItemInfoResponse;
}

export namespace PolicyItemInfoResponse {
  export type AsObject = {
    sender: string,
    policyId: string,
    type: string,
    info?: PolicyItemFileInfo.AsObject,
    hash: string,
  }
}

export class PolicyItemFileInfo extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): PolicyItemFileInfo;

  getSize(): number;
  setSize(value: number): PolicyItemFileInfo;

  getTimestamp(): number;
  setTimestamp(value: number): PolicyItemFileInfo;

  getAuthor(): string;
  setAuthor(value: string): PolicyItemFileInfo;

  getComment(): string;
  setComment(value: string): PolicyItemFileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyItemFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyItemFileInfo): PolicyItemFileInfo.AsObject;
  static serializeBinaryToWriter(message: PolicyItemFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyItemFileInfo;
  static deserializeBinaryFromReader(message: PolicyItemFileInfo, reader: jspb.BinaryReader): PolicyItemFileInfo;
}

export namespace PolicyItemFileInfo {
  export type AsObject = {
    filename: string,
    size: number,
    timestamp: number,
    author: string,
    comment: string,
  }
}

