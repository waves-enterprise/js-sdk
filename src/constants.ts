import { IWavesBasicConfig, IWavesConfig } from './interfaces'
export const WAVES = 'WAVES'

export const MAINNET_BYTE: number = 'D'.charCodeAt(0) // todo
export const TESTNET_BYTE: number = 'D'.charCodeAt(0)

export const INITIAL_NONCE = 0

export const ADDRESS_BYTE = 1
export const ALIAS_BYTE = 2

/*
    LEGACY TRANSACTIONS SUPPORT
    type - tx type,
    v - version
 */
export const LEGACY_TX_TYPES = {
    issue: { type: 3, v: 2 },
    issue_no_script: { type: 3, v: 2 },
    transfer: { type: 4, v: 2 },
    transferV3: { type: 4, v: 3 },
    reissue: { type: 5, v: 2 },
    burn: { type: 6, v: 2 },
    exchange: { type: 7, v: 2 },
    lease: { type: 8, v: 2 },
    cancelLeasing: { type: 9, v: 2 },
    createAlias: { type: 10, v: 2 },
    massTransfer: { type: 11, v: 1 },
    massTransferV2: { type: 11, v: 2 },
    data: { type: 12, v: 1 },
    setScript: { type: 13, v: 1 },
    sponsorship: { type: 14, v: 1 },
    permit: { type: 102, v: 1 },
    permitV2: { type: 102, v: 2 },
    dockerCreate: { type: 103, v: 1 },
    dockerCreateV2: { type: 103, v: 2 },
    dockerCreateV3: { type: 103, v: 3 },
    dockerCall: { type: 104, v: 1 },
    dockerCallV2: { type: 104, v: 2 },
    dockerCallV3: { type: 104, v: 3 },
    dockerCallV4: { type: 104, v: 4 },
    dockerDisable: { type: 106, v: 1 },
    dockerDisableV3: { type: 106, v: 3 },
    dockerUpdateV2: { type: 107, v: 2 },
    dockerUpdateV3: { type: 107, v: 3 },
    policyRegisterNode: { type: 111, v: 1 },
    policyCreate: { type: 112, v: 1 },
    policyCreateV3: { type: 112, v: 3 },
    policyUpdate: { type: 113, v: 1 },
    policyUpdateV3: { type: 113, v: 3 },
    policyDataHash: { type: 114, v: 1 },
    atomic: { type: 120, v: 1 }
}

export const PRIVATE_KEY_LENGTH = 32
export const PUBLIC_KEY_LENGTH = 32
export const PUBLIC_KEY_GOST_LENGTH = 64

export const MINIMUM_FEE = 100000
export const MINIMUM_ISSUE_FEE = 100000000
export const MINIMUM_MATCHER_FEE = 300000
export const MINIMUM_DATA_FEE_PER_KB = 100000

export const TRANSFER_ATTACHMENT_BYTE_LIMIT = 140

export const DEFAULT_MIN_SEED_LENGTH = 25

export const DEFAULT_ORDER_EXPIRATION_DAYS = 20

export const DEFAULT_PAGING_LIMIT = 50
export const DEFAULT_PAGING_OFFSET = 0

export const DEFAULT_BASIC_CONFIG: IWavesBasicConfig = {
    minimumSeedLength: DEFAULT_MIN_SEED_LENGTH,
    requestOffset: 0,
    requestLimit: 100,
    logLevel: 'warning',
    timeDiff: 0,
    crypto: 'waves'
}

export const DEFAULT_MAINNET_CONFIG: IWavesConfig = {
    ...DEFAULT_BASIC_CONFIG,
    networkByte: MAINNET_BYTE,
    nodeAddress: 'https://nodes.wavesplatform.com',
    matcherAddress: 'https://matcher.wavesplatform.com/matcher'
}

export const DEFAULT_TESTNET_CONFIG: IWavesConfig = {
    ...DEFAULT_BASIC_CONFIG,
    networkByte: TESTNET_BYTE,
    nodeAddress: 'https://testnet1.wavesnodes.com',
    matcherAddress: 'https://testnet1.wavesnodes.com/matcher'
}

export const WAVES_V1_ISSUE_TX = {
    assetId: WAVES,
    decimals: 8,
    description: '',
    fee: 0,
    height: 0,
    id: WAVES,
    name: 'Waves',
    quantity: 100000000 * Math.pow(10, 8),
    reissuable: false,
    sender: WAVES,
    senderPublicKey: '',
    signature: '',
    timestamp: 1460419200000,
    type: 3
}

export const BROADCAST_PATH = '/transactions/broadcast'

export const SIGN_PATH = '/transactions/sign'
