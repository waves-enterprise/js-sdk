// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var util_node_info_service_pb = require('../util/node_info_service_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var constants_pb = require('../constants_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_NodeConfigResponse(arg) {
  if (!(arg instanceof util_node_info_service_pb.NodeConfigResponse)) {
    throw new Error('Expected argument of type wavesenterprise.NodeConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_NodeConfigResponse(buffer_arg) {
  return util_node_info_service_pb.NodeConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NodeInfoServiceService = exports.NodeInfoServiceService = {
  nodeConfig: {
    path: '/wavesenterprise.NodeInfoService/NodeConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: util_node_info_service_pb.NodeConfigResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_wavesenterprise_NodeConfigResponse,
    responseDeserialize: deserialize_wavesenterprise_NodeConfigResponse,
  },
};

exports.NodeInfoServiceClient = grpc.makeGenericClientConstructor(NodeInfoServiceService);
