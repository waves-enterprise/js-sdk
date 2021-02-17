// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var messagebroker_blockchain_event_pb = require('../messagebroker/blockchain_event_pb.js');
var messagebroker_subscribe_on_request_pb = require('../messagebroker/subscribe_on_request_pb.js');

function serialize_wavesenterprise_BlockchainEvent(arg) {
  if (!(arg instanceof messagebroker_blockchain_event_pb.BlockchainEvent)) {
    throw new Error('Expected argument of type wavesenterprise.BlockchainEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_BlockchainEvent(buffer_arg) {
  return messagebroker_blockchain_event_pb.BlockchainEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_SubscribeOnRequest(arg) {
  if (!(arg instanceof messagebroker_subscribe_on_request_pb.SubscribeOnRequest)) {
    throw new Error('Expected argument of type wavesenterprise.SubscribeOnRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_SubscribeOnRequest(buffer_arg) {
  return messagebroker_subscribe_on_request_pb.SubscribeOnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlockchainEventsServiceService = exports.BlockchainEventsServiceService = {
  subscribeOn: {
    path: '/wavesenterprise.BlockchainEventsService/SubscribeOn',
    requestStream: false,
    responseStream: true,
    requestType: messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
    responseType: messagebroker_blockchain_event_pb.BlockchainEvent,
    requestSerialize: serialize_wavesenterprise_SubscribeOnRequest,
    requestDeserialize: deserialize_wavesenterprise_SubscribeOnRequest,
    responseSerialize: serialize_wavesenterprise_BlockchainEvent,
    responseDeserialize: deserialize_wavesenterprise_BlockchainEvent,
  },
};

exports.BlockchainEventsServiceClient = grpc.makeGenericClientConstructor(BlockchainEventsServiceService);
