const { create, MAINNET_CONFIG } = require('../..');
const nodeFetch = require('node-fetch');

const nodeAddress = 'https://carter.welocal.dev/node-0';
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
        minimumFee,
        grpcAddress: '51.178.69.186:6865'
    };

    const Waves = create({
        initialConfiguration: wavesApiConfig,
        fetchInstance: fetch
    });

    // Create Seed object from phrase
    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    //body description: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#callcontracttransaction
    const txBody = {
        contractId: '3FBCeYER4MoK2rTCwMeJz3D2Y8fngCMq4X7R5x8wwAEo', // Predefined contract
        contractVersion: 1,
        timestamp: Date.now(),
        params: [
            {
                type : 'string',
                value : 'data',
                key : 'action'
            },
            {
                type : 'integer',
                value : 3,
                key : 'number'
            },
            {
                type : 'boolean',
                value : true,
                key : 'isPositive'
            },
            {
                type : 'binary',
                value : 'base64:daaa',
                key : 'code'
            }
        ],
    };

    const tx = Waves.API.Transactions.CallContract.V4(txBody)

    try {
        const result = await tx.broadcastGrpc(seed.keyPair);
        console.log('Broadcast docker call result: ', result)
    } catch (err) {
        console.log('Broadcast error:', err)
    }

})();
