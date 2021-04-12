const { create: createApiInstance, MAINNET_CONFIG } = require('..')
const nodeFetch = require('node-fetch')
console.log('!!!!')
const nodeAddress = 'https://carter.welocal.dev/node-0'
const seedPhrase = 'test test test1';

const sleep = sec => new Promise(resolve => setTimeout(resolve, sec));

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
      grpcAddress: '51.178.69.186:6865'
    }
  })

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase)

  const timestamp  = Date.now()

  //body description: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#createcontracttransaction
  const txBody = {
    image: 'vostok-sc/oracle-contract:v0.1.2',
    imageHash: '95d56db6a06d49369c78ef2e5750193e6f92551e1178c421044acf0ca75b8a6e',
    contractName: 'Oracle init',
    timestamp,
    fee: 0,
    params: [
      {
        type: 'string',
        key: 'initial_streams',
        value: JSON.stringify([
          {
            stream_id: '000001',
            description: 'Currency quotes: EUR_USD',
            oracle_services_pub_keys: [
              '4qUrxWm53P3yCBikW96j8dNFBBxudbM3aaFfDPMUM8V1'
            ],
            requesters_pub_keys: [
              '*'
            ],
            admins_pub_keys: [
              '4qUrxWm53P3yCBikW96j8dNFBBxudbM3aaFfDPMUM8V1'
            ],
            price_per_request: 100000000,
            oracle_owner_address: '3NfpckQUCNA3Bi2t92BWvcszna4NJ7inA7f'
          },
          {
            stream_id: '000003',
            description: 'Currency quotes: USDp',
            oracle_services_pub_keys: [
              '4qUrxWm53P3yCBikW96j8dNFBBxudbM3aaFfDPMUM8V1'
            ],
            requesters_pub_keys: [
              '*'
            ],
            admins_pub_keys: [
              '4qUrxWm53P3yCBikW96j8dNFBBxudbM3aaFfDPMUM8V1'
            ],
            price_per_request: 100000000,
            oracle_owner_address: '3NfpckQUCNA3Bi2t92BWvcszna4NJ7inA7f'
          }
        ])
      }
    ],
  }

  const createTx = Waves.API.Transactions.CreateContract.V3(txBody)

  await createTx.getSignedTx(seed.keyPair)
  const createId = await createTx.getId()

  const callTx1Body = {
    contractId: createId,
    contractVersion: 1,
    timestamp: Date.now() + 15 * 1000,
    fee: 0,
    params: [
      {
        'type' : 'string',
        'value' : 'regular_data_request',
        'key' : 'action'
      },
      {
        'type' : 'string',
        'value' : '000001',
        'key' : 'stream_id'
      },
      {
        'type': 'boolean',
        'value': false,
        'key': 'save_history'
      },
      {
        'type': 'string',
        'key': 'update_interval',
        'value': '10s'
      },
      {
        'type': 'integer',
        'key': 'start_from',
        'value': timestamp + 60 * 1000
      },
      {
        'type': 'integer',
        'key': 'due_to',
        'value': 1919816400000
      },
      {
        'type': 'string',
        'key': 'timestamp',
        'value': '100000000'
      }
    ],
  }

  const call1Tx = Waves.API.Transactions.CallContract.V4(callTx1Body)

  const callTx2Body = {
    contractId: createId,
    contractVersion: 1,
    timestamp: Date.now() + 15 * 1000,
    fee: 0,
    params: [
      {
        'type' : 'string',
        'value' : 'regular_data_request',
        'key' : 'action'
      },
      {
        'type' : 'string',
        'value' : '000003',
        'key' : 'stream_id'
      },
      {
        'type': 'boolean',
        'value': false,
        'key': 'save_history'
      },
      {
        'type': 'string',
        'key': 'update_interval',
        'value': '10s'
      },
      {
        'type': 'integer',
        'key': 'start_from',
        'value': timestamp + 60 * 1000
      },
      {
        'type': 'integer',
        'key': 'due_to',
        'value': 1919816400000
      },
      {
        'type': 'string',
        'key': 'timestamp',
        'value': '100000000'
      }
    ],
  }

  const call2Tx = Waves.API.Transactions.CallContract.V4(callTx2Body)

  try {
    await createTx.broadcast(seed.keyPair)
    await sleep(15 * 1000)
    await call1Tx.broadcast(seed.keyPair)
    const res = await call2Tx.broadcast(seed.keyPair)
    console.log('Broadcast docker call result: ', await createTx.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }

})()
