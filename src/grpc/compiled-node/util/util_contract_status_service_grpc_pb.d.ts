// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: util/util_contract_status_service.proto

import * as util_util_contract_status_service_pb from "../util/util_contract_status_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IContractStatusServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  contractExecutionStatuses: grpc.MethodDefinition<util_util_contract_status_service_pb.ContractExecutionRequest, util_util_contract_status_service_pb.ContractExecutionResponse>;
}

export const ContractStatusServiceService: IContractStatusServiceService;

export interface IContractStatusServiceServer extends grpc.UntypedServiceImplementation {
  contractExecutionStatuses: grpc.handleServerStreamingCall<util_util_contract_status_service_pb.ContractExecutionRequest, util_util_contract_status_service_pb.ContractExecutionResponse>;
}

export class ContractStatusServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  contractExecutionStatuses(argument: util_util_contract_status_service_pb.ContractExecutionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<util_util_contract_status_service_pb.ContractExecutionResponse>;
  contractExecutionStatuses(argument: util_util_contract_status_service_pb.ContractExecutionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<util_util_contract_status_service_pb.ContractExecutionResponse>;
}
