// package: wavesenterprise
// file: util/util_node_info_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as constants_pb from "../constants_pb";

export class NodeConfigResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getCryptoType(): constants_pb.CryptoTypeMap[keyof constants_pb.CryptoTypeMap];
  setCryptoType(value: constants_pb.CryptoTypeMap[keyof constants_pb.CryptoTypeMap]): void;

  getChainId(): number;
  setChainId(value: number): void;

  getConsensus(): constants_pb.ConsensusTypeMap[keyof constants_pb.ConsensusTypeMap];
  setConsensus(value: constants_pb.ConsensusTypeMap[keyof constants_pb.ConsensusTypeMap]): void;

  getMinimumFeeMap(): jspb.Map<string, number>;
  clearMinimumFeeMap(): void;
  getAdditionalFeeMap(): jspb.Map<string, number>;
  clearAdditionalFeeMap(): void;
  getMaxTransactionsInMicroBlock(): number;
  setMaxTransactionsInMicroBlock(value: number): void;

  hasMinMicroBlockAge(): boolean;
  clearMinMicroBlockAge(): void;
  getMinMicroBlockAge(): google_protobuf_duration_pb.Duration | undefined;
  setMinMicroBlockAge(value?: google_protobuf_duration_pb.Duration): void;

  hasMicroBlockInterval(): boolean;
  clearMicroBlockInterval(): void;
  getMicroBlockInterval(): google_protobuf_duration_pb.Duration | undefined;
  setMicroBlockInterval(value?: google_protobuf_duration_pb.Duration): void;

  hasPoaRoundInfo(): boolean;
  clearPoaRoundInfo(): void;
  getPoaRoundInfo(): PoaRoundInfo | undefined;
  setPoaRoundInfo(value?: PoaRoundInfo): void;

  hasPosRoundInfo(): boolean;
  clearPosRoundInfo(): void;
  getPosRoundInfo(): PosRoundInfo | undefined;
  setPosRoundInfo(value?: PosRoundInfo): void;

  getBlockTimingCase(): NodeConfigResponse.BlockTimingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfigResponse): NodeConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfigResponse;
  static deserializeBinaryFromReader(message: NodeConfigResponse, reader: jspb.BinaryReader): NodeConfigResponse;
}

export namespace NodeConfigResponse {
  export type AsObject = {
    version: string,
    cryptoType: constants_pb.CryptoTypeMap[keyof constants_pb.CryptoTypeMap],
    chainId: number,
    consensus: constants_pb.ConsensusTypeMap[keyof constants_pb.ConsensusTypeMap],
    minimumFeeMap: Array<[string, number]>,
    additionalFeeMap: Array<[string, number]>,
    maxTransactionsInMicroBlock: number,
    minMicroBlockAge?: google_protobuf_duration_pb.Duration.AsObject,
    microBlockInterval?: google_protobuf_duration_pb.Duration.AsObject,
    poaRoundInfo?: PoaRoundInfo.AsObject,
    posRoundInfo?: PosRoundInfo.AsObject,
  }

  export enum BlockTimingCase {
    BLOCK_TIMING_NOT_SET = 0,
    POA_ROUND_INFO = 101,
    POS_ROUND_INFO = 102,
  }
}

export class PoaRoundInfo extends jspb.Message {
  hasRoundDuration(): boolean;
  clearRoundDuration(): void;
  getRoundDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRoundDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasSyncDuration(): boolean;
  clearSyncDuration(): void;
  getSyncDuration(): google_protobuf_duration_pb.Duration | undefined;
  setSyncDuration(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PoaRoundInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PoaRoundInfo): PoaRoundInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PoaRoundInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PoaRoundInfo;
  static deserializeBinaryFromReader(message: PoaRoundInfo, reader: jspb.BinaryReader): PoaRoundInfo;
}

export namespace PoaRoundInfo {
  export type AsObject = {
    roundDuration?: google_protobuf_duration_pb.Duration.AsObject,
    syncDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class PosRoundInfo extends jspb.Message {
  hasAverageBlockDelay(): boolean;
  clearAverageBlockDelay(): void;
  getAverageBlockDelay(): google_protobuf_duration_pb.Duration | undefined;
  setAverageBlockDelay(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PosRoundInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PosRoundInfo): PosRoundInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PosRoundInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PosRoundInfo;
  static deserializeBinaryFromReader(message: PosRoundInfo, reader: jspb.BinaryReader): PosRoundInfo;
}

export namespace PosRoundInfo {
  export type AsObject = {
    averageBlockDelay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

