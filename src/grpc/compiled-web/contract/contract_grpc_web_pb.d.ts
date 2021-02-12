import * as grpcWeb from 'grpc-web';

import * as contract_contract_pb from '../contract/contract_pb';


export class ContractServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  connect(
    request: contract_contract_pb.ConnectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contract_contract_pb.ContractTransactionResponse>;

  commitExecutionSuccess(
    request: contract_contract_pb.ExecutionSuccessRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pb.CommitExecutionResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pb.CommitExecutionResponse>;

  commitExecutionError(
    request: contract_contract_pb.ExecutionErrorRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pb.CommitExecutionResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pb.CommitExecutionResponse>;

  getContractKeys(
    request: contract_contract_pb.ContractKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pb.ContractKeysResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pb.ContractKeysResponse>;

  getContractKey(
    request: contract_contract_pb.ContractKeyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pb.ContractKeyResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pb.ContractKeyResponse>;

}

export class ContractServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  connect(
    request: contract_contract_pb.ConnectionRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contract_contract_pb.ContractTransactionResponse>;

  commitExecutionSuccess(
    request: contract_contract_pb.ExecutionSuccessRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pb.CommitExecutionResponse>;

  commitExecutionError(
    request: contract_contract_pb.ExecutionErrorRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pb.CommitExecutionResponse>;

  getContractKeys(
    request: contract_contract_pb.ContractKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pb.ContractKeysResponse>;

  getContractKey(
    request: contract_contract_pb.ContractKeyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pb.ContractKeyResponse>;

}

