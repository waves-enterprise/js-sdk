import * as grpcWeb from 'grpc-web'

import * as contract_permission_pb from '../contract/permission_pb'


export class PermissionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissions(
    request: contract_permission_pb.PermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_permission_pb.PermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_permission_pb.PermissionsResponse>

  getPermissionsForAddresses(
    request: contract_permission_pb.AddressesPermissionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_permission_pb.AddressesPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_permission_pb.AddressesPermissionsResponse>

}

export class PermissionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPermissions(
    request: contract_permission_pb.PermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_permission_pb.PermissionsResponse>

  getPermissionsForAddresses(
    request: contract_permission_pb.AddressesPermissionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_permission_pb.AddressesPermissionsResponse>

}

