const WavesAPI = require('./dist/waves-api');

let requiredConfigValues = {
  networkByte: 68,
  nodeAddress: 'http://1.devnet-pos.vostoknodes.com:6862',
  matcherAddress: 'http://1.devnet-pos.vostoknodes.com/matcher:6862',
  crypto: 'waves'
};

let allConfigValues = {
  ...requiredConfigValues
};

const seed = {
  phrase: 'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
  address: '3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe',
  keyPair: {
    privateKey: '3hFkg3XwC827R7CzQLbpXQzZpMS98S3Jrv8wYY5LTtn7',
    publicKey: '3RBMLDrd27WAfv84abTZSZTE5ZBsp5JX6dNz3YteQwNz'
  }
};

const Waves = WavesAPI.create(allConfigValues);

async function sendTransferData() {
  const transferData = {
    recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
    assetId: 'WAVES',
    amount: 1000000000, // 10 Waves
    feeAssetId: 'WAVES',
    fee: 100000,
    attachment: 'some test attachment message',
    timestamp: Date.now()
  };

  const transferRes = await Waves.API.Node.transactions.broadcast('transfer', transferData, seed.keyPair);
  console.log('transferRes', transferRes)
}

async function sendMassTransferData() {
  const massTransfer = {
    timestamp: Date.now(),
    transfers: [
      {
        recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
        amount: '20000'
      },
      {
        recipient: '3FQMraRo46L3WvkzNJKM4HjKH1hBDXtgvTu',
        amount: '25000'
      }
    ],
    attachment: undefined,
    assetId: 'WAVES',
    fee: 200000
  };

  const massTransferRes = await Waves.API.Node.transactions.broadcast('massTransfer', massTransfer, seed.keyPair);
  console.log('massTransferRes', massTransferRes);
}

async function sendLeaseData() {
  const leaseData = {
    recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
    amount: 100000000, // 1 Waves
    fee: 100000, // 0.001 Waves
    timestamp: Date.now()
  };

  const leaseDataRes = await Waves.API.Node.transactions.broadcast('lease', leaseData, seed.keyPair);
  console.log('leaseDataRes', leaseDataRes);
}

async function sendCancelLeaseData() {
  const cancelLeasingData = {
    leaseId: '2LNgHvQXonZTDw7MzGSqrZATZYq8ZP9dLNbbFRModLAc',
    fee: 100000,
    timestamp: Date.now()
  };

  const cancelLeaseDataRes = await Waves.API.Node.transactions.broadcast('cancelLeasing', cancelLeasingData, seed.keyPair);
  console.log('cancelLeaseDataRes', cancelLeaseDataRes);
}

async function sendCreateAlias() {
  const createAliasData = {
    alias: 'philsitumorang',
    fee: 100000,
    timestamp: Date.now()
  };

  const createAliasRes = await Waves.API.Node.transactions.broadcast('createAlias', createAliasData,{
    privateKey: 'DxLxn6Jxn75QoETEZDVT8iCap6L4HkRd9ohBy24SWcAi',
    publicKey: 'Fy4dWFL192DRjhMqMW6HhQfSa6gcFNmu7ZSk4ts1empE'
  });

  console.log('createAliasRes', createAliasRes);
}

async function getByAlias(alias) {
  const address = await Waves.API.Node.aliases.byAlias(alias);
  console.log('address', address);
}

async function getByAddress(addr) {
  const aliases = await Waves.API.Node.aliases.byAddress(addr);
  console.log('aliases', aliases);
}

async function createPermissions(addr) {
  const createPermissionData = {
    timestamp: Date.now(),
    opType: 'add',
    role: 'issuer',
    target: addr
  };

  const permissionsData = await Waves.API.Node.transactions.broadcast('permit', createPermissionData, seed.keyPair);
  console.log('permissionsData', permissionsData);
}

async function createIssue() {
  const issueData = {
    name: 'FRONCUBATOR',
    description: 'Some words about it',
    quantity: 500000,
    fee: 100000000, // 0.001 Waves
    precision: 5,
    reissuable: true,
    timestamp: Date.now()
  };

  const issueRes = await Waves.API.Node.transactions.broadcast('issue', issueData, {
    privateKey: 'DxLxn6Jxn75QoETEZDVT8iCap6L4HkRd9ohBy24SWcAi',
    publicKey: 'Fy4dWFL192DRjhMqMW6HhQfSa6gcFNmu7ZSk4ts1empE'
  });

  console.log('issueData', issueData);
}

async function main() {
  console.log(new Date());
  const mainBalance = await Waves.API.Node.addresses.balanceDetails('3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe');
  console.log('[main balance]', mainBalance);

  const testBalance = await Waves.API.Node.addresses.balanceDetails('3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz');
  console.log('[test balance]', testBalance);

  console.log('[utx list]', await Waves.API.Node.transactions.utxGetList());
  console.log ('[utx size]', await Waves.API.Node.transactions.utxSize());

  // await sendCreateAlias();

  // await sendTransferData();

  // await createIssue();

  // await createPermissions('3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz');

  // await getByAddress('3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz');

  //
  // const utxSize = await Waves.API.Node.transactions.utxSize();
  // console.log('[utxSize]', utxSize);
  //
  // const utxList = await Waves.API.Node.transactions.utxGetList();
  // console.log('[utxList]', utxList);
  //
  // const firstBlock = await Waves.API.Node.blocks.first();
  // console.log('[firstBlock]', firstBlock);
  //
  // const lastBlock = await Waves.API.Node.blocks.last();
  // console.log('[lastBlock]', lastBlock);
}

main();