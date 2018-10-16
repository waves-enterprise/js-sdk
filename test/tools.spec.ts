import { expect } from './getChai';
import * as WavesAPI from '../dist/waves-api.min';


let Waves;


describe('tools', function () {

    beforeEach(() => {
        Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);
    });

    it('should build the right address from the given public key', () => {

        const publicKey = '2Vx27WrzyS7Ngbq5TtSUhrv1ip8Vqr5hjoXoPfBDKGdbXQe2hhg67WHqd5spnAdxkeGjc9pPpmHn9t4zcgDoUMq8';
        const address = '3FSFdLAeuKyU1LtqcjPyTZtdxpxcKqMrE2j';

        expect(Waves.tools.getAddressFromPublicKey(publicKey)).to.equal(address);

    });

});
