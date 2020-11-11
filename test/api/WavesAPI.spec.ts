import {expect} from 'chai';
import * as WavesAPI from '../../src/WavesAPI';

let requiredConfigValues;
let allConfigValues;

describe('api/WavesAPI', () => {

    beforeEach(() => {

        requiredConfigValues = {
            networkByte: 1,
            nodeAddress: '1',
            matcherAddress: '1',
            logLevel: 'warning',
            timeDiff: 0, // TODO : add some cases in the future API tests
            crypto: 'waves'
        };

        allConfigValues = {
            ...requiredConfigValues,
            minimumSeedLength: 1,
            requestOffset: 1,
            requestLimit: 1
        };

    });

    it('should throw when created without required fields in config', async () => {
        // @ts-ignore
        expect(() => WavesAPI.create({})).to.throw();
        // @ts-ignore
        expect(() => WavesAPI.create({networkByte: 1, nodeAddress: '1'})).to.throw();
        // @ts-ignore
        expect(() => WavesAPI.create({networkByte: 1, matcherAddress: '1'})).to.throw();
        // @ts-ignore
        expect(() => WavesAPI.create({nodeAddress: '1', matcherAddress: '1'})).to.throw();
    });

    it('should have all fields in config when all fields are passed', () => {
        const Waves = WavesAPI.create({
            initialConfiguration: allConfigValues
        });
        expect(Waves.config.get()).to.deep.equal(allConfigValues);
    });

    it('should have all fields in config when only required fields are passed', () => {
        const Waves = WavesAPI.create({
            initialConfiguration: requiredConfigValues
        });
        const config = Waves.config.get();
        expect(Object.keys(config)).to.have.members(Object.keys(allConfigValues));
    });

    it('should create seed without errors', () => {
        const Waves = WavesAPI.create({
            initialConfiguration: requiredConfigValues
        });
        const seed = Waves.Seed.create();

        expect(seed.phrase).to.be.a('string');
    });

    it('should only insert fallback basic values when stored config does not have them', () => {

        const logLevel = 'none';

        const Waves = WavesAPI.create({
            initialConfiguration: {...requiredConfigValues, logLevel}
        });
        Waves.config.set({
            assetFactory: () => {
            }
        });
        const config = Waves.config.get();
        expect(config.logLevel).to.equal(logLevel);

        const Waves2 = WavesAPI.create({
            initialConfiguration: requiredConfigValues
        });
        const config2 = Waves2.config.get();
        expect(config2.logLevel).to.equal(Waves.constants.DEFAULT_BASIC_CONFIG.logLevel);

    });

});
