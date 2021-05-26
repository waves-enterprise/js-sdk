const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')

const nodeAddress = 'https://carter.welocal.dev/node-0';
const seedPhrase = 'test test test1';

const contractId = 'HMgJkCBx5fXU5vi5EeDZ9Ec6yLbUVZdSwYGVEyYhoxpS';


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

  const requestId = '1234'
  const ownerSeed = Waves.Seed.fromExistingPhrase(seedPhrase)
  const user1Seed = Waves.Seed.fromExistingPhrase('examples seed phrase another one');
  
  const overpayTransfer = Waves.API.Transactions.Transfer.V3({
    recipient: user1Seed.address,
    assetId: '',
    amount: 10 * 100000000,
    timestamp: Date.now(),
    attachment: requestId,
    fee: minimumFee[4],
    senderPublicKey: ownerSeed.keyPair.publicKey,
    atomicBadge: {
      trustedSender: ownerSeed.address
    }
  });
  
  const overpayCall = Waves.API.Transactions.CallContract.V4({
    contractId,
    contractVersion: 1,
    fee: minimumFee[104],
    senderPublicKey: ownerSeed.keyPair.publicKey,
    timestamp: Date.now(),
    params: [{
      type: 'string',
      key: 'claim_overpay',
      value: JSON.stringify({
        transferId: await overpayTransfer.getId(),
        address: user1Seed.address,
        requestId
      })
    }],
    atomicBadge: {
      trustedSender: ownerSeed.address
    }
  });
  
  const transactions = [overpayTransfer, overpayCall]

  try {
    await Waves.API.Transactions.broadcastAtomic(
      Waves.API.Transactions.Atomic.V1({transactions}),
      ownerSeed.keyPair
    )
    console.log('Docker call: ', await overpayCall.getId())
    console.log('transfer: ', await overpayTransfer.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('Finish!')
})()
