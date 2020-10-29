import { libs } from '@wavesenterprise/transactions-factory';
const { Encryptor, base58, base64, converters } = libs;

type encodedResult = Array<{
  encryptedText: string,
  publicKey: string,
  wrappedKey: string
}>

function decrypt(
  recipientPrivateKey: string,
  senderPublicKey: string,
  encryptedText: string,
  wrappedKey: string,
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
  senderPrivateKey: string,
  encryptionText: string,
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
  senderPrivateKey: string,
  encryptionText: string,
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

export default {
  encryptCommon,
  encryptSeparate,
  decrypt
};