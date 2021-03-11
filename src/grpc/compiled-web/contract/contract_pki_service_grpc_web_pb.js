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
proto.wavesenterprise = require('./contract_pki_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.PkiServiceClient =
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
proto.wavesenterprise.PkiServicePromiseClient =
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
 *   !proto.wavesenterprise.PkiSignRequest,
 *   !proto.wavesenterprise.PkiSignResponse>}
 */
const methodDescriptor_PkiService_Sign = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PkiService/Sign',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PkiSignRequest,
  proto.wavesenterprise.PkiSignResponse,
  /**
   * @param {!proto.wavesenterprise.PkiSignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PkiSignResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PkiSignRequest,
 *   !proto.wavesenterprise.PkiSignResponse>}
 */
const methodInfo_PkiService_Sign = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PkiSignResponse,
  /**
   * @param {!proto.wavesenterprise.PkiSignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PkiSignResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PkiSignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PkiSignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PkiSignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PkiServiceClient.prototype.sign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PkiService/Sign',
      request,
      metadata || {},
      methodDescriptor_PkiService_Sign,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PkiSignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PkiSignResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PkiServicePromiseClient.prototype.sign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PkiService/Sign',
      request,
      metadata || {},
      methodDescriptor_PkiService_Sign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.PkiVerifyRequest,
 *   !proto.wavesenterprise.PkiVerifyResponse>}
 */
const methodDescriptor_PkiService_Verify = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PkiService/Verify',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PkiVerifyRequest,
  proto.wavesenterprise.PkiVerifyResponse,
  /**
   * @param {!proto.wavesenterprise.PkiVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PkiVerifyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PkiVerifyRequest,
 *   !proto.wavesenterprise.PkiVerifyResponse>}
 */
const methodInfo_PkiService_Verify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PkiVerifyResponse,
  /**
   * @param {!proto.wavesenterprise.PkiVerifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PkiVerifyResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PkiVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PkiVerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PkiVerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PkiServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PkiService/Verify',
      request,
      metadata || {},
      methodDescriptor_PkiService_Verify,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PkiVerifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PkiVerifyResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PkiServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PkiService/Verify',
      request,
      metadata || {},
      methodDescriptor_PkiService_Verify);
};


module.exports = proto.wavesenterprise;

