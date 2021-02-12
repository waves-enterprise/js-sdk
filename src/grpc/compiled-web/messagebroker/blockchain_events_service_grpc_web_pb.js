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

var messagebroker_blockchain_event_pb = require('../messagebroker/blockchain_event_pb.js')

var messagebroker_subscribe_on_request_pb = require('../messagebroker/subscribe_on_request_pb.js')
const proto = {};
proto.wavesenterprise = require('./blockchain_events_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.BlockchainEventsServiceClient =
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
proto.wavesenterprise.BlockchainEventsServicePromiseClient =
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
 *   !proto.wavesenterprise.SubscribeOnRequest,
 *   !proto.wavesenterprise.BlockchainEvent>}
 */
const methodDescriptor_BlockchainEventsService_SubscribeOn = new grpc.web.MethodDescriptor(
  '/wavesenterprise.BlockchainEventsService/SubscribeOn',
  grpc.web.MethodType.SERVER_STREAMING,
  messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
  messagebroker_blockchain_event_pb.BlockchainEvent,
  /**
   * @param {!proto.wavesenterprise.SubscribeOnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messagebroker_blockchain_event_pb.BlockchainEvent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.SubscribeOnRequest,
 *   !proto.wavesenterprise.BlockchainEvent>}
 */
const methodInfo_BlockchainEventsService_SubscribeOn = new grpc.web.AbstractClientBase.MethodInfo(
  messagebroker_blockchain_event_pb.BlockchainEvent,
  /**
   * @param {!proto.wavesenterprise.SubscribeOnRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messagebroker_blockchain_event_pb.BlockchainEvent.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.SubscribeOnRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.BlockchainEvent>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.BlockchainEventsServiceClient.prototype.subscribeOn =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.BlockchainEventsService/SubscribeOn',
      request,
      metadata || {},
      methodDescriptor_BlockchainEventsService_SubscribeOn);
};


/**
 * @param {!proto.wavesenterprise.SubscribeOnRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.BlockchainEvent>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.BlockchainEventsServicePromiseClient.prototype.subscribeOn =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.BlockchainEventsService/SubscribeOn',
      request,
      metadata || {},
      methodDescriptor_BlockchainEventsService_SubscribeOn);
};


module.exports = proto.wavesenterprise;

