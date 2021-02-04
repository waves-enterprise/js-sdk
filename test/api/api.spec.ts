import { expect } from 'chai';
import * as WeSdk from '../../src';
import { TRANSACTIONS } from '@wavesenterprise/transactions-factory';

const wavesConfig = {
    networkByte: 84,
    nodeAddress: 'https://test.com',
    matcherAddress: 'http://test.com/matcher',
    crypto: 'waves'
};

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


let Waves: WeSdk.WeSdk;

const issueTx = {
    id: 'EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw',
    sender: '3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7',
    senderPublicKey: '7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod',
    fee: 100000000,
    timestamp: 1549446741610,
    assetId: 'EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw',
    name: 'test-token3',
    quantity: 9223372036854776000,
    reissuable: false,
    precision: 5,
    decimals: 5,
    description: 'test test',
    script: 'base64:AQa3b8tH'
}

let path, options

const fetchInstance = (url, opt) => {
    path = url
    options = opt
    return Promise.resolve({
        ok: true,
        text: () => Promise.resolve(opt.body)
    })
}

describe('API/api', function() {

    beforeEach(() => {
        Waves = WeSdk.create({
            initialConfiguration: wavesConfig,
            fetchInstance: fetchInstance
        });
    });

    it('Sign tx', async () => {
        const signature = await Waves.API.Node.transactions.sign(
          'issue',
            issueTx,
            testSeed.keyPair
          )
        expect(signature.senderPublicKey).to.be.equal(testSeed.keyPair.publicKey)
        expect(signature.proofs).to.be.an('array')
    });

    it('Send tx', async () => {
        const transaction = await Waves.API.Node.transactions.broadcastFromClientAddress(
          'issue',
          issueTx,
          testSeed.keyPair
        )
        expect(transaction.senderPublicKey).to.be.equal(testSeed.keyPair.publicKey)
        expect(transaction.proofs).to.be.an('array')

        const bytes = await TRANSACTIONS.Issue.V2(transaction).getBytes()
        expect(bytes.toString()).to.be.equal('3,2,84,141,31,29,90,184,236,64,177,164,23,82,230,160,218,243,249,223,21,21,119,13,61,168,255,46,18,68,208,97,141,159,114,0,11,116,101,115,116,45,116,111,107,101,110,51,0,9,116,101,115,116,32,116,101,115,116,128,0,0,0,0,0,0,192,5,0,0,0,0,0,5,245,225,0,0,0,1,104,194,56,254,106,1,0,6,1,6,183,111,203,71')

        expect(path).to.be.equal('https://test.com/transactions/broadcast')
        expect(options.method).to.be.equal('POST')
    })

});