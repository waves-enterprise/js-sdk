import { createFetchWrapper, PRODUCTS, VERSIONS, processJSON, POST_TEMPLATE } from '../../utils/request';
import WavesError from '../../errors/WavesError';
import * as constants from '../../constants';
import config from '../../config';
import * as requests from './transactions.x';


const fetch = createFetchWrapper(PRODUCTS.NODE, VERSIONS.V1, processJSON);


export default {

    get(id: string) {
        if (id === constants.WAVES) {
            return Promise.resolve(constants.WAVES_V1_ISSUE_TX);
        } else {
            return fetch(`/transactions/info/${id}`);
        }
    },

    getList(address: string, limit: number = config.getRequestParams().limit) {
        // In the end of the line a strange response artifact is handled
        return fetch(`/transactions/address/${address}/limit/${limit}`).then((array) => array[0]);
    },

    utxSize() {
        return fetch('/transactions/unconfirmed/size');
    },

    utxGet(id: string) {
        return fetch(`/transactions/unconfirmed/info/${id}`);
    },

    utxGetList() {
        return fetch('/transactions/unconfirmed');
    },

    broadcast(type: string, data, keys) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                return requests.sendIssueTx(data, keys);
            case constants.TRANSFER_TX_NAME:
                return requests.sendTransferTx(data, keys);
            case constants.REISSUE_TX_NAME:
                return requests.sendReissueTx(data, keys);
            case constants.BURN_TX_NAME:
                return requests.sendBurnTx(data, keys);
            case constants.LEASE_TX_NAME:
                return requests.sendLeaseTx(data, keys);
            case constants.CANCEL_LEASING_TX_NAME:
                return requests.sendCancelLeasingTx(data, keys);
            case constants.CREATE_ALIAS_TX_NAME:
                return requests.sendCreateAliasTx(data, keys);
            case constants.MASS_TRANSFER_TX_NAME:
                return requests.sendMassTransferTx(data, keys);
            case constants.DATA_TX_NAME:
                return requests.sendDataTx(data, keys);
            case constants.SET_SCRIPT_TX_NAME:
                return requests.sendSetScriptTx(data, keys);
            case constants.SPONSORSHIP_TX_NAME:
                return requests.sendSponsorshipTx(data, keys);
            case constants.PERMISSION_TX_NAME:
                return requests.sendPermissionTx(data, keys);
            case constants.DOCKER_CREATE_TX_NAME:
                return requests.sendDockerCreateTx(data, keys);
            case constants.DOCKER_CALL_TX_NAME:
                return requests.sendDockerCallTx(data, keys);
           case constants.DOCKER_DISABLE_TX_NAME:
                return requests.sendDockerDisableTx(data, keys);

            case constants.POLICY_REGISTER_NODE_TX_NAME:
                return requests.sendNodeRegistry(data, keys);
            case constants.POLICY_CREATE_TX_NAME:
                return requests.sendPolicyCreate(data, keys);
            case constants.POLICY_UPDATE_TX_NAME:
                return requests.sendPolicyUpdate(data, keys);
            default:
                throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
    },

    sign(type: string, data, keys) {
        switch (type) {
            case constants.ISSUE_TX_NAME:
                return requests.sendSignedIssueTx(data, keys);
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
            case constants.DOCKER_CALL_TX_NAME:
                return requests.sendSignedDockerCallTx(data, keys);
            case constants.DOCKER_DISABLE_TX_NAME:
                return requests.sendSignedDockerDisableTx(data, keys);

            case constants.POLICY_REGISTER_NODE_TX_NAME:
                return requests.signNodeRegistry(data, keys);
            case constants.POLICY_CREATE_TX_NAME:
                return requests.signPolicyCreate(data, keys);
            case constants.POLICY_UPDATE_TX_NAME:
                return requests.signPolicyUpdate(data, keys);
            default:
                throw new WavesError(`Wrong transaction type: ${type}`, data);
        }
    },

    rawBroadcast(data) {
        return fetch(constants.BROADCAST_PATH, {
            ...POST_TEMPLATE,
            body: JSON.stringify(data)
        });
    },

    signOnNode(data) {
        return fetch('/transactions/sign');
    },

};
