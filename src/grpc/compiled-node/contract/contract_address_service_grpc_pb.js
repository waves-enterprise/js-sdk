// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var contract_contract_address_service_pb = require('../contract/contract_address_service_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var data_entry_pb = require('../data_entry_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_AddressDataRequest(arg) {
  if (!(arg instanceof contract_contract_address_service_pb.AddressDataRequest)) {
    throw new Error('Expected argument of type wavesenterprise.AddressDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_AddressDataRequest(buffer_arg) {
  return contract_contract_address_service_pb.AddressDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_AddressDataResponse(arg) {
  if (!(arg instanceof contract_contract_address_service_pb.AddressDataResponse)) {
    throw new Error('Expected argument of type wavesenterprise.AddressDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_AddressDataResponse(buffer_arg) {
  return contract_contract_address_service_pb.AddressDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_AddressesResponse(arg) {
  if (!(arg instanceof contract_contract_address_service_pb.AddressesResponse)) {
    throw new Error('Expected argument of type wavesenterprise.AddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_AddressesResponse(buffer_arg) {
  return contract_contract_address_service_pb.AddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AddressServiceService = exports.AddressServiceService = {
  getAddresses: {
    path: '/wavesenterprise.AddressService/GetAddresses',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: contract_contract_address_service_pb.AddressesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_wavesenterprise_AddressesResponse,
    responseDeserialize: deserialize_wavesenterprise_AddressesResponse,
  },
  getAddressData: {
    path: '/wavesenterprise.AddressService/GetAddressData',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_address_service_pb.AddressDataRequest,
    responseType: contract_contract_address_service_pb.AddressDataResponse,
    requestSerialize: serialize_wavesenterprise_AddressDataRequest,
    requestDeserialize: deserialize_wavesenterprise_AddressDataRequest,
    responseSerialize: serialize_wavesenterprise_AddressDataResponse,
    responseDeserialize: deserialize_wavesenterprise_AddressDataResponse,
  },
};

exports.AddressServiceClient = grpc.makeGenericClientConstructor(AddressServiceService);
