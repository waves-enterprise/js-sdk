const { create: createApiInstance, MAINNET_CONFIG } = require('..');
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

    const quantity = 1000000

    //https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#issuetransaction
    const issueBody = {
        name: 'Sample token',
        description: 'The best token ever made',
        quantity,
        decimals: 8,
        reissuable: false,
        chainId: Waves.config.getNetworkByte(),
        fee: minimumFee[3],
        timestamp: Date.now(),
        script: null
    }

    const issueTx = Waves.API.Transactions.Issue.V2(issueBody)
    try {
        const result = await issueTx.broadcast(seed.keyPair);

        console.log('Broadcast ISSUE result: ', result)
        const waitTimeout = 30
        console.log(`Wait ${waitTimeout} seconds while tx is mining...`)

        await new Promise(resolve => {
            setTimeout(resolve, waitTimeout * 1000)
        })

        const burnBody = {
            assetId: result.assetId,
            amount: quantity,
            fee: minimumFee[6],
            chainId: Waves.config.getNetworkByte(),
            timestamp: Date.now()
        }

        const burnTx = Waves.API.Transactions.Burn.V2(burnBody)

        const burnResult = await burnTx.broadcast(seed.keyPair);
        console.log('Broadcast BURN result: ', burnResult)
    } catch (err) {
        console.log('Broadcast error:', err)
    }

})();
