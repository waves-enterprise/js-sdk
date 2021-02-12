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
proto.wavesenterprise = require('./permission_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.PermissionServiceClient =
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
proto.wavesenterprise.PermissionServicePromiseClient =
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
 *   !proto.wavesenterprise.PermissionsRequest,
 *   !proto.wavesenterprise.PermissionsResponse>}
 */
const methodDescriptor_PermissionService_GetPermissions = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PermissionService/GetPermissions',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PermissionsRequest,
  proto.wavesenterprise.PermissionsResponse,
  /**
   * @param {!proto.wavesenterprise.PermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PermissionsRequest,
 *   !proto.wavesenterprise.PermissionsResponse>}
 */
const methodInfo_PermissionService_GetPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PermissionsResponse,
  /**
   * @param {!proto.wavesenterprise.PermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PermissionServiceClient.prototype.getPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PermissionService/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_PermissionService_GetPermissions,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PermissionServicePromiseClient.prototype.getPermissions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PermissionService/GetPermissions',
      request,
      metadata || {},
      methodDescriptor_PermissionService_GetPermissions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.AddressesPermissionsRequest,
 *   !proto.wavesenterprise.AddressesPermissionsResponse>}
 */
const methodDescriptor_PermissionService_GetPermissionsForAddresses = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PermissionService/GetPermissionsForAddresses',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.AddressesPermissionsRequest,
  proto.wavesenterprise.AddressesPermissionsResponse,
  /**
   * @param {!proto.wavesenterprise.AddressesPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressesPermissionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.AddressesPermissionsRequest,
 *   !proto.wavesenterprise.AddressesPermissionsResponse>}
 */
const methodInfo_PermissionService_GetPermissionsForAddresses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.AddressesPermissionsResponse,
  /**
   * @param {!proto.wavesenterprise.AddressesPermissionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.AddressesPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.AddressesPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.AddressesPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.AddressesPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PermissionServiceClient.prototype.getPermissionsForAddresses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PermissionService/GetPermissionsForAddresses',
      request,
      metadata || {},
      methodDescriptor_PermissionService_GetPermissionsForAddresses,
      callback);
};


/**
 * @param {!proto.wavesenterprise.AddressesPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.AddressesPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PermissionServicePromiseClient.prototype.getPermissionsForAddresses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PermissionService/GetPermissionsForAddresses',
      request,
      metadata || {},
      methodDescriptor_PermissionService_GetPermissionsForAddresses);
};


module.exports = proto.wavesenterprise;

