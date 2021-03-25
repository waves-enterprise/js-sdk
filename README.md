# JS SDK [![npm version](https://badge.fury.io/js/%40wavesenterprise%2Fjs-sdk.svg)](https://www.npmjs.com/package/@wavesenterprise/js-sdk)

WE JS SDK is a JavaScript library for transactions signing and broadcasting in the Waves Enterprise network.

* Works both in browser and in the Node.js environment
* Supports [GOST](https://en.wikipedia.org/wiki/GOST) standards
* Supports the signing of [all types](https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html#id26) of Waves Enterprise network transactions

## Quickstart

##### 1. Download and install Node.js (LTS) from the [official website](https://nodejs.org/en/download/)

##### 2. Install JS SDK package using npm:
```
npm install @wavesenterprise/js-sdk --save
```

##### 3. Import the js-sdk package:
```
import WeSdk from '@wavesenterprise/js-sdk'
```
or use the require method:

`const WeSdk = require('@wavesenterprise/js-sdk');`

##### 4. Initialize the library:
```
const config = {
    ...WeSdk.MAINNET_CONFIG,
    nodeAddress: 'https://hoover.welocal.dev/node-0',
    crypto: 'waves',
    networkByte: 'V'.charCodeAt(0)
}

const Waves = WeSdk.create({
    initialConfiguration: config,
    fetchInstance: window.fetch // For Node.js use node-fetch: check /examples
});
```

##### 5. Create and broadcast a transaction:
```
const seed = Waves.Seed.fromExistingPhrase('examples seed phrase');

const txBody = {
    recipient: seed.address, // Send tokens to the same address
    assetId: '', // optional field for system token
    amount: '10000',
    fee: '1000000',
    attachment: 'Examples transfer attachment',
    timestamp: Date.now()
};

const tx = Waves.API.Transactions.Transfer.V3(txBody);

await tx.broadcast(seed.keyPair)
```

## Transactions
#### Description
All types of transactions are available by calling a function Waves.API.Transactions.<TX_NAME>.<TX_VERSION>   
Example:
```
const tx = Waves.API.Transactions.Transfer.V3(txBody);
```

txBody - object with initial transaction body. You can initialize it with an empty body and fill the fields later. Example:

```
const tx = Waves.API.Transactions.Transfer.V3({});
tx.recipient = '12afdsdga243134';
tx.amount = 10000;
...
```

For successful transaction broadcasting you have to set all required fields,
except 'type', 'version', 'id', 'proofs' and 'senderPublicKey'(automatically taken from keyPair).  

See full description all transaction bodies in the documentation: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html  

Examples of transaction broadcasting are located in the directory ./examples.  

In order to broadcast a transaction, use the broadcast method:
```
await tx.broadcast(seed.keyPair);
```

#### Transaction interface
In addition to broadcasting, the following methods are available:

```typescript
interface Transaction {
    broadcast(keys: IKeyPair): Promise<object>; // broadcast using REST
    broadcastGrpc(keys: IKeyPair): Promise<object>; // broadcast using GRPC
    isValid(): boolean; // validate tx body
    getErrors(): string[]; // returns array of errors for invalid fields
    getSignature(privateKey: string): Promise<string>; // returns signature
    getId(): Promise<string>; // calculate tx id
    getSignatureBytes(): Promise<Uint8Array>; // internal method, returns bytes to sign
    getBody(): object; // returns clear transaction body
    getSignedTx(keys: IKeyPair): Promise<object>; // returns clear transaction body with proofs
    getGrpcTx(keys: IKeyPair): Promise<object>; // returns clear transaction body with proofs serialized for grpc protocol
    getSignedTx(keys: IKeyPair): Promise<Uint8Array>; // returns grpc tx bytes
}
```

#### Transaction types
Transaction names and their corresponding IDs:
```typescript
const TRANSACTION_TYPES = {
  Issue: 3,
  Transfer: 4,
  Reissue: 5,
  Burn: 6,
  Lease: 8,
  LeaseCancel: 9,
  CreateAlias: 10,
  MassTransfer: 11,
  Data: 12,
  SetScript: 13,
  SponsorFee: 14,
  SetAssetScript: 15,
  Permit: 102,
  CreateContract: 103,
  CallContract: 104,
  DisableContract: 106,
  UpdateContract: 107,
  RegisterNode: 111,
  CreatePolicy: 112,
  UpdatePolicy: 113,
  PolicyDataHash: 114,
  Atomic: 120
}
```

## Additional features

#####Base58 encode/decode
```typescript
Waves.tools.base58.encode('Examples transfer attachment');
Waves.tools.base58.decode('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
```
## More examples
In the ./examples folder, you can find complete examples for broadcasting of the most popular transactions.


In order to run the examples:
1. Install all required packages and make a project build:

    `npm i && npm run build`
2. Broadcast an example transaction:
     + Tokens transfer:
        
        `node examples/transfer`
     + Create Policy:
        
        `node examples/policy`
     + Grant and revoke blockchain permission:
     
        `node examples/permission`
     + Issue and Burn tokens
     
        `node examples/issue_burn`
     + Create docker contract
     
        `node examples/create-contract`
     + Call docker contract
     
        `node examples/call-contract`
     + Atomic (including two Transfers and PolicyDataHash)
     
        `node examples/atomic`

With the use of this examples, you can sign any other type of transaction using its structure from [docs](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26).

## Using with oAuth
If a blockchain node uses the oAuth authorization, waves-api should be initialized with authorization headers provided to fetch.

In our projects, we use the api-token-refresher library which provides automatic tokens refresh if an access token expires.

Initialization is pretty simple:
```
import { init: initRefresher } from '@wavesenterprise/api-token-refresher/dist/fetch'

const { fetch } = initRefresher({
  authorization: {
    access_token, // JWT access token
    refresh_token // JWT refresh token
  }
});

const Waves = WeSdk.create({
    initialConfiguration: config,
    fetchInstance: fetch
});
```

You can also use any custom solution you prefer for integration with oAuth.

### Seed

You can create a new random seed:

```
const seed = Waves.Seed.create();

console.log(seed.phrase); // 'hole law front bottom then mobile fabric under horse drink other member work twenty boss'
console.log(seed.address); // '3Mr5af3Y7r7gQej3tRtugYbKaPr5qYps2ei'
console.log(seed.keyPair); // { privateKey: 'HkFCbtBHX1ZUF42aNE4av52JvdDPWth2jbP88HPTDyp4', publicKey: 'AF9HLq2Rsv2fVfLPtsWxT7Y3S9ZTv6Mw4ZTp8K8LNdEp' }
```

A seed you create may be encrypted with a password:

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

### Crypto Tool
The Crypto Tool uses the same methods as the node REST API: 
- crypto/encryptCommon
- crypto/encryptSeparate
- crypto/decrypt
  
 ```js
// an example is located at ./test/libs/data-encryption.spec.ts
// to run a test, type the following command: mocha -r ts-node/register ./test/libs/data-encryption.spec.ts
```

## GRPC transactions broadcast
For now, only docker call and docker create transactions are supported in the Node.js environment.

Examples of transaction broadcasting with the use of gRPC are located in directory ./examples/grpc-node.

+ Creating of a docker contract

   `node examples/grpc-node/create-contract`
+ Calling of a docker contract

   `node examples/grpc-node/call-contract`  
   
In a browser environment, the library uses the [grpc-web](https://github.com/grpc/grpc-web) protocol instead of gRPC. 

## GRPC blockchain event listener

Firstly, generate the gRPC service from the proto files (download the proto-files here: [releases](https://github.com/waves-enterprise/WE-releases/releases), file name: we-transaction-proto-{version}.zip).  

After that, use the [protoc](https://grpc.io/docs/protoc-installation/) or [grpc-tools](https://www.npmjs.com/package/grpc-tools) packages to generate code, and the [protoc-gen-ts](https://www.npmjs.com/package/protoc-gen-ts)
package to generate typings. 

Example script:

```shell script
#!/usr/bin/env bash
BASEDIR="."

./node_modules/.bin/grpc_tools_node_protoc ${BASEDIR}/proto/*/*.proto \
  ${BASEDIR}/proto/*.proto --proto_path=${BASEDIR}/proto \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --js_out=import_style=commonjs,binary:${BASEDIR}/compiled \
  --grpc_out=${BASEDIR}/compiled \
  --ts_out="service=grpc-node:${BASEDIR}/compiled"
```

Subscribe to blockchain events using proto the scheme in we-transaction-proto/messagebroker/blockchain_events_service.proto

Some transaction fields are encrypted, use the library to parse incoming gRPC transactions. Example:
```typescript
import { Transaction } from './compiled/managed/transaction_pb'
import { WeSdk, ParsedIncomingGrpcTxType, parseIncomingFullTx } from '@wavesenterprise/js-sdk';

function deserializeTxs(transactions: Transaction.AsObject[]): ParsedIncomingGrpcTxType[] {
  return transactions.map(parseIncomingFullTx)
}
```

Use types for parsed transactions:

```typescript
import { ParsedIncomingFullGrpcTxType, ParsedIncomingGrpcTxType } from '@wavesenterprise/js-sdk';

type TransferTransaction = ParsedIncomingFullGrpcTxType['transferTransaction']
// type guard
const isTransferTransaction = (tx: ParsedIncomingGrpcTxType): tx is TransferTransaction => tx.grpcType === 'transferTransaction'

if (isTransferTransaction(transaction)) {
  console.log('Amount: ', tx.amount)
}
```

## Authors

* [**Mikhail Tokarev**](https://github.com/mtfj) - *Initial refactoring*
* [**Alexander Kuvakin**](https://github.com/larsan12) - *Refactoring, add new transaction types*
* [**Artem Kolodko**](https://github.com/ArtemKolodko) - *Refactoring, examples*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
