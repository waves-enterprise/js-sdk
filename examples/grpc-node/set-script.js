const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
  const Waves = await init()

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);


  // see docs: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#transfertransaction
  const txBody = {
    chainId: Waves.config.getNetworkByte(),
    script: 'base64:AQQAAAAHJG1hdGNoMAUAAAACdHgG+RXSzQ==',
    name: `test${Date.now()}`,
    description: 'test',
    timestamp: Date.now()
  }

  const tx = Waves.API.Transactions.SetScript.V1(txBody);

  try {
    const result = await tx.broadcastGrpc(seed.keyPair);
    console.log('Broadcast transfer result: ', result)
  } catch (err) {
    console.log('Broadcast error:', err)
  }

})();
