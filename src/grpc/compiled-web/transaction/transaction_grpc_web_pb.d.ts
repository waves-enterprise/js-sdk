import * as grpcWeb from 'grpc-web';

import * as managed_transaction_pb from '../managed/transaction_pb';


export class TransactionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: managed_transaction_pb.Transaction,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: managed_transaction_pb.Transaction) => void
  ): grpcWeb.ClientReadableStream<managed_transaction_pb.Transaction>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  broadcast(
    request: managed_transaction_pb.Transaction,
    metadata?: grpcWeb.Metadata
  ): Promise<managed_transaction_pb.Transaction>;

}

