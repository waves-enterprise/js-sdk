# Waves API [![npm version](https://badge.fury.io/js/%40waves%2Fwaves-api.svg)](https://www.npmjs.com/package/@vostokplatform/waves-api) [![downloads/month](https://img.shields.io/npm/dm/%40waves%2Fwaves-api.svg)](https://www.npmjs.com/package/@vostokplatform/waves-api)

WavesAPI is a javascript library for signing and broadcasting transactions on the Waves Enterprise network.

* Works both in browser and in the Node.js environment
* Supports [GOST](https://en.wikipedia.org/wiki/GOST) standards
* Supports the signing of [all types](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26) of Waves Enterprise network transactions

## Quickstart

##### 1. Install package using npm:
```
npm install @vostokplatform/waves-api --save
```

##### 2. Import package
```
import WavesAPI from '@vostokplatform/waves-api'
```
or using require:

`const WavesAPI = require('@vostokplatform/waves-api');`

##### 3. Initialize library
```
const config = {
    ...WavesAPI.MAINNET_CONFIG,
    nodeAddress: 'https://trump.vostokservices.com/node-1',
    crypto: 'waves',
    networkByte: 'T'.charCodeAt(0)
}

const Waves = WavesAPI.create({
    initialConfiguration: config,
    fetchInstance: window.fetch // use node-fetch instance for Node.js
});
```

##### 4. Create and broadcast transaction
```
const seed = Waves.Seed.fromExistingPhrase('examples seed phrase');

const transferTx = {
    recipient: seed.address, // Send tokens to own address
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
1. Once make a project build: `npm run build`
2. Broadcast following transactions:
     + Transfer (`npm run examples:transfer`)
     + Create Policy (`npm run examples:policy`)
     + Permission (`npm run examples:permission`)
     + Issue / Burn (`npm run examples:issue_burn`)
     
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

Being called with a wrong password `Waves.Seed.decryptSeedPhrase()` throws an exception.

You also can create a `Seed` object from an existing seed:

```
const anotherSeed = Waves.Seed.fromExistingPhrase('a seed which was backed up some time ago');

console.log(seed.phrase); // 'a seed which was backed up some time ago'
console.log(seed.address); // '3N3dy1P8Dccup5WnYsrC6VmaGHF6wMxdLn4'
console.log(seed.keyPair); // { privateKey: '2gSboTPsiQfi1i3zNtFppVJVgjoCA9P4HE9K95y8yCMm', publicKey: 'CFr94paUnDSTRk8jz6Ep3bzhXb9LKarNmLYXW6gqw6Y3' }
```

#### Get signed transactions

```
const transferData = {
    recipient: recipientSeed.address,
    assetId: 'WAVES',
    amount: 1000000, // 0.01 Waves
    feeAssetId: 'WAVES',
    fee: 100000,
    attachment: 'some test attachment message',
    timestamp: Date.now()
};

const singedTx = await Waves.API.Node.transactions.sign('transfer', transferData, seed.keyPair);
```

#### Sending rawTransactions

Transaction should be [signed](#get-signed-transactions) before you can pass to rawBroadcast method.

```
const txData = await Waves.API.Node.transactions.rawBroadcast(singedTx);
```

#### Getting the information from Node

The most used GET requests are those related to balances and transactions history.

##### Waves balance

There are two types of Waves balance: simple, with optional `confirmations` parameter, and detailed, showing different types of Waves balance.

With the first type, without additional arguments, you get the current balance on an address:

```
Waves.API.Node.addresses.balance('3PMgh8ra7v9USWUJxUCxKQKr6PM3MgqNVR8').then((balance) => {
    console.log(balance);
});
```

If you pass an optional `confirmations` argument, you get the balance with N confirmations, i.e. the balance as it was N blocks ago from the moment:

```
Waves.API.Node.addresses.balance('3PMgh8ra7v9USWUJxUCxKQKr6PM3MgqNVR8', 100).then((balance) => {
    console.log(balance);
});
```

For the second type, there is a separate method:

```
Waves.API.Node.addresses.balanceDetails('3PMgh8ra7v9USWUJxUCxKQKr6PM3MgqNVR8').then((balanceDetails) => {
   console.log(balanceDetails);
});
```

##### Token balances

You can get the list of all balances on an address:

```
Waves.API.Node.assets.balances(address).then((balancesList) => {
   console.log(balancesList);
});
```

You also can get the balance of a given token:

```
Waves.API.Node.assets.balance(address, assetId).then((balance) => {
   console.log(balance);
});
```

##### Token distribution

A very useful method allowing you to get a map with balances of all addresses in possession of a token:

```
Waves.API.Node.assets.distribution(assetId).then((distributionMap) => {
   console.log(distributionMap);
});
```

##### Transactions

Every transaction in the blockchain has its own ID. You can both get one by ID, or get a list of all recent transactions.

```
Waves.API.Node.transactions.get('Bn2opYvcmYAMCaJHKP1uXYCHFGnAyrzGoiboBLT8RALt').then((tx) => {
    console.log(tx);
});
```

To get the list you need to provide an address which is either the sender or the recipient of the transactions in the resulting list:

```
Waves.API.Node.transactions.getList('3PMgh8ra7v9USWUJxUCxKQKr6PM3MgqNVR8').then((txList) => {
    console.log(txList);
}):
```

One of the concepts in most blockchains is UTX, unconfirmed transactions pool. During the time between blocks appearance, transactions from users are stored in it.

There are methods to get the size of UTX pool and UTX pool itself (note that the address is not needed here):

```
Waves.API.Node.transactions.utxSize().then((utxSize) => {
    console.log(utxSize);
});

Waves.API.Node.transactions.utxGetList().then((utxList) => {
    console.log(utxList);
});
```

Also if a transaction is still in UTX pool and you know its ID, you can get only it from UTX:

```
Waves.API.Node.transactions.utxGet('Bn2opYvcmYAMCaJHKP1uXYCHFGnAyrzGoiboBLT8RALt').then((tx) => {
    console.log(tx);
});
```

##### Blocks

You can get the whole block by its signature (`get()`) or height (`at()`). Method `height()` returns the current height of the Waves blockchain. The names of the remaining methods speak for themselves.

```
Waves.API.Node.blocks.get(signature).then((block) => console.log(block));

Waves.API.Node.blocks.at(height).then((block) => console.log(block));

Waves.API.Node.blocks.height().then((currentHeight) => console.log(currentHeight));

Waves.API.Node.blocks.first().then((firstBlock) => console.log(firstBlock));

Waves.API.Node.blocks.last().then((lastBlock) => console.log(lastBlock));
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

### Tools

#### Get address from public key

```
const address = Waves.tools.getAddressFromPublicKey('GL6Cbk3JnD9XiBRK5ntCavSrGGD5JT9pXSRkukcEcaSW');
console.log(address); // '3N1JKsPcQ5x49utR79Maey4tbjssfrn2RYp'
```

## Common pitfalls

### Precision and coins-to-tokens transformation

In Waves blockchain different tokens have different precision, i.e. number of decimal digits. For example, it would be 10.00 USD and 10.00000000 BTC. That distinction allows to create tokens for various purposes but also makes things harder to understand sometimes.

Two words have emerged: _token_ and _coin_. Token is used to refer to the whole part of the amount. Coin describes the smallest value which is possible for a given token. For USD _token_ would be one dollar, and _coin_ would be one cent. If you are familiar with Bitcoin you could have encountered the word _Satoshi_ which refers to one hundred millionth of a single Bitcoin.

In the blockchain every token is stored with its explicitly specified precision and amount of coins. Every transaction is signed and stored in the blockchain in its coin representation. So if you send 2 USD tokens to someone, you really send 200 USD token coins instead.

The same goes for the fees, and issue transactions, and leasing amounts, and so on.

Waves precision equals 8. Therefore there are `100000000 * 10^8` of Waves coins (Wavelets) in Waves blockchain.

### Different types of Waves balance

There is the most understandable type of Waves balance. It is the regular balance. It is served through `Waves.API.Node.addresses.balance()`. There are also several types of Waves balance related to leasing and the delays in its processing.

1. *Regular* — that's how much Waves you have, including those you leased;
2. *Available* — the same as _regular_ only without Waves you leased;
3. *Effective* — _available_ plus those Waves which is leased to you;
4. *Generating* — the minimal _effective_ for last 1000 blocks;
5. *Leased* — the amount you leased to other addresses.

Available balance you can lease and spend.

Generating balance gives you mining power.

## Authors

* [**Phil Filippak**](https://github.com/xenohunter) - *Initial work*
* [**Daniil Tsigelnitskiy**](https://github.com/tsigel) - *TypeScript expertise*

See also the list of [contributors](https://github.com/wavesplatform/waves-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
