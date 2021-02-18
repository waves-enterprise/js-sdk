// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/crypto.proto

import * as contract_crypto_pb from "../contract/crypto_pb"
import * as grpc from "@grpc/grpc-js"

interface ICryptoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  encryptSeparate: grpc.MethodDefinition<contract_crypto_pb.EncryptDataRequest, contract_crypto_pb.EncryptSeparateResponse>
  encryptCommon: grpc.MethodDefinition<contract_crypto_pb.EncryptDataRequest, contract_crypto_pb.EncryptedForManyResponse>
  decrypt: grpc.MethodDefinition<contract_crypto_pb.DecryptDataRequest, contract_crypto_pb.DecryptDataResponse>
}

export const CryptoServiceService: ICryptoServiceService

export interface ICryptoServiceServer extends grpc.UntypedServiceImplementation {
  encryptSeparate: grpc.handleUnaryCall<contract_crypto_pb.EncryptDataRequest, contract_crypto_pb.EncryptSeparateResponse>
  encryptCommon: grpc.handleUnaryCall<contract_crypto_pb.EncryptDataRequest, contract_crypto_pb.EncryptedForManyResponse>
  decrypt: grpc.handleUnaryCall<contract_crypto_pb.DecryptDataRequest, contract_crypto_pb.DecryptDataResponse>
}

export class CryptoServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  encryptSeparate(argument: contract_crypto_pb.EncryptDataRequest, callback: grpc.requestCallback<contract_crypto_pb.EncryptSeparateResponse>): grpc.ClientUnaryCall
  encryptSeparate(argument: contract_crypto_pb.EncryptDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.EncryptSeparateResponse>): grpc.ClientUnaryCall
  encryptSeparate(argument: contract_crypto_pb.EncryptDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.EncryptSeparateResponse>): grpc.ClientUnaryCall
  encryptCommon(argument: contract_crypto_pb.EncryptDataRequest, callback: grpc.requestCallback<contract_crypto_pb.EncryptedForManyResponse>): grpc.ClientUnaryCall
  encryptCommon(argument: contract_crypto_pb.EncryptDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.EncryptedForManyResponse>): grpc.ClientUnaryCall
  encryptCommon(argument: contract_crypto_pb.EncryptDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.EncryptedForManyResponse>): grpc.ClientUnaryCall
  decrypt(argument: contract_crypto_pb.DecryptDataRequest, callback: grpc.requestCallback<contract_crypto_pb.DecryptDataResponse>): grpc.ClientUnaryCall
  decrypt(argument: contract_crypto_pb.DecryptDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.DecryptDataResponse>): grpc.ClientUnaryCall
  decrypt(argument: contract_crypto_pb.DecryptDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_crypto_pb.DecryptDataResponse>): grpc.ClientUnaryCall
}
