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


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var constants_pb = require('../constants_pb.js')
const proto = {};
proto.wavesenterprise = require('./node_info_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.NodeInfoServiceClient =
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
proto.wavesenterprise.NodeInfoServicePromiseClient =
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
 *   !proto.wavesenterprise.NodeConfigResponse>}
 */
const methodDescriptor_NodeInfoService_NodeConfig = new grpc.web.MethodDescriptor(
  '/wavesenterprise.NodeInfoService/NodeConfig',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.wavesenterprise.NodeConfigResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.NodeConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.wavesenterprise.NodeConfigResponse>}
 */
const methodInfo_NodeInfoService_NodeConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.NodeConfigResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.NodeConfigResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.NodeConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.NodeConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.NodeInfoServiceClient.prototype.nodeConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.NodeInfoService/NodeConfig',
      request,
      metadata || {},
      methodDescriptor_NodeInfoService_NodeConfig,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.NodeConfigResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.NodeInfoServicePromiseClient.prototype.nodeConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.NodeInfoService/NodeConfig',
      request,
      metadata || {},
      methodDescriptor_NodeInfoService_NodeConfig);
};


module.exports = proto.wavesenterprise;

