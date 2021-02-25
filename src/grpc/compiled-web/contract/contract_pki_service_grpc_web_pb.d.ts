import * as grpcWeb from 'grpc-web';

import * as contract_contract_pki_service_pb from '../contract/contract_pki_service_pb';


export class PkiServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: contract_contract_pki_service_pb.PkiSignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pki_service_pb.PkiSignResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pki_service_pb.PkiSignResponse>;

  verify(
    request: contract_contract_pki_service_pb.PkiVerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_pki_service_pb.PkiVerifyResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_pki_service_pb.PkiVerifyResponse>;

}

export class PkiServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: contract_contract_pki_service_pb.PkiSignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pki_service_pb.PkiSignResponse>;

  verify(
    request: contract_contract_pki_service_pb.PkiVerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_pki_service_pb.PkiVerifyResponse>;

}

