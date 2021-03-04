const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
    const Waves = await init()

    // Create Seed object from phrase
    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    // Transaction data
    // https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#createpolicytransaction
    const txBody = {
        sender: seed.address,
        policyName: 'Example policy',
        description: 'Description for example policy',
        owners: [seed.address],
        recipients: [],
        timestamp: Date.now()
    }

    const tx = Waves.API.Transactions.CreatePolicy.V3(txBody);

    try {
        const result = await tx.broadcastGrpc(seed.keyPair);
        console.log('Broadcast PolicyCreate result: ', result)
    } catch (err) {
        console.log('Broadcast error:', err)
    }

})();
