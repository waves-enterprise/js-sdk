import * as grpcWeb from 'grpc-web';

import * as contract_contract_crypto_service_pb from '../contract/contract_crypto_service_pb';


export class CryptoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encryptSeparate(
    request: contract_contract_crypto_service_pb.EncryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_crypto_service_pb.EncryptSeparateResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_crypto_service_pb.EncryptSeparateResponse>;

  encryptCommon(
    request: contract_contract_crypto_service_pb.EncryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_crypto_service_pb.EncryptedForManyResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_crypto_service_pb.EncryptedForManyResponse>;

  decrypt(
    request: contract_contract_crypto_service_pb.DecryptDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_crypto_service_pb.DecryptDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_crypto_service_pb.DecryptDataResponse>;

}

export class CryptoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  encryptSeparate(
    request: contract_contract_crypto_service_pb.EncryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_crypto_service_pb.EncryptSeparateResponse>;

  encryptCommon(
    request: contract_contract_crypto_service_pb.EncryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_crypto_service_pb.EncryptedForManyResponse>;

  decrypt(
    request: contract_contract_crypto_service_pb.DecryptDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_crypto_service_pb.DecryptDataResponse>;

}

