const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')

const nodeAddress = 'https://carter.welocal.dev/node-0'
const seedPhrase = 'test test test1';


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

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase)

  const timestamp  = Date.now()

  //body description: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#createcontracttransaction
  const txBody = {
    image: 'vostok-sc/east-contract:0.3-RC1',
    imageHash: '116bb7cbd0cbfdd9f2c938995ec1e9c5568e99a8b08e8aa618bef92585953f8e',
    contractName: 'East init',
    timestamp,
    fee: 0,
    params: [
      {
        type: 'string',
        key: 'config',
        value: JSON.stringify({
          oracleContractId: 'Afnky7ZBdpXomouyFoCB59GFfWHHKd5rvapm8MyYn3dV',
          oracleTimestampMaxDiff: 1000 * 60 * 1.5,
          usdpPart:  0.5,
          westCollateral: 2.5,
          liquidationCollateral: 1.3,
          minHoldTime: 1000 * 60 * 60
        })
      }
    ],
  }

  const createTx = Waves.API.Transactions.CreateContract.V3(txBody)

  try {
    await createTx.broadcast(seed.keyPair)
    console.log('Broadcast docker create result: ', await createTx.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('finish')
})()
