// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/contract_permission_service.proto

import * as contract_contract_permission_service_pb from "../contract/contract_permission_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IPermissionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPermissions: grpc.MethodDefinition<contract_contract_permission_service_pb.PermissionsRequest, contract_contract_permission_service_pb.PermissionsResponse>;
  getPermissionsForAddresses: grpc.MethodDefinition<contract_contract_permission_service_pb.AddressesPermissionsRequest, contract_contract_permission_service_pb.AddressesPermissionsResponse>;
}

export const PermissionServiceService: IPermissionServiceService;

export interface IPermissionServiceServer extends grpc.UntypedServiceImplementation {
  getPermissions: grpc.handleUnaryCall<contract_contract_permission_service_pb.PermissionsRequest, contract_contract_permission_service_pb.PermissionsResponse>;
  getPermissionsForAddresses: grpc.handleUnaryCall<contract_contract_permission_service_pb.AddressesPermissionsRequest, contract_contract_permission_service_pb.AddressesPermissionsResponse>;
}

export class PermissionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPermissions(argument: contract_contract_permission_service_pb.PermissionsRequest, callback: grpc.requestCallback<contract_contract_permission_service_pb.PermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: contract_contract_permission_service_pb.PermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_permission_service_pb.PermissionsResponse>): grpc.ClientUnaryCall;
  getPermissions(argument: contract_contract_permission_service_pb.PermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_permission_service_pb.PermissionsResponse>): grpc.ClientUnaryCall;
  getPermissionsForAddresses(argument: contract_contract_permission_service_pb.AddressesPermissionsRequest, callback: grpc.requestCallback<contract_contract_permission_service_pb.AddressesPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissionsForAddresses(argument: contract_contract_permission_service_pb.AddressesPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_permission_service_pb.AddressesPermissionsResponse>): grpc.ClientUnaryCall;
  getPermissionsForAddresses(argument: contract_contract_permission_service_pb.AddressesPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_contract_permission_service_pb.AddressesPermissionsResponse>): grpc.ClientUnaryCall;
}
