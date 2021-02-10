// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var contract_crypto_pb = require('../contract/crypto_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var constants_pb = require('../constants_pb.js');

function serialize_wavesenterprise_DecryptDataRequest(arg) {
  if (!(arg instanceof contract_crypto_pb.DecryptDataRequest)) {
    throw new Error('Expected argument of type wavesenterprise.DecryptDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_DecryptDataRequest(buffer_arg) {
  return contract_crypto_pb.DecryptDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_DecryptDataResponse(arg) {
  if (!(arg instanceof contract_crypto_pb.DecryptDataResponse)) {
    throw new Error('Expected argument of type wavesenterprise.DecryptDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_DecryptDataResponse(buffer_arg) {
  return contract_crypto_pb.DecryptDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_EncryptDataRequest(arg) {
  if (!(arg instanceof contract_crypto_pb.EncryptDataRequest)) {
    throw new Error('Expected argument of type wavesenterprise.EncryptDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_EncryptDataRequest(buffer_arg) {
  return contract_crypto_pb.EncryptDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_EncryptSeparateResponse(arg) {
  if (!(arg instanceof contract_crypto_pb.EncryptSeparateResponse)) {
    throw new Error('Expected argument of type wavesenterprise.EncryptSeparateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_EncryptSeparateResponse(buffer_arg) {
  return contract_crypto_pb.EncryptSeparateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_EncryptedForManyResponse(arg) {
  if (!(arg instanceof contract_crypto_pb.EncryptedForManyResponse)) {
    throw new Error('Expected argument of type wavesenterprise.EncryptedForManyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_EncryptedForManyResponse(buffer_arg) {
  return contract_crypto_pb.EncryptedForManyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CryptoServiceService = exports.CryptoServiceService = {
  encryptSeparate: {
    path: '/wavesenterprise.CryptoService/EncryptSeparate',
    requestStream: false,
    responseStream: false,
    requestType: contract_crypto_pb.EncryptDataRequest,
    responseType: contract_crypto_pb.EncryptSeparateResponse,
    requestSerialize: serialize_wavesenterprise_EncryptDataRequest,
    requestDeserialize: deserialize_wavesenterprise_EncryptDataRequest,
    responseSerialize: serialize_wavesenterprise_EncryptSeparateResponse,
    responseDeserialize: deserialize_wavesenterprise_EncryptSeparateResponse,
  },
  encryptCommon: {
    path: '/wavesenterprise.CryptoService/EncryptCommon',
    requestStream: false,
    responseStream: false,
    requestType: contract_crypto_pb.EncryptDataRequest,
    responseType: contract_crypto_pb.EncryptedForManyResponse,
    requestSerialize: serialize_wavesenterprise_EncryptDataRequest,
    requestDeserialize: deserialize_wavesenterprise_EncryptDataRequest,
    responseSerialize: serialize_wavesenterprise_EncryptedForManyResponse,
    responseDeserialize: deserialize_wavesenterprise_EncryptedForManyResponse,
  },
  decrypt: {
    path: '/wavesenterprise.CryptoService/Decrypt',
    requestStream: false,
    responseStream: false,
    requestType: contract_crypto_pb.DecryptDataRequest,
    responseType: contract_crypto_pb.DecryptDataResponse,
    requestSerialize: serialize_wavesenterprise_DecryptDataRequest,
    requestDeserialize: deserialize_wavesenterprise_DecryptDataRequest,
    responseSerialize: serialize_wavesenterprise_DecryptDataResponse,
    responseDeserialize: deserialize_wavesenterprise_DecryptDataResponse,
  },
};

exports.CryptoServiceClient = grpc.makeGenericClientConstructor(CryptoServiceService);
