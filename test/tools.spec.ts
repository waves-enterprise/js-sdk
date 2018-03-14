import { expect } from './_helpers/getChai';
import * as WavesAPI from '../dist/waves-api.min';


let Waves;


describe('tools', function () {

    beforeEach(() => {
        Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);
    });

    it('should build the right address from the given public key', () => {

        const publicKey = '4h7s6v7QaJcMsh1jFfNJmBkf5KQXQjCX8ghqWLcF6FY5EyfpPf7vZNgtfiEem7NTkG422hxh4hf96aqhbnvxBaLn';
        const address = '3N7HWB7bkqYfUp8FC2ttr1Uz2yfuV8GJYZW';

        expect(Waves.tools.getAddressFromPublicKey(publicKey)).to.equal(address);

    });

});
