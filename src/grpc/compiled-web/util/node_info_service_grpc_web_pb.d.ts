import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as util_node_info_service_pb from '../util/node_info_service_pb';


export class NodeInfoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  nodeConfig(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: util_node_info_service_pb.NodeConfigResponse) => void
  ): grpcWeb.ClientReadableStream<util_node_info_service_pb.NodeConfigResponse>;

}

export class NodeInfoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  nodeConfig(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<util_node_info_service_pb.NodeConfigResponse>;

}

