import * as grpcWeb from 'grpc-web';

import * as contract_contract_permission_service_pb from '../contract/contract_permission_service_pb';


export class PermissionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissions(
    request: contract_contract_permission_service_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_permission_service_pb.PermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_permission_service_pb.PermissionsResponse>;

  getPermissionsForAddresses(
    request: contract_contract_permission_service_pb.AddressesPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_permission_service_pb.AddressesPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_permission_service_pb.AddressesPermissionsResponse>;

}

export class PermissionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissions(
    request: contract_contract_permission_service_pb.PermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_permission_service_pb.PermissionsResponse>;

  getPermissionsForAddresses(
    request: contract_contract_permission_service_pb.AddressesPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_permission_service_pb.AddressesPermissionsResponse>;

}

