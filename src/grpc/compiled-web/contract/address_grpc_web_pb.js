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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var data_entry_pb = require('../data_entry_pb.js')
const proto = {};
proto.wavesenterprise = require('./address_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.AddressServiceClient =
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
proto.wavesenterprise.AddressServicePromiseClient =
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
 *   !proto.wavesenterprise.AddressesResponse>}
 */
const methodDescriptor_AddressService_GetAddresses = new grpc.web.MethodDescriptor(
  '/wavesenterprise.AddressService/GetAddresses',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.wavesenterprise.AddressesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.wavesenterprise.AddressesResponse>}
 */
const methodInfo_AddressService_GetAddresses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.AddressesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressesResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.AddressesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.AddressesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.AddressServiceClient.prototype.getAddresses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.AddressService/GetAddresses',
      request,
      metadata || {},
      methodDescriptor_AddressService_GetAddresses,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.AddressesResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.AddressServicePromiseClient.prototype.getAddresses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.AddressService/GetAddresses',
      request,
      metadata || {},
      methodDescriptor_AddressService_GetAddresses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.AddressDataRequest,
 *   !proto.wavesenterprise.AddressDataResponse>}
 */
const methodDescriptor_AddressService_GetAddressData = new grpc.web.MethodDescriptor(
  '/wavesenterprise.AddressService/GetAddressData',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.AddressDataRequest,
  proto.wavesenterprise.AddressDataResponse,
  /**
   * @param {!proto.wavesenterprise.AddressDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.AddressDataRequest,
 *   !proto.wavesenterprise.AddressDataResponse>}
 */
const methodInfo_AddressService_GetAddressData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.AddressDataResponse,
  /**
   * @param {!proto.wavesenterprise.AddressDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressDataResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.AddressDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.AddressDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.AddressDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.AddressServiceClient.prototype.getAddressData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.AddressService/GetAddressData',
      request,
      metadata || {},
      methodDescriptor_AddressService_GetAddressData,
      callback);
};


/**
 * @param {!proto.wavesenterprise.AddressDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.AddressDataResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.AddressServicePromiseClient.prototype.getAddressData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.AddressService/GetAddressData',
      request,
      metadata || {},
      methodDescriptor_AddressService_GetAddressData);
};


module.exports = proto.wavesenterprise;

