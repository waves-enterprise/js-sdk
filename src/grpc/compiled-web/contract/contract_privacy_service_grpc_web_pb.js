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

const proto = {};
proto.wavesenterprise = require('./contract_privacy_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.PrivacyServiceClient =
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
proto.wavesenterprise.PrivacyServicePromiseClient =
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
 *   !proto.wavesenterprise.PolicyRecipientsRequest,
 *   !proto.wavesenterprise.PolicyRecipientsResponse>}
 */
const methodDescriptor_PrivacyService_GetPolicyRecipients = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PrivacyService/GetPolicyRecipients',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PolicyRecipientsRequest,
  proto.wavesenterprise.PolicyRecipientsResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyRecipientsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyRecipientsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PolicyRecipientsRequest,
 *   !proto.wavesenterprise.PolicyRecipientsResponse>}
 */
const methodInfo_PrivacyService_GetPolicyRecipients = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PolicyRecipientsResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyRecipientsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyRecipientsResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PolicyRecipientsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PolicyRecipientsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PolicyRecipientsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PrivacyServiceClient.prototype.getPolicyRecipients =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyRecipients',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyRecipients,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PolicyRecipientsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PolicyRecipientsResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PrivacyServicePromiseClient.prototype.getPolicyRecipients =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyRecipients',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyRecipients);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.PolicyOwnersRequest,
 *   !proto.wavesenterprise.PolicyOwnersResponse>}
 */
const methodDescriptor_PrivacyService_GetPolicyOwners = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PrivacyService/GetPolicyOwners',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PolicyOwnersRequest,
  proto.wavesenterprise.PolicyOwnersResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyOwnersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyOwnersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PolicyOwnersRequest,
 *   !proto.wavesenterprise.PolicyOwnersResponse>}
 */
const methodInfo_PrivacyService_GetPolicyOwners = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PolicyOwnersResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyOwnersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyOwnersResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PolicyOwnersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PolicyOwnersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PolicyOwnersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PrivacyServiceClient.prototype.getPolicyOwners =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyOwners',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyOwners,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PolicyOwnersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PolicyOwnersResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PrivacyServicePromiseClient.prototype.getPolicyOwners =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyOwners',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyOwners);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.PolicyHashesRequest,
 *   !proto.wavesenterprise.PolicyHashesResponse>}
 */
const methodDescriptor_PrivacyService_GetPolicyHashes = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PrivacyService/GetPolicyHashes',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PolicyHashesRequest,
  proto.wavesenterprise.PolicyHashesResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyHashesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyHashesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PolicyHashesRequest,
 *   !proto.wavesenterprise.PolicyHashesResponse>}
 */
const methodInfo_PrivacyService_GetPolicyHashes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PolicyHashesResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyHashesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyHashesResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PolicyHashesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PolicyHashesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PolicyHashesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PrivacyServiceClient.prototype.getPolicyHashes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyHashes',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyHashes,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PolicyHashesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PolicyHashesResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PrivacyServicePromiseClient.prototype.getPolicyHashes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyHashes',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyHashes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.PolicyItemDataRequest,
 *   !proto.wavesenterprise.PolicyItemDataResponse>}
 */
const methodDescriptor_PrivacyService_GetPolicyItemData = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PrivacyService/GetPolicyItemData',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PolicyItemDataRequest,
  proto.wavesenterprise.PolicyItemDataResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyItemDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyItemDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PolicyItemDataRequest,
 *   !proto.wavesenterprise.PolicyItemDataResponse>}
 */
const methodInfo_PrivacyService_GetPolicyItemData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PolicyItemDataResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyItemDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyItemDataResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PolicyItemDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PolicyItemDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PolicyItemDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PrivacyServiceClient.prototype.getPolicyItemData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyItemData',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyItemData,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PolicyItemDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PolicyItemDataResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PrivacyServicePromiseClient.prototype.getPolicyItemData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyItemData',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyItemData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.PolicyItemInfoRequest,
 *   !proto.wavesenterprise.PolicyItemInfoResponse>}
 */
const methodDescriptor_PrivacyService_GetPolicyItemInfo = new grpc.web.MethodDescriptor(
  '/wavesenterprise.PrivacyService/GetPolicyItemInfo',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.PolicyItemInfoRequest,
  proto.wavesenterprise.PolicyItemInfoResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyItemInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyItemInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.PolicyItemInfoRequest,
 *   !proto.wavesenterprise.PolicyItemInfoResponse>}
 */
const methodInfo_PrivacyService_GetPolicyItemInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.PolicyItemInfoResponse,
  /**
   * @param {!proto.wavesenterprise.PolicyItemInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.PolicyItemInfoResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.PolicyItemInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.PolicyItemInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.PolicyItemInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.PrivacyServiceClient.prototype.getPolicyItemInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyItemInfo',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyItemInfo,
      callback);
};


/**
 * @param {!proto.wavesenterprise.PolicyItemInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.PolicyItemInfoResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.PrivacyServicePromiseClient.prototype.getPolicyItemInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.PrivacyService/GetPolicyItemInfo',
      request,
      metadata || {},
      methodDescriptor_PrivacyService_GetPolicyItemInfo);
};


module.exports = proto.wavesenterprise;

