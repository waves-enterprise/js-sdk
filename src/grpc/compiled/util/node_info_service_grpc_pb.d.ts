// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: util/node_info_service.proto

import * as util_node_info_service_pb from "../util/node_info_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface INodeInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  nodeConfig: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, util_node_info_service_pb.NodeConfigResponse>;
}

export const NodeInfoServiceService: INodeInfoServiceService;

export interface INodeInfoServiceServer extends grpc.UntypedServiceImplementation {
  nodeConfig: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, util_node_info_service_pb.NodeConfigResponse>;
}

export class NodeInfoServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  nodeConfig(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<util_node_info_service_pb.NodeConfigResponse>): grpc.ClientUnaryCall;
  nodeConfig(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_node_info_service_pb.NodeConfigResponse>): grpc.ClientUnaryCall;
  nodeConfig(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_node_info_service_pb.NodeConfigResponse>): grpc.ClientUnaryCall;
}
