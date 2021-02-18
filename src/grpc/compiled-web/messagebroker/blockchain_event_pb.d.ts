import * as jspb from 'google-protobuf'

import * as managed_transaction_pb from '../managed/transaction_pb'


export class BlockchainEvent extends jspb.Message {
  getErrorEvent(): ErrorEvent | undefined
  setErrorEvent(value?: ErrorEvent): BlockchainEvent
  hasErrorEvent(): boolean
  clearErrorEvent(): BlockchainEvent

  getMicroBlockAppended(): MicroBlockAppended | undefined
  setMicroBlockAppended(value?: MicroBlockAppended): BlockchainEvent
  hasMicroBlockAppended(): boolean
  clearMicroBlockAppended(): BlockchainEvent

  getBlockAppended(): BlockAppended | undefined
  setBlockAppended(value?: BlockAppended): BlockchainEvent
  hasBlockAppended(): boolean
  clearBlockAppended(): BlockchainEvent

  getRollbackCompleted(): RollbackCompleted | undefined
  setRollbackCompleted(value?: RollbackCompleted): BlockchainEvent
  hasRollbackCompleted(): boolean
  clearRollbackCompleted(): BlockchainEvent

  getAppendedBlockHistory(): AppendedBlockHistory | undefined
  setAppendedBlockHistory(value?: AppendedBlockHistory): BlockchainEvent
  hasAppendedBlockHistory(): boolean
  clearAppendedBlockHistory(): BlockchainEvent

  getBlockchainEventCase(): BlockchainEvent.BlockchainEventCase

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): BlockchainEvent.AsObject
  static toObject(includeInstance: boolean, msg: BlockchainEvent): BlockchainEvent.AsObject
  static serializeBinaryToWriter(message: BlockchainEvent, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): BlockchainEvent
  static deserializeBinaryFromReader(message: BlockchainEvent, reader: jspb.BinaryReader): BlockchainEvent
}

export namespace BlockchainEvent {
  export type AsObject = {
    errorEvent?: ErrorEvent.AsObject,
    microBlockAppended?: MicroBlockAppended.AsObject,
    blockAppended?: BlockAppended.AsObject,
    rollbackCompleted?: RollbackCompleted.AsObject,
    appendedBlockHistory?: AppendedBlockHistory.AsObject,
  }

  export enum BlockchainEventCase {
    BLOCKCHAIN_EVENT_NOT_SET = 0,
    ERROR_EVENT = 1,
    MICRO_BLOCK_APPENDED = 2,
    BLOCK_APPENDED = 3,
    ROLLBACK_COMPLETED = 4,
    APPENDED_BLOCK_HISTORY = 5,
  }
}

export class ErrorEvent extends jspb.Message {
  getId(): number
  setId(value: number): ErrorEvent

  getMessage(): string
  setMessage(value: string): ErrorEvent

  getGenericError(): GenericError | undefined
  setGenericError(value?: GenericError): ErrorEvent
  hasGenericError(): boolean
  clearGenericError(): ErrorEvent

  getMissingRequiredRequestField(): MissingRequiredRequestField | undefined
  setMissingRequiredRequestField(value?: MissingRequiredRequestField): ErrorEvent
  hasMissingRequiredRequestField(): boolean
  clearMissingRequiredRequestField(): ErrorEvent

  getBlockSignatureNotFoundError(): BlockSignatureNotFoundError | undefined
  setBlockSignatureNotFoundError(value?: BlockSignatureNotFoundError): ErrorEvent
  hasBlockSignatureNotFoundError(): boolean
  clearBlockSignatureNotFoundError(): ErrorEvent

  getMissingAuthorizationMetadata(): MissingAuthorizationMetadata | undefined
  setMissingAuthorizationMetadata(value?: MissingAuthorizationMetadata): ErrorEvent
  hasMissingAuthorizationMetadata(): boolean
  clearMissingAuthorizationMetadata(): ErrorEvent

