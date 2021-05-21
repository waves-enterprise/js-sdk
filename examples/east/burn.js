const { create: createApiInstance, MAINNET_CONFIG } = require('../..')
const nodeFetch = require('node-fetch')
const fetchInstance = (url, options = {}) => {
  const headers = options.headers || {}
  return nodeFetch(url, { ...options, headers: {...headers, 'x-api-key': 'vostok'} });
}

const nodeAddress = 'https://carter.welocal.dev/node-0';

const seedPhrase = 'test test test1';

const contractId = 'xqBnrHAjkQ5aoowtBEwgcqGv1TFabudGp1A4TVTRqEG';
const vault = '2RiWqeqF9FtKLD6rukky4yRoAd7Ugmv1jY78KUQb75TG';
const USDapTokenId = '6Cc3dePRVFwn4VX6NZuwS2R9wDHU6z2eoKhZ7MdJ1fkR';

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
    },
    fetchInstance
  })

  const ownerSeed = Waves.Seed.fromExistingPhrase(seedPhrase)
  const user1Seed = Waves.Seed.fromExistingPhrase('examples seed phrase another one');

  const { value } = await Waves.API.Node.contracts.getKey(contractId, `vault_${vault}`)
  const vaultObj = JSON.parse(value);

  const westTransfer = Waves.API.Transactions.Transfer.V3({
    recipient: user1Seed.address,
    assetId: '',
    amount: vaultObj.westAmount * 100000000,
    timestamp: Date.now(),
    attachment: '',
    fee: minimumFee[4],
    senderPublicKey: ownerSeed.keyPair.publicKey,
    atomicBadge: {
      trustedSender: ownerSeed.address
    }
  });

  const usdpTransfer = Waves.API.Transactions.Transfer.V3({
    recipient: user1Seed.address,
    assetId: USDapTokenId,
    amount: vaultObj.usdpAmount * 100000000,
    timestamp: Date.now(),
    attachment: '',
    fee: minimumFee[4],
    senderPublicKey: ownerSeed.keyPair.publicKey,
    atomicBadge: {
      trustedSender: ownerSeed.address
    }
  });
  
  const burnCall = Waves.API.Transactions.CallContract.V4({
    contractId,
    contractVersion: 1,
    fee: minimumFee[104],
    senderPublicKey: ownerSeed.keyPair.publicKey,
    timestamp: Date.now(),
    params: [{
      type: 'string',
      key: 'burn',
      value: JSON.stringify({
        vaultId: vault,
        westTransferId: await westTransfer.getId(),
        usdpTransferId: await usdpTransfer.getId(),
      })
    }],
    atomicBadge: {
      trustedSender: ownerSeed.address
    }
  });
  
  const transactions = [westTransfer, usdpTransfer, burnCall]

  try {
    await Waves.API.Transactions.broadcastAtomic(
      Waves.API.Transactions.Atomic.V1({transactions}),
      ownerSeed.keyPair
    )
    console.log('Docker call: ', await burnCall.getId())
    console.log('westTransfer: ', await westTransfer.getId())
    console.log('usdpTransfer: ', await usdpTransfer.getId())
  } catch (err) {
    console.log('Broadcast error:', err)
  }
  console.log('Finish!')
})()
