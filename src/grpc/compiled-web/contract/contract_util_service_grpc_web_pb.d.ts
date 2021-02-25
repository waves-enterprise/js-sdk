import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as contract_contract_util_service_pb from '../contract/contract_util_service_pb';


export class UtilServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getNodeTime(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_util_service_pb.NodeTimeResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_util_service_pb.NodeTimeResponse>;

}

export class UtilServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getNodeTime(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_util_service_pb.NodeTimeResponse>;

}

