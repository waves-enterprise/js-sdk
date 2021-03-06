// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: messagebroker/messagebroker_blockchain_events_service.proto

import * as messagebroker_messagebroker_blockchain_events_service_pb from "../messagebroker/messagebroker_blockchain_events_service_pb";
import * as messagebroker_messagebroker_blockchain_event_pb from "../messagebroker/messagebroker_blockchain_event_pb";
import * as messagebroker_messagebroker_subscribe_on_request_pb from "../messagebroker/messagebroker_subscribe_on_request_pb";
import * as grpc from "@grpc/grpc-js";

interface IBlockchainEventsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  subscribeOn: grpc.MethodDefinition<messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest, messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;
}

export const BlockchainEventsServiceService: IBlockchainEventsServiceService;

export interface IBlockchainEventsServiceServer extends grpc.UntypedServiceImplementation {
  subscribeOn: grpc.handleServerStreamingCall<messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest, messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;
}

export class BlockchainEventsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  subscribeOn(argument: messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;
  subscribeOn(argument: messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;
}
