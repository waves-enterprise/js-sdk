import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'
import * as data_entry_pb from '../data_entry_pb'


export class ConnectionRequest extends jspb.Message {
  getConnectionId(): string
  setConnectionId(value: string): ConnectionRequest

  getAsyncFactor(): number
  setAsyncFactor(value: number): ConnectionRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ConnectionRequest.AsObject
  static toObject(includeInstance: boolean, msg: ConnectionRequest): ConnectionRequest.AsObject
  static serializeBinaryToWriter(message: ConnectionRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ConnectionRequest
  static deserializeBinaryFromReader(message: ConnectionRequest, reader: jspb.BinaryReader): ConnectionRequest
}

export namespace ConnectionRequest {
  export type AsObject = {
    connectionId: string,
    asyncFactor: number,
  }
}

export class ContractTransactionResponse extends jspb.Message {
  getTransaction(): ContractTransaction | undefined
  setTransaction(value?: ContractTransaction): ContractTransactionResponse
  hasTransaction(): boolean
  clearTransaction(): ContractTransactionResponse

  getAuthToken(): string
  setAuthToken(value: string): ContractTransactionResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractTransactionResponse.AsObject
  static toObject(includeInstance: boolean, msg: ContractTransactionResponse): ContractTransactionResponse.AsObject
  static serializeBinaryToWriter(message: ContractTransactionResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractTransactionResponse
  static deserializeBinaryFromReader(message: ContractTransactionResponse, reader: jspb.BinaryReader): ContractTransactionResponse
}

export namespace ContractTransactionResponse {
  export type AsObject = {
    transaction?: ContractTransaction.AsObject,
    authToken: string,
  }
}

export class ContractTransaction extends jspb.Message {
  getId(): string
  setId(value: string): ContractTransaction

  getType(): number
  setType(value: number): ContractTransaction

  getSender(): string
  setSender(value: string): ContractTransaction

  getSenderPublicKey(): string
  setSenderPublicKey(value: string): ContractTransaction

  getContractId(): string
  setContractId(value: string): ContractTransaction