  getInvalidApiKey(): InvalidApiKey | undefined
  setInvalidApiKey(value?: InvalidApiKey): ErrorEvent
  hasInvalidApiKey(): boolean
  clearInvalidApiKey(): ErrorEvent

  getInvalidToken(): InvalidToken | undefined
  setInvalidToken(value?: InvalidToken): ErrorEvent
  hasInvalidToken(): boolean
  clearInvalidToken(): ErrorEvent

  getErrorEventCase(): ErrorEvent.ErrorEventCase

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ErrorEvent.AsObject
  static toObject(includeInstance: boolean, msg: ErrorEvent): ErrorEvent.AsObject
  static serializeBinaryToWriter(message: ErrorEvent, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ErrorEvent
  static deserializeBinaryFromReader(message: ErrorEvent, reader: jspb.BinaryReader): ErrorEvent
}

export namespace ErrorEvent {
  export type AsObject = {
    id: number,
    message: string,
    genericError?: GenericError.AsObject,
    missingRequiredRequestField?: MissingRequiredRequestField.AsObject,
    blockSignatureNotFoundError?: BlockSignatureNotFoundError.AsObject,
    missingAuthorizationMetadata?: MissingAuthorizationMetadata.AsObject,
    invalidApiKey?: InvalidApiKey.AsObject,
    invalidToken?: InvalidToken.AsObject,
  }

  export enum ErrorEventCase {
    ERROR_EVENT_NOT_SET = 0,
    GENERIC_ERROR = 1001,
    MISSING_REQUIRED_REQUEST_FIELD = 1002,
    BLOCK_SIGNATURE_NOT_FOUND_ERROR = 1003,
    MISSING_AUTHORIZATION_METADATA = 1004,
    INVALID_API_KEY = 1005,
    INVALID_TOKEN = 1006,
  }
}

export class GenericError extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GenericError.AsObject
  static toObject(includeInstance: boolean, msg: GenericError): GenericError.AsObject
  static serializeBinaryToWriter(message: GenericError, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): GenericError
  static deserializeBinaryFromReader(message: GenericError, reader: jspb.BinaryReader): GenericError
}

export namespace GenericError {
  export type AsObject = {
  }
}

export class BlockSignatureNotFoundError extends jspb.Message {
  getBlockSignature(): Uint8Array | string
  getBlockSignature_asU8(): Uint8Array
  getBlockSignature_asB64(): string
  setBlockSignature(value: Uint8Array | string): BlockSignatureNotFoundError

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): BlockSignatureNotFoundError.AsObject
  static toObject(includeInstance: boolean, msg: BlockSignatureNotFoundError): BlockSignatureNotFoundError.AsObject
  static serializeBinaryToWriter(message: BlockSignatureNotFoundError, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): BlockSignatureNotFoundError
  static deserializeBinaryFromReader(message: BlockSignatureNotFoundError, reader: jspb.BinaryReader): BlockSignatureNotFoundError
}

export namespace BlockSignatureNotFoundError {
  export type AsObject = {
    blockSignature: Uint8Array | string,
  }
}

export class MissingRequiredRequestField extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MissingRequiredRequestField.AsObject
  static toObject(includeInstance: boolean, msg: MissingRequiredRequestField): MissingRequiredRequestField.AsObject
  static serializeBinaryToWriter(message: MissingRequiredRequestField, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): MissingRequiredRequestField
  static deserializeBinaryFromReader(message: MissingRequiredRequestField, reader: jspb.BinaryReader): MissingRequiredRequestField
}

export namespace MissingRequiredRequestField {
  export type AsObject = {
  }
}

export class MissingAuthorizationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MissingAuthorizationMetadata.AsObject
  static toObject(includeInstance: boolean, msg: MissingAuthorizationMetadata): MissingAuthorizationMetadata.AsObject
  static serializeBinaryToWriter(message: MissingAuthorizationMetadata, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): MissingAuthorizationMetadata
  static deserializeBinaryFromReader(message: MissingAuthorizationMetadata, reader: jspb.BinaryReader): MissingAuthorizationMetadata
}

