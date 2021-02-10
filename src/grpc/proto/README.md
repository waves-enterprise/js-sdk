# WE Protobuf

## Deserializing byte fields

All fields related to cryptography (public key, hash, signature) are represented as byte arrays.
String representation of these fields (like in REST API) can be obtained by encoding of byte arrays to Base58.

* id - hash
* sender_public_key - public key
* author_public_key - public key
* validator_public_key - public key
* miner - address
* proofs - array of signatures
* assetId - hash
* contract_id - hash
* trusted_sender - address
* recipients - array of addresses
* recipient - address
* owners - array of addresses
* lease_id - hash
* data_hash - hash
* policy_id - hash
* target - public key

### Exceptions

#### Alias
Alias byte array has the following structure:

| Byte array index |  Type  |              Description             |
|:----------------:|:------:|:------------------------------------:|
|         0        |  Byte  | Object type flag. 1=Address, 2=Alias |
|         1        |  Byte  |               Chain Id               |
|        2-3       |  Short |        Size of array with name       |
|       4-end      | String |             Name in UTF-8            |

To get a string representation (like in REST API), you need to concatenate:
1. Prefix "alias:"
2. The byte at index 1 (network byte) converted to Char
3. Separator ":"
4. Bytes from index 4 up to the end converted to UTF-8 String

#### Address
Address byte array has the following structure:

| Byte array index |    Type    |              Description             |
|:----------------:|:----------:|:------------------------------------:|
|         0        |    Byte    | Object type flag. 1=Address, 2=Alias |
|         1        |    Byte    |               Chain Id               |
|       2-21       | Byte array |                 Hash                 |
|       22-25      | Byte array |               Checksum               |

String representation (like in REST API) has the Base58 encoding.
