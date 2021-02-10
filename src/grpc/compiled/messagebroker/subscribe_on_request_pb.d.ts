// package: wavesenterprise
// file: messagebroker/subscribe_on_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class SubscribeOnRequest extends jspb.Message {
  hasGenesisBlock(): boolean;
  clearGenesisBlock(): void;
  getGenesisBlock(): GenesisBlock | undefined;
  setGenesisBlock(value?: GenesisBlock): void;

  hasBlockSignature(): boolean;
  clearBlockSignature(): void;
  getBlockSignature(): BlockSignature | undefined;
  setBlockSignature(value?: BlockSignature): void;

  hasCurrentEvent(): boolean;
  clearCurrentEvent(): void;
  getCurrentEvent(): CurrentEvent | undefined;
  setCurrentEvent(value?: CurrentEvent): void;

  clearEventsFiltersList(): void;
  getEventsFiltersList(): Array<EventsFilter>;
  setEventsFiltersList(value: Array<EventsFilter>): void;
  addEventsFilters(value?: EventsFilter, index?: number): EventsFilter;

  getStartFromCase(): SubscribeOnRequest.StartFromCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOnRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOnRequest): SubscribeOnRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOnRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOnRequest;
  static deserializeBinaryFromReader(message: SubscribeOnRequest, reader: jspb.BinaryReader): SubscribeOnRequest;
}

export namespace SubscribeOnRequest {
  export type AsObject = {
    genesisBlock?: GenesisBlock.AsObject,
    blockSignature?: BlockSignature.AsObject,
    currentEvent?: CurrentEvent.AsObject,
    eventsFiltersList: Array<EventsFilter.AsObject>,
  }

  export enum StartFromCase {
    START_FROM_NOT_SET = 0,
    GENESIS_BLOCK = 101,
    BLOCK_SIGNATURE = 102,
    CURRENT_EVENT = 103,
  }
}

export class GenesisBlock extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisBlock.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisBlock): GenesisBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisBlock;
  static deserializeBinaryFromReader(message: GenesisBlock, reader: jspb.BinaryReader): GenesisBlock;
}

export namespace GenesisBlock {
  export type AsObject = {
  }
}

export class BlockSignature extends jspb.Message {
  hasLastBlockSignature(): boolean;
  clearLastBlockSignature(): void;
  getLastBlockSignature(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setLastBlockSignature(value?: google_protobuf_wrappers_pb.BytesValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BlockSignature): BlockSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockSignature;
  static deserializeBinaryFromReader(message: BlockSignature, reader: jspb.BinaryReader): BlockSignature;
}

export namespace BlockSignature {
  export type AsObject = {
    lastBlockSignature?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }
}

export class CurrentEvent extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentEvent): CurrentEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentEvent;
  static deserializeBinaryFromReader(message: CurrentEvent, reader: jspb.BinaryReader): CurrentEvent;
}

export namespace CurrentEvent {
  export type AsObject = {
  }
}

export class EventsFilter extends jspb.Message {
  hasFilterIn(): boolean;
  clearFilterIn(): void;
  getFilterIn(): EventsFilter.FilterIn | undefined;
  setFilterIn(value?: EventsFilter.FilterIn): void;

  hasFilterOut(): boolean;
  clearFilterOut(): void;
  getFilterOut(): EventsFilter.FilterOut | undefined;
  setFilterOut(value?: EventsFilter.FilterOut): void;

  hasTxTypeFilter(): boolean;
  clearTxTypeFilter(): void;
  getTxTypeFilter(): TxTypeFilter | undefined;
  setTxTypeFilter(value?: TxTypeFilter): void;

  hasContractIdFilter(): boolean;
  clearContractIdFilter(): void;
  getContractIdFilter(): ContractIdFilter | undefined;
  setContractIdFilter(value?: ContractIdFilter): void;

  getFilterTypeCase(): EventsFilter.FilterTypeCase;
  getEventsFilterCase(): EventsFilter.EventsFilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: EventsFilter): EventsFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventsFilter;
  static deserializeBinaryFromReader(message: EventsFilter, reader: jspb.BinaryReader): EventsFilter;
}

export namespace EventsFilter {
  export type AsObject = {
    filterIn?: EventsFilter.FilterIn.AsObject,
    filterOut?: EventsFilter.FilterOut.AsObject,
    txTypeFilter?: TxTypeFilter.AsObject,
    contractIdFilter?: ContractIdFilter.AsObject,
  }

  export class FilterIn extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterIn.AsObject;
    static toObject(includeInstance: boolean, msg: FilterIn): FilterIn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterIn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterIn;
    static deserializeBinaryFromReader(message: FilterIn, reader: jspb.BinaryReader): FilterIn;
  }

  export namespace FilterIn {
    export type AsObject = {
    }
  }

  export class FilterOut extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterOut.AsObject;
    static toObject(includeInstance: boolean, msg: FilterOut): FilterOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterOut;
    static deserializeBinaryFromReader(message: FilterOut, reader: jspb.BinaryReader): FilterOut;
  }

  export namespace FilterOut {
    export type AsObject = {
    }
  }

  export enum FilterTypeCase {
    FILTER_TYPE_NOT_SET = 0,
    FILTER_IN = 1,
    FILTER_OUT = 2,
  }

  export enum EventsFilterCase {
    EVENTS_FILTER_NOT_SET = 0,
    TX_TYPE_FILTER = 101,
    CONTRACT_ID_FILTER = 102,
  }
}

export class TxTypeFilter extends jspb.Message {
  clearTxTypesList(): void;
  getTxTypesList(): Array<number>;
  setTxTypesList(value: Array<number>): void;
  addTxTypes(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxTypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TxTypeFilter): TxTypeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxTypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxTypeFilter;
  static deserializeBinaryFromReader(message: TxTypeFilter, reader: jspb.BinaryReader): TxTypeFilter;
}

export namespace TxTypeFilter {
  export type AsObject = {
    txTypesList: Array<number>,
  }
}

export class ContractIdFilter extends jspb.Message {
  clearContractIdsList(): void;
  getContractIdsList(): Array<Uint8Array | string>;
  getContractIdsList_asU8(): Array<Uint8Array>;
  getContractIdsList_asB64(): Array<string>;
  setContractIdsList(value: Array<Uint8Array | string>): void;
  addContractIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractIdFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ContractIdFilter): ContractIdFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractIdFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractIdFilter;
  static deserializeBinaryFromReader(message: ContractIdFilter, reader: jspb.BinaryReader): ContractIdFilter;
}

export namespace ContractIdFilter {
  export type AsObject = {
    contractIdsList: Array<Uint8Array | string>,
  }
}