export namespace MissingAuthorizationMetadata {
  export type AsObject = {
  }
}

export class InvalidApiKey extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): InvalidApiKey.AsObject
  static toObject(includeInstance: boolean, msg: InvalidApiKey): InvalidApiKey.AsObject
  static serializeBinaryToWriter(message: InvalidApiKey, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): InvalidApiKey
  static deserializeBinaryFromReader(message: InvalidApiKey, reader: jspb.BinaryReader): InvalidApiKey
}

export namespace InvalidApiKey {
  export type AsObject = {
  }
}

export class InvalidToken extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): InvalidToken.AsObject
  static toObject(includeInstance: boolean, msg: InvalidToken): InvalidToken.AsObject
  static serializeBinaryToWriter(message: InvalidToken, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): InvalidToken
  static deserializeBinaryFromReader(message: InvalidToken, reader: jspb.BinaryReader): InvalidToken
}

export namespace InvalidToken {
  export type AsObject = {
  }
}

export class MicroBlockAppended extends jspb.Message {
  getTxsList(): managed_transaction_pb.Transaction[]
  setTxsList(value: managed_transaction_pb.Transaction[]): MicroBlockAppended
  clearTxsList(): MicroBlockAppended
  addTxs(value?: managed_transaction_pb.Transaction, index?: number): managed_transaction_pb.Transaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): MicroBlockAppended.AsObject
  static toObject(includeInstance: boolean, msg: MicroBlockAppended): MicroBlockAppended.AsObject
  static serializeBinaryToWriter(message: MicroBlockAppended, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): MicroBlockAppended
  static deserializeBinaryFromReader(message: MicroBlockAppended, reader: jspb.BinaryReader): MicroBlockAppended
}

export namespace MicroBlockAppended {
  export type AsObject = {
    txsList: managed_transaction_pb.Transaction.AsObject[],
  }
}

export class BlockAppended extends jspb.Message {
  getBlockSignature(): Uint8Array | string
  getBlockSignature_asU8(): Uint8Array
  getBlockSignature_asB64(): string
  setBlockSignature(value: Uint8Array | string): BlockAppended

  getReference(): Uint8Array | string
  getReference_asU8(): Uint8Array
  getReference_asB64(): string
  setReference(value: Uint8Array | string): BlockAppended

  getTxIdsList(): (Uint8Array | string)[]
  setTxIdsList(value: (Uint8Array | string)[]): BlockAppended
  clearTxIdsList(): BlockAppended
  addTxIds(value: Uint8Array | string, index?: number): BlockAppended

  getMinerAddress(): Uint8Array | string
  getMinerAddress_asU8(): Uint8Array
  getMinerAddress_asB64(): string
  setMinerAddress(value: Uint8Array | string): BlockAppended

  getHeight(): number
  setHeight(value: number): BlockAppended

  getVersion(): number
  setVersion(value: number): BlockAppended

  getTimestamp(): number
  setTimestamp(value: number): BlockAppended

  getFee(): number
  setFee(value: number): BlockAppended

  getBlockSize(): number
  setBlockSize(value: number): BlockAppended

  getFeaturesList(): number[]
  setFeaturesList(value: number[]): BlockAppended
  clearFeaturesList(): BlockAppended
  addFeatures(value: number, index?: number): BlockAppended

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): BlockAppended.AsObject
  static toObject(includeInstance: boolean, msg: BlockAppended): BlockAppended.AsObject
  static serializeBinaryToWriter(message: BlockAppended, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): BlockAppended
  static deserializeBinaryFromReader(message: BlockAppended, reader: jspb.BinaryReader): BlockAppended
}

