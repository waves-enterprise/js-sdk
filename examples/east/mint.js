const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')

const nodeAddress = 'https://carter.welocal.dev/node-0';
const seedPhrase = 'test test test1';

const contractId = '7G7iG5f97yhAGA22m7zxWMowZpPHjjcfEBbRdhePhQE7';


(async () => {
  const res = await nodeFetch(`${nodeAddress}/node/config`)
  const { chainId, minimumFee, gostCrypto } = await res.json()
  const wavesApiConfig = {
    ...MAINNET_CONFIG,
    nodeAddress,
    crypto: gostCrypto ? 'gost' : 'waves',
    networkByte: chainId.charCodeAt(0),
    minimumFee
  }

  const Waves = createApiInstance({
    initialConfiguration: {
      ...wavesApiConfig,
      grpcAddress: '51.178.69.5:6865'
    }
  })

  const ownerSeed = Waves.Seed.fromExistingPhrase(seedPhrase)
  const user1Seed = Waves.Seed.fromExistingPhrase('examples seed phrase another one');
  
  const mintTransfer = Waves.API.Transactions.Transfer.V3({
    recipient: ownerSeed.address,
    assetId: '',
    amount: 50 * 100000000,
    timestamp: Date.now(),
    attachment: '',
    fee: minimumFee[4],
    senderPublicKey: user1Seed.keyPair.publicKey,
    atomicBadge: {
      trustedSender: user1Seed.address
    }
  });
  
  const mintCall = Waves.API.Transactions.CallContract.V4({
    contractId,
    contractVersion: 1,
    fee: minimumFee[104],
    senderPublicKey: user1Seed.keyPair.publicKey,
    timestamp: Date.now(),
    params: [{
      type: 'string',
      key: 'mint',
      value: JSON.stringify({
        transferId: await mintTransfer.getId()
      })
    }],
    atomicBadge: {
      trustedSender: user1Seed.address
    }
  });
  
  const transactions = [mintTransfer, mintCall]

  try {
    await Waves.API.Transactions.broadcastAtomic(
      Waves.API.Transactions.Atomic.V1({transactions}),
      user1Seed.keyPair
    )
    console.log('Docker call: ', await mintCall.getId())
    console.log('transfer: ', await mintTransfer.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('Finish!')
})()
