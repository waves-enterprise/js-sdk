// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/contract_transaction_service.proto

import * as contract_contract_transaction_service_pb from "../contract/contract_transaction_service_pb";
import * as grpc from "@grpc/grpc-js";

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transactionExists: grpc.MethodDefinition<contract_contract_transaction_service_pb.TransactionExistsRequest, contract_contract_transaction_service_pb.TransactionExistsResponse>;
  transactionInfo: grpc.MethodDefinition<contract_contract_transaction_service_pb.TransactionInfoRequest, contract_contract_transaction_service_pb.TransactionInfoResponse>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
  transactionExists: grpc.handleUnaryCall<contract_contract_transaction_service_pb.TransactionExistsRequest, contract_contract_transaction_service_pb.TransactionExistsResponse>;
  transactionInfo: grpc.handleUnaryCall<contract_contract_transaction_service_pb.TransactionInfoRequest, contract_contract_transaction_service_pb.TransactionInfoResponse>;
}

export class TransactionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transactionExists(argument: contract_contract_transaction_service_pb.TransactionExistsRequest, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionExistsResponse>): grpc.ClientUnaryCall;
  transactionExists(argument: contract_contract_transaction_service_pb.TransactionExistsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionExistsResponse>): grpc.ClientUnaryCall;
  transactionExists(argument: contract_contract_transaction_service_pb.TransactionExistsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionExistsResponse>): grpc.ClientUnaryCall;
  transactionInfo(argument: contract_contract_transaction_service_pb.TransactionInfoRequest, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionInfoResponse>): grpc.ClientUnaryCall;
  transactionInfo(argument: contract_contract_transaction_service_pb.TransactionInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionInfoResponse>): grpc.ClientUnaryCall;
  transactionInfo(argument: contract_contract_transaction_service_pb.TransactionInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_transaction_service_pb.TransactionInfoResponse>): grpc.ClientUnaryCall;
}
