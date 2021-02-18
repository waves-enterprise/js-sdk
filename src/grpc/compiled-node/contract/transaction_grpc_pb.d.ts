// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/transaction.proto

import * as contract_transaction_pb from "../contract/transaction_pb"
import * as grpc from "@grpc/grpc-js"

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transactionExists: grpc.MethodDefinition<contract_transaction_pb.TransactionExistsRequest, contract_transaction_pb.TransactionExistsResponse>
  transactionInfo: grpc.MethodDefinition<contract_transaction_pb.TransactionInfoRequest, contract_transaction_pb.TransactionInfoResponse>
}

export const TransactionServiceService: ITransactionServiceService

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
  transactionExists: grpc.handleUnaryCall<contract_transaction_pb.TransactionExistsRequest, contract_transaction_pb.TransactionExistsResponse>
  transactionInfo: grpc.handleUnaryCall<contract_transaction_pb.TransactionInfoRequest, contract_transaction_pb.TransactionInfoResponse>
}

export class TransactionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transactionExists(argument: contract_transaction_pb.TransactionExistsRequest, callback: grpc.requestCallback<contract_transaction_pb.TransactionExistsResponse>): grpc.ClientUnaryCall
  transactionExists(argument: contract_transaction_pb.TransactionExistsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_transaction_pb.TransactionExistsResponse>): grpc.ClientUnaryCall
  transactionExists(argument: contract_transaction_pb.TransactionExistsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_transaction_pb.TransactionExistsResponse>): grpc.ClientUnaryCall
  transactionInfo(argument: contract_transaction_pb.TransactionInfoRequest, callback: grpc.requestCallback<contract_transaction_pb.TransactionInfoResponse>): grpc.ClientUnaryCall
  transactionInfo(argument: contract_transaction_pb.TransactionInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_transaction_pb.TransactionInfoResponse>): grpc.ClientUnaryCall
  transactionInfo(argument: contract_transaction_pb.TransactionInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_transaction_pb.TransactionInfoResponse>): grpc.ClientUnaryCall
}
