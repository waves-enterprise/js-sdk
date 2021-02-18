import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'
import * as constants_pb from '../constants_pb'


export class NodeConfigResponse extends jspb.Message {
  getVersion(): string
  setVersion(value: string): NodeConfigResponse

  getCryptoType(): constants_pb.CryptoType
  setCryptoType(value: constants_pb.CryptoType): NodeConfigResponse

  getChainId(): number
  setChainId(value: number): NodeConfigResponse

  getConsensus(): constants_pb.ConsensusType
  setConsensus(value: constants_pb.ConsensusType): NodeConfigResponse

  getMinimumFeeMap(): jspb.Map<string, number>
  clearMinimumFeeMap(): NodeConfigResponse

  getAdditionalFeeMap(): jspb.Map<string, number>
  clearAdditionalFeeMap(): NodeConfigResponse

  getMaxTransactionsInMicroBlock(): number
  setMaxTransactionsInMicroBlock(value: number): NodeConfigResponse

  getMinMicroBlockAge(): google_protobuf_duration_pb.Duration | undefined
  setMinMicroBlockAge(value?: google_protobuf_duration_pb.Duration): NodeConfigResponse
  hasMinMicroBlockAge(): boolean
  clearMinMicroBlockAge(): NodeConfigResponse

  getMicroBlockInterval(): google_protobuf_duration_pb.Duration | undefined
  setMicroBlockInterval(value?: google_protobuf_duration_pb.Duration): NodeConfigResponse
  hasMicroBlockInterval(): boolean
  clearMicroBlockInterval(): NodeConfigResponse

  getPoaRoundInfo(): PoaRoundInfo | undefined
  setPoaRoundInfo(value?: PoaRoundInfo): NodeConfigResponse
  hasPoaRoundInfo(): boolean
  clearPoaRoundInfo(): NodeConfigResponse

  getPosRoundInfo(): PosRoundInfo | undefined
  setPosRoundInfo(value?: PosRoundInfo): NodeConfigResponse
  hasPosRoundInfo(): boolean
  clearPosRoundInfo(): NodeConfigResponse

  getBlockTimingCase(): NodeConfigResponse.BlockTimingCase

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): NodeConfigResponse.AsObject
  static toObject(includeInstance: boolean, msg: NodeConfigResponse): NodeConfigResponse.AsObject
  static serializeBinaryToWriter(message: NodeConfigResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): NodeConfigResponse
  static deserializeBinaryFromReader(message: NodeConfigResponse, reader: jspb.BinaryReader): NodeConfigResponse
}

export namespace NodeConfigResponse {
  export type AsObject = {
    version: string,
    cryptoType: constants_pb.CryptoType,
    chainId: number,
    consensus: constants_pb.ConsensusType,
    minimumFeeMap: [string, number][],
    additionalFeeMap: [string, number][],
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
  getRoundDuration(): google_protobuf_duration_pb.Duration | undefined
  setRoundDuration(value?: google_protobuf_duration_pb.Duration): PoaRoundInfo
  hasRoundDuration(): boolean
  clearRoundDuration(): PoaRoundInfo

  getSyncDuration(): google_protobuf_duration_pb.Duration | undefined
  setSyncDuration(value?: google_protobuf_duration_pb.Duration): PoaRoundInfo
  hasSyncDuration(): boolean
  clearSyncDuration(): PoaRoundInfo

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PoaRoundInfo.AsObject
  static toObject(includeInstance: boolean, msg: PoaRoundInfo): PoaRoundInfo.AsObject
  static serializeBinaryToWriter(message: PoaRoundInfo, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PoaRoundInfo
  static deserializeBinaryFromReader(message: PoaRoundInfo, reader: jspb.BinaryReader): PoaRoundInfo
}

export namespace PoaRoundInfo {
  export type AsObject = {
    roundDuration?: google_protobuf_duration_pb.Duration.AsObject,
    syncDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class PosRoundInfo extends jspb.Message {
  getAverageBlockDelay(): google_protobuf_duration_pb.Duration | undefined
  setAverageBlockDelay(value?: google_protobuf_duration_pb.Duration): PosRoundInfo
  hasAverageBlockDelay(): boolean
  clearAverageBlockDelay(): PosRoundInfo

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): PosRoundInfo.AsObject
  static toObject(includeInstance: boolean, msg: PosRoundInfo): PosRoundInfo.AsObject
  static serializeBinaryToWriter(message: PosRoundInfo, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): PosRoundInfo
  static deserializeBinaryFromReader(message: PosRoundInfo, reader: jspb.BinaryReader): PosRoundInfo
}

export namespace PosRoundInfo {
  export type AsObject = {
    averageBlockDelay?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

