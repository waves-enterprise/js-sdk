import { expect } from '../getChai';
import * as WavesAPI from '../../dist/waves-api.min';

const wavesConfig = {
  networkByte: 68,
  nodeAddress: 'http://1.devnet-pos.vostoknodes.com:6862',
  matcherAddress: 'http://1.devnet-pos.vostoknodes.com/matcher:6862',
  crypto: 'waves'
};

const mainSeed = {
  phrase: 'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
  address: '3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe',
  keyPair: {
    privateKey: '3hFkg3XwC827R7CzQLbpXQzZpMS98S3Jrv8wYY5LTtn7',
    publicKey: '3RBMLDrd27WAfv84abTZSZTE5ZBsp5JX6dNz3YteQwNz'
  }
};

const testSeed = {
  phrase: 'meat interest finger caught liquid math next predict close skirt aspect trouble then ocean scissors',
  address: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
  keyPair: {
    privateKey: 'DxLxn6Jxn75QoETEZDVT8iCap6L4HkRd9ohBy24SWcAi',
    publicKey: 'Fy4dWFL192DRjhMqMW6HhQfSa6gcFNmu7ZSk4ts1empE'
  }
};

let Waves: any;
let leaseId: string;

describe('API', () => {

  beforeEach(() => {
    Waves = WavesAPI.create(wavesConfig);
  });

  it('[transactions.broadcast("transfer")] should send 0.001 WAVES to address', async () => {
    const transferData = {
      recipient: testSeed.address,
      assetId: 'WAVES',
      amount: 100000,
      feeAssetId: 'WAVES',
      fee: 100000,
      attachment: 'some test attachment message',
      timestamp: Date.now()
    };

    const transferRes = await Waves.API.Node.transactions.broadcast('transfer', transferData, mainSeed.keyPair);
    expect(transferRes.type).to.be.a('number').to.equal(4);
    expect(transferRes.id).to.be.a('string');
    expect(transferRes.sender).to.be.a('string');
    expect(transferRes.senderPublicKey).to.be.a('string');
    expect(transferRes.fee).to.be.a('number').to.equal(transferData.fee);
    expect(transferRes.timestamp).to.be.a('number');
    expect(transferRes.proofs).to.be.an('array');
    expect(transferRes.version).to.be.a('number').to.equal(2);
    expect(transferRes.recipient).to.be.a('string').to.equal(testSeed.address);
    expect(transferRes.assetId).to.be.a('null');
    expect(transferRes.feeAssetId).to.be.a('null');
    expect(transferRes.feeAsset).to.be.a('null');
    expect(transferRes.amount + '').to.be.a('string').to.equal(transferData.amount + '');
    expect(transferRes.attachment).to.be.a('string');
  });

  it ('[transactions.broadcast("transfer")] should return error when transferData fields one by one is empty', async () => {
    const transferData = {
      recipient: testSeed.address,
      assetId: 'WAVES',
      amount: 100000,
      feeAssetId: 'WAVES',
      fee: 100000,
      attachment: 'some test attachment message',
      timestamp: Date.now()
    };

    try {
      transferData.recipient = '';
      await Waves.API.Node.transactions.broadcast('transfer', transferData, mainSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(199);
    }

    try {
      transferData.recipient = testSeed.address;
      transferData.amount = 0;
      await Waves.API.Node.transactions.broadcast('transfer', transferData, mainSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(111);
    }

    try {
      transferData.amount = 100000;
      transferData.fee = 0;
      await Waves.API.Node.transactions.broadcast('transfer', transferData, mainSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(112);
    }

  });

  it('[transactions.broadcast("massTransfer")] should send 0.001 and 0.002 WAVES to addresses', async () => {
    const massTransfer = {
      timestamp: Date.now(),
      transfers: [
        {
          recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
          amount: 100000
        },
        {
          recipient: '3FQMraRo46L3WvkzNJKM4HjKH1hBDXtgvTu',
          amount: 200000
        }
      ],
      attachment: undefined,
      assetId: 'WAVES',
      fee: 200000
    };

    const massTransferRes = await Waves.API.Node.transactions.broadcast('massTransfer', massTransfer, mainSeed.keyPair);
    expect(massTransferRes.type).to.be.a('number').to.equal(11);
    expect(massTransferRes.id).to.be.a('string');
    expect(massTransferRes.sender).to.be.a('string');
    expect(massTransferRes.senderPublicKey).to.be.a('string');
    expect(massTransferRes.fee).to.be.a('number').to.equal(massTransfer.fee);
    expect(massTransferRes.timestamp).to.be.a('number');
    expect(massTransferRes.proofs).to.be.an('array');
    expect(massTransferRes.version).to.be.a('number').to.equal(1);
    expect(massTransferRes.assetId).to.be.a('null');
    expect(massTransferRes.attachment).to.be.a('string');
    massTransferRes.transfers.forEach((item, index) => {
      expect(item.recipient).to.equal(massTransfer.transfers[index].recipient);
      expect(item.amount).to.equal(massTransfer.transfers[index].amount);
    });
  });

  it('[transactions.broadcast("massTransfer")] should return error when assetId has wrong value', async () => {
    const massTransfer = {
      timestamp: Date.now(),
      transfers: [
        {
          recipient: '3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz',
          amount: 100000
        },
        {
          recipient: '3FQMraRo46L3WvkzNJKM4HjKH1hBDXtgvTu',
          amount: 200000
        }
      ],
      attachment: undefined,
      assetId: 'a9es7feugaysehfas9eftasugejfhaskef',
      fee: 200000
    };

    try {
      await Waves.API.Node.transactions.broadcast('massTransfer', massTransfer, mainSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(112);
    }
  });

  it ('[transactions.broadcast("lease")] should send 1 Waves to address', async () => {
    const leaseData = {
      recipient: testSeed.address,
      amount: 100000000, // 1 Waves
      fee: 100000, // 0.001 Waves
      timestamp: Date.now()
    };

    const leaseDataRes = await Waves.API.Node.transactions.broadcast('lease', leaseData, mainSeed.keyPair);
    expect(leaseDataRes.type).to.be.a('number').to.equal(8);
    expect(leaseDataRes.sender).to.be.a('string');
    expect(leaseDataRes.senderPublicKey).to.be.a('string');
    expect(leaseDataRes.fee).to.be.a('number').to.equal(leaseData.fee);
    expect(leaseDataRes.timestamp).to.be.a('number');
    expect(leaseDataRes.version).to.be.a('number').to.equal(2);
    expect(leaseDataRes.amount).to.be.a('number').to.equal(leaseData.amount);
    expect(leaseDataRes.proofs).to.be.an('array');
    expect(leaseDataRes.recipient).to.be.a('string').to.equal(leaseData.recipient);
    leaseId = leaseDataRes.id;
  });

  it ('[transactions.broadcast("lease")] should return error when amount is 0', async () => {
    const leaseData = {
      recipient: testSeed.address,
      amount: 0,
      fee: 100000, // 0.001 Waves
      timestamp: Date.now()
    };

    try {
      await Waves.API.Node.transactions.broadcast('lease', leaseData, mainSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(111);
    }
  });

      // Пока не придумал, как тестировать отмену лизинг-транзакции до момента пока она не попадет в блокчейн

      // it ('[transactions.broadcast("cancelLeasing")] should cancel leasing by leaseId', async () => {
      //   const cancelLeasingData = {
      //     leaseId: leaseId,
      //     fee: 100000,
      //     timestamp: Date.now()
      //   };
      //
      //   const cancelLeaseDataRes = await Waves.API.Node.transactions.broadcast('cancelLeasing', cancelLeasingData, mainSeed.keyPair);
      //   console.log(cancelLeaseDataRes);
      // })

  it ('[transactions.broadcast("createAlias")] should send alias by keys', async () => {
    const createAliasData = {
      alias: `username_${new Date().getTime()}`,
      fee: 100000,
      timestamp: Date.now()
    };

    const createAliasRes = await Waves.API.Node.transactions.broadcast('createAlias', createAliasData, testSeed.keyPair);
    expect(createAliasRes.type).to.be.a('number').to.be.equal(10);
    expect(createAliasRes.id).to.be.a('string');
    expect(createAliasRes.sender).to.be.a('string');
    expect(createAliasRes.senderPublicKey).to.be.a('string');
    expect(createAliasRes.fee).to.be.a('number').to.be.equal(createAliasData.fee);
    expect(createAliasRes.timestamp).to.be.a('number');
    expect(createAliasRes.proofs).to.be.an('array');
    expect(createAliasRes.version).to.be.a('number').to.be.equal(2);
    expect(createAliasRes.alias).to.be.a('string').to.be.equal(createAliasData.alias);
  });

  it ('[transactions.broadcast("createAlias")] should return error if alias is empty', async () => {
    const createAliasData = {
      alias: '',
      fee: 100000,
      timestamp: Date.now()
    };

    try {
      await Waves.API.Node.transactions.broadcast('createAlias', createAliasData, testSeed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(199);
    }
  });

  it ('[aliases.byAlias] should send alias "philsitumorang", return { address: "ADDRESS" }', async () => {
    const alias = await Waves.API.Node.aliases.byAlias('philsitumorang');
    expect(alias.address).to.be.a('string');
  });

  it ('[aliases.byAlias] should send empty alias value, return error-type: invalid-json', async () => {
    try {
      await Waves.API.Node.aliases.byAlias('');
    } catch (err) {
      expect(err.data.type).to.be.equal('invalid-json');
    }
  });

  it ('[aliases.byAlias] should send invalid alias value, return error: 199', async () => {
    try {
      await Waves.API.Node.aliases.byAlias('09876789oiuyu987tydhbanlkwiy312wfawfAkxzjvh8123');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(199);
    }
  });

  it ('[aliases.byAddress] should send address 3Fhk53o8ciL6GvoteHq9Z5asVo9co2hAhTz, return aliases', async () => {
    const aliases = await Waves.API.Node.aliases.byAddress(testSeed.address);
    expect(aliases).to.be.an('array');
    const foundAlias = aliases.includes('alias:D:philsitumorang');
    expect(foundAlias).to.be.equal(true);
  });

  it ('[aliases.byAddress] should send invalid address, return error: 102', async () => {
    try {
      await Waves.API.Node.aliases.byAddress('0987tyfvghjbnju9a8yt7ygbfnawfAWfjawfo87t12vz');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

  it ('[transactions.broadcast](permit) should send role', async () => {
    const seed = Waves.Seed.create();

    const createPermissionData = {
      timestamp: Date.now(),
      opType: 'add',
      role: 'issuer',
      target: seed.address
    };

    const permissionsData = await Waves.API.Node.transactions.broadcast('permit', createPermissionData, mainSeed.keyPair);
    expect(permissionsData.type).to.be.a('number').to.be.equal(102);
    expect(permissionsData.sender).to.be.a('string').to.be.equal(mainSeed.address);
    expect(permissionsData.senderPublicKey).to.be.a('string').to.be.equal(mainSeed.keyPair.publicKey);
    expect(permissionsData.fee).to.be.a('number').to.be.equal(0);
    expect(permissionsData.timestamp).to.be.a('number');
    expect(permissionsData.proofs).to.be.an('array');
    expect(permissionsData.target).to.be.a('string').to.be.equal(seed.address);
    expect(permissionsData.opType).to.be.a('string').to.be.equal(createPermissionData.opType);
    expect(permissionsData.role).to.be.a('string').to.be.equal(createPermissionData.role);
    expect(permissionsData.dueTimestamp).to.be.a('null');
  });

  it ('[transactions.broadcast](permit) should send wrong address, return error: 102', async () => {
    const seed = Waves.Seed.create();

    const createPermissionData = {
      timestamp: Date.now(),
      opType: 'add',
      role: 'issuer',
      target: seed.address + '71826382137861'
    };

    try {
      await Waves.API.Node.transactions.broadcast('permit', createPermissionData, mainSeed.keyPair);
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

  it ('[addresses.balanceDetails] should send address, return details balance by address', async () => {
    const balance = await Waves.API.Node.addresses.balanceDetails(testSeed.address);
    expect(balance.regular).to.be.a('number');
    expect(balance.generating).to.be.a('number');
    expect(balance.available).to.be.a('number');
    expect(balance.effective).to.be.a('number');
  });

  it ('[addresses.balanceDetails] should send wrong address, return error: 102', async () => {
    try {
      await Waves.API.Node.addresses.balanceDetails(testSeed.address + '98127389172');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

  it ('[addresses.balance] should send address, return balance by address', async () => {
    const balance = await Waves.API.Node.addresses.balance(testSeed.address);
    expect(balance.address).to.be.a('string').to.equal(testSeed.address);
    expect(balance.confirmations).to.be.a('number');
    expect(balance.balance).to.be.a('number');
  });

  it ('[addresses.balance] should send wrong address, return error', async () => {
    try {
      await Waves.API.Node.addresses.balance(testSeed.address + '92178367812');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

});