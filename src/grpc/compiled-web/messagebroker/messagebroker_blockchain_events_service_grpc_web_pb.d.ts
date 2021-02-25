import * as grpcWeb from 'grpc-web';

import * as messagebroker_messagebroker_subscribe_on_request_pb from '../messagebroker/messagebroker_subscribe_on_request_pb';
import * as messagebroker_messagebroker_blockchain_event_pb from '../messagebroker/messagebroker_blockchain_event_pb';


export class BlockchainEventsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscribeOn(
    request: messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;

}

export class BlockchainEventsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscribeOn(
    request: messagebroker_messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messagebroker_messagebroker_blockchain_event_pb.BlockchainEvent>;

}

