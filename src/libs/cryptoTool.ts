import { libs } from '@wavesenterprise/transactions-factory';
const { Encryptor, base58, base64, converters } = libs;

type encodedResult = Array<{
  encryptedText: string,
  publicKey: string,
  wrappedKey: string
}>

function decrypt(
  recipientPrivateKey: string,
  encryptedText: string,
  wrappedKey: string,
  senderPublicKey: string
) : string {
  const recipientPrivateKeyDecoded = base58.decode(recipientPrivateKey)
  const encryptedTextDecoded = base64.toByteArray(encryptedText)
  const wrappedKeyDecoded = base58.decode(wrappedKey)
  const senderPublicKeyDecoded = base58.decode(senderPublicKey)

  const result = Encryptor.decrypt(
      encryptedTextDecoded,
      wrappedKeyDecoded,
      recipientPrivateKeyDecoded,
      senderPublicKeyDecoded
    )
  return converters.byteArrayToString(result)
}

function encryptCommon(
  recipientsPublicKeys: string[],
  encryptionText: string,
  senderPrivateKey: string
) : encodedResult {
  const recipientsPublicKeysDecoded = recipientsPublicKeys.map(key =>
    base58.decode(key))
  const encryptionTextDecoded = Uint8Array.from(
    converters.stringToByteArray(encryptionText)
  )
  const senderPrivateKeyDecoded = base58.decode(senderPrivateKey)

  const result = Encryptor.encryptForMany(
    encryptionTextDecoded,
    senderPrivateKeyDecoded,
    recipientsPublicKeysDecoded
  )

  return result.recipientEncryptedKeys.map((eKey, i) => ({
    encryptedText: base64.fromByteArray(result.encryptedData),
    publicKey: recipientsPublicKeys[i],
    wrappedKey: base58.encode(eKey)
  }))
}

function encryptSeparate(
  recipientsPublicKeys: string[],
  encryptionText: string,
  senderPrivateKey: string
) : encodedResult {
  const recipientsPublicKeysDecoded = recipientsPublicKeys.map(key =>
    base58.decode(key))
  const encryptionTextDecoded = Uint8Array.from(
    converters.stringToByteArray(encryptionText)
  )
  const senderPrivateKeyDecoded = base58.decode(senderPrivateKey)

  return recipientsPublicKeysDecoded.map((key, i) => {
    const encoded = Encryptor.encrypt(
      encryptionTextDecoded,
      senderPrivateKeyDecoded,
      key
    )
    return {
      encryptedText: base64.fromByteArray(encoded.encryptedData),
      publicKey: base58.encode(key),
      wrappedKey: base58.encode(encoded.encryptedKey)
    }
  })

}

/**
 * recipient:
 * privateKey: 4EU68hSAfLkByEDoVhg1LMHKbnJKg365e1xczX2BgbAp
 * publicKey: CWKdXTf6u6rCzoFxXNscu5VNEHhnmYt7fSQVNp2Ha3Xs
 *
 * res:
 * {
    "encryptedText": "9f06lXZaxWqMuFQ9mOTZir2JyNdMbaY80T0N9CDC17Qb796zN/vgp7HDG5+u0hwoY3CxprUG",
    "publicKey": "CWKdXTf6u6rCzoFxXNscu5VNEHhnmYt7fSQVNp2Ha3Xs",
    "wrappedKey": "6uY8uM8guy1r8bT6SxRKKQxuGvCTy3x7e3fSwjr7Kk2XXDxfMaoMELqB9ss9VLUr4t"
  }
 *
 * {
 * "sender": "3NotQaBygbSvYZW4ftJ2ZwLXex4rTHY1Qzn",
 * "password": "wallet_1",
 * "encryptionText": "some string to encrypt",
 * "recipientsPublicKeys": [
 *   "CWKdXTf6u6rCzoFxXNscu5VNEHhnmYt7fSQVNp2Ha3Xs"
 *  ]
 * }
const result = decrypt(
  '4EU68hSAfLkByEDoVhg1LMHKbnJKg365e1xczX2BgbAp',
  '9f06lXZaxWqMuFQ9mOTZir2JyNdMbaY80T0N9CDC17Qb796zN/vgp7HDG5+u0hwoY3CxprUG',
  '6uY8uM8guy1r8bT6SxRKKQxuGvCTy3x7e3fSwjr7Kk2XXDxfMaoMELqB9ss9VLUr4t',
  'D56Gk8tvSAhNesghXgjAw67rSYDf4F2vo7HmsFTuGweC'
)

console.log(result)
*/

export default {
  encryptCommon,
  encryptSeparate,
  decrypt
};