const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
    const Waves = await init()

    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    //body description: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#callcontracttransaction
    const txBody = {
        contractId: 'hZvwicc3juf3HZJ95PCB8ADXNJ1E5oKbfj2mWV37ZK8', // Predefined contract
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
