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



});