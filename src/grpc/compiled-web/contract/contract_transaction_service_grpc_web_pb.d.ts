import * as grpcWeb from 'grpc-web';

import * as contract_contract_transaction_service_pb from '../contract/contract_transaction_service_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transactionExists(
    request: contract_contract_transaction_service_pb.TransactionExistsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_transaction_service_pb.TransactionExistsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_transaction_service_pb.TransactionExistsResponse>;

  transactionInfo(
    request: contract_contract_transaction_service_pb.TransactionInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_transaction_service_pb.TransactionInfoResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_transaction_service_pb.TransactionInfoResponse>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transactionExists(
    request: contract_contract_transaction_service_pb.TransactionExistsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_transaction_service_pb.TransactionExistsResponse>;

  transactionInfo(
    request: contract_contract_transaction_service_pb.TransactionInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_transaction_service_pb.TransactionInfoResponse>;

}

