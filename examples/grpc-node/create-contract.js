const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
    const Waves = await init()

    // Create Seed object from phrase
    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    //body description: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#createcontracttransaction
    const txBody = {
        image: 'vostok-sc/grpc-contract-example:2.1',
        imageHash: '9fddd69022f6a47f39d692dfb19cf2bdb793d8af7b28b3d03e4d5d81f0aa9058',
        contractName: 'Sample GRPC contract',
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

    const tx = Waves.API.Transactions.CreateContract.V3(txBody)

    try {
        const result = await tx.broadcastGrpc(seed.keyPair);
        console.log('Broadcast GRPC docker create result: ', result)
    } catch (err) {
        console.log('Broadcast GRPC error:', err)
    }

})();
