import * as grpcWeb from 'grpc-web';

import * as util_util_contract_status_service_pb from '../util/util_contract_status_service_pb';


export class ContractStatusServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  contractExecutionStatuses(
    request: util_util_contract_status_service_pb.ContractExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<util_util_contract_status_service_pb.ContractExecutionResponse>;

}

export class ContractStatusServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  contractExecutionStatuses(
    request: util_util_contract_status_service_pb.ContractExecutionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<util_util_contract_status_service_pb.ContractExecutionResponse>;

}

