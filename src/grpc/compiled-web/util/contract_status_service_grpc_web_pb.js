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
const proto = {};
proto.wavesenterprise = require('./contract_status_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.ContractStatusServiceClient =
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
proto.wavesenterprise.ContractStatusServicePromiseClient =
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
 *   !proto.wavesenterprise.ContractExecutionRequest,
 *   !proto.wavesenterprise.ContractExecutionResponse>}
 */
const methodDescriptor_ContractStatusService_ContractExecutionStatuses = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractStatusService/ContractExecutionStatuses',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wavesenterprise.ContractExecutionRequest,
  proto.wavesenterprise.ContractExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ContractExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractExecutionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ContractExecutionRequest,
 *   !proto.wavesenterprise.ContractExecutionResponse>}
 */
const methodInfo_ContractStatusService_ContractExecutionStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.ContractExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ContractExecutionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractExecutionResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ContractExecutionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractExecutionResponse>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractStatusServiceClient.prototype.contractExecutionStatuses =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.ContractStatusService/ContractExecutionStatuses',
      request,
      metadata || {},
      methodDescriptor_ContractStatusService_ContractExecutionStatuses);
};


/**
 * @param {!proto.wavesenterprise.ContractExecutionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractExecutionResponse>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractStatusServicePromiseClient.prototype.contractExecutionStatuses =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.ContractStatusService/ContractExecutionStatuses',
      request,
      metadata || {},
      methodDescriptor_ContractStatusService_ContractExecutionStatuses);
};


module.exports = proto.wavesenterprise;

