import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as contract_address_pb from '../contract/address_pb';


export class AddressServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAddresses(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_address_pb.AddressesResponse) => void
  ): grpcWeb.ClientReadableStream<contract_address_pb.AddressesResponse>;

  getAddressData(
    request: contract_address_pb.AddressDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_address_pb.AddressDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_address_pb.AddressDataResponse>;

}

export class AddressServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAddresses(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_address_pb.AddressesResponse>;

  getAddressData(
    request: contract_address_pb.AddressDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_address_pb.AddressDataResponse>;

}

