// todo not needed. for manual testing purposes only

import * as WavesAPI from '../dist/waves-api';

import {
    utils,
    Seed,
    ByteProcessor as byteProcessors,
    TX_NUMBER_MAP
} from '@vostokplatform/signature-generator';
import BigNumber from '../src/libs/bignumber';


// export NODE_TLS_REJECT_UNAUTHORIZED=0
let requiredConfigValues = {
    networkByte: 84,
    nodeAddress: 'https://obama.dev.vostokservices.com/nodeAddress',
    matcherAddress: 'https://obama.dev.vostokservices.com/nodeAddress',
    crypto: 'waves'
};

let allConfigValues = {
    ...requiredConfigValues
};

const seed = {
    phrase:
        'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
    address: '3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7',
    keyPair:
        {
            // privateKey: '7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod',
            // publicKey: 'F2W3jcpP1acrH62FVs97FkMPoqkvumwkXD7BepkZgwWM',

            // publicKey: '7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod',
            // privateKey: 'F2W3jcpP1acrH62FVs97FkMPoqkvumwkXD7BepkZgwWM'
            privateKey: '96oQip2JkSZtWhb3XbpeyTeDVS1FGyRiGuJEucMuwHAC',
            publicKey: 'GQCWTLnXsw7WE7zzGGwnDNmV6Cmc5Bdd1E69TqoS1Jj7'
        }
};

/*
  {
        phrase:
         'stage chicken around globe typical senior buddy prepare term decrease there three clutch tackle cloud',
        address: '3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z',
        keyPair:
         { privateKey: '4GtBACvgnQvvEs9NP7iYb4GQ7SKfyowUkSBGdiMAZaFp',
           publicKey: 'FxgMbE4fjGtnGUY6MvhJBx9gtu3pe4U7e1kCH9JD5AN' }
   }
*/


const permissionTxMockWaves = {
    timestamp: Date.now(),
    fee: '10',
    opType: "add",
    role: "contract_developer",
    target: "3GNLKcsbWRyFPJbXSaz6doR5EcJ8S3tBW8i",
    dueTimestamp: Date.now() + 500000
};

const Waves = WavesAPI.create(allConfigValues);

//Waves.API.Node.transactions.broadcast('permit', permissionTxMockWaves, seed.keyPair).then((responseData) => {
//    console.log(responseData);
//});


const transferData = {

    // An arbitrary address; mine, in this example
    recipient: '3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7',

    // ID of a token, or WAVES
    assetId: 'WAVES',

    // The real amount is the given number divided by 10^(precision of the token)
    amount: 120000,

    // The same rules for these two fields
    feeAssetId: 'WAVES',
    fee: 100000,

    // 140 bytes of data (it's allowed to use Uint8Array here)
    attachment: 'мой аттач some! data?',

    timestamp: Date.now()

};

// Waves.API.Node.transactions.broadcast('transfer', transferData, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });

const t = {
    "senderPublicKey": "GmnTn6yVk7CNmm5h7NvKGz9Q6Bo7LdG5iM7FSso9k4tZ",
    "alias": "wolfarion",
    "fee": 100000,
    "timestamp": 1543235238318,
    "proofs": ["2Kozpqqzdz2cA3fb4brER9gUyLk47J7WD7A26dSze5XbcG13aDmu2FvTmutX3uD42k8vZFmY6zk83mhFyXZz24q4"],
    "type": 10,
    "version": 2
};

const leaseData = {

    recipient: '3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z',

    // Both amount and fee may be presented as divided by 10^8 (8 is Waves precision)
    amount: 20000, // 10 Waves
    fee: 100000, // 0.001 Waves

    timestamp: Date.now()

};

// Waves.API.Node.transactions.broadcast('lease', leaseData, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });

const cancelLeasingData = {

    // Related Lease transaction ID
    leaseId: '3zPsiE5rXRX1sHfn3D59JN1boMzqcvrizBk1ZCZZEuxz',

    fee: 100000,
    timestamp: Date.now()

};

const massTransfer = {
    timestamp: Date.now(),
    transfers: [
        {
            recipient: 'wolfarion',
            amount: '922337203685477580'
        }
    ],
    attachment: 'мой аттач some! data?',
    assetId: 'WAVES',
    fee: 200000
};

/*
Waves.API.Node.transactions.broadcast('massTransfer', massTransfer, seed.keyPair).then((responseData) => {
    console.log(responseData);
});
*/

