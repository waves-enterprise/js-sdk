# Waves API [![npm version](https://badge.fury.io/js/%40waves%2Fwaves-api.svg)](https://www.npmjs.com/package/@wavesenterprise/waves-api) [![downloads/month](https://img.shields.io/npm/dm/%40waves%2Fwaves-api.svg)](https://www.npmjs.com/package/@wavesenterprise/waves-api)

WavesAPI is a javascript library for signing and broadcasting transactions on the Waves Enterprise network.

* Works both in browser and in the Node.js environment
* Supports [GOST](https://en.wikipedia.org/wiki/GOST) standards
* Supports the signing of [all types](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26) of Waves Enterprise network transactions

## Quickstart

##### 1. Download and install Node.js (LTS) from the [official website](https://nodejs.org/en/download/)

##### 2. Install waves-api package using npm:
```
npm install @wavesenterprise/waves-api --save
```

##### 3. Import waves-api package:
```
import WavesAPI from '@wavesenterprise/waves-api'
```
or use require:

`const WavesAPI = require('@wavesenterprise/waves-api');`

##### 4. Initialize library:
```
const config = {
    ...WavesAPI.MAINNET_CONFIG,
    nodeAddress: 'https://hoover.welocal.dev/node-0',
    crypto: 'waves',
    networkByte: 'V'.charCodeAt(0)
}

const Waves = WavesAPI.create({
    initialConfiguration: config,
    fetchInstance: window.fetch // use node-fetch instance for Node.js
});
```

##### 5. Create and broadcast transaction:
```
const seed = Waves.Seed.fromExistingPhrase('examples seed phrase');

const transferTx = {
    recipient: seed.address, // Send tokens to the same address
    assetId: 'WAVES',
    amount: '10000',
    fee: 0,
    attachment: 'Examples transfer attachment',
    timestamp: Date.now()
}

Waves.API.Node.transactions.broadcast('transfer', tx, seed.keyPair);
```

## More examples
In the /examples folder you can find complete examples of sending the most popular transactions.


To run examples:
1. Once install requirements and make a project build:

    `npm i && npm run build`
2. Broadcast following transactions:
     + Tokens transfer:
        
        `npm run example:transfer`
     + Create Policy:
        
        `npm run example:policy`
     + Grant and revoke blockchain permission:
     
        `npm run example:permission`
     + Issue and Burn tokens
     
        `npm run example:issue_burn`
     + Create docker contract
     
        `npm run example:docker-create`
     + Call docker contract
     
        `npm run example:docker-call`
     
Using this examples, you can sign any other type of transaction using the transaction structure from [docs](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26).

### Seed

You can create a new random seed:

```
const seed = Waves.Seed.create();

console.log(seed.phrase); // 'hole law front bottom then mobile fabric under horse drink other member work twenty boss'
console.log(seed.address); // '3Mr5af3Y7r7gQej3tRtugYbKaPr5qYps2ei'
console.log(seed.keyPair); // { privateKey: 'HkFCbtBHX1ZUF42aNE4av52JvdDPWth2jbP88HPTDyp4', publicKey: 'AF9HLq2Rsv2fVfLPtsWxT7Y3S9ZTv6Mw4ZTp8K8LNdEp' }
```

That seed may be encrypted with a password:

```
const password = '0123456789';
const encrypted = seed.encrypt(password);

console.log(encrypted); // 'U2FsdGVkX1+5TpaxcK/eJyjht7bSpjLYlSU8gVXNapU3MG8xgWm3uavW37aPz/KTcROK7OjOA3dpCLXfZ4YjCV3OW2r1CCaUhOMPBCX64QA/iAlgPJNtfMvjLKTHZko/JDgrxBHgQkz76apORWdKEQ=='
```

...and decrypted using the same password:

```
const restoredPhrase = Waves.Seed.decryptSeedPhrase(encrypted, password);

console.log(restoredPhrase); // 'hole law front bottom then mobile fabric under horse drink other member work twenty boss'
```

You also can create a `Seed` object from an existing seed:

```
const anotherSeed = Waves.Seed.fromExistingPhrase('a seed which was backed up some time ago');

console.log(seed.phrase); // 'a seed which was backed up some time ago'
console.log(seed.address); // '3N3dy1P8Dccup5WnYsrC6VmaGHF6wMxdLn4'
console.log(seed.keyPair); // { privateKey: '2gSboTPsiQfi1i3zNtFppVJVgjoCA9P4HE9K95y8yCMm', publicKey: 'CFr94paUnDSTRk8jz6Ep3bzhXb9LKarNmLYXW6gqw6Y3' }
```
### Configuration

The configuration is changeable even during the runtime. The structure of the config is following:

```
const newConfig = {

    // The byte allowing to distinguish networks (mainnet, testnet, devnet, etc)
    networkByte: Waves.constants.MAINNET_BYTE,

    // Node and Matcher addresses, no comments here
    nodeAddress: 'https://nodes.wavesnodes.com',
    matcherAddress: 'https://nodes.wavesnodes.com/matcher',

    // If a seed phrase length falls below that value an error will be thrown
    minimumSeedLength: 50

};
```

All fields are optional, only filled ones will be replaced.

You can change the config like that:

```
Waves.config.set(newConfig);
```

## Authors

* [**Mikhail Tokarev**](https://github.com/mtfj) - *Initial refactoring*
* [**Alexander Kuvakin**](https://github.com/larsan12) - *Refactoring, add new transactions*
* [**Artem Kolodko**](https://github.com/ArtemKolodko) - *Refactoring, add new transactions*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
