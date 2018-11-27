// todo not needed. for manual testing purposes only

import * as WavesAPI from '../dist/waves-api';

let requiredConfigValues = {
    networkByte: 68,
    nodeAddress: 'http://1.devnet-pos.vostoknodes.com:6862',
    matcherAddress: 'http://1.devnet-pos.vostoknodes.com/matcher:6862',
    crypto: 'waves'
};

let allConfigValues = {
    ...requiredConfigValues
};

const seed = {
    phrase:
        'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
    address: '3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe',
    keyPair:
        {
            privateKey: '3hFkg3XwC827R7CzQLbpXQzZpMS98S3Jrv8wYY5LTtn7',
            publicKey: '3RBMLDrd27WAfv84abTZSZTE5ZBsp5JX6dNz3YteQwNz'
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
    version: 1,
    type: 102,
    senderPublicKey: "3RBMLDrd27WAfv84abTZSZTE5ZBsp5JX6dNz3YteQwNz",
    timestamp: Date.now(),
    fee: '0',
    opType: "remove",
    role: "dex",
    target: "3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z",
    dueTimestamp: Date.now() + 500000
};

const Waves = WavesAPI.create(allConfigValues);


const transferData = {

    // An arbitrary address; mine, in this example
    recipient: '3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe',

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

// Waves.API.Node.transactions.broadcast('cancelLeasing', cancelLeasingData, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });