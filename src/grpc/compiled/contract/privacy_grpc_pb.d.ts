// GENERATED CODE -- DO NOT EDIT!

// package: wavesenterprise
// file: contract/privacy.proto

import * as contract_privacy_pb from "../contract/privacy_pb";
import * as grpc from "@grpc/grpc-js";

interface IPrivacyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPolicyRecipients: grpc.MethodDefinition<contract_privacy_pb.PolicyRecipientsRequest, contract_privacy_pb.PolicyRecipientsResponse>;
  getPolicyOwners: grpc.MethodDefinition<contract_privacy_pb.PolicyOwnersRequest, contract_privacy_pb.PolicyOwnersResponse>;
  getPolicyHashes: grpc.MethodDefinition<contract_privacy_pb.PolicyHashesRequest, contract_privacy_pb.PolicyHashesResponse>;
  getPolicyItemData: grpc.MethodDefinition<contract_privacy_pb.PolicyItemDataRequest, contract_privacy_pb.PolicyItemDataResponse>;
  getPolicyItemInfo: grpc.MethodDefinition<contract_privacy_pb.PolicyItemInfoRequest, contract_privacy_pb.PolicyItemInfoResponse>;
}

export const PrivacyServiceService: IPrivacyServiceService;

export interface IPrivacyServiceServer extends grpc.UntypedServiceImplementation {
  getPolicyRecipients: grpc.handleUnaryCall<contract_privacy_pb.PolicyRecipientsRequest, contract_privacy_pb.PolicyRecipientsResponse>;
  getPolicyOwners: grpc.handleUnaryCall<contract_privacy_pb.PolicyOwnersRequest, contract_privacy_pb.PolicyOwnersResponse>;
  getPolicyHashes: grpc.handleUnaryCall<contract_privacy_pb.PolicyHashesRequest, contract_privacy_pb.PolicyHashesResponse>;
  getPolicyItemData: grpc.handleUnaryCall<contract_privacy_pb.PolicyItemDataRequest, contract_privacy_pb.PolicyItemDataResponse>;
  getPolicyItemInfo: grpc.handleUnaryCall<contract_privacy_pb.PolicyItemInfoRequest, contract_privacy_pb.PolicyItemInfoResponse>;
}

export class PrivacyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPolicyRecipients(argument: contract_privacy_pb.PolicyRecipientsRequest, callback: grpc.requestCallback<contract_privacy_pb.PolicyRecipientsResponse>): grpc.ClientUnaryCall;
  getPolicyRecipients(argument: contract_privacy_pb.PolicyRecipientsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyRecipientsResponse>): grpc.ClientUnaryCall;
  getPolicyRecipients(argument: contract_privacy_pb.PolicyRecipientsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyRecipientsResponse>): grpc.ClientUnaryCall;
  getPolicyOwners(argument: contract_privacy_pb.PolicyOwnersRequest, callback: grpc.requestCallback<contract_privacy_pb.PolicyOwnersResponse>): grpc.ClientUnaryCall;
  getPolicyOwners(argument: contract_privacy_pb.PolicyOwnersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyOwnersResponse>): grpc.ClientUnaryCall;
  getPolicyOwners(argument: contract_privacy_pb.PolicyOwnersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyOwnersResponse>): grpc.ClientUnaryCall;
  getPolicyHashes(argument: contract_privacy_pb.PolicyHashesRequest, callback: grpc.requestCallback<contract_privacy_pb.PolicyHashesResponse>): grpc.ClientUnaryCall;
  getPolicyHashes(argument: contract_privacy_pb.PolicyHashesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyHashesResponse>): grpc.ClientUnaryCall;
  getPolicyHashes(argument: contract_privacy_pb.PolicyHashesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyHashesResponse>): grpc.ClientUnaryCall;
  getPolicyItemData(argument: contract_privacy_pb.PolicyItemDataRequest, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemDataResponse>): grpc.ClientUnaryCall;
  getPolicyItemData(argument: contract_privacy_pb.PolicyItemDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemDataResponse>): grpc.ClientUnaryCall;
  getPolicyItemData(argument: contract_privacy_pb.PolicyItemDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemDataResponse>): grpc.ClientUnaryCall;
  getPolicyItemInfo(argument: contract_privacy_pb.PolicyItemInfoRequest, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemInfoResponse>): grpc.ClientUnaryCall;
  getPolicyItemInfo(argument: contract_privacy_pb.PolicyItemInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemInfoResponse>): grpc.ClientUnaryCall;
  getPolicyItemInfo(argument: contract_privacy_pb.PolicyItemInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<contract_privacy_pb.PolicyItemInfoResponse>): grpc.ClientUnaryCall;
}
