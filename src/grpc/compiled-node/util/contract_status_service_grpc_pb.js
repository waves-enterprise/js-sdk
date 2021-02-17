// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var util_contract_status_service_pb = require('../util/contract_status_service_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_wavesenterprise_ContractExecutionRequest(arg) {
  if (!(arg instanceof util_contract_status_service_pb.ContractExecutionRequest)) {
    throw new Error('Expected argument of type wavesenterprise.ContractExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractExecutionRequest(buffer_arg) {
  return util_contract_status_service_pb.ContractExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_ContractExecutionResponse(arg) {
  if (!(arg instanceof util_contract_status_service_pb.ContractExecutionResponse)) {
    throw new Error('Expected argument of type wavesenterprise.ContractExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_ContractExecutionResponse(buffer_arg) {
  return util_contract_status_service_pb.ContractExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContractStatusServiceService = exports.ContractStatusServiceService = {
  contractExecutionStatuses: {
    path: '/wavesenterprise.ContractStatusService/ContractExecutionStatuses',
    requestStream: false,
    responseStream: true,
    requestType: util_contract_status_service_pb.ContractExecutionRequest,
    responseType: util_contract_status_service_pb.ContractExecutionResponse,
    requestSerialize: serialize_wavesenterprise_ContractExecutionRequest,
    requestDeserialize: deserialize_wavesenterprise_ContractExecutionRequest,
    responseSerialize: serialize_wavesenterprise_ContractExecutionResponse,
    responseDeserialize: deserialize_wavesenterprise_ContractExecutionResponse,
  },
};

exports.ContractStatusServiceClient = grpc.makeGenericClientConstructor(ContractStatusServiceService);
