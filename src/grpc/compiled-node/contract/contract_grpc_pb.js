// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var contract_contract_pb = require('../contract/contract_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var data_entry_pb = require('../data_entry_pb.js');

function serialize_wavesenterprise_CommitExecutionResponse(arg) {
  if (!(arg instanceof contract_contract_pb.CommitExecutionResponse)) {
    throw new Error('Expected argument of type wavesenterprise.CommitExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_CommitExecutionResponse(buffer_arg) {
  return contract_contract_pb.CommitExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ConnectionRequest(arg) {
  if (!(arg instanceof contract_contract_pb.ConnectionRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ConnectionRequest(buffer_arg) {
  return contract_contract_pb.ConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractKeyRequest(arg) {
  if (!(arg instanceof contract_contract_pb.ContractKeyRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ContractKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractKeyRequest(buffer_arg) {
  return contract_contract_pb.ContractKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractKeyResponse(arg) {
  if (!(arg instanceof contract_contract_pb.ContractKeyResponse)) {
    throw new Error('Expected argument of type wavesenterprise.ContractKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractKeyResponse(buffer_arg) {
  return contract_contract_pb.ContractKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractKeysRequest(arg) {
  if (!(arg instanceof contract_contract_pb.ContractKeysRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ContractKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractKeysRequest(buffer_arg) {
  return contract_contract_pb.ContractKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractKeysResponse(arg) {
  if (!(arg instanceof contract_contract_pb.ContractKeysResponse)) {
    throw new Error('Expected argument of type wavesenterprise.ContractKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractKeysResponse(buffer_arg) {
  return contract_contract_pb.ContractKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractTransactionResponse(arg) {
  if (!(arg instanceof contract_contract_pb.ContractTransactionResponse)) {
    throw new Error('Expected argument of type wavesenterprise.ContractTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractTransactionResponse(buffer_arg) {
  return contract_contract_pb.ContractTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ExecutionErrorRequest(arg) {
  if (!(arg instanceof contract_contract_pb.ExecutionErrorRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ExecutionErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ExecutionErrorRequest(buffer_arg) {
  return contract_contract_pb.ExecutionErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ExecutionSuccessRequest(arg) {
  if (!(arg instanceof contract_contract_pb.ExecutionSuccessRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ExecutionSuccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ExecutionSuccessRequest(buffer_arg) {
  return contract_contract_pb.ExecutionSuccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContractServiceService = exports.ContractServiceService = {
  connect: {
    path: '/wavesenterprise.ContractService/Connect',
    requestStream: false,
    responseStream: true,
    requestType: contract_contract_pb.ConnectionRequest,
    responseType: contract_contract_pb.ContractTransactionResponse,
    requestSerialize: serialize_wavesenterprise_ConnectionRequest,
    requestDeserialize: deserialize_wavesenterprise_ConnectionRequest,
    responseSerialize: serialize_wavesenterprise_ContractTransactionResponse,
    responseDeserialize: deserialize_wavesenterprise_ContractTransactionResponse,
  },
  commitExecutionSuccess: {
    path: '/wavesenterprise.ContractService/CommitExecutionSuccess',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_pb.ExecutionSuccessRequest,
    responseType: contract_contract_pb.CommitExecutionResponse,
    requestSerialize: serialize_wavesenterprise_ExecutionSuccessRequest,
    requestDeserialize: deserialize_wavesenterprise_ExecutionSuccessRequest,
    responseSerialize: serialize_wavesenterprise_CommitExecutionResponse,
    responseDeserialize: deserialize_wavesenterprise_CommitExecutionResponse,
  },
  commitExecutionError: {
    path: '/wavesenterprise.ContractService/CommitExecutionError',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_pb.ExecutionErrorRequest,
    responseType: contract_contract_pb.CommitExecutionResponse,
    requestSerialize: serialize_wavesenterprise_ExecutionErrorRequest,
    requestDeserialize: deserialize_wavesenterprise_ExecutionErrorRequest,
    responseSerialize: serialize_wavesenterprise_CommitExecutionResponse,
    responseDeserialize: deserialize_wavesenterprise_CommitExecutionResponse,
  },
  getContractKeys: {
    path: '/wavesenterprise.ContractService/GetContractKeys',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_pb.ContractKeysRequest,
    responseType: contract_contract_pb.ContractKeysResponse,
    requestSerialize: serialize_wavesenterprise_ContractKeysRequest,
    requestDeserialize: deserialize_wavesenterprise_ContractKeysRequest,
    responseSerialize: serialize_wavesenterprise_ContractKeysResponse,
    responseDeserialize: deserialize_wavesenterprise_ContractKeysResponse,
  },
  getContractKey: {
    path: '/wavesenterprise.ContractService/GetContractKey',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_pb.ContractKeyRequest,
    responseType: contract_contract_pb.ContractKeyResponse,
    requestSerialize: serialize_wavesenterprise_ContractKeyRequest,
    requestDeserialize: deserialize_wavesenterprise_ContractKeyRequest,
    responseSerialize: serialize_wavesenterprise_ContractKeyResponse,
    responseDeserialize: deserialize_wavesenterprise_ContractKeyResponse,
  },
};

exports.ContractServiceClient = grpc.makeGenericClientConstructor(ContractServiceService);
