const { create, MAINNET_CONFIG } = require('../..');
const nodeFetch = require('node-fetch');

const nodeAddress = 'https://carter.welocal.dev/node-0';

const fetch = (url, options = {}) => {
  const headers = options.headers || {}
  return nodeFetch(url, { ...options, headers: {...headers, 'x-api-key': 'vostok'} });
}

module.exports = async function init() {
  const { chainId, minimumFee, gostCrypto } = await (await fetch(`${nodeAddress}/node/config`)).json();

  const wavesApiConfig = {
    ...MAINNET_CONFIG,
    nodeAddress,
    crypto: gostCrypto ? 'gost' : 'waves',
    networkByte: chainId.charCodeAt(0),
    minimumFee,
    grpcAddress: '51.178.69.186:6865'
  };

  return create({
    initialConfiguration: wavesApiConfig,
    fetchInstance: fetch
  });
}