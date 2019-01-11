import { expect } from '../getChai';
import * as WavesAPI from '../../dist/waves-api.min';

declare const process: {
  argv: any,
  env: {
    NODE_ENV: string
  }
};

const wavesConfig = {
  networkByte: 84,
  nodeAddress: 'http://2.testnet-pos.vostoknodes.com:6862',
  matcherAddress: 'http://2.testnet-pos.vostoknodes.com/matcher:6862',
  crypto: 'waves'
};

const mainSeed = {
  phrase:
    'intact hungry mother crime human number swallow final frog sister danger foam climb march stone',
  address: '3Mwnu7nsmSZ3atCmtwD19bKfUPrRAEmpTqB',
  keyPair:
  {
    privateKey: 'F3x94A8LiYUUc4zjmMYwUdRhLASirvfSnTQfZLuC6fKy',
    publicKey: 'DmpUrRRGqtzCbRmPiHAb8zPz33MP1WoRERsJ12PrZh3h'
  }
}

const testSeed = {
  phrase:
    'release sick must laptop film wagon ask manage token shoulder turkey sick wash involve object',
  address: '3N1hUx6sWYWbfndvkybp3d7bTqn2vdRyfXF',
  keyPair:
  {
    privateKey: '96WyPn49D9jygDoPNnBeZCK63rM4nbKafnwuQo7zuqPZ',
    publicKey: 'AVt1CH5CgwhMDehNgJA2ij4KnfH9iPRkjiPHJTXofHMT'
  }
}

function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  })
}

let Waves: any;
let leaseId: string;
let issueAssetId: string;

const withLongTests: boolean = process.argv.filter((a: string) => a === '--with-long-tests').length > 0;

