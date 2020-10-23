const { create: createApiInstance, MAINNET_CONFIG } = require('../dist/waves-api');
const nodeFetch = require('node-fetch');

const nodeAddress = 'https://hoover.welocal.dev/node-0';
const seedPhrase = 'examples seed phrase';

const fetch = (url, options = {}) => {
    const headers = options.headers || {}
    return nodeFetch(url, { ...options, headers: {...headers, 'x-api-key': 'vostok'} });
}

(async () => {
    const { chainId, minimumFee, gostCrypto } = await (await fetch(`${nodeAddress}/node/config`)).json();

    const wavesApiConfig = {
        ...MAINNET_CONFIG,
        nodeAddress,
        crypto: gostCrypto ? 'gost' : 'waves',
        networkByte: chainId.charCodeAt(0),
    };

    const Waves = createApiInstance({
        initialConfiguration: wavesApiConfig,
        fetchInstance: fetch
    });

    // Create Seed object from phrase
    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    const transfer1 = {
        type: 'transferV3',
        tx: {
            recipient: seed.address,
            assetId: 'WAVES',
            amount: '10000',
            fee: minimumFee[4],
            attachment: 'Its beautiful!',
            timestamp: Date.now(),
            atomicBadge: {
                trustedSender: seed.address
            }
        }
    }

    const transfer2 = {
        type: 'transferV3',
        tx: {
            recipient: seed.address,
            assetId: 'WAVES',
            amount: '100000',
            fee: minimumFee[4],
            attachment: 'Its beautiful!',
            timestamp: Date.now(),
            atomicBadge: {
                trustedSender: seed.address
            }
        }
    }

    const dockerCall1 = {
        type: 'dockerCallV4',
        tx: {
            senderPublicKey: seed.keyPair.publicKey,
            authorPublicKey: seed.keyPair.publicKey,
            contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh', // Predefined contract
            contractVersion: 1,
            timestamp: Date.now(),
            params: [],
            fee: minimumFee[104],
            atomicBadge: {
                trustedSender: seed.address
            }
        }
    }

    const dockerCall2 = {
        type: 'dockerCallV4',
        tx: {
            senderPublicKey: seed.keyPair.publicKey,
            authorPublicKey: seed.keyPair.publicKey,
            contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh', // Predefined contract
            contractVersion: 1,
            timestamp: Date.now() + 1,
            params: [],
            fee: minimumFee[104],
            atomicBadge: {
                trustedSender: seed.address
            }
        }
    }

    const policyDataHashBody = {
        "sender": "3NkZd8Xd4KsuPiNVsuphRNCZE3SqJycqv8d",
        "policyId": "9QUUuQ5XetCe2wEyrSX95NEVzPw2bscfcFfAzVZL5ZJN",
        "type": "file",
        "data": "Mw==",
        "hash": "6FbDRScGruVdATaNWzD51xJkTfYCVwxSZDb7gzqCLzwf",
        "info": {
            "filename":"test-send1.txt",
            "size":1,
            "timestamp": Date.now(),
            "author":"temakolodko@gmail.com",
            "comment":""
        },
        "fee": 5000000,
        "password": "sfgKYBFCF@#$fsdf()*%",
        "timestamp": Date.now(),
        "version": 3
    }
    const policyDataHashTx = {
        type: 'policyDataHashV3',
        apiKey: '<somestring>',
        tx: {
            ...policyDataHashBody,
            atomicBadge: {
                trustedSender: seed.address
            }
        }
    }
    try {
        const atomicBody = {
            sender: seed.address
        }
        const transactions = [transfer1, transfer2, policyDataHashTx]
        const broadcast = await Waves.API.Node.transactions.broadcastAtomic(atomicBody, transactions, seed.keyPair);
        console.log('broadcast id', broadcast.id)
    } catch (err) {
        console.log('Create atomic error:', err)
    }

})();
