import * as grpcWeb from 'grpc-web';

import * as contract_privacy_pb from '../contract/privacy_pb';


export class PrivacyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPolicyRecipients(
    request: contract_privacy_pb.PolicyRecipientsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_privacy_pb.PolicyRecipientsResponse) => void
  ): grpcWeb.ClientReadableStream<contract_privacy_pb.PolicyRecipientsResponse>;

  getPolicyOwners(
    request: contract_privacy_pb.PolicyOwnersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_privacy_pb.PolicyOwnersResponse) => void
  ): grpcWeb.ClientReadableStream<contract_privacy_pb.PolicyOwnersResponse>;

  getPolicyHashes(
    request: contract_privacy_pb.PolicyHashesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_privacy_pb.PolicyHashesResponse) => void
  ): grpcWeb.ClientReadableStream<contract_privacy_pb.PolicyHashesResponse>;

  getPolicyItemData(
    request: contract_privacy_pb.PolicyItemDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_privacy_pb.PolicyItemDataResponse) => void
  ): grpcWeb.ClientReadableStream<contract_privacy_pb.PolicyItemDataResponse>;

  getPolicyItemInfo(
    request: contract_privacy_pb.PolicyItemInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contract_privacy_pb.PolicyItemInfoResponse) => void
  ): grpcWeb.ClientReadableStream<contract_privacy_pb.PolicyItemInfoResponse>;

}

export class PrivacyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getPolicyRecipients(
    request: contract_privacy_pb.PolicyRecipientsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_privacy_pb.PolicyRecipientsResponse>;

  getPolicyOwners(
    request: contract_privacy_pb.PolicyOwnersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_privacy_pb.PolicyOwnersResponse>;

  getPolicyHashes(
    request: contract_privacy_pb.PolicyHashesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_privacy_pb.PolicyHashesResponse>;

  getPolicyItemData(
    request: contract_privacy_pb.PolicyItemDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_privacy_pb.PolicyItemDataResponse>;

  getPolicyItemInfo(
    request: contract_privacy_pb.PolicyItemInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contract_privacy_pb.PolicyItemInfoResponse>;

}

