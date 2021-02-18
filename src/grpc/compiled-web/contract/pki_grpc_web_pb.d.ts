import * as grpcWeb from 'grpc-web'

import * as contract_pki_pb from '../contract/pki_pb'


export class PkiServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: contract_pki_pb.PkiSignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_pki_pb.PkiSignResponse) => void
  ): grpcWeb.ClientReadableStream<contract_pki_pb.PkiSignResponse>

  verify(
    request: contract_pki_pb.PkiVerifyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_pki_pb.PkiVerifyResponse) => void
  ): grpcWeb.ClientReadableStream<contract_pki_pb.PkiVerifyResponse>

}

export class PkiServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sign(
    request: contract_pki_pb.PkiSignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_pki_pb.PkiSignResponse>

  verify(
    request: contract_pki_pb.PkiVerifyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_pki_pb.PkiVerifyResponse>

}