export namespace BlockAppended {
  export type AsObject = {
    blockSignature: Uint8Array | string,
    reference: Uint8Array | string,
    txIdsList: (Uint8Array | string)[],
    minerAddress: Uint8Array | string,
    height: number,
    version: number,
    timestamp: number,
    fee: number,
    blockSize: number,
    featuresList: number[],
  }
}

export class RollbackCompleted extends jspb.Message {
  getReturnToBlockSignature(): Uint8Array | string
  getReturnToBlockSignature_asU8(): Uint8Array
  getReturnToBlockSignature_asB64(): string
  setReturnToBlockSignature(value: Uint8Array | string): RollbackCompleted

  getRollbackTxIdsList(): (Uint8Array | string)[]
  setRollbackTxIdsList(value: (Uint8Array | string)[]): RollbackCompleted
  clearRollbackTxIdsList(): RollbackCompleted
  addRollbackTxIds(value: Uint8Array | string, index?: number): RollbackCompleted

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RollbackCompleted.AsObject
  static toObject(includeInstance: boolean, msg: RollbackCompleted): RollbackCompleted.AsObject
  static serializeBinaryToWriter(message: RollbackCompleted, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RollbackCompleted
  static deserializeBinaryFromReader(message: RollbackCompleted, reader: jspb.BinaryReader): RollbackCompleted
}

export namespace RollbackCompleted {
  export type AsObject = {
    returnToBlockSignature: Uint8Array | string,
    rollbackTxIdsList: (Uint8Array | string)[],
  }
}

export class AppendedBlockHistory extends jspb.Message {
  getBlockSignature(): Uint8Array | string
  getBlockSignature_asU8(): Uint8Array
  getBlockSignature_asB64(): string
  setBlockSignature(value: Uint8Array | string): AppendedBlockHistory

  getReference(): Uint8Array | string
  getReference_asU8(): Uint8Array
  getReference_asB64(): string
  setReference(value: Uint8Array | string): AppendedBlockHistory

  getTxsList(): managed_transaction_pb.Transaction[]
  setTxsList(value: managed_transaction_pb.Transaction[]): AppendedBlockHistory
  clearTxsList(): AppendedBlockHistory
  addTxs(value?: managed_transaction_pb.Transaction, index?: number): managed_transaction_pb.Transaction

  getMinerAddress(): Uint8Array | string
  getMinerAddress_asU8(): Uint8Array
  getMinerAddress_asB64(): string
  setMinerAddress(value: Uint8Array | string): AppendedBlockHistory

  getHeight(): number
  setHeight(value: number): AppendedBlockHistory

  getVersion(): number
  setVersion(value: number): AppendedBlockHistory

  getTimestamp(): number
  setTimestamp(value: number): AppendedBlockHistory

  getFee(): number
  setFee(value: number): AppendedBlockHistory

  getBlockSize(): number
  setBlockSize(value: number): AppendedBlockHistory

  getFeaturesList(): number[]
  setFeaturesList(value: number[]): AppendedBlockHistory
  clearFeaturesList(): AppendedBlockHistory
  addFeatures(value: number, index?: number): AppendedBlockHistory

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AppendedBlockHistory.AsObject
  static toObject(includeInstance: boolean, msg: AppendedBlockHistory): AppendedBlockHistory.AsObject
  static serializeBinaryToWriter(message: AppendedBlockHistory, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AppendedBlockHistory
  static deserializeBinaryFromReader(message: AppendedBlockHistory, reader: jspb.BinaryReader): AppendedBlockHistory
}

export namespace AppendedBlockHistory {
  export type AsObject = {
    blockSignature: Uint8Array | string,
    reference: Uint8Array | string,
    txsList: managed_transaction_pb.Transaction.AsObject[],
    minerAddress: Uint8Array | string,
    height: number,
    version: number,
    timestamp: number,
    fee: number,
    blockSize: number,
    featuresList: number[],
  }
}

