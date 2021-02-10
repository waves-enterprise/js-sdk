// package: wavesenterprise
// file: constants.proto

import * as jspb from "google-protobuf";

export interface CryptoAlgoMap {
  UNKNOWN_CRYPTO_ALGO: 0;
  GOST_28147: 1;
  GOST_3412_2015_K: 2;
  AES: 3;
}

export const CryptoAlgo: CryptoAlgoMap;

export interface CryptoTypeMap {
  UNKNOWN_CRYPTO_TYPE: 0;
  GOST: 1;
  CURVE_25519: 2;
}

export const CryptoType: CryptoTypeMap;

export interface ConsensusTypeMap {
  UNKNOWN_CONSENSUS_TYPE: 0;
  POA: 1;
  POS: 2;
  CFT: 3;
}

export const ConsensusType: ConsensusTypeMap;

