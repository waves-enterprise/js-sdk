// source: constants.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.wavesenterprise.ConsensusType', null, global);
goog.exportSymbol('proto.wavesenterprise.CryptoAlgo', null, global);
goog.exportSymbol('proto.wavesenterprise.CryptoType', null, global);
/**
 * @enum {number}
 */
proto.wavesenterprise.CryptoAlgo = {
  UNKNOWN_CRYPTO_ALGO: 0,
  GOST_28147: 1,
  GOST_3412_2015_K: 2,
  AES: 3
};

/**
 * @enum {number}
 */
proto.wavesenterprise.CryptoType = {
  UNKNOWN_CRYPTO_TYPE: 0,
  GOST: 1,
  CURVE_25519: 2
};

/**
 * @enum {number}
 */
proto.wavesenterprise.ConsensusType = {
  UNKNOWN_CONSENSUS_TYPE: 0,
  POA: 1,
  POS: 2,
  CFT: 3
};

goog.object.extend(exports, proto.wavesenterprise);
