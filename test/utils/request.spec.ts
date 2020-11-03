import { expect } from 'chai';
import * as WavesAPI from '../../src/WavesAPI';


let Waves;


describe('utils/request', () => {

    beforeEach(() => {
        Waves = WavesAPI.create({
            initialConfiguration: WavesAPI.TESTNET_CONFIG
        });
    });

    it('should normalize all types of paths', () => {
        expect(Waves.request.normalizePath('/transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('/transactions///unconfirmed/')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('//transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('\/\/transactions/unconfirmed')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('\/\/transactions\/unconfirmed\/\///\/')).to.equal('/transactions/unconfirmed');
        expect(Waves.request.normalizePath('transactions/unconfirmed/')).to.equal('/transactions/unconfirmed');
    });

    it('should normalize all type of hosts', () => {
        expect(Waves.request.normalizeHost('https://nodes.wavesnodes.com')).to.equal('https://nodes.wavesnodes.com');
        expect(Waves.request.normalizeHost('https://nodes.wavesnodes.com/')).to.equal('https://nodes.wavesnodes.com');
        expect(Waves.request.normalizeHost('https://nodes.wavesnodes.com//')).to.equal('https://nodes.wavesnodes.com');
        expect(Waves.request.normalizeHost('https://nodes.wavesnodes.com///')).to.equal('https://nodes.wavesnodes.com');
    });

});