const issueData = {
    name: 'test-token3',
    description: '',

    // With given options you'll have 100000.00000 tokens
    quantity: '9223372036854775806',
    precision: 5,

    // This flag defines whether additional emission is possible
    reissuable: false,

    fee: 100000000,
    timestamp: Date.now()
};

const iss = {
    "type": 3,
    "id": "EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw",
    "sender": "3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7",
    "senderPublicKey": "7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod",
    "fee": 100000000,
    "timestamp": 1549446741610,
    "proofs": [
        "4joh3ZhJ5JYAwDjHF8iU3mFDsFcFCtCenMd91WZg5wEsmnzybQg354FDn75brRuT8tNQRsBHN4LPFgHFw6JuoHDy"
    ],
    "version": 2,
    "assetId": "EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw",
    "name": "test-token3",
    "quantity": 9223372036854776000,
    "reissuable": false,
    precision: 5,
    "decimals": 5,
    "description": "",
//     "script": "base64:AQa3b8tH"
};

// Waves.API.Node.transactions.sign('issue', iss, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });


//Waves.API.Node.transactions.broadcast('issue', iss, seed.keyPair).then((responseData) => {
//    console.log(responseData);
//});

const permissionTx = {
    version: 1,
    // type: 102,
    timestamp: Date.now(),
    fee: '0',
    opType: "remove",
    role: "issuer",
    target: "3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe",
    // senderPublicKey: seed.keyPair.publicKey
};

// Waves.API.Node.transactions.broadcast('permit', permissionTx, seed.keyPair).then((responseData) => {
// console.log(responseData);
// });


const scriptData = {
    "fee": 5000000,
    "timestamp": 1545992919891,
    "script": "base64:AQQAAAAHJG1hdGNoMAUAAAACdHgG+RXSzQ==",
    "name": "faucet",
    "description": "description"
};

/*
Waves.API.Node.transactions.broadcast('setScript', scriptData, seed.keyPair).then((responseData) => {
    console.log(responseData);
});*/


const dataTX = {
    "senderPublicKey": seed.keyPair.publicKey,
    "authorPublicKey": seed.keyPair.publicKey,
    "data": [
        {"key": "int", "type": "integer", "value": '-1'}
    ],
    "timestamp": Date.now(),
    "fee": 500000
};

/*
Waves.API.Node.transactions.broadcast('data', dataTX, seed.keyPair).then((responseData) => {
     console.log(responseData);
});*/


const dockerCallTX = {
    "senderPublicKey": seed.keyPair.publicKey,
    "authorPublicKey": seed.keyPair.publicKey,
    contractId: '2D9vyC5UjBao1yGkjoofBjRPxFyXBYeSy6Y8XUafryxu',
    "params": [],
    "timestamp": Date.now(),
    "fee": 15000000
};


/*Waves.API.Node.transactions.broadcast('dockerCall', dockerCallTX, seed.keyPair).then((responseData) => {
    console.log(responseData);
});*/

const dcMock = {
    "senderPublicKey": "7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod",
    "sender": "3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7",
    "fee": 15000000,
    "contractId": "2D9vyC5UjBao1yGkjoofBjRPxFyXBYeSy6Y8XUafryxu",
    "id": "BpzGbk6Mvtofsde3DGVR2Lx7nEUwxWrsfHcvsaY9TZH9",
    "type": 104,
    "params": [],
    "version": 1,
    "timestamp": 1554293583094
};

const dockerCreateTX = {
    type: 103,
    "senderPublicKey": "7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod",
    "authorPublicKey": "7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod",
    "timestamp": 1554887021294,
    "image": "tdm-actions-execution:latest",
    "imageHash": "sha256:a77b9aede9c28ca7bf00bf84cc753c039c27269c6cda6511066739086a156453",
    "contractName": "contract_test",
    "params": [{"key": "key1", "type": "string", "value": "dsfarfarfar"}, {
        "key": "key2",
        "type": "integer",
        "value": "222"
    }, {"key": "key3", "type": "boolean", "value": true},
        {"key": "key", "type": "binary", "value": "base64:abcd"}],
    "fee": 100000000
};

/*
Waves.API.Node.transactions.broadcast('dockerCreate', dockerCreateTX, seed.keyPair).then((responseData) => {
    console.log(responseData);
});*/