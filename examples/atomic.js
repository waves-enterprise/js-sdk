const { create: createApiInstance, MAINNET_CONFIG } = require('..');
const nodeFetch = require('node-fetch');

const nodeAddress = 'https://carter.welocal.dev/node-1';
const seedPhrase = 'examples seed phrase';

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

  const transfer1Body = {
    recipient: seed.address,
    amount: 10000,
    fee: minimumFee[4],
    attachment: Waves.tools.base58.encode('Its beautiful!'),
    timestamp: Date.now(),
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const transfer1 = Waves.API.Transactions.Transfer.V3(transfer1Body);

  const transfer2Body = {
    recipient: seed.address,
    amount: 100000,
    fee: minimumFee[4],
    attachment: Waves.tools.base58.encode('Its beautiful!'),
    timestamp: Date.now(),
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const transfer2 = Waves.API.Transactions.Transfer.V3(transfer2Body);

  const dockerCall1Body = {
    authorPublicKey: seed.keyPair.publicKey,
    contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh', // Predefined contract
    contractVersion: 1,
    timestamp: Date.now(),
    params: [],
    fee: minimumFee[104],
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const dockerCall1 = Waves.API.Transactions.CallContract.V4(dockerCall1Body);

  const dockerCall2Body = {
    authorPublicKey: seed.keyPair.publicKey,
    contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh',
    contractVersion: 1,
    timestamp: Date.now() + 1,
    params: [],
    fee: minimumFee[104],
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const dockerCall2 = Waves.API.Transactions.CallContract.V4(dockerCall1Body);

  const policyDataText = `Some random text ${Date.now()}`
  const uint8array = Waves.tools.convert.stringToByteArray(policyDataText);
  const { base64Text, hash } = Waves.tools.encodePolicyData(uint8array)

  const policyDataHashBody = {
    "sender": "3NkZd8Xd4KsuPiNVsuphRNCZE3SqJycqv8d",
    "policyId": "9QUUuQ5XetCe2wEyrSX95NEVzPw2bscfcFfAzVZL5ZJN",
    "type": "file",
    "data": base64Text,
    "hash": hash,
    "info": {
      "filename":"test-send1.txt",
      "size":1,
      "timestamp": Date.now(),
      "author":"temakolodko@gmail.com",
      "comment":""
    },
    "fee": 5000000,
    "password": "sfgKYBFCF@#$fsdf()*%",
    "timestamp": Date.now(),
    "version": 3,
    "apiKey": 'vostok',
  }
  const policyDataHashTxBody = {
    ...policyDataHashBody,
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const policyDataHashTx = Waves.API.Transactions.PolicyDataHash.V3(policyDataHashTxBody);

  try {
    const transactions = [transfer1, transfer2, policyDataHashTx]
    const broadcast = await Waves.API.Transactions.broadcastAtomic(
      Waves.API.Transactions.Atomic.V1({transactions}),
      seed.keyPair
    );
    console.log('Atomic broadcast successful, tx id:', broadcast.id)
  } catch (err) {
    console.log('Create atomic error:', err)
  }

})();
