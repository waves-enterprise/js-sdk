// author: Phil Situmorang
// Здесь я проверяю логику работы отправки транзакций

const WavesAPI = require('./dist/waves-api');

// let requiredConfigValues = {
//   networkByte: 68,
//   nodeAddress: 'http://1.devnet-pos.vostoknodes.com:6862',
//   matcherAddress: 'http://1.devnet-pos.vostoknodes.com/matcher:6862',
//   crypto: 'waves'
// };

const requiredConfigValues = {
  networkByte: 84,
  nodeAddress: 'http://2.testnet-pos.vostoknodes.com:6862',
  matcherAddress: 'http://2.testnet-pos.vostoknodes.com/matcher:6862',
  crypto: 'waves'
};

let allConfigValues = {
  ...requiredConfigValues
};

const seed = {
  phrase: "intact hungry mother crime human number swallow final frog sister danger foam climb march stone",
  address: "3Mwnu7nsmSZ3atCmtwD19bKfUPrRAEmpTqB",
  keyPair: {
    privateKey: "CsEN9A7hqsHR8MtduY8vDRDXtNBUr5XvAh2fguN4SnFK",
    publicKey: "8bqyawEDe8qN1Y4tN4ctirQXn2FkgFXnL5m13SosG1JA"
  }
  // phrase: 'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
  // address: '3FX24kSvUnvyYP92qPudEsa7VfgnsJVW6S8',
  // keyPair: {
  //   privateKey: '4G8xjSLvwZmbMkystNKRGxBLmpBRR7vLjtZBihMkSzXB',
  //   publicKey: 'Hp39rdfjAYiq5C4H3wF97VsMr8T2jVGFMFC7LB7KPpj5'
  // }
};

const Waves = WavesAPI.create(allConfigValues);

async function sendTransferData() {
  const transferData = {
    recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
    assetId: 'WAVES',
    amount: 1000000, // 00.1 Waves
    feeAssetId: 'WAVES',
    fee: 100000,
    attachment: 'some test attachment message',
    timestamp: Date.now(),
    getTxWithoutFetch: true
  };

  const transferRes = await Waves.API.Node.transactions.broadcast('transfer', transferData, seed.keyPair);
  return transferRes;
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
    timestamp: Date.now(),
    getTxWithoutFetch: true
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
    target: addr,
    getTxWithoutFetch: true
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
    timestamp: Date.now(),
    getTxWithoutFetch: true
  };

  const issueRes = await Waves.API.Node.transactions.broadcast('issue', issueData, {
    privateKey: 'DxLxn6Jxn75QoETEZDVT8iCap6L4HkRd9ohBy24SWcAi',
    publicKey: 'Fy4dWFL192DRjhMqMW6HhQfSa6gcFNmu7ZSk4ts1empE'
  });

  console.log('issueRes', issueRes);
}

async function main() {
  console.log(new Date());

  try {
    const testSeed = Waves.Seed.create();

    const createAliasData = {
      alias: `username${new Date().getTime()}`,
      fee: 100000,
      timestamp: Date.now()
    };

    const createAliasRes = await Waves.API.Node.transactions.broadcast('createAlias', createAliasData, testSeed.keyPair);
    console.log('[createAliasRes]', createAliasRes);
  } catch (err) {
    console.log(err);
  }

  // const account = await Waves.Seed.fromExistingPhrase('release sick must laptop film wagon ask manage token shoulder turkey sick wash involve object');
  // console.log('[account]', account);

  // const mainBalance = await Waves.API.Node.addresses.balanceDetails(seed.address);
  // console.log('[mainBalance]', mainBalance);

  // const mainBalance = await Waves.API.Node.addresses.balanceDetails('3FeyprePzig1TM5yWNK5gopuqonGJHch9hZ');
  // console.log('[main balance]', mainBalance);

  // const testBalance = await Waves.API.Node.addresses.balanceDetails('3FX24kSvUnvyYP92qPudEsa7VfgnsJVW6S8');
  // console.log('[test balance]', testBalance);

  // console.log('[utx list]', await Waves.API.Node.transactions.utxGetList());
  // console.log ('[utx size]', await Waves.API.Node.transactions.utxSize());


  // console.log('\n[sendCreateAlias] ---------------------');
  // await sendCreateAlias();
  // console.log('\n[sendTransferData] --------------------');
  // await sendTransferData();
  // console.log('\n[createIssue] -------------------------');
  // await createIssue();
  // console.log('\n[createPermissions] -------------------');
  // await createPermissions('3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz');


  // let signedTx = await sendTransferData();
  // console.log('@@@@@@@@@@@@@@@@', signedTx, typeof signedTx);

  // setTimeout(async () => {
  //   let dd = await Waves.API.Node.transactions.rawBroadcast(signedTx);
  //   console.log('!!!!!!!!!!!!!!!!!', dd);
  // }, 2000)


  // const alias = await Waves.API.Node.aliases.byAlias('philsitumorang');

  // const alias = await Waves.API.Node.aliases.byAddress(seed.address);
  // console.log('@@@@@@@@@@@#!@#', alias);

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