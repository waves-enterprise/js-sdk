/**
 * @fileoverview gRPC-Web generated client stub for wavesenterprise
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var constants_pb = require('../constants_pb.js')
const proto = {};
proto.wavesenterprise = require('./contract_crypto_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.CryptoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.CryptoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.EncryptDataRequest,
 *   !proto.wavesenterprise.EncryptSeparateResponse>}
 */
const methodDescriptor_CryptoService_EncryptSeparate = new grpc.web.MethodDescriptor(
  '/wavesenterprise.CryptoService/EncryptSeparate',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.EncryptDataRequest,
  proto.wavesenterprise.EncryptSeparateResponse,
  /**
   * @param {!proto.wavesenterprise.EncryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.EncryptSeparateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.EncryptDataRequest,
 *   !proto.wavesenterprise.EncryptSeparateResponse>}
 */
const methodInfo_CryptoService_EncryptSeparate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.EncryptSeparateResponse,
  /**
   * @param {!proto.wavesenterprise.EncryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.EncryptSeparateResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.EncryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.EncryptSeparateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.EncryptSeparateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.CryptoServiceClient.prototype.encryptSeparate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.CryptoService/EncryptSeparate',
      request,
      metadata || {},
      methodDescriptor_CryptoService_EncryptSeparate,
      callback);
};


/**
 * @param {!proto.wavesenterprise.EncryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.EncryptSeparateResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.CryptoServicePromiseClient.prototype.encryptSeparate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.CryptoService/EncryptSeparate',
      request,
      metadata || {},
      methodDescriptor_CryptoService_EncryptSeparate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.EncryptDataRequest,
 *   !proto.wavesenterprise.EncryptedForManyResponse>}
 */
const methodDescriptor_CryptoService_EncryptCommon = new grpc.web.MethodDescriptor(
  '/wavesenterprise.CryptoService/EncryptCommon',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.EncryptDataRequest,
  proto.wavesenterprise.EncryptedForManyResponse,
  /**
   * @param {!proto.wavesenterprise.EncryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.EncryptedForManyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.EncryptDataRequest,
 *   !proto.wavesenterprise.EncryptedForManyResponse>}
 */
const methodInfo_CryptoService_EncryptCommon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.EncryptedForManyResponse,
  /**
   * @param {!proto.wavesenterprise.EncryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.EncryptedForManyResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.EncryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.EncryptedForManyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.EncryptedForManyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.CryptoServiceClient.prototype.encryptCommon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.CryptoService/EncryptCommon',
      request,
      metadata || {},
      methodDescriptor_CryptoService_EncryptCommon,
      callback);
};


/**
 * @param {!proto.wavesenterprise.EncryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.EncryptedForManyResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.CryptoServicePromiseClient.prototype.encryptCommon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.CryptoService/EncryptCommon',
      request,
      metadata || {},
      methodDescriptor_CryptoService_EncryptCommon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.DecryptDataRequest,
 *   !proto.wavesenterprise.DecryptDataResponse>}
 */
const methodDescriptor_CryptoService_Decrypt = new grpc.web.MethodDescriptor(
  '/wavesenterprise.CryptoService/Decrypt',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.DecryptDataRequest,
  proto.wavesenterprise.DecryptDataResponse,
  /**
   * @param {!proto.wavesenterprise.DecryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.DecryptDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.DecryptDataRequest,
 *   !proto.wavesenterprise.DecryptDataResponse>}
 */
const methodInfo_CryptoService_Decrypt = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.DecryptDataResponse,
  /**
   * @param {!proto.wavesenterprise.DecryptDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.DecryptDataResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.DecryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.DecryptDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.DecryptDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.CryptoServiceClient.prototype.decrypt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.CryptoService/Decrypt',
      request,
      metadata || {},
      methodDescriptor_CryptoService_Decrypt,
      callback);
};


/**
 * @param {!proto.wavesenterprise.DecryptDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.DecryptDataResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.CryptoServicePromiseClient.prototype.decrypt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.CryptoService/Decrypt',
      request,
      metadata || {},
      methodDescriptor_CryptoService_Decrypt);
};


module.exports = proto.wavesenterprise;

