const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
  const Waves = await init()

  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

  //https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#issuetransaction
  const leaseBody = {
    recipient: '3NgSJRdMYu4ZbNpSbyRNZLJDX926W7e1EKQ',
    amount: 10,
    timestamp: Date.now()
  }

  const leaseTx = Waves.API.Transactions.Lease.V2(leaseBody)
  const result = await leaseTx.broadcastGrpc(seed.keyPair);

  console.log('Broadcast Lease result: ', result)
  const waitTimeout = 15
  console.log(`Wait ${waitTimeout} seconds while tx is mining...`)

  await new Promise(resolve => {
    setTimeout(resolve, waitTimeout * 1000)
  })

  const leaseCancelBody = {
    leaseId: await leaseTx.getId(),
    timestamp: Date.now(),
    chainId: Waves.config.getNetworkByte(),
  }
  const leaseCancelTx = Waves.API.Transactions.LeaseCancel.V2(leaseCancelBody)

  const leaseCancelResult = await leaseCancelTx.broadcastGrpc(seed.keyPair);
  console.log('Broadcast LeaseCancel result: ', leaseCancelResult)
})().catch(err => {
  console.log(err)
});
