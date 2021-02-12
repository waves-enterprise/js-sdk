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


var managed_transaction_pb = require('../managed/transaction_pb.js')
const proto = {};
proto.wavesenterprise = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.TransactionServiceClient =
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
proto.wavesenterprise.TransactionServicePromiseClient =
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
 *   !proto.wavesenterprise.TransactionExistsRequest,
 *   !proto.wavesenterprise.TransactionExistsResponse>}
 */
const methodDescriptor_TransactionService_TransactionExists = new grpc.web.MethodDescriptor(
  '/wavesenterprise.TransactionService/TransactionExists',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.TransactionExistsRequest,
  proto.wavesenterprise.TransactionExistsResponse,
  /**
   * @param {!proto.wavesenterprise.TransactionExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.TransactionExistsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.TransactionExistsRequest,
 *   !proto.wavesenterprise.TransactionExistsResponse>}
 */
const methodInfo_TransactionService_TransactionExists = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.TransactionExistsResponse,
  /**
   * @param {!proto.wavesenterprise.TransactionExistsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.TransactionExistsResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.TransactionExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.TransactionExistsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.TransactionExistsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.TransactionServiceClient.prototype.transactionExists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.TransactionService/TransactionExists',
      request,
      metadata || {},
      methodDescriptor_TransactionService_TransactionExists,
      callback);
};


/**
 * @param {!proto.wavesenterprise.TransactionExistsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.TransactionExistsResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.TransactionServicePromiseClient.prototype.transactionExists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.TransactionService/TransactionExists',
      request,
      metadata || {},
      methodDescriptor_TransactionService_TransactionExists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.TransactionInfoRequest,
 *   !proto.wavesenterprise.TransactionInfoResponse>}
 */
const methodDescriptor_TransactionService_TransactionInfo = new grpc.web.MethodDescriptor(
  '/wavesenterprise.TransactionService/TransactionInfo',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.TransactionInfoRequest,
  proto.wavesenterprise.TransactionInfoResponse,
  /**
   * @param {!proto.wavesenterprise.TransactionInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.TransactionInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.TransactionInfoRequest,
 *   !proto.wavesenterprise.TransactionInfoResponse>}
 */
const methodInfo_TransactionService_TransactionInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.TransactionInfoResponse,
  /**
   * @param {!proto.wavesenterprise.TransactionInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.TransactionInfoResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.TransactionInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.TransactionInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.TransactionInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.TransactionServiceClient.prototype.transactionInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.TransactionService/TransactionInfo',
      request,
      metadata || {},
      methodDescriptor_TransactionService_TransactionInfo,
      callback);
};


/**
 * @param {!proto.wavesenterprise.TransactionInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.TransactionInfoResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.TransactionServicePromiseClient.prototype.transactionInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.TransactionService/TransactionInfo',
      request,
      metadata || {},
      methodDescriptor_TransactionService_TransactionInfo);
};


module.exports = proto.wavesenterprise;

