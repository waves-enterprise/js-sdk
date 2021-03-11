// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise.grpc
// file: transaction/transaction_public_service.proto

import * as transaction_transaction_public_service_pb from "../transaction/transaction_public_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as managed_transaction_pb from "../managed/transaction_pb";
import * as grpc from "@grpc/grpc-js";

interface ITransactionPublicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  broadcast: grpc.MethodDefinition<managed_transaction_pb.Transaction, managed_transaction_pb.Transaction>;
  utxInfo: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, transaction_transaction_public_service_pb.UtxSize>;
}

export const TransactionPublicServiceService: ITransactionPublicServiceService;

export interface ITransactionPublicServiceServer extends grpc.UntypedServiceImplementation {
  broadcast: grpc.handleUnaryCall<managed_transaction_pb.Transaction, managed_transaction_pb.Transaction>;
  utxInfo: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, transaction_transaction_public_service_pb.UtxSize>;
}

export class TransactionPublicServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  broadcast(argument: managed_transaction_pb.Transaction, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  broadcast(argument: managed_transaction_pb.Transaction, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  broadcast(argument: managed_transaction_pb.Transaction, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<managed_transaction_pb.Transaction>): grpc.ClientUnaryCall;
  utxInfo(argument: google_protobuf_empty_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<transaction_transaction_public_service_pb.UtxSize>;
  utxInfo(argument: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<transaction_transaction_public_service_pb.UtxSize>;
}
