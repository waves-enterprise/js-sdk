const init = require('./init-api')

const seedPhrase = 'examples seed phrase';
const targetSeedPhrase = 'amateur patch below';

(async () => {
    const Waves = await init()

    const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

    const targetSeed = Waves.Seed.fromExistingPhrase(targetSeedPhrase);

    // https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#permittransaction
    const txBody = {
        target: targetSeed.address,
        opType: 'add',
        role: 'issuer',
        timestamp: Date.now(),
    }

    const permTx = Waves.API.Transactions.Permit.V2(txBody);

    try {
        const result = await permTx.broadcastGrpc(seed.keyPair);
        console.log('Broadcast ADD PERMIT: ', result)

        const waitTimeout = 30

        console.log(`Wait ${waitTimeout} seconds while tx is mining...`)

        await new Promise(resolve => {
            setTimeout(resolve, waitTimeout * 1000)
        })

        const removePermitBody = {
            ...txBody,
            opType: 'remove',
            timestamp: Date.now()
        }

        const removePermitTx = Waves.API.Transactions.Permit.V2(removePermitBody);

        const removePermitResult = await removePermitTx.broadcastGrpc(seed.keyPair);

        console.log('Broadcast REMOVE PERMIT: ', removePermitResult)
    } catch (err) {
        console.log('Broadcast error:', err)
    }

})();
