import { IHash } from "../../../interfaces";
import config from '../../config';
import * as constants from '../../constants';
import WavesError from '../../errors/WavesError';
import {
    createFetchWrapper,
    createTxRequestWrapper,
    IFetchWrapper,
    POST_TEMPLATE,
    processJSON,
    PRODUCTS,
    VERSIONS
} from '../../utils/request';
import { TransactionsRequests } from "./transactions.x";
import * as requests from "./transactions.x";

export default class Transactions {

    constructor(fetchInstance: IFetchWrapper<any>) {
        this.fetch = createFetchWrapper({
            product: PRODUCTS.NODE,
            version: VERSIONS.V1,
            pipe: processJSON,
            fetchInstance
        });
        this.txRequestFromNodeAddress = createTxRequestWrapper(fetchInstance);
        this.txRequestFromClientAddress = new TransactionsRequests(this.fetch);
    }

    private readonly fetch: IFetchWrapper<any>;

    private readonly txRequestFromNodeAddress: (
      preRemapAsync: Function,
      postRemap: Function,
      nodeAddress: string,
      data: IHash<any>,
      extraData: {
          sender: string;
          password: string;
      }
    ) => Promise<any>;

    private readonly txRequestFromClientAddress: TransactionsRequests;

    get(id: string) {
        if (id === constants.WAVES) {
            return Promise.resolve(constants.WAVES_V1_ISSUE_TX);
        } else {
            return this.fetch(`/transactions/info/${id}`);
        }
    }

    getList(address: string, limit: number = config.getRequestParams().limit) {
        // In the end of the line a strange response artifact is handled
        return this.fetch(`/transactions/address/${address}/limit/${limit}`).then((array) => array[0]);
    }

    utxSize() {
        return this.fetch('/transactions/unconfirmed/size');
    }

    utxGet(id: string) {
        return this.fetch(`/transactions/unconfirmed/info/${id}`);
    }

    utxGetList() {
        return this.fetch('/transactions/unconfirmed');
    }

    broadcastFromClientAddress(type: string, data, keys) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                return this.txRequestFromClientAddress.sendIssueTx(data, keys);
            case constants.TRANSFER_TX_NAME:
                return this.txRequestFromClientAddress.sendTransferTx(data, keys);
            case constants.REISSUE_TX_NAME:
                return this.txRequestFromClientAddress.sendReissueTx(data, keys);
            case constants.BURN_TX_NAME:
                return this.txRequestFromClientAddress.sendBurnTx(data, keys);
            case constants.LEASE_TX_NAME:
                return this.txRequestFromClientAddress.sendLeaseTx(data, keys);
            case constants.CANCEL_LEASING_TX_NAME:
                return this.txRequestFromClientAddress.sendCancelLeasingTx(data, keys);
            case constants.CREATE_ALIAS_TX_NAME:
                return this.txRequestFromClientAddress.sendCreateAliasTx(data, keys);
            case constants.MASS_TRANSFER_TX_NAME:
                return this.txRequestFromClientAddress.sendMassTransferTx(data, keys);
            case constants.DATA_TX_NAME:
                return this.txRequestFromClientAddress.sendDataTx(data, keys);
            case constants.SET_SCRIPT_TX_NAME:
                return this.txRequestFromClientAddress.sendSetScriptTx(data, keys);
            case constants.SPONSORSHIP_TX_NAME:
                return this.txRequestFromClientAddress.sendSponsorshipTx(data, keys);
            case constants.PERMISSION_TX_NAME:
                return this.txRequestFromClientAddress.sendPermissionTx(data, keys);
            case constants.DOCKER_CREATE_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerCreateTx(data, keys);
            case constants.DOCKER_CREATE_V2_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerCreateV2Tx(data, keys);
            case constants.DOCKER_CALL_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerCallTx(data, keys);
            case constants.DOCKER_CALL_V2_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerCallV2Tx(data, keys);
            case constants.DOCKER_CALL_V3_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerCallV3Tx(data, keys);
            case constants.DOCKER_DISABLE_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerDisableTx(data, keys);
            case constants.DOCKER_UPDATE_V2_TX_NAME:
                return this.txRequestFromClientAddress.sendDockerUpdateV2Tx(data, keys);

