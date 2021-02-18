// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/pki.proto

import * as contract_pki_pb from "../contract/pki_pb"
import * as grpc from "@grpc/grpc-js"

interface IPkiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sign: grpc.MethodDefinition<contract_pki_pb.PkiSignRequest, contract_pki_pb.PkiSignResponse>
  verify: grpc.MethodDefinition<contract_pki_pb.PkiVerifyRequest, contract_pki_pb.PkiVerifyResponse>
}

export const PkiServiceService: IPkiServiceService

export interface IPkiServiceServer extends grpc.UntypedServiceImplementation {
  sign: grpc.handleUnaryCall<contract_pki_pb.PkiSignRequest, contract_pki_pb.PkiSignResponse>
  verify: grpc.handleUnaryCall<contract_pki_pb.PkiVerifyRequest, contract_pki_pb.PkiVerifyResponse>
}

export class PkiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sign(argument: contract_pki_pb.PkiSignRequest, callback: grpc.requestCallback<contract_pki_pb.PkiSignResponse>): grpc.ClientUnaryCall
  sign(argument: contract_pki_pb.PkiSignRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_pki_pb.PkiSignResponse>): grpc.ClientUnaryCall
  sign(argument: contract_pki_pb.PkiSignRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_pki_pb.PkiSignResponse>): grpc.ClientUnaryCall
  verify(argument: contract_pki_pb.PkiVerifyRequest, callback: grpc.requestCallback<contract_pki_pb.PkiVerifyResponse>): grpc.ClientUnaryCall
  verify(argument: contract_pki_pb.PkiVerifyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_pki_pb.PkiVerifyResponse>): grpc.ClientUnaryCall
  verify(argument: contract_pki_pb.PkiVerifyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_pki_pb.PkiVerifyResponse>): grpc.ClientUnaryCall
}
