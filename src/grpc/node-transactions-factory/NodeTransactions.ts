import {
  Alias,
  ArrayOfStringsWithLength,
  AssetId,
  AtomicBadge,
  AtomicInnerTransaction,
  Base58,
  Base58WithLength,
  Base64,
  Bool,
  Byte,
  ByteArrayWithSize,
  DataEntry,
  DockerParamEntry,
  Integer,
  List,
  Long,
  PermissionDueTimestamp,
  PermissionOpType,
  PermissionRole,
  Recipient,
  StringWithLength,
  Transfers,
  TxType,
  TRANSACTION_TYPES,
  ValidationProofs
} from '@wavesenterprise/transactions-factory'


const commonPart = {
  id: new Base58(true),
  senderPublicKey: new Base58(true),
  fee: new Long(true),
  timestamp: new Long(true),
  proofsList: new List(Base58),
  feeAssetId: new AssetId(false),
  atomicBadge: new AtomicBadge(false)
}

const RegisterNode = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.RegisterNode),
  target: new Base58(true),
  nodeName: new StringWithLength(true),
  opType: new PermissionOpType(true),
}

const GenesisRegisterNode = {
  id: new Base58(true),
  fee: new Long(true),
  timestamp: new Long(true),
  signature: new Base58(true),
  txType: new TxType(true, TRANSACTION_TYPES.RegisterNode),
  targetPublicKey: new Base58(true),
}

const CreateAlias = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.CreateAlias),
  alias: new Alias(true),
}

const Issue = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Issue),
  chainId: new Byte(true),
  name: new Base64(true),
  description: new Base64(true),
  quantity: new Long(true),
  decimals: new Byte(true),
  reissuable: new Bool(true),
  script: new Base64(false)
}

const Reissue = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Reissue),
  chainId: new Byte(true),
  assetId: new AssetId(true),
  quantity: new Long(true),
  reissuable: new Bool(true),
}

const Burn = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Burn),
  chainId: new Byte(true),
  assetId: new AssetId(true),
  amount: new Long(true),
}

const Lease = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Lease),
  assetId: new AssetId(false),
  recipient: new Recipient(true),
  amount: new Long(true)
}

const LeaseCancel = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.LeaseCancel),
  chainId: new Byte(true),
  leaseId: new AssetId(true)
}

const SponsorFee = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.SponsorFee),
  assetId: new AssetId(true),
  isEnabled: new Bool(true),
}

const SetAssetScript = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.SetAssetScript),
  chainId: new Byte(true),
  assetId: new AssetId(true),
  script: new Base64(false),
}

const Data = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Data),
  authorPublicKey: new Base58(true),
  dataList: new List(DataEntry)
}

const Transfer = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Transfer),
  assetId: new AssetId(false),
  amount: new Long(true),
  recipient: new Recipient(true),
  attachment: new Base58WithLength(true, 192)
}

const Genesis = {
  id: new Base58(true),
  fee: new Long(true),
  timestamp: new Long(true),
  signature: new Base58(true),
  txType: new TxType(true, TRANSACTION_TYPES.Transfer),
  amount: new Long(true),
  recipient: new Recipient(true)
}

const MassTransfer = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.MassTransfer),
  assetId: new AssetId(false),
  transfersList: new Transfers(true),
  attachment: new Base58WithLength(true, 192),
}

const Permit = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.Permit),
  target: new Recipient(true),
  opType: new PermissionOpType(true),
  role: new PermissionRole(true),
  permissionOp: {
    opType: new PermissionOpType(true),
    role: new PermissionRole(true),
    timestamp: new Long(true),
    dueTimestamp: new PermissionDueTimestamp(false)
  }
}

const GenesisPermit = {
  id: new Base58(true),
  txType: new TxType(true, TRANSACTION_TYPES.Permit),
  fee: new Long(true),
  timestamp: new Long(true),
  signature: new Base58(true),
  role: new PermissionRole(true),
  target: new Recipient(true)
}

const CreatePolicy = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.CreatePolicy),
  policyName: new StringWithLength(true),
  description: new StringWithLength(true),
  recipientsList: new ArrayOfStringsWithLength(true),
  ownersList: new ArrayOfStringsWithLength(true)
}

const UpdatePolicy = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.UpdatePolicy),
  policyId: new Base58WithLength(true),
  recipientsList: new ArrayOfStringsWithLength(true),
  ownersList: new ArrayOfStringsWithLength(true),
  opType: new PermissionOpType(true)
}

const PolicyDataHash = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.PolicyDataHash),
  dataHash: new Base58WithLength(true),
  policyId: new Base58WithLength(true)
}

const CreateContract = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.CreateContract),
  image: new StringWithLength(true),
  imageHash: new StringWithLength(true),
  contractName: new StringWithLength(true),
  paramsList: new List(DockerParamEntry)
}

const CallContract = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.CallContract),
  contractId: new Base58WithLength(true),
  paramsList: new List(DockerParamEntry),
  contractVersion: new Integer(true),
}

const UpdateContract = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.UpdateContract),
  contractId: new Base58WithLength(true),
  image: new StringWithLength(true),
  imageHash: new StringWithLength(true),
}


const ExecutedContractTransaction = {
  id: new Base58(true),
  senderPublicKey: new Base58(true),
  timestamp: new Long(true),
  proofsList: new List(Base58),
  resultsList: new List(DataEntry),
  resultsHash: new StringWithLength(true),
  validationProofsList: new List(ValidationProofs),
  tx: {
    version: new Long(true),
    createContractTransaction: CreateContract,
    callContractTransaction: CallContract,
    updateContractTransaction: UpdateContract,
  }
}

const DisableContract = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.DisableContract),
  contractId: new Base58WithLength(true),
}

const SetScript = {
  ...commonPart,
  txType: new TxType(true, TRANSACTION_TYPES.SetScript),
  chainId: new Byte(true),
  script: new Base64(false),
  name: new ByteArrayWithSize(true, 128),
  description: new ByteArrayWithSize(true, 32767),
}

const Atomic = {
  id: new Base58(true),
  senderPublicKey: new Base58(true),
  timestamp: new Long(true),
  proofsList: new List(Base58),
  miner: new AssetId(true),
  txType: new TxType(true, TRANSACTION_TYPES.Atomic),
  transactionsList: new List(AtomicInnerTransaction),
}

export const NODE_TXS_PARSERS = {
  ExecutedContractTransaction,
  RegisterNode,
  CreateAlias,
  Issue,
  Reissue,
  Burn,
  Lease,
  LeaseCancel,
  SponsorFee,
  SetAssetScript,
  Data,
  Transfer,
  MassTransfer,
  Permit,
  CreatePolicy,
  UpdatePolicy,
  PolicyDataHash,
  CreateContract,
  CallContract,
  DisableContract,
  UpdateContract,
  SetScript,
  Atomic,
  Genesis,
  GenesisPermit,
  GenesisRegisterNode
}