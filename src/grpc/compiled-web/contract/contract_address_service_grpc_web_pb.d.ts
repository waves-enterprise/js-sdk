import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as contract_contract_address_service_pb from '../contract/contract_address_service_pb';


export class AddressServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAddresses(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_address_service_pb.AddressesResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_address_service_pb.AddressesResponse>;

  getAddressData(
    request: contract_contract_address_service_pb.AddressDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_address_service_pb.AddressDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_address_service_pb.AddressDataResponse>;

}

export class AddressServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAddresses(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_address_service_pb.AddressesResponse>;

  getAddressData(
    request: contract_contract_address_service_pb.AddressDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_address_service_pb.AddressDataResponse>;

}

