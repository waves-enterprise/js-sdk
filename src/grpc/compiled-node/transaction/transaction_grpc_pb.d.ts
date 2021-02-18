// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise.grpc
// file: transaction/transaction.proto

import * as transaction_transaction_pb from "../transaction/transaction_pb"
import * as managed_transaction_pb from "../managed/transaction_pb"
import * as grpc from "@grpc/grpc-js"

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  broadcast: grpc.MethodDefinition<managed_transaction_pb.Transaction, managed_transaction_pb.Transaction>
}

export const TransactionServiceService: ITransactionServiceService

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
  broadcast: grpc.handleUnaryCall<managed_transaction_pb.Transaction, managed_transaction_pb.Transaction>
}

export class TransactionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  broadcast(argument: managed_transaction_pb.Transaction, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall
  broadcast(argument: managed_transaction_pb.Transaction, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall
  broadcast(argument: managed_transaction_pb.Transaction, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall
}
