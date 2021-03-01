// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var transaction_transaction_public_service_pb = require('../transaction/transaction_public_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var managed_transaction_pb = require('../managed/transaction_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_Transaction(arg) {
  if (!(arg instanceof managed_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type wavesenterprise.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_Transaction(buffer_arg) {
  return managed_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_grpc_UtxSize(arg) {
  if (!(arg instanceof transaction_transaction_public_service_pb.UtxSize)) {
    throw new Error('Expected argument of type wavesenterprise.grpc.UtxSize');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_grpc_UtxSize(buffer_arg) {
  return transaction_transaction_public_service_pb.UtxSize.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionPublicServiceService = exports.TransactionPublicServiceService = {
  broadcast: {
    path: '/wavesenterprise.grpc.TransactionPublicService/Broadcast',
    requestStream: false,
    responseStream: false,
    requestType: managed_transaction_pb.Transaction,
    responseType: managed_transaction_pb.Transaction,
    requestSerialize: serialize_wavesenterprise_Transaction,
    requestDeserialize: deserialize_wavesenterprise_Transaction,
    responseSerialize: serialize_wavesenterprise_Transaction,
    responseDeserialize: deserialize_wavesenterprise_Transaction,
  },
  utxInfo: {
    path: '/wavesenterprise.grpc.TransactionPublicService/UtxInfo',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: transaction_transaction_public_service_pb.UtxSize,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_wavesenterprise_grpc_UtxSize,
    responseDeserialize: deserialize_wavesenterprise_grpc_UtxSize,
  },
};

exports.TransactionPublicServiceClient = grpc.makeGenericClientConstructor(TransactionPublicServiceService);
