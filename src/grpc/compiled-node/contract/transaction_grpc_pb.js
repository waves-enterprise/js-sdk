// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contract_transaction_pb = require('../contract/transaction_pb.js');
var managed_transaction_pb = require('../managed/transaction_pb.js');

function serialize_wavesenterprise_TransactionExistsRequest(arg) {
  if (!(arg instanceof contract_transaction_pb.TransactionExistsRequest)) {
    throw new Error('Expected argument of type wavesenterprise.TransactionExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_TransactionExistsRequest(buffer_arg) {
  return contract_transaction_pb.TransactionExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_TransactionExistsResponse(arg) {
  if (!(arg instanceof contract_transaction_pb.TransactionExistsResponse)) {
    throw new Error('Expected argument of type wavesenterprise.TransactionExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_TransactionExistsResponse(buffer_arg) {
  return contract_transaction_pb.TransactionExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_TransactionInfoRequest(arg) {
  if (!(arg instanceof contract_transaction_pb.TransactionInfoRequest)) {
    throw new Error('Expected argument of type wavesenterprise.TransactionInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_TransactionInfoRequest(buffer_arg) {
  return contract_transaction_pb.TransactionInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_TransactionInfoResponse(arg) {
  if (!(arg instanceof contract_transaction_pb.TransactionInfoResponse)) {
    throw new Error('Expected argument of type wavesenterprise.TransactionInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_TransactionInfoResponse(buffer_arg) {
  return contract_transaction_pb.TransactionInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  transactionExists: {
    path: '/wavesenterprise.TransactionService/TransactionExists',
    requestStream: false,
    responseStream: false,
    requestType: contract_transaction_pb.TransactionExistsRequest,
    responseType: contract_transaction_pb.TransactionExistsResponse,
    requestSerialize: serialize_wavesenterprise_TransactionExistsRequest,
    requestDeserialize: deserialize_wavesenterprise_TransactionExistsRequest,
    responseSerialize: serialize_wavesenterprise_TransactionExistsResponse,
    responseDeserialize: deserialize_wavesenterprise_TransactionExistsResponse,
  },
  transactionInfo: {
    path: '/wavesenterprise.TransactionService/TransactionInfo',
    requestStream: false,
    responseStream: false,
    requestType: contract_transaction_pb.TransactionInfoRequest,
    responseType: contract_transaction_pb.TransactionInfoResponse,
    requestSerialize: serialize_wavesenterprise_TransactionInfoRequest,
    requestDeserialize: deserialize_wavesenterprise_TransactionInfoRequest,
    responseSerialize: serialize_wavesenterprise_TransactionInfoResponse,
    responseDeserialize: deserialize_wavesenterprise_TransactionInfoResponse,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
