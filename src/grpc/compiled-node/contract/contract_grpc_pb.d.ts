// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/contract.proto

import * as contract_contract_pb from "../contract/contract_pb"
import * as grpc from "@grpc/grpc-js"

interface IContractServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  connect: grpc.MethodDefinition<contract_contract_pb.ConnectionRequest, contract_contract_pb.ContractTransactionResponse>
  commitExecutionSuccess: grpc.MethodDefinition<contract_contract_pb.ExecutionSuccessRequest, contract_contract_pb.CommitExecutionResponse>
  commitExecutionError: grpc.MethodDefinition<contract_contract_pb.ExecutionErrorRequest, contract_contract_pb.CommitExecutionResponse>
  getContractKeys: grpc.MethodDefinition<contract_contract_pb.ContractKeysRequest, contract_contract_pb.ContractKeysResponse>
  getContractKey: grpc.MethodDefinition<contract_contract_pb.ContractKeyRequest, contract_contract_pb.ContractKeyResponse>
}

export const ContractServiceService: IContractServiceService

export interface IContractServiceServer extends grpc.UntypedServiceImplementation {
  connect: grpc.handleServerStreamingCall<contract_contract_pb.ConnectionRequest, contract_contract_pb.ContractTransactionResponse>
  commitExecutionSuccess: grpc.handleUnaryCall<contract_contract_pb.ExecutionSuccessRequest, contract_contract_pb.CommitExecutionResponse>
  commitExecutionError: grpc.handleUnaryCall<contract_contract_pb.ExecutionErrorRequest, contract_contract_pb.CommitExecutionResponse>
  getContractKeys: grpc.handleUnaryCall<contract_contract_pb.ContractKeysRequest, contract_contract_pb.ContractKeysResponse>
  getContractKey: grpc.handleUnaryCall<contract_contract_pb.ContractKeyRequest, contract_contract_pb.ContractKeyResponse>
}

export class ContractServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  connect(argument: contract_contract_pb.ConnectionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<contract_contract_pb.ContractTransactionResponse>
  connect(argument: contract_contract_pb.ConnectionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<contract_contract_pb.ContractTransactionResponse>
  commitExecutionSuccess(argument: contract_contract_pb.ExecutionSuccessRequest, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  commitExecutionSuccess(argument: contract_contract_pb.ExecutionSuccessRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  commitExecutionSuccess(argument: contract_contract_pb.ExecutionSuccessRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  commitExecutionError(argument: contract_contract_pb.ExecutionErrorRequest, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  commitExecutionError(argument: contract_contract_pb.ExecutionErrorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  commitExecutionError(argument: contract_contract_pb.ExecutionErrorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.CommitExecutionResponse>): grpc.ClientUnaryCall
  getContractKeys(argument: contract_contract_pb.ContractKeysRequest, callback: grpc.requestCallback<contract_contract_pb.ContractKeysResponse>): grpc.ClientUnaryCall
  getContractKeys(argument: contract_contract_pb.ContractKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.ContractKeysResponse>): grpc.ClientUnaryCall
  getContractKeys(argument: contract_contract_pb.ContractKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.ContractKeysResponse>): grpc.ClientUnaryCall
  getContractKey(argument: contract_contract_pb.ContractKeyRequest, callback: grpc.requestCallback<contract_contract_pb.ContractKeyResponse>): grpc.ClientUnaryCall
  getContractKey(argument: contract_contract_pb.ContractKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.ContractKeyResponse>): grpc.ClientUnaryCall
  getContractKey(argument: contract_contract_pb.ContractKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_pb.ContractKeyResponse>): grpc.ClientUnaryCall
}
