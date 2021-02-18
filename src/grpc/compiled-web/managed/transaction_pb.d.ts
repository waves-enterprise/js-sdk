import * as jspb from 'google-protobuf'

import * as genesis_genesis_transaction_pb from '../genesis/genesis_transaction_pb';
import * as genesis_genesis_permit_transaction_pb from '../genesis/genesis_permit_transaction_pb';
import * as genesis_genesis_register_node_transaction_pb from '../genesis/genesis_register_node_transaction_pb';
import * as managed_register_node_transaction_pb from '../managed/register_node_transaction_pb';
import * as managed_create_alias_transaction_pb from '../managed/create_alias_transaction_pb';
import * as managed_issue_transaction_pb from '../managed/issue_transaction_pb';
import * as managed_reissue_transaction_pb from '../managed/reissue_transaction_pb';
import * as managed_burn_transaction_pb from '../managed/burn_transaction_pb';
import * as managed_lease_transaction_pb from '../managed/lease_transaction_pb';
import * as managed_lease_cancel_transaction_pb from '../managed/lease_cancel_transaction_pb';
import * as managed_sponsor_fee_transaction_pb from '../managed/sponsor_fee_transaction_pb';
import * as managed_set_asset_script_transaction_pb from '../managed/set_asset_script_transaction_pb';
import * as managed_data_transaction_pb from '../managed/data_transaction_pb';
import * as managed_transfer_transaction_pb from '../managed/transfer_transaction_pb';
import * as managed_mass_transfer_transaction_pb from '../managed/mass_transfer_transaction_pb';
import * as managed_permit_transaction_pb from '../managed/permit_transaction_pb';
import * as managed_create_policy_transaction_pb from '../managed/create_policy_transaction_pb';
import * as managed_update_policy_transaction_pb from '../managed/update_policy_transaction_pb';
import * as managed_policy_data_hash_transaction_pb from '../managed/policy_data_hash_transaction_pb';
import * as managed_create_contract_transaction_pb from '../managed/create_contract_transaction_pb';
import * as managed_call_contract_transaction_pb from '../managed/call_contract_transaction_pb';
import * as managed_executed_contract_transaction_pb from '../managed/executed_contract_transaction_pb';
import * as managed_disable_contract_transaction_pb from '../managed/disable_contract_transaction_pb';
import * as managed_update_contract_transaction_pb from '../managed/update_contract_transaction_pb';
import * as managed_set_script_transaction_pb from '../managed/set_script_transaction_pb';
import * as managed_atomic_transaction_pb from '../managed/atomic_transaction_pb';


