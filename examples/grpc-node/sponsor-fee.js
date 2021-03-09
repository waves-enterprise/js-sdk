const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
  const Waves = await init()

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);


  // see docs: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#transfertransaction
  const txBody = {
    isEnabled: true,
    assetId: '8Lvk5qH6hH5NjjXkN955bF2uSwRdz5q8m1B4mhFp8HyN',
    timestamp: Date.now()
  }

  const tx = Waves.API.Transactions.SponsorFee.V1(txBody);

  try {
    const result = await tx.broadcastGrpc(seed.keyPair);
    console.log('Broadcast result: ', result)
  } catch (err) {
    console.log('Broadcast error:', err)
  }

})()
