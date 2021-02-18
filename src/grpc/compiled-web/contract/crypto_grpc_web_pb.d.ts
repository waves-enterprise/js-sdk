import * as grpcWeb from 'grpc-web';

import * as contract_crypto_pb from '../contract/crypto_pb';


export class CryptoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encryptSeparate(
    request: contract_crypto_pb.EncryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_crypto_pb.EncryptSeparateResponse) => void
  ): grpcWeb.ClientReadableStream<contract_crypto_pb.EncryptSeparateResponse>;

  encryptCommon(
    request: contract_crypto_pb.EncryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_crypto_pb.EncryptedForManyResponse) => void
  ): grpcWeb.ClientReadableStream<contract_crypto_pb.EncryptedForManyResponse>;

  decrypt(
    request: contract_crypto_pb.DecryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_crypto_pb.DecryptDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_crypto_pb.DecryptDataResponse>;

}

export class CryptoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encryptSeparate(
    request: contract_crypto_pb.EncryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_crypto_pb.EncryptSeparateResponse>;

  encryptCommon(
    request: contract_crypto_pb.EncryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_crypto_pb.EncryptedForManyResponse>;

  decrypt(
    request: contract_crypto_pb.DecryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_crypto_pb.DecryptDataResponse>;

}

