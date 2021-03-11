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

var data_entry_pb = require('../data_entry_pb.js')
const proto = {};
proto.wavesenterprise = require('./contract_contract_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.wavesenterprise.ContractServiceClient =
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
proto.wavesenterprise.ContractServicePromiseClient =
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
 *   !proto.wavesenterprise.ConnectionRequest,
 *   !proto.wavesenterprise.ContractTransactionResponse>}
 */
const methodDescriptor_ContractService_Connect = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractService/Connect',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wavesenterprise.ConnectionRequest,
  proto.wavesenterprise.ContractTransactionResponse,
  /**
   * @param {!proto.wavesenterprise.ConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ConnectionRequest,
 *   !proto.wavesenterprise.ContractTransactionResponse>}
 */
const methodInfo_ContractService_Connect = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.ContractTransactionResponse,
  /**
   * @param {!proto.wavesenterprise.ConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ConnectionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractTransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServiceClient.prototype.connect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.ContractService/Connect',
      request,
      metadata || {},
      methodDescriptor_ContractService_Connect);
};


/**
 * @param {!proto.wavesenterprise.ConnectionRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractTransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServicePromiseClient.prototype.connect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wavesenterprise.ContractService/Connect',
      request,
      metadata || {},
      methodDescriptor_ContractService_Connect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.ExecutionSuccessRequest,
 *   !proto.wavesenterprise.CommitExecutionResponse>}
 */
const methodDescriptor_ContractService_CommitExecutionSuccess = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractService/CommitExecutionSuccess',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.ExecutionSuccessRequest,
  proto.wavesenterprise.CommitExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ExecutionSuccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.CommitExecutionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ExecutionSuccessRequest,
 *   !proto.wavesenterprise.CommitExecutionResponse>}
 */
const methodInfo_ContractService_CommitExecutionSuccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.CommitExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ExecutionSuccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.CommitExecutionResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ExecutionSuccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.CommitExecutionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.CommitExecutionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServiceClient.prototype.commitExecutionSuccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.ContractService/CommitExecutionSuccess',
      request,
      metadata || {},
      methodDescriptor_ContractService_CommitExecutionSuccess,
      callback);
};


/**
 * @param {!proto.wavesenterprise.ExecutionSuccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.CommitExecutionResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.ContractServicePromiseClient.prototype.commitExecutionSuccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.ContractService/CommitExecutionSuccess',
      request,
      metadata || {},
      methodDescriptor_ContractService_CommitExecutionSuccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.ExecutionErrorRequest,
 *   !proto.wavesenterprise.CommitExecutionResponse>}
 */
const methodDescriptor_ContractService_CommitExecutionError = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractService/CommitExecutionError',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.ExecutionErrorRequest,
  proto.wavesenterprise.CommitExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ExecutionErrorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.CommitExecutionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ExecutionErrorRequest,
 *   !proto.wavesenterprise.CommitExecutionResponse>}
 */
const methodInfo_ContractService_CommitExecutionError = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.CommitExecutionResponse,
  /**
   * @param {!proto.wavesenterprise.ExecutionErrorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.CommitExecutionResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ExecutionErrorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.CommitExecutionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.CommitExecutionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServiceClient.prototype.commitExecutionError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.ContractService/CommitExecutionError',
      request,
      metadata || {},
      methodDescriptor_ContractService_CommitExecutionError,
      callback);
};


/**
 * @param {!proto.wavesenterprise.ExecutionErrorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.CommitExecutionResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.ContractServicePromiseClient.prototype.commitExecutionError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.ContractService/CommitExecutionError',
      request,
      metadata || {},
      methodDescriptor_ContractService_CommitExecutionError);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.ContractKeysRequest,
 *   !proto.wavesenterprise.ContractKeysResponse>}
 */
const methodDescriptor_ContractService_GetContractKeys = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractService/GetContractKeys',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.ContractKeysRequest,
  proto.wavesenterprise.ContractKeysResponse,
  /**
   * @param {!proto.wavesenterprise.ContractKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ContractKeysRequest,
 *   !proto.wavesenterprise.ContractKeysResponse>}
 */
const methodInfo_ContractService_GetContractKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.ContractKeysResponse,
  /**
   * @param {!proto.wavesenterprise.ContractKeysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractKeysResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ContractKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.ContractKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServiceClient.prototype.getContractKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.ContractService/GetContractKeys',
      request,
      metadata || {},
      methodDescriptor_ContractService_GetContractKeys,
      callback);
};


/**
 * @param {!proto.wavesenterprise.ContractKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.ContractKeysResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.ContractServicePromiseClient.prototype.getContractKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.ContractService/GetContractKeys',
      request,
      metadata || {},
      methodDescriptor_ContractService_GetContractKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wavesenterprise.ContractKeyRequest,
 *   !proto.wavesenterprise.ContractKeyResponse>}
 */
const methodDescriptor_ContractService_GetContractKey = new grpc.web.MethodDescriptor(
  '/wavesenterprise.ContractService/GetContractKey',
  grpc.web.MethodType.UNARY,
  proto.wavesenterprise.ContractKeyRequest,
  proto.wavesenterprise.ContractKeyResponse,
  /**
   * @param {!proto.wavesenterprise.ContractKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.wavesenterprise.ContractKeyRequest,
 *   !proto.wavesenterprise.ContractKeyResponse>}
 */
const methodInfo_ContractService_GetContractKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.wavesenterprise.ContractKeyResponse,
  /**
   * @param {!proto.wavesenterprise.ContractKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wavesenterprise.ContractKeyResponse.deserializeBinary
);


/**
 * @param {!proto.wavesenterprise.ContractKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.wavesenterprise.ContractKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wavesenterprise.ContractKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wavesenterprise.ContractServiceClient.prototype.getContractKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wavesenterprise.ContractService/GetContractKey',
      request,
      metadata || {},
      methodDescriptor_ContractService_GetContractKey,
      callback);
};


/**
 * @param {!proto.wavesenterprise.ContractKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wavesenterprise.ContractKeyResponse>}
 *     Promise that resolves to the response
 */
proto.wavesenterprise.ContractServicePromiseClient.prototype.getContractKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wavesenterprise.ContractService/GetContractKey',
      request,
      metadata || {},
      methodDescriptor_ContractService_GetContractKey);
};


module.exports = proto.wavesenterprise;

