// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/contract_address_service.proto

import * as contract_contract_address_service_pb from "../contract/contract_address_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IAddressServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAddresses: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, contract_contract_address_service_pb.AddressesResponse>;
  getAddressData: grpc.MethodDefinition<contract_contract_address_service_pb.AddressDataRequest, contract_contract_address_service_pb.AddressDataResponse>;
}

export const AddressServiceService: IAddressServiceService;

export interface IAddressServiceServer extends grpc.UntypedServiceImplementation {
  getAddresses: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, contract_contract_address_service_pb.AddressesResponse>;
  getAddressData: grpc.handleUnaryCall<contract_contract_address_service_pb.AddressDataRequest, contract_contract_address_service_pb.AddressDataResponse>;
}

export class AddressServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAddresses(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddresses(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddresses(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_contract_address_service_pb.AddressDataRequest, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressDataResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_contract_address_service_pb.AddressDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressDataResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_contract_address_service_pb.AddressDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_address_service_pb.AddressDataResponse>): grpc.ClientUnaryCall;
}
