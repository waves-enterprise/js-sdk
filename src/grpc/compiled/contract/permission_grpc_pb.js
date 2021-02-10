// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contract_permission_pb = require('../contract/permission_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_wavesenterprise_AddressesPermissionsRequest(arg) {
  if (!(arg instanceof contract_permission_pb.AddressesPermissionsRequest)) {
    throw new Error('Expected argument of type wavesenterprise.AddressesPermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_AddressesPermissionsRequest(buffer_arg) {
  return contract_permission_pb.AddressesPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_AddressesPermissionsResponse(arg) {
  if (!(arg instanceof contract_permission_pb.AddressesPermissionsResponse)) {
    throw new Error('Expected argument of type wavesenterprise.AddressesPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_AddressesPermissionsResponse(buffer_arg) {
  return contract_permission_pb.AddressesPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PermissionsRequest(arg) {
  if (!(arg instanceof contract_permission_pb.PermissionsRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PermissionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PermissionsRequest(buffer_arg) {
  return contract_permission_pb.PermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PermissionsResponse(arg) {
  if (!(arg instanceof contract_permission_pb.PermissionsResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PermissionsResponse(buffer_arg) {
  return contract_permission_pb.PermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PermissionServiceService = exports.PermissionServiceService = {
  getPermissions: {
    path: '/wavesenterprise.PermissionService/GetPermissions',
    requestStream: false,
    responseStream: false,
    requestType: contract_permission_pb.PermissionsRequest,
    responseType: contract_permission_pb.PermissionsResponse,
    requestSerialize: serialize_wavesenterprise_PermissionsRequest,
    requestDeserialize: deserialize_wavesenterprise_PermissionsRequest,
    responseSerialize: serialize_wavesenterprise_PermissionsResponse,
    responseDeserialize: deserialize_wavesenterprise_PermissionsResponse,
  },
  getPermissionsForAddresses: {
    path: '/wavesenterprise.PermissionService/GetPermissionsForAddresses',
    requestStream: false,
    responseStream: false,
    requestType: contract_permission_pb.AddressesPermissionsRequest,
    responseType: contract_permission_pb.AddressesPermissionsResponse,
    requestSerialize: serialize_wavesenterprise_AddressesPermissionsRequest,
    requestDeserialize: deserialize_wavesenterprise_AddressesPermissionsRequest,
    responseSerialize: serialize_wavesenterprise_AddressesPermissionsResponse,
    responseDeserialize: deserialize_wavesenterprise_AddressesPermissionsResponse,
  },
};

exports.PermissionServiceClient = grpc.makeGenericClientConstructor(PermissionServiceService);
