import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as managed_transaction_pb from '../managed/transaction_pb';
import * as transaction_transaction_public_service_pb from '../transaction/transaction_public_service_pb';


export class TransactionPublicServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: managed_transaction_pb.Transaction,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: managed_transaction_pb.Transaction) => void
  ): grpcWeb.ClientReadableStream<managed_transaction_pb.Transaction>;

  utxInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<transaction_transaction_public_service_pb.UtxSize>;

}

export class TransactionPublicServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: managed_transaction_pb.Transaction,
    metadata?: grpcWeb.Metadata
  ): Promise<managed_transaction_pb.Transaction>;

  utxInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<transaction_transaction_public_service_pb.UtxSize>;

}

