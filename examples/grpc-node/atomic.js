const init = require('./init-api')
const seedPhrase = 'examples seed phrase';


(async () => {
  const Waves = await init()

  // Create Seed object from phrase
  const seed = Waves.Seed.fromExistingPhrase(seedPhrase);

  const transfer1Body = {
    recipient: seed.address,
    amount: 10000,
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
    attachment: Waves.tools.base58.encode('Its beautiful!'),
    timestamp: Date.now(),
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const transfer2 = Waves.API.Transactions.Transfer.V3(transfer2Body);

  const dockerCall1Body = {
    contractId: 'hZvwicc3juf3HZJ95PCB8ADXNJ1E5oKbfj2mWV37ZK8', // Predefined contract
    contractVersion: 1,
    timestamp: Date.now(),
    params: [
      {
        type : 'string',
        value : 'data',
        key : 'action'
      },
      {
        type : 'integer',
        value : 3,
        key : 'number'
      },
      {
        type : 'boolean',
        value : true,
        key : 'isPositive'
      },
      {
        type : 'binary',
        value : 'base64:daaa',
        key : 'code'
      }
    ],
    atomicBadge: {
      trustedSender: seed.address
    }
  }

  const dockerCall1 = Waves.API.Transactions.CallContract.V4(dockerCall1Body);

  try {
    const transactions = [transfer1, transfer2, dockerCall1]
    const broadcast = await Waves.API.Transactions.broadcastAtomicGrpc(
      Waves.API.Transactions.Atomic.V1({
        transactions,
        timestamp: Date.now()
      }),
      seed.keyPair
    );
    console.log('Atomic broadcast successful')
  } catch (err) {
    console.log('Create atomic error:', err)
  }

})();
