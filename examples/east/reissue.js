const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')

const nodeAddress = 'https://carter.welocal.dev/node-0';
const seedPhrase = 'test test test1';

const contractId = 'EtVQ6PGJZeteTepJeTu4nbYpj3nfd3gcseoY9WfQg8QF';


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

  const user1Seed = Waves.Seed.fromExistingPhrase('examples seed phrase another one');
    
  const reissueCall = Waves.API.Transactions.CallContract.V4({
    contractId,
    contractVersion: 1,
    fee: minimumFee[104],
    senderPublicKey: user1Seed.keyPair.publicKey,
    timestamp: Date.now(),
    params: [{
      type: 'string',
      key: 'reissue',
      value: ''
    }]
  });
  

  try {
    await reissueCall.broadcastGrpc(user1Seed.keyPair)
    console.log('Docker call: ', await reissueCall.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('Finish!')
})()
