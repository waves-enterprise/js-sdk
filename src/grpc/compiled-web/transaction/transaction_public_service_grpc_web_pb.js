/**
 * @fileoverview gRPC-Web generated client stub for wavesenterprise.grpc
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
proto.wavesenterprise = {};
proto.wavesenterprise.grpc = require('./transaction_public_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.grpc.TransactionPublicServiceClient =
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
proto.wavesenterprise.grpc.TransactionPublicServicePromiseClient =
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
 *   !proto.wavesenterprise.Transaction,
 *   !proto.wavesenterprise.Transaction>}
 */
const methodDescriptor_TransactionPublicService_Broadcast = new grpc.web.MethodDescriptor(
  '/wavesenterprise.grpc.TransactionPublicService/Broadcast',
  grpc.web.MethodType.UNARY,
  managed_transaction_pb.Transaction,
  managed_transaction_pb.Transaction,
  /**
   * @param {!proto.wavesenterprise.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  managed_transaction_pb.Transaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.Transaction,
 *   !proto.wavesenterprise.Transaction>}
 */
const methodInfo_TransactionPublicService_Broadcast = new grpc.web.AbstractClientBase.MethodInfo(
  managed_transaction_pb.Transaction,
  /**
   * @param {!proto.wavesenterprise.Transaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  managed_transaction_pb.Transaction.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.grpc.TransactionPublicServiceClient.prototype.broadcast =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.grpc.TransactionPublicService/Broadcast',
      request,
      metadata || {},
      methodDescriptor_TransactionPublicService_Broadcast,
      callback);
};


/**
 * @param {!proto.wavesenterprise.Transaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.Transaction>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.grpc.TransactionPublicServicePromiseClient.prototype.broadcast =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.grpc.TransactionPublicService/Broadcast',
      request,
      metadata || {},
      methodDescriptor_TransactionPublicService_Broadcast);
};


module.exports = proto.wavesenterprise.grpc;

