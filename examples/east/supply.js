const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')

const nodeAddress = 'https://carter.welocal.dev/node-0';
const seedPhrase = 'test test test1';

const contractId = '7rSeGCeJbosRBuY6dYkV3zKESUbA7YDUyCHc67jUnFno';


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
  
  const supplyTransfer = Waves.API.Transactions.Transfer.V3({
    recipient: ownerSeed.address,
    amount: 50 * 100000000,
    timestamp: Date.now(),
    attachment: '',
    atomicBadge: {
      trustedSender: user1Seed.address
    }
  });
  
  const supplyCall = Waves.API.Transactions.CallContract.V4({
    contractId,
    contractVersion: 1,
    timestamp: Date.now(),
    params: [{
      type: 'string',
      key: 'supply',
      value: JSON.stringify({
        transferId: await supplyTransfer.getId(user1Seed.keyPair.publicKey)
      })
    }],
    atomicBadge: {
      trustedSender: user1Seed.address
    }
  });
  
  const transactions = [supplyTransfer, supplyCall]

  try {
    await Waves.API.Transactions.broadcastAtomic(
      Waves.API.Transactions.Atomic.V1({transactions}),
      user1Seed.keyPair
    )
    console.log('Docker call: ', await supplyCall.getId())
    console.log('transfer: ', await supplyTransfer.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('Finish!')
})()
