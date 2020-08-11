const { create: createApiInstance, MAINNET_CONFIG } = require('../dist/waves-api');
const nodeFetch = require('node-fetch');

const nodeAddress = 'https://trump.vostokservices.com/node-1';
const seedPhrase = 'Создание адреса';

const fetch = (url, options = {}) => {
  const headers = options.headers || {}
  return nodeFetch(url, { ...options, headers: {...headers, 'x-api-key': 'vostok'} });
}

(async () => {
  const { chainId, minimumFee, gostCrypto } = await (await fetch(`${nodeAddress}/node/config`)).json();

  const wavesApiConfig = {
    ...MAINNET_CONFIG,
    nodeAddress,
    crypto: gostCrypto ? 'gost' : 'waves',
    networkByte: chainId.charCodeAt(0),
  };

  const Waves = createApiInstance({
    initialConfiguration: wavesApiConfig,
    fetchInstance: fetch
  });

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

  const tx = {
    recipient: '3MzEnF4gkeuvFKb4uypzXWWkTBCkJDBCWJi',
    assetId: 'WAVES',
    amount: '10000',
    fee: minimumFee[4],
    attachment: 'Some text',
    timestamp: Date.now()
  }

  try {
    const result = await Waves.API.Node.transactions.broadcast('transfer', tx, seed.keyPair);
    console.log('Broadcast transfer result: ', result)
  } catch (err) {
    console.log('Broadcast error:', err)
  }

})();