export class Transaction extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): Transaction;

  getGenesisTransaction(): genesis_genesis_transaction_pb.GenesisTransaction | undefined;
  setGenesisTransaction(value?: genesis_genesis_transaction_pb.GenesisTransaction): Transaction;
  hasGenesisTransaction(): boolean;
  clearGenesisTransaction(): Transaction;

  getGenesisPermitTransaction(): genesis_genesis_permit_transaction_pb.GenesisPermitTransaction | undefined;
  setGenesisPermitTransaction(value?: genesis_genesis_permit_transaction_pb.GenesisPermitTransaction): Transaction;
  hasGenesisPermitTransaction(): boolean;
  clearGenesisPermitTransaction(): Transaction;

  getGenesisRegisterNodeTransaction(): genesis_genesis_register_node_transaction_pb.GenesisRegisterNodeTransaction | undefined;
  setGenesisRegisterNodeTransaction(value?: genesis_genesis_register_node_transaction_pb.GenesisRegisterNodeTransaction): Transaction;
  hasGenesisRegisterNodeTransaction(): boolean;
  clearGenesisRegisterNodeTransaction(): Transaction;

  getRegisterNodeTransaction(): managed_register_node_transaction_pb.RegisterNodeTransaction | undefined;
  setRegisterNodeTransaction(value?: managed_register_node_transaction_pb.RegisterNodeTransaction): Transaction;
  hasRegisterNodeTransaction(): boolean;
  clearRegisterNodeTransaction(): Transaction;

  getCreateAliasTransaction(): managed_create_alias_transaction_pb.CreateAliasTransaction | undefined;
  setCreateAliasTransaction(value?: managed_create_alias_transaction_pb.CreateAliasTransaction): Transaction;
  hasCreateAliasTransaction(): boolean;
  clearCreateAliasTransaction(): Transaction;

  getIssueTransaction(): managed_issue_transaction_pb.IssueTransaction | undefined;
  setIssueTransaction(value?: managed_issue_transaction_pb.IssueTransaction): Transaction;
  hasIssueTransaction(): boolean;
  clearIssueTransaction(): Transaction;

  getReissueTransaction(): managed_reissue_transaction_pb.ReissueTransaction | undefined;
  setReissueTransaction(value?: managed_reissue_transaction_pb.ReissueTransaction): Transaction;
  hasReissueTransaction(): boolean;
  clearReissueTransaction(): Transaction;

  getBurnTransaction(): managed_burn_transaction_pb.BurnTransaction | undefined;
  setBurnTransaction(value?: managed_burn_transaction_pb.BurnTransaction): Transaction;
  hasBurnTransaction(): boolean;
  clearBurnTransaction(): Transaction;

  getLeaseTransaction(): managed_lease_transaction_pb.LeaseTransaction | undefined;
  setLeaseTransaction(value?: managed_lease_transaction_pb.LeaseTransaction): Transaction;
  hasLeaseTransaction(): boolean;
  clearLeaseTransaction(): Transaction;

  getLeaseCancelTransaction(): managed_lease_cancel_transaction_pb.LeaseCancelTransaction | undefined;
  setLeaseCancelTransaction(value?: managed_lease_cancel_transaction_pb.LeaseCancelTransaction): Transaction;
  hasLeaseCancelTransaction(): boolean;
  clearLeaseCancelTransaction(): Transaction;

  getSponsorFeeTransaction(): managed_sponsor_fee_transaction_pb.SponsorFeeTransaction | undefined;
  setSponsorFeeTransaction(value?: managed_sponsor_fee_transaction_pb.SponsorFeeTransaction): Transaction;
  hasSponsorFeeTransaction(): boolean;
  clearSponsorFeeTransaction(): Transaction;

  getSetAssetScriptTransaction(): managed_set_asset_script_transaction_pb.SetAssetScriptTransaction | undefined;
  setSetAssetScriptTransaction(value?: managed_set_asset_script_transaction_pb.SetAssetScriptTransaction): Transaction;
  hasSetAssetScriptTransaction(): boolean;
  clearSetAssetScriptTransaction(): Transaction;

  getDataTransaction(): managed_data_transaction_pb.DataTransaction | undefined;
  setDataTransaction(value?: managed_data_transaction_pb.DataTransaction): Transaction;
  hasDataTransaction(): boolean;
  clearDataTransaction(): Transaction;

  getTransferTransaction(): managed_transfer_transaction_pb.TransferTransaction | undefined;
  setTransferTransaction(value?: managed_transfer_transaction_pb.TransferTransaction): Transaction;
  hasTransferTransaction(): boolean;
  clearTransferTransaction(): Transaction;

  getMassTransferTransaction(): managed_mass_transfer_transaction_pb.MassTransferTransaction | undefined;
  setMassTransferTransaction(value?: managed_mass_transfer_transaction_pb.MassTransferTransaction): Transaction;
  hasMassTransferTransaction(): boolean;
  clearMassTransferTransaction(): Transaction;

  getPermitTransaction(): managed_permit_transaction_pb.PermitTransaction | undefined;
  setPermitTransaction(value?: managed_permit_transaction_pb.PermitTransaction): Transaction;
  hasPermitTransaction(): boolean;
  clearPermitTransaction(): Transaction;

  getCreatePolicyTransaction(): managed_create_policy_transaction_pb.CreatePolicyTransaction | undefined;
  setCreatePolicyTransaction(value?: managed_create_policy_transaction_pb.CreatePolicyTransaction): Transaction;
  hasCreatePolicyTransaction(): boolean;
  clearCreatePolicyTransaction(): Transaction;

  getUpdatePolicyTransaction(): managed_update_policy_transaction_pb.UpdatePolicyTransaction | undefined;
  setUpdatePolicyTransaction(value?: managed_update_policy_transaction_pb.UpdatePolicyTransaction): Transaction;
  hasUpdatePolicyTransaction(): boolean;
  clearUpdatePolicyTransaction(): Transaction;

  getPolicyDataHashTransaction(): managed_policy_data_hash_transaction_pb.PolicyDataHashTransaction | undefined;
  setPolicyDataHashTransaction(value?: managed_policy_data_hash_transaction_pb.PolicyDataHashTransaction): Transaction;
  hasPolicyDataHashTransaction(): boolean;
  clearPolicyDataHashTransaction(): Transaction;

  getCreateContractTransaction(): managed_create_contract_transaction_pb.CreateContractTransaction | undefined;
  setCreateContractTransaction(value?: managed_create_contract_transaction_pb.CreateContractTransaction): Transaction;
  hasCreateContractTransaction(): boolean;
  clearCreateContractTransaction(): Transaction;

  getCallContractTransaction(): managed_call_contract_transaction_pb.CallContractTransaction | undefined;
  setCallContractTransaction(value?: managed_call_contract_transaction_pb.CallContractTransaction): Transaction;
  hasCallContractTransaction(): boolean;
  clearCallContractTransaction(): Transaction;

  getExecutedContractTransaction(): managed_executed_contract_transaction_pb.ExecutedContractTransaction | undefined;
  setExecutedContractTransaction(value?: managed_executed_contract_transaction_pb.ExecutedContractTransaction): Transaction;
  hasExecutedContractTransaction(): boolean;
  clearExecutedContractTransaction(): Transaction;

  getDisableContractTransaction(): managed_disable_contract_transaction_pb.DisableContractTransaction | undefined;
  setDisableContractTransaction(value?: managed_disable_contract_transaction_pb.DisableContractTransaction): Transaction;
  hasDisableContractTransaction(): boolean;
  clearDisableContractTransaction(): Transaction;

  getUpdateContractTransaction(): managed_update_contract_transaction_pb.UpdateContractTransaction | undefined;
  setUpdateContractTransaction(value?: managed_update_contract_transaction_pb.UpdateContractTransaction): Transaction;
  hasUpdateContractTransaction(): boolean;
  clearUpdateContractTransaction(): Transaction;

  getSetScriptTransaction(): managed_set_script_transaction_pb.SetScriptTransaction | undefined;
  setSetScriptTransaction(value?: managed_set_script_transaction_pb.SetScriptTransaction): Transaction;
  hasSetScriptTransaction(): boolean;
  clearSetScriptTransaction(): Transaction;

  getAtomicTransaction(): managed_atomic_transaction_pb.AtomicTransaction | undefined;
  setAtomicTransaction(value?: managed_atomic_transaction_pb.AtomicTransaction): Transaction;
  hasAtomicTransaction(): boolean;
  clearAtomicTransaction(): Transaction;

  getTransactionCase(): Transaction.TransactionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    version: number,
    genesisTransaction?: genesis_genesis_transaction_pb.GenesisTransaction.AsObject,
    genesisPermitTransaction?: genesis_genesis_permit_transaction_pb.GenesisPermitTransaction.AsObject,
    genesisRegisterNodeTransaction?: genesis_genesis_register_node_transaction_pb.GenesisRegisterNodeTransaction.AsObject,
    registerNodeTransaction?: managed_register_node_transaction_pb.RegisterNodeTransaction.AsObject,
    createAliasTransaction?: managed_create_alias_transaction_pb.CreateAliasTransaction.AsObject,
    issueTransaction?: managed_issue_transaction_pb.IssueTransaction.AsObject,
    reissueTransaction?: managed_reissue_transaction_pb.ReissueTransaction.AsObject,
    burnTransaction?: managed_burn_transaction_pb.BurnTransaction.AsObject,
    leaseTransaction?: managed_lease_transaction_pb.LeaseTransaction.AsObject,
    leaseCancelTransaction?: managed_lease_cancel_transaction_pb.LeaseCancelTransaction.AsObject,
    sponsorFeeTransaction?: managed_sponsor_fee_transaction_pb.SponsorFeeTransaction.AsObject,
    setAssetScriptTransaction?: managed_set_asset_script_transaction_pb.SetAssetScriptTransaction.AsObject,
    dataTransaction?: managed_data_transaction_pb.DataTransaction.AsObject,
    transferTransaction?: managed_transfer_transaction_pb.TransferTransaction.AsObject,
    massTransferTransaction?: managed_mass_transfer_transaction_pb.MassTransferTransaction.AsObject,
    permitTransaction?: managed_permit_transaction_pb.PermitTransaction.AsObject,
    createPolicyTransaction?: managed_create_policy_transaction_pb.CreatePolicyTransaction.AsObject,
    updatePolicyTransaction?: managed_update_policy_transaction_pb.UpdatePolicyTransaction.AsObject,
    policyDataHashTransaction?: managed_policy_data_hash_transaction_pb.PolicyDataHashTransaction.AsObject,
    createContractTransaction?: managed_create_contract_transaction_pb.CreateContractTransaction.AsObject,
    callContractTransaction?: managed_call_contract_transaction_pb.CallContractTransaction.AsObject,
    executedContractTransaction?: managed_executed_contract_transaction_pb.ExecutedContractTransaction.AsObject,
    disableContractTransaction?: managed_disable_contract_transaction_pb.DisableContractTransaction.AsObject,
    updateContractTransaction?: managed_update_contract_transaction_pb.UpdateContractTransaction.AsObject,
    setScriptTransaction?: managed_set_script_transaction_pb.SetScriptTransaction.AsObject,
    atomicTransaction?: managed_atomic_transaction_pb.AtomicTransaction.AsObject,
  }

  export enum TransactionCase { 
    TRANSACTION_NOT_SET = 0,
    GENESIS_TRANSACTION = 1000,
    GENESIS_PERMIT_TRANSACTION = 1001,
    GENESIS_REGISTER_NODE_TRANSACTION = 1002,
    REGISTER_NODE_TRANSACTION = 1003,
    CREATE_ALIAS_TRANSACTION = 1004,
    ISSUE_TRANSACTION = 1005,
    REISSUE_TRANSACTION = 1006,
    BURN_TRANSACTION = 1007,
    LEASE_TRANSACTION = 1008,
    LEASE_CANCEL_TRANSACTION = 1009,
    SPONSOR_FEE_TRANSACTION = 1010,
    SET_ASSET_SCRIPT_TRANSACTION = 1011,
    DATA_TRANSACTION = 1012,
    TRANSFER_TRANSACTION = 1013,
    MASS_TRANSFER_TRANSACTION = 1014,
    PERMIT_TRANSACTION = 1015,
    CREATE_POLICY_TRANSACTION = 1016,
    UPDATE_POLICY_TRANSACTION = 1017,
    POLICY_DATA_HASH_TRANSACTION = 1018,
    CREATE_CONTRACT_TRANSACTION = 1019,
    CALL_CONTRACT_TRANSACTION = 1020,
    EXECUTED_CONTRACT_TRANSACTION = 1021,
    DISABLE_CONTRACT_TRANSACTION = 1022,
    UPDATE_CONTRACT_TRANSACTION = 1023,
    SET_SCRIPT_TRANSACTION = 1024,
    ATOMIC_TRANSACTION = 1025,
  }
}

