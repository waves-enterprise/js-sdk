// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var contract_util_pb = require('../contract/util_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_NodeTimeResponse(arg) {
  if (!(arg instanceof contract_util_pb.NodeTimeResponse)) {
    throw new Error('Expected argument of type wavesenterprise.NodeTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_NodeTimeResponse(buffer_arg) {
  return contract_util_pb.NodeTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UtilServiceService = exports.UtilServiceService = {
  getNodeTime: {
    path: '/wavesenterprise.UtilService/GetNodeTime',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: contract_util_pb.NodeTimeResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_wavesenterprise_NodeTimeResponse,
    responseDeserialize: deserialize_wavesenterprise_NodeTimeResponse,
  },
};

exports.UtilServiceClient = grpc.makeGenericClientConstructor(UtilServiceService);
