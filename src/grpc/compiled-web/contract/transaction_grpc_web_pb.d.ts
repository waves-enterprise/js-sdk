import * as grpcWeb from 'grpc-web'

import * as contract_transaction_pb from '../contract/transaction_pb'


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transactionExists(
    request: contract_transaction_pb.TransactionExistsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_transaction_pb.TransactionExistsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_transaction_pb.TransactionExistsResponse>

  transactionInfo(
    request: contract_transaction_pb.TransactionInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_transaction_pb.TransactionInfoResponse) => void
  ): grpcWeb.ClientReadableStream<contract_transaction_pb.TransactionInfoResponse>

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transactionExists(
    request: contract_transaction_pb.TransactionExistsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_transaction_pb.TransactionExistsResponse>

  transactionInfo(
    request: contract_transaction_pb.TransactionInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_transaction_pb.TransactionInfoResponse>

}

