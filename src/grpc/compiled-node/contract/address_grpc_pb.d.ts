// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/address.proto

import * as contract_address_pb from "../contract/address_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IAddressServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAddresses: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, contract_address_pb.AddressesResponse>;
  getAddressData: grpc.MethodDefinition<contract_address_pb.AddressDataRequest, contract_address_pb.AddressDataResponse>;
}

export const AddressServiceService: IAddressServiceService;

export interface IAddressServiceServer extends grpc.UntypedServiceImplementation {
  getAddresses: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, contract_address_pb.AddressesResponse>;
  getAddressData: grpc.handleUnaryCall<contract_address_pb.AddressDataRequest, contract_address_pb.AddressDataResponse>;
}

export class AddressServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAddresses(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<contract_address_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddresses(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_address_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddresses(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_address_pb.AddressesResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_address_pb.AddressDataRequest, callback: grpc.requestCallback<contract_address_pb.AddressDataResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_address_pb.AddressDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_address_pb.AddressDataResponse>): grpc.ClientUnaryCall;
  getAddressData(argument: contract_address_pb.AddressDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_address_pb.AddressDataResponse>): grpc.ClientUnaryCall;
}
