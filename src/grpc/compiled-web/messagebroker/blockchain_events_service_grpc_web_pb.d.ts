import * as grpcWeb from 'grpc-web';

import * as messagebroker_subscribe_on_request_pb from '../messagebroker/subscribe_on_request_pb';
import * as messagebroker_blockchain_event_pb from '../messagebroker/blockchain_event_pb';


export class BlockchainEventsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscribeOn(
    request: messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messagebroker_blockchain_event_pb.BlockchainEvent>;

}

export class BlockchainEventsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  subscribeOn(
    request: messagebroker_subscribe_on_request_pb.SubscribeOnRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messagebroker_blockchain_event_pb.BlockchainEvent>;

}