            case constants.POLICY_REGISTER_NODE_TX_NAME:
                return this.txRequestFromClientAddress.sendNodeRegistry(data, keys);
            case constants.POLICY_CREATE_TX_NAME:
                return this.txRequestFromClientAddress.sendPolicyCreate(data, keys);
            case constants.POLICY_UPDATE_TX_NAME:
                return this.txRequestFromClientAddress.sendPolicyUpdate(data, keys);
            default:
                throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
    }

    async broadcastFromNodeAddress(type: string, nodeAddress: string, data, extraData) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preIssue, requests.postIssue, nodeAddress, data, extraData);
            case constants.TRANSFER_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preTransfer, requests.postTransfer, nodeAddress, data, extraData);
            case constants.REISSUE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preReissue, requests.postReissue, nodeAddress, data, extraData);
            case constants.BURN_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preBurn, requests.postBurn, nodeAddress, data, extraData);
            case constants.LEASE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preLease, requests.postLease, nodeAddress, data, extraData);
            case constants.CANCEL_LEASING_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preCancelLeasing, requests.postCancelLeasing, nodeAddress, data, extraData);
            case constants.CREATE_ALIAS_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preCreateAlias, requests.postCreateAlias, nodeAddress, data, extraData);
            case constants.MASS_TRANSFER_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preMassTransfer, requests.postMassTransfer, nodeAddress, data, extraData);
            case constants.DATA_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preData, requests.postData, nodeAddress, data, extraData);
            case constants.SET_SCRIPT_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preSetScript, requests.postSetScript, nodeAddress, data, extraData);
            case constants.SPONSORSHIP_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preSponsorship, requests.postSponsorship, nodeAddress, data, extraData);
            case constants.PERMISSION_TX_NAME:
                return this.txRequestFromNodeAddress(requests.prePermit, requests.postPermit, nodeAddress, data, extraData);
            case constants.DOCKER_CREATE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerCreate, requests.postDockerCreate, nodeAddress, data, extraData);
            case constants.DOCKER_CREATE_V2_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerCreateV2, requests.postDockerCreateV2, nodeAddress, data, extraData);
            case constants.DOCKER_CALL_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerCall, requests.postDockerCall, nodeAddress, data, extraData);
            case constants.DOCKER_CALL_V2_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerCallV2, requests.postDockerCallV2, nodeAddress, data, extraData);
            case constants.DOCKER_CALL_V3_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerCallV3, requests.postDockerCallV3, nodeAddress, data, extraData);
            case constants.DOCKER_DISABLE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerDisable, requests.postDockerDisable, nodeAddress, data, extraData);
            case constants.DOCKER_UPDATE_V2_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preDockerUpdateV2, requests.postDockerUpdateV2, nodeAddress, data, extraData);
            case constants.POLICY_REGISTER_NODE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preNodeRegistry, requests.postNodeRegistry, nodeAddress, data, extraData);
            case constants.POLICY_CREATE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.prePolicyCreate, requests.postPolicyCreate, nodeAddress, data, extraData);
            case constants.POLICY_UPDATE_TX_NAME:
                return this.txRequestFromNodeAddress(requests.preUpdateCreate, requests.postUpdateCreate, nodeAddress, data, extraData);
            default:
                throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
    }

    sign(type: string, data, keys) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                if (data.script) {
                    return requests.sendSignedIssueTx(data, keys);
                } else {
                    return requests.sendSignedIssueNoScriptTx(data, keys)
                }
            case constants.TRANSFER_TX_NAME:
                return requests.sendSignedTransferTx(data, keys);
            case constants.REISSUE_TX_NAME:
                return requests.sendSignedReissueTx(data, keys);
            case constants.BURN_TX_NAME:
                return requests.sendSignedBurnTx(data, keys);
            case constants.LEASE_TX_NAME:
                return requests.sendSignedLeaseTx(data, keys);
            case constants.CANCEL_LEASING_TX_NAME:
                return requests.sendSignedCancelLeasingTx(data, keys);
            case constants.CREATE_ALIAS_TX_NAME:
                return requests.sendSignedCreateAliasTx(data, keys);
            case constants.MASS_TRANSFER_TX_NAME:
                return requests.sendSignedMassTransferTx(data, keys);
            case constants.DATA_TX_NAME:
                return requests.sendSignedDataTx(data, keys);
            case constants.SET_SCRIPT_TX_NAME:
                return requests.sendSignedSetScriptTx(data, keys);
            case constants.SPONSORSHIP_TX_NAME:
                return requests.sendSignedSponsorshipTx(data, keys);
            case constants.PERMISSION_TX_NAME:
                return requests.sendSignedPermissionTx(data, keys);
            case constants.DOCKER_CREATE_TX_NAME:
                return requests.sendSignedDockerCreateTx(data, keys);
            case constants.DOCKER_CREATE_V2_TX_NAME:
                return requests.sendSignedDockerCreateV2Tx(data, keys);
            case constants.DOCKER_CALL_TX_NAME:
                return requests.sendSignedDockerCallTx(data, keys);
            case constants.DOCKER_CALL_V2_TX_NAME:
                return requests.sendSignedDockerCallV2Tx(data, keys);
            case constants.DOCKER_CALL_V3_TX_NAME:
                return requests.sendSignedDockerCallV3Tx(data, keys);
            case constants.DOCKER_DISABLE_TX_NAME:
                return requests.sendSignedDockerDisableTx(data, keys);
            case constants.DOCKER_UPDATE_V2_TX_NAME:
                return requests.sendSignedDockerUpdateV2Tx(data, keys);

            case constants.POLICY_REGISTER_NODE_TX_NAME:
                return requests.signNodeRegistry(data, keys);
            case constants.POLICY_CREATE_TX_NAME:
                return requests.signPolicyCreate(data, keys);
            case constants.POLICY_UPDATE_TX_NAME:
                return requests.signPolicyUpdate(data, keys);
            default:
                throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
    }

    rawBroadcast(data) {
        return this.fetch(constants.BROADCAST_PATH, {
            ...POST_TEMPLATE,
            body: JSON.stringify(data)
        });
    }

    signOnNode(data) {
        return this.fetch('/transactions/sign');
    }

};
