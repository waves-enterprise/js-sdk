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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.wavesenterprise = require('./contract_util_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.UtilServiceClient =
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
proto.wavesenterprise.UtilServicePromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.wavesenterprise.NodeTimeResponse>}
 */
const methodDescriptor_UtilService_GetNodeTime = new grpc.web.MethodDescriptor(
  '/wavesenterprise.UtilService/GetNodeTime',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.wavesenterprise.NodeTimeResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.NodeTimeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.wavesenterprise.NodeTimeResponse>}
 */
const methodInfo_UtilService_GetNodeTime = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.NodeTimeResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.NodeTimeResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.NodeTimeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.NodeTimeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.UtilServiceClient.prototype.getNodeTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.UtilService/GetNodeTime',
      request,
      metadata || {},
      methodDescriptor_UtilService_GetNodeTime,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.NodeTimeResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.UtilServicePromiseClient.prototype.getNodeTime =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.UtilService/GetNodeTime',
      request,
      metadata || {},
      methodDescriptor_UtilService_GetNodeTime);
};


module.exports = proto.wavesenterprise;