  getParamsList(): data_entry_pb.DataEntry[]
  setParamsList(value: data_entry_pb.DataEntry[]): ContractTransaction
  clearParamsList(): ContractTransaction
  addParams(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry

  getFee(): number
  setFee(value: number): ContractTransaction

  getVersion(): number
  setVersion(value: number): ContractTransaction

  getProofs(): Uint8Array | string
  getProofs_asU8(): Uint8Array
  getProofs_asB64(): string
  setProofs(value: Uint8Array | string): ContractTransaction

  getTimestamp(): number
  setTimestamp(value: number): ContractTransaction

  getFeeAssetId(): AssetId | undefined
  setFeeAssetId(value?: AssetId): ContractTransaction
  hasFeeAssetId(): boolean
  clearFeeAssetId(): ContractTransaction

  getCreateData(): CreateContractTransactionData | undefined
  setCreateData(value?: CreateContractTransactionData): ContractTransaction
  hasCreateData(): boolean
  clearCreateData(): ContractTransaction

  getCallData(): CallContractTransactionData | undefined
  setCallData(value?: CallContractTransactionData): ContractTransaction
  hasCallData(): boolean
  clearCallData(): ContractTransaction

  getDataCase(): ContractTransaction.DataCase

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractTransaction.AsObject
  static toObject(includeInstance: boolean, msg: ContractTransaction): ContractTransaction.AsObject
  static serializeBinaryToWriter(message: ContractTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractTransaction
  static deserializeBinaryFromReader(message: ContractTransaction, reader: jspb.BinaryReader): ContractTransaction
}

export namespace ContractTransaction {
  export type AsObject = {
    id: string,
    type: number,
    sender: string,
    senderPublicKey: string,
    contractId: string,
    paramsList: data_entry_pb.DataEntry.AsObject[],
    fee: number,
    version: number,
    proofs: Uint8Array | string,
    timestamp: number,
    feeAssetId?: AssetId.AsObject,
    createData?: CreateContractTransactionData.AsObject,
    callData?: CallContractTransactionData.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CREATE_DATA = 20,
    CALL_DATA = 21,
  }
}

export class CreateContractTransactionData extends jspb.Message {
  getImage(): string
  setImage(value: string): CreateContractTransactionData

  getImageHash(): string
  setImageHash(value: string): CreateContractTransactionData

  getContractName(): string
  setContractName(value: string): CreateContractTransactionData

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CreateContractTransactionData.AsObject
  static toObject(includeInstance: boolean, msg: CreateContractTransactionData): CreateContractTransactionData.AsObject
  static serializeBinaryToWriter(message: CreateContractTransactionData, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CreateContractTransactionData
  static deserializeBinaryFromReader(message: CreateContractTransactionData, reader: jspb.BinaryReader): CreateContractTransactionData
}

export namespace CreateContractTransactionData {
  export type AsObject = {
    image: string,
    imageHash: string,
    contractName: string,
  }
}

export class CallContractTransactionData extends jspb.Message {
  getContractVersion(): number
  setContractVersion(value: number): CallContractTransactionData

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CallContractTransactionData.AsObject
  static toObject(includeInstance: boolean, msg: CallContractTransactionData): CallContractTransactionData.AsObject
  static serializeBinaryToWriter(message: CallContractTransactionData, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CallContractTransactionData
  static deserializeBinaryFromReader(message: CallContractTransactionData, reader: jspb.BinaryReader): CallContractTransactionData
}

export namespace CallContractTransactionData {
  export type AsObject = {
    contractVersion: number,
  }
}

export class ExecutionSuccessRequest extends jspb.Message {
  getTxId(): string
  setTxId(value: string): ExecutionSuccessRequest

  getResultsList(): data_entry_pb.DataEntry[]
  setResultsList(value: data_entry_pb.DataEntry[]): ExecutionSuccessRequest
  clearResultsList(): ExecutionSuccessRequest
  addResults(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ExecutionSuccessRequest.AsObject
  static toObject(includeInstance: boolean, msg: ExecutionSuccessRequest): ExecutionSuccessRequest.AsObject
  static serializeBinaryToWriter(message: ExecutionSuccessRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ExecutionSuccessRequest
  static deserializeBinaryFromReader(message: ExecutionSuccessRequest, reader: jspb.BinaryReader): ExecutionSuccessRequest
}

export namespace ExecutionSuccessRequest {
  export type AsObject = {
    txId: string,
    resultsList: data_entry_pb.DataEntry.AsObject[],
  }
}

export class ExecutionErrorRequest extends jspb.Message {
  getTxId(): string
  setTxId(value: string): ExecutionErrorRequest

  getMessage(): string
  setMessage(value: string): ExecutionErrorRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ExecutionErrorRequest.AsObject
  static toObject(includeInstance: boolean, msg: ExecutionErrorRequest): ExecutionErrorRequest.AsObject
  static serializeBinaryToWriter(message: ExecutionErrorRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ExecutionErrorRequest
  static deserializeBinaryFromReader(message: ExecutionErrorRequest, reader: jspb.BinaryReader): ExecutionErrorRequest
}

export namespace ExecutionErrorRequest {
  export type AsObject = {
    txId: string,
    message: string,
  }
}

export class CommitExecutionResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CommitExecutionResponse.AsObject
  static toObject(includeInstance: boolean, msg: CommitExecutionResponse): CommitExecutionResponse.AsObject
  static serializeBinaryToWriter(message: CommitExecutionResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CommitExecutionResponse
  static deserializeBinaryFromReader(message: CommitExecutionResponse, reader: jspb.BinaryReader): CommitExecutionResponse
}

export namespace CommitExecutionResponse {
  export type AsObject = {
  }
}

export class ContractKeysRequest extends jspb.Message {
  getContractId(): string
  setContractId(value: string): ContractKeysRequest

  getLimit(): google_protobuf_wrappers_pb.Int32Value | undefined
  setLimit(value?: google_protobuf_wrappers_pb.Int32Value): ContractKeysRequest
  hasLimit(): boolean
  clearLimit(): ContractKeysRequest

  getOffset(): google_protobuf_wrappers_pb.Int32Value | undefined
  setOffset(value?: google_protobuf_wrappers_pb.Int32Value): ContractKeysRequest
  hasOffset(): boolean
  clearOffset(): ContractKeysRequest

  getMatches(): google_protobuf_wrappers_pb.StringValue | undefined
  setMatches(value?: google_protobuf_wrappers_pb.StringValue): ContractKeysRequest
  hasMatches(): boolean
  clearMatches(): ContractKeysRequest

  getKeysFilter(): KeysFilter | undefined
  setKeysFilter(value?: KeysFilter): ContractKeysRequest
  hasKeysFilter(): boolean
  clearKeysFilter(): ContractKeysRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractKeysRequest.AsObject
  static toObject(includeInstance: boolean, msg: ContractKeysRequest): ContractKeysRequest.AsObject
  static serializeBinaryToWriter(message: ContractKeysRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractKeysRequest
  static deserializeBinaryFromReader(message: ContractKeysRequest, reader: jspb.BinaryReader): ContractKeysRequest
}

export namespace ContractKeysRequest {
  export type AsObject = {
    contractId: string,
    limit?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    offset?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    matches?: google_protobuf_wrappers_pb.StringValue.AsObject,
    keysFilter?: KeysFilter.AsObject,
  }
}

export class KeysFilter extends jspb.Message {
  getKeysList(): string[]
  setKeysList(value: string[]): KeysFilter
  clearKeysList(): KeysFilter
  addKeys(value: string, index?: number): KeysFilter

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): KeysFilter.AsObject
  static toObject(includeInstance: boolean, msg: KeysFilter): KeysFilter.AsObject
  static serializeBinaryToWriter(message: KeysFilter, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): KeysFilter
  static deserializeBinaryFromReader(message: KeysFilter, reader: jspb.BinaryReader): KeysFilter
}

export namespace KeysFilter {
  export type AsObject = {
    keysList: string[],
  }
}

export class ContractKeysResponse extends jspb.Message {
  getEntriesList(): data_entry_pb.DataEntry[]
  setEntriesList(value: data_entry_pb.DataEntry[]): ContractKeysResponse
  clearEntriesList(): ContractKeysResponse
  addEntries(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractKeysResponse.AsObject
  static toObject(includeInstance: boolean, msg: ContractKeysResponse): ContractKeysResponse.AsObject
  static serializeBinaryToWriter(message: ContractKeysResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractKeysResponse
  static deserializeBinaryFromReader(message: ContractKeysResponse, reader: jspb.BinaryReader): ContractKeysResponse
}

export namespace ContractKeysResponse {
  export type AsObject = {
    entriesList: data_entry_pb.DataEntry.AsObject[],
  }
}

export class ContractKeyRequest extends jspb.Message {
  getContractId(): string
  setContractId(value: string): ContractKeyRequest

  getKey(): string
  setKey(value: string): ContractKeyRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractKeyRequest.AsObject
  static toObject(includeInstance: boolean, msg: ContractKeyRequest): ContractKeyRequest.AsObject
  static serializeBinaryToWriter(message: ContractKeyRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractKeyRequest
  static deserializeBinaryFromReader(message: ContractKeyRequest, reader: jspb.BinaryReader): ContractKeyRequest
}

export namespace ContractKeyRequest {
  export type AsObject = {
    contractId: string,
    key: string,
  }
}

export class ContractKeyResponse extends jspb.Message {
  getEntry(): data_entry_pb.DataEntry | undefined
  setEntry(value?: data_entry_pb.DataEntry): ContractKeyResponse
  hasEntry(): boolean
  clearEntry(): ContractKeyResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractKeyResponse.AsObject
  static toObject(includeInstance: boolean, msg: ContractKeyResponse): ContractKeyResponse.AsObject
  static serializeBinaryToWriter(message: ContractKeyResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractKeyResponse
  static deserializeBinaryFromReader(message: ContractKeyResponse, reader: jspb.BinaryReader): ContractKeyResponse
}

export namespace ContractKeyResponse {
  export type AsObject = {
    entry?: data_entry_pb.DataEntry.AsObject,
  }
}

export class AssetId extends jspb.Message {
  getValue(): string
  setValue(value: string): AssetId

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AssetId.AsObject
  static toObject(includeInstance: boolean, msg: AssetId): AssetId.AsObject
  static serializeBinaryToWriter(message: AssetId, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AssetId
  static deserializeBinaryFromReader(message: AssetId, reader: jspb.BinaryReader): AssetId
}

export namespace AssetId {
  export type AsObject = {
    value: string,
  }
}

