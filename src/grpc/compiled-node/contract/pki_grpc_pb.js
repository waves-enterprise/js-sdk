// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var contract_pki_pb = require('../contract/pki_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_wavesenterprise_PkiSignRequest(arg) {
  if (!(arg instanceof contract_pki_pb.PkiSignRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PkiSignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PkiSignRequest(buffer_arg) {
  return contract_pki_pb.PkiSignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PkiSignResponse(arg) {
  if (!(arg instanceof contract_pki_pb.PkiSignResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PkiSignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PkiSignResponse(buffer_arg) {
  return contract_pki_pb.PkiSignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PkiVerifyRequest(arg) {
  if (!(arg instanceof contract_pki_pb.PkiVerifyRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PkiVerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PkiVerifyRequest(buffer_arg) {
  return contract_pki_pb.PkiVerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PkiVerifyResponse(arg) {
  if (!(arg instanceof contract_pki_pb.PkiVerifyResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PkiVerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PkiVerifyResponse(buffer_arg) {
  return contract_pki_pb.PkiVerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PkiServiceService = exports.PkiServiceService = {
  sign: {
    path: '/wavesenterprise.PkiService/Sign',
    requestStream: false,
    responseStream: false,
    requestType: contract_pki_pb.PkiSignRequest,
    responseType: contract_pki_pb.PkiSignResponse,
    requestSerialize: serialize_wavesenterprise_PkiSignRequest,
    requestDeserialize: deserialize_wavesenterprise_PkiSignRequest,
    responseSerialize: serialize_wavesenterprise_PkiSignResponse,
    responseDeserialize: deserialize_wavesenterprise_PkiSignResponse,
  },
  verify: {
    path: '/wavesenterprise.PkiService/Verify',
    requestStream: false,
    responseStream: false,
    requestType: contract_pki_pb.PkiVerifyRequest,
    responseType: contract_pki_pb.PkiVerifyResponse,
    requestSerialize: serialize_wavesenterprise_PkiVerifyRequest,
    requestDeserialize: deserialize_wavesenterprise_PkiVerifyRequest,
    responseSerialize: serialize_wavesenterprise_PkiVerifyResponse,
    responseDeserialize: deserialize_wavesenterprise_PkiVerifyResponse,
  },
};

exports.PkiServiceClient = grpc.makeGenericClientConstructor(PkiServiceService);
