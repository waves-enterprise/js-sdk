import {expect} from 'chai';
import * as WeSdk from '../../src';


let Waves;


describe('tools/GOST', function () {

    beforeEach(() => {
        Waves = WeSdk.create(
            { initialConfiguration: {...WeSdk.TESTNET_CONFIG, crypto: 'gost'}
          });
    });

    it('should build the right address from the given public key', () => {

        const publicKey = '2Vx27WrzyS7Ngbq5TtSUhrv1ip8Vqr5hjoXoPfBDKGdbXQe2hhg67WHqd5spnAdxkeGjc9pPpmHn9t4zcgDoUMq8';
        const address = '3FSFdLAeuKyU1LtqcjPyTZtdxpxcKqMrE2j';

        expect(Waves.tools.getAddressFromPublicKey(publicKey)).to.equal(address);

    });
});

describe('tools/WAVES', function () {

    beforeEach(() => {
        Waves = WeSdk.create({
            initialConfiguration:
                {
                    ...WeSdk.TESTNET_CONFIG,
                    networkByte: 'T'.charCodeAt(0)
                }
        });
    });

    it('should build the right address from the given public key', () => {

        const publicKey = 'GL6Cbk3JnD9XiBRK5ntCavSrGGD5JT9pXSRkukcEcaSW';
        const address = '3N1JKsPcQ5x49utR79Maey4tbjssfrn2RYp';

        expect(Waves.tools.getAddressFromPublicKey(publicKey)).to.equal(address);

    });

});
