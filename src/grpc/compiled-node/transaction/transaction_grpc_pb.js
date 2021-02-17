// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var managed_transaction_pb = require('../managed/transaction_pb.js');

function serialize_wavesenterprise_Transaction(arg) {
  if (!(arg instanceof managed_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type wavesenterprise.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_Transaction(buffer_arg) {
  return managed_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  broadcast: {
    path: '/wavesenterprise.grpc.TransactionService/Broadcast',
    requestStream: false,
    responseStream: false,
    requestType: managed_transaction_pb.Transaction,
    responseType: managed_transaction_pb.Transaction,
    requestSerialize: serialize_wavesenterprise_Transaction,
    requestDeserialize: deserialize_wavesenterprise_Transaction,
    responseSerialize: serialize_wavesenterprise_Transaction,
    responseDeserialize: deserialize_wavesenterprise_Transaction,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
