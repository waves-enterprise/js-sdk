// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/contract_util_service.proto

import * as contract_contract_util_service_pb from "../contract/contract_util_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IUtilServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getNodeTime: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, contract_contract_util_service_pb.NodeTimeResponse>;
}

export const UtilServiceService: IUtilServiceService;

export interface IUtilServiceServer extends grpc.UntypedServiceImplementation {
  getNodeTime: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, contract_contract_util_service_pb.NodeTimeResponse>;
}

export class UtilServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getNodeTime(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<contract_contract_util_service_pb.NodeTimeResponse>): grpc.ClientUnaryCall;
  getNodeTime(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_util_service_pb.NodeTimeResponse>): grpc.ClientUnaryCall;
  getNodeTime(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_util_service_pb.NodeTimeResponse>): grpc.ClientUnaryCall;
}