describe('API', function() {
  this.timeout(3600000);

  beforeEach(() => {
    Waves = WavesAPI.create(wavesConfig);
  });

  it('[addresses.balanceDetails] should send address, return details balance by address', async () => {
    const balance = await Waves.API.Node.addresses.balanceDetails(mainSeed.address);
    expect(balance.regular).to.be.a('number');
    expect(balance.generating).to.be.a('number');
    expect(balance.available).to.be.a('number');
    expect(balance.effective).to.be.a('number');
  });

  it('[addresses.balanceDetails] should send wrong address, return error: 102', async () => {
    try {
      await Waves.API.Node.addresses.balanceDetails(testSeed.address + '98127389172');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

  it('[addresses.balance] should send address, return balance by address', async () => {
    const balance = await Waves.API.Node.addresses.balance(testSeed.address);
    expect(balance.address).to.be.a('string').to.equal(testSeed.address);
    expect(balance.confirmations).to.be.a('number');
    expect(balance.balance).to.be.a('number');
  });

  it('[addresses.balance] should send wrong address, return error', async () => {
    try {
      await Waves.API.Node.addresses.balance(testSeed.address + '92178367812');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
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
      expect(err.data.error).to.equal(199);
    }

  });

  it('[transactions.broadcast("massTransfer")] should send 0.001 and 0.002 WAVES to addresses', async () => {
    const seed1 = Waves.Seed.create();
    const seed2 = Waves.Seed.create();

    const massTransfer = {
      timestamp: Date.now(),
      transfers: [
        {
          recipient: seed1.address,
          amount: 100000
        },
        {
          recipient: seed2.address,
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
    const seed1 = Waves.Seed.create();
    const seed2 = Waves.Seed.create();

    const massTransfer = {
      timestamp: Date.now(),
      transfers: [
        {
          recipient: seed1.address,
          amount: 100000
        },
        {
          recipient: seed2.address,
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

  if (withLongTests) {
    it('[transactions.broadcast("cancelLeasing")] should cancel leasing by leaseId', async () => {
      const cancelLeasingData = {
        leaseId: leaseId,
        fee: 100000,
        timestamp: Date.now()
      };
      while (true) {
        try {
          await Waves.API.Node.transactions.broadcast('cancelLeasing', cancelLeasingData, mainSeed.keyPair);
          break;
        } catch (err) {}
        await sleep(1000);
      }
    });
  }

  // Ошибка
  // "message": "State check failed. Reason: Script doesn't exist and proof doesn't validate as signature for {\"type\":10,\"id\":\"HHXBLWBgnV9GkQCUPauXUUjY8YgKd76qKwGz1ky9x3Dh\",\"sender\":\"3N47TXs2XaVADMuLLnyd2kQUBVn51hkChTQ\",\"senderPublicKey\":\"DAhnCh9arrDzK8oQ79AGBCyrfCDPNRr9qY9Wr28QWtdC\",\"fee\":0,\"timestamp\":1547126447243,\"proofs\":[\"5yLvFEAE4TWMcB1RZf9kMDcSykz7ZRwWGUVwD3DQvdtwu7ENV4dAT2KAHrDiur394RhXELSghiMqEAEkZ4Z1s38M\"],\"version\":2,\"alias\":\"username1547126447243\"}",

  // it ('[transactions.broadcast("createAlias")] should send alias by keys', async () => {
  //   const seed = Waves.Seed.create();

  //   const createAliasData = {
  //     alias: `username${new Date().getTime()}`,
  //     fee: 100000,
  //     timestamp: Date.now()
  //   };

  //   const createAliasRes = await Waves.API.Node.transactions.broadcast('createAlias', createAliasData, seed.keyPair);
  //   expect(createAliasRes.type).to.be.a('number').to.be.equal(10);
  //   expect(createAliasRes.id).to.be.a('string');
  //   expect(createAliasRes.sender).to.be.a('string');
  //   expect(createAliasRes.senderPublicKey).to.be.a('string');
  //   expect(createAliasRes.fee).to.be.a('number').to.be.equal(createAliasData.fee);
  //   expect(createAliasRes.timestamp).to.be.a('number');
  //   expect(createAliasRes.proofs).to.be.an('array');
  //   expect(createAliasRes.version).to.be.a('number').to.be.equal(2);
  //   expect(createAliasRes.alias).to.be.a('string').to.be.equal(createAliasData.alias);
  // });

  it ('[transactions.broadcast("createAlias")] should return error if alias is empty', async () => {
    const seed = Waves.Seed.create();

    const createAliasData = {
      alias: '',
      fee: 100000,
      timestamp: Date.now()
    };

    try {
      await Waves.API.Node.transactions.broadcast('createAlias', createAliasData, seed.keyPair);
    } catch (err) {
      expect(err.data).to.not.be.undefined;
      expect(err.data.error).to.equal(199);
    }
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

  it(`[aliases.byAddress] should send address ${mainSeed.address}, return aliases`, async () => {
    const aliases = await Waves.API.Node.aliases.byAddress(mainSeed.address);
    expect(aliases).to.be.an('array');
  });

  it ('[aliases.byAddress] should send invalid address, return error: 102', async () => {
    try {
      await Waves.API.Node.aliases.byAddress('0987tyfvghjbnju9a8yt7ygbfnawfAWfjawfo87t12vz');
    } catch (err) {
      expect(err.data.error).to.be.a('number').to.be.equal(102);
    }
  });

  // Эта проблема будет возникать часто, т.к. после каждой очистики БД, нужно запрашивать у бекендеров аккаунт с ролью permissioner

  // it ('[transactions.broadcast](permit) should send role', async () => {
  //   const seed = Waves.Seed.create();

  //   const createPermissionData = {
  //     timestamp: Date.now(),
  //     opType: 'add',
  //     role: 'issuer',
  //     target: seed.address
  //   };

  //   const permissionsData = await Waves.API.Node.transactions.broadcast('permit', createPermissionData, mainSeed.keyPair);
  //   expect(permissionsData.type).to.be.a('number').to.be.equal(102);
  //   expect(permissionsData.sender).to.be.a('string').to.be.equal(mainSeed.address);
  //   expect(permissionsData.senderPublicKey).to.be.a('string').to.be.equal(mainSeed.keyPair.publicKey);
  //   expect(permissionsData.fee).to.be.a('number').to.be.equal(0);
  //   expect(permissionsData.timestamp).to.be.a('number');
  //   expect(permissionsData.proofs).to.be.an('array');
  //   expect(permissionsData.target).to.be.a('string').to.be.equal(seed.address);
  //   expect(permissionsData.opType).to.be.a('string').to.be.equal(createPermissionData.opType);
  //   expect(permissionsData.role).to.be.a('string').to.be.equal(createPermissionData.role);
  //   expect(permissionsData.dueTimestamp).to.be.a('null');
  // });

  // it ('[transactions.broadcast](permit) should send wrong address, return error: 102', async () => {
  //   const seed = Waves.Seed.create();

  //   const createPermissionData = {
  //     timestamp: Date.now(),
  //     opType: 'add',
  //     role: 'issuer',
  //     target: seed.address + '71826382137861'
  //   };

  //   try {
  //     await Waves.API.Node.transactions.broadcast('permit', createPermissionData, mainSeed.keyPair);
  //   } catch (err) {
  //     expect(err.data.error).to.be.a('number').to.be.equal(102);
  //   }
  // });

  // Эта проблема будет возникать часто, т.к. после каждой очистики БД, нужно запрашивать у бекендеров аккаунт с ролью permissioner и issuer

  // it ('[transactions.broadcast](issue) should send issue data', async () => {
  //   const issueData = {
  //     name: `TCURRENCY`,
  //     description: 'Some words about it',
  //     quantity: '500000',
  //     fee: 100000000, // 0.001 Waves
  //     precision: 5,
  //     reissuable: true,
  //     timestamp: Date.now()
  //   };

  //   const issueRes = await Waves.API.Node.transactions.broadcast('issue', issueData, mainSeed.keyPair);
  //   expect(issueRes.id).to.be.a('string');
  //   expect(issueRes.sender).to.be.a('string').to.be.equal(mainSeed.address);
  //   expect(issueRes.senderPublicKey).to.be.a('string').to.be.equal(mainSeed.keyPair.publicKey);
  //   expect(issueRes.fee).to.be.a('number').to.be.equal(issueData.fee);
  //   expect(issueRes.timestamp).to.be.a('number');
  //   expect(issueRes.proofs).to.be.an('array');
  //   expect(issueRes.version).to.be.a('number').to.be.equal(2);
  //   expect(issueRes.assetId).to.be.a('string');
  //   expect(issueRes.name).to.be.a('string').to.be.equal(issueData.name);
  //   expect(issueRes.quantity).to.be.a('number').to.be.equal(+issueData.quantity); // todo не отрабатывает большие значения
  //   expect(issueRes.reissuable).to.be.equal(issueData.reissuable);
  //   expect(issueRes.decimals).to.be.a('number').to.be.equal(issueData.precision);
  //   expect(issueRes.description).to.be.a('string');
  //   expect(issueRes.script).to.be.a('null');

  //   issueAssetId = issueRes.assetId;
  // });

  it ('[transactions.broadcast](issue) should send wrong issue data, return error: 199', async () => {
    const issueData = {
      name: `TCURRENCY`,
      description: 'Some words about it',
      quantity: '1',
      fee: 1, // 0.001 Waves
      precision: 5,
      reissuable: true,
      timestamp: Date.now()
    };

    try {
      await Waves.API.Node.transactions.broadcast('issue', issueData, testSeed.keyPair);
    } catch (err) {
      expect(err.data.error).to.be.equal(199);
    }
  });

  if (withLongTests) {
    it('[transactions.broadcast(burn)] should send burn tx', async () => {
      const burnData = {
        assetId: issueAssetId, // TCURRENCY
        quantity: '500000',
        fee: 100000,
        timestamp: Date.now()
      };

      while (true) {
        try {
          const burnRes = await Waves.API.Node.transactions.broadcast('burn', burnData, testSeed.keyPair);
          expect(burnRes.type).to.be.a('number').to.be.equal(6);
          expect(burnRes.id).to.be.a('string');
          expect(burnRes.sender).to.be.a('string').to.be.equal(testSeed.address);
          expect(burnRes.senderPublicKey).to.be.a('string').to.be.equal(testSeed.keyPair.publicKey);
          expect(burnRes.fee).to.be.a('number').to.be.equal(burnData.fee);
          expect(burnRes.timestamp).to.be.a('number');
          expect(burnRes.proofs).to.be.an('array');
          expect(burnRes.chainId).to.be.a('number');
          expect(burnRes.version).to.be.a('number').to.be.equal(2);
          expect(burnRes.assetId).to.be.a('string').to.be.equal(burnData.assetId);
          expect(burnRes.amount).to.be.a('number').to.be.equal(+burnData.quantity);
          break;
        } catch (err) {}
        await sleep(1000);
      }
    });
  }

  if (withLongTests) {
    it('[transactions.broadcast(burn)] should send wrong burn tx data, return error: 199', async () => {
      const burnData = {
        assetId: issueAssetId, // TCURRENCY
        quantity: '1',
        fee: 1,
        timestamp: Date.now()
      };

      while (true) {
        try {
          await Waves.API.Node.transactions.broadcast('burn', burnData, testSeed.keyPair);
        } catch (err) {
          try {
            expect(err.data.error).to.be.a('number').to.be.equal(199);
            break;
          } catch (err) {}
        }
        await sleep(1000);
      }
    });
  }

  if (withLongTests) {
    it('[transactions.broadcast(reissue)] should send reissue data', async () => {
      const reissueData = {
        assetId: issueAssetId,
        quantity: '100000000',
        fee: 100000000,
        reissuable: true,
        timestamp: Date.now()
      };

      while (true) {
        try {
          const reissueRes = await Waves.API.Node.transactions.broadcast('reissue', reissueData, testSeed.keyPair);
          expect(reissueRes.type).to.be.a('number').to.be.equal(5);
          expect(reissueRes.id).to.be.a('string');
          expect(reissueRes.sender).to.be.a('string').to.be.equal(testSeed.address);
          expect(reissueRes.senderPublicKey).to.be.a('string').to.be.equal(testSeed.keyPair.publicKey);
          expect(reissueRes.fee).to.be.a('number').to.be.equal(reissueData.fee);
          expect(reissueRes.timestamp).to.be.a('number');
          expect(reissueRes.proofs).to.be.an('array');
          expect(reissueRes.chainId).to.be.a('number');
          expect(reissueRes.version).to.be.a('number').to.be.equal(2);
          expect(reissueRes.assetId).to.be.a('string').to.be.equal(reissueData.assetId);
          expect(reissueRes.quantity).to.be.a('number').to.be.equal(+reissueData.quantity);
          expect(reissueRes.reissuable).to.be.equal(reissueData.reissuable);
          break;
        } catch (err) {}
        await sleep(1000);
      }
    });
  }

  if (withLongTests) {
    it('[transactions.broadcast(reissue)] should send wrong reissue data, return error: 199', async () => {
      const reissueData = {
        assetId: issueAssetId,
        quantity: '1',
        fee: 1,
        reissuable: true,
        timestamp: Date.now()
      };

      while (true) {
        try {
          await Waves.API.Node.transactions.broadcast('reissue', reissueData, testSeed.keyPair);
        } catch (err) {
          try {
            expect(err.data.error).to.be.a('number').to.be.equal(199);
            break;
          } catch (err) {}
        }
        await sleep(1000);
      }
    });
  }

});