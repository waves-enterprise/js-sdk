import * as grpcWeb from 'grpc-web';

import * as contract_contract_privacy_service_pb from '../contract/contract_privacy_service_pb';


export class PrivacyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPolicyRecipients(
    request: contract_contract_privacy_service_pb.PolicyRecipientsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_privacy_service_pb.PolicyRecipientsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_privacy_service_pb.PolicyRecipientsResponse>;

  getPolicyOwners(
    request: contract_contract_privacy_service_pb.PolicyOwnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_privacy_service_pb.PolicyOwnersResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_privacy_service_pb.PolicyOwnersResponse>;

  getPolicyHashes(
    request: contract_contract_privacy_service_pb.PolicyHashesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_privacy_service_pb.PolicyHashesResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_privacy_service_pb.PolicyHashesResponse>;

  getPolicyItemData(
    request: contract_contract_privacy_service_pb.PolicyItemDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_privacy_service_pb.PolicyItemDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_privacy_service_pb.PolicyItemDataResponse>;

  getPolicyItemInfo(
    request: contract_contract_privacy_service_pb.PolicyItemInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_contract_privacy_service_pb.PolicyItemInfoResponse) => void
  ): grpcWeb.ClientReadableStream<contract_contract_privacy_service_pb.PolicyItemInfoResponse>;

}

export class PrivacyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPolicyRecipients(
    request: contract_contract_privacy_service_pb.PolicyRecipientsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_privacy_service_pb.PolicyRecipientsResponse>;

  getPolicyOwners(
    request: contract_contract_privacy_service_pb.PolicyOwnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_privacy_service_pb.PolicyOwnersResponse>;

  getPolicyHashes(
    request: contract_contract_privacy_service_pb.PolicyHashesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_privacy_service_pb.PolicyHashesResponse>;

  getPolicyItemData(
    request: contract_contract_privacy_service_pb.PolicyItemDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_privacy_service_pb.PolicyItemDataResponse>;

  getPolicyItemInfo(
    request: contract_contract_privacy_service_pb.PolicyItemInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_contract_privacy_service_pb.PolicyItemInfoResponse>;

}

