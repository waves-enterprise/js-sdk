'use strict';

const weSdk = window.WeSdk

const { create, MAINNET_CONFIG } = weSdk

const nodeAddress = 'https://hoover.welocal.dev/node-0';
const seedPhrase = 'examples seed phrase';

let Waves = null
let seed = null

describe('docker-call', function() {
    beforeEach(async () => {
        const { chainId, minimumFee, gostCrypto } = await (await fetch(`${nodeAddress}/node/config`)).json();
        const wavesApiConfig = {
            ...MAINNET_CONFIG,
            nodeAddress,
            crypto: gostCrypto ? 'gost' : 'waves',
            networkByte: chainId.charCodeAt(0),
            minimumFee,
            grpcAddress: '51.178.69.186:6865'
        };

        Waves = create({
            initialConfiguration: wavesApiConfig,
            fetchInstance: window.fetch
        });

        seed = Waves.Seed.fromExistingPhrase('examples seed phrase')
    })

    it('Generated address should equal predefined', function() {
        const seed = Waves.Seed.fromExistingPhrase('examples seed phrase')
        expect(seed.address).toEqual('3Ny3vjNsoNyX6afHdv7byVNHoMV7CYSHkUz');
    });

    it('Tx ids should be equal', async () => {
        const txBody = {
            contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh', // Predefined contract
            senderPublicKey: seed.keyPair.publicKey,
            contractVersion: 1,
            timestamp: 1614186435595,
            params: [],
            fee: 0,
        };
        const tx = Waves.API.Transactions.CallContract.V4(txBody)
        const id = await tx.getId()
        expect(id).toEqual('H1QRBxFfRPSNSoeDsdFNfmX5ZqR6UwVAmJZxLcXKpXUA');
    });

    it('Tx broadcast result', async () => {
        const txBody = {
            contractId: '4pSJoWsaYvT8iCSAxUYdc7LwznFexnBGPRoUJX7Lw3sh', // Predefined contract
            senderPublicKey: seed.keyPair.publicKey,
            contractVersion: 1,
            timestamp: Date.now(),
            params: []
        };
        const tx = Waves.API.Transactions.CallContract.V4(txBody)
        const result = await tx.broadcast(seed.keyPair)
        expect(result.contractId).toEqual(txBody.contractId);
    });
});
