// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = eval('require')('@grpc/grpc-js');
var contract_contract_privacy_service_pb = require('../contract/contract_privacy_service_pb.js');

function serialize_wavesenterprise_PolicyHashesRequest(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyHashesRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyHashesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyHashesRequest(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyHashesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyHashesResponse(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyHashesResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyHashesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyHashesResponse(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyHashesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyItemDataRequest(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyItemDataRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyItemDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyItemDataRequest(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyItemDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyItemDataResponse(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyItemDataResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyItemDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyItemDataResponse(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyItemDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyItemInfoRequest(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyItemInfoRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyItemInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyItemInfoRequest(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyItemInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyItemInfoResponse(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyItemInfoResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyItemInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyItemInfoResponse(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyItemInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyOwnersRequest(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyOwnersRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyOwnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyOwnersRequest(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyOwnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyOwnersResponse(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyOwnersResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyOwnersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyOwnersResponse(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyOwnersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyRecipientsRequest(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyRecipientsRequest)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyRecipientsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyRecipientsRequest(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyRecipientsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wavesenterprise_PolicyRecipientsResponse(arg) {
  if (!(arg instanceof contract_contract_privacy_service_pb.PolicyRecipientsResponse)) {
    throw new Error('Expected argument of type wavesenterprise.PolicyRecipientsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wavesenterprise_PolicyRecipientsResponse(buffer_arg) {
  return contract_contract_privacy_service_pb.PolicyRecipientsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrivacyServiceService = exports.PrivacyServiceService = {
  getPolicyRecipients: {
    path: '/wavesenterprise.PrivacyService/GetPolicyRecipients',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_privacy_service_pb.PolicyRecipientsRequest,
    responseType: contract_contract_privacy_service_pb.PolicyRecipientsResponse,
    requestSerialize: serialize_wavesenterprise_PolicyRecipientsRequest,
    requestDeserialize: deserialize_wavesenterprise_PolicyRecipientsRequest,
    responseSerialize: serialize_wavesenterprise_PolicyRecipientsResponse,
    responseDeserialize: deserialize_wavesenterprise_PolicyRecipientsResponse,
  },
  getPolicyOwners: {
    path: '/wavesenterprise.PrivacyService/GetPolicyOwners',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_privacy_service_pb.PolicyOwnersRequest,
    responseType: contract_contract_privacy_service_pb.PolicyOwnersResponse,
    requestSerialize: serialize_wavesenterprise_PolicyOwnersRequest,
    requestDeserialize: deserialize_wavesenterprise_PolicyOwnersRequest,
    responseSerialize: serialize_wavesenterprise_PolicyOwnersResponse,
    responseDeserialize: deserialize_wavesenterprise_PolicyOwnersResponse,
  },
  getPolicyHashes: {
    path: '/wavesenterprise.PrivacyService/GetPolicyHashes',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_privacy_service_pb.PolicyHashesRequest,
    responseType: contract_contract_privacy_service_pb.PolicyHashesResponse,
    requestSerialize: serialize_wavesenterprise_PolicyHashesRequest,
    requestDeserialize: deserialize_wavesenterprise_PolicyHashesRequest,
    responseSerialize: serialize_wavesenterprise_PolicyHashesResponse,
    responseDeserialize: deserialize_wavesenterprise_PolicyHashesResponse,
  },
  getPolicyItemData: {
    path: '/wavesenterprise.PrivacyService/GetPolicyItemData',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_privacy_service_pb.PolicyItemDataRequest,
    responseType: contract_contract_privacy_service_pb.PolicyItemDataResponse,
    requestSerialize: serialize_wavesenterprise_PolicyItemDataRequest,
    requestDeserialize: deserialize_wavesenterprise_PolicyItemDataRequest,
    responseSerialize: serialize_wavesenterprise_PolicyItemDataResponse,
    responseDeserialize: deserialize_wavesenterprise_PolicyItemDataResponse,
  },
  getPolicyItemInfo: {
    path: '/wavesenterprise.PrivacyService/GetPolicyItemInfo',
    requestStream: false,
    responseStream: false,
    requestType: contract_contract_privacy_service_pb.PolicyItemInfoRequest,
    responseType: contract_contract_privacy_service_pb.PolicyItemInfoResponse,
    requestSerialize: serialize_wavesenterprise_PolicyItemInfoRequest,
    requestDeserialize: deserialize_wavesenterprise_PolicyItemInfoRequest,
    responseSerialize: serialize_wavesenterprise_PolicyItemInfoResponse,
    responseDeserialize: deserialize_wavesenterprise_PolicyItemInfoResponse,
  },
};

exports.PrivacyServiceClient = grpc.makeGenericClientConstructor(PrivacyServiceService);
