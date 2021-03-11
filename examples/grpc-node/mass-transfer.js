const init = require('./init-api')
const seedPhrase = 'examples seed phrase';
const targetSeedPhrase = 'amateur patch below';


(async () => {
  const Waves = await init()

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);
  const targetSeed = Waves.Seed.fromExistingPhrase(targetSeedPhrase);

  // see docs: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#transfertransaction
  const txBody = {
    transfers: [
      {
        recipient: seed.address,
        amount: 1
      },
      {
        recipient: targetSeed.address,
        amount: 1
      }
    ],
    assetId: '',
    amount: 1,
    attachment: Waves.tools.base58.encode('Examples transfer attachment'),
    timestamp: Date.now()
  }

  const tx = Waves.API.Transactions.MassTransfer.V2(txBody);

  try {
    const result = await tx.broadcastGrpc(seed.keyPair);
    console.log('Broadcast transfer result: ', result)
  } catch (err) {
    console.log('Broadcast error:', err)
  }

})();
