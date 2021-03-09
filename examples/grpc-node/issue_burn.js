const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
  const Waves = await init()

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
    timestamp: Date.now(),
    script: null
  }

  const issueTx = Waves.API.Transactions.Issue.V2(issueBody)

  const result = await issueTx.broadcastGrpc(seed.keyPair)

  console.log('Broadcast ISSUE result: ', result)
  const waitTimeout = 15
  console.log(`Wait ${waitTimeout} seconds while tx is mining...`)

  await new Promise(resolve => {
    setTimeout(resolve, waitTimeout * 1000)
  })

  const burnBody = {
    assetId: await issueTx.getId(),
    amount: quantity,
    chainId: Waves.config.getNetworkByte(),
    timestamp: Date.now()
  }

  const burnTx = Waves.API.Transactions.Burn.V2(burnBody)

  const burnResult = await burnTx.broadcastGrpc(seed.keyPair);
  console.log('Broadcast BURN result: ', burnResult)

})().catch(err => {
  console.log('error:', err)
});
