import { expect } from '../getChai';
import * as WavesAPI from '../../src/WavesAPI';

const wavesConfig = {
  networkByte: 84,
  nodeAddress: 'any',
  matcherAddress: 'any',
  crypto: 'waves'
};

const Waves = WavesAPI.create({
  initialConfiguration: wavesConfig
})

const recipients = Array(5).fill(0).map(() => Waves.Seed.create())
const sender = Waves.Seed.create()

describe('API', function() {

  const data = 'test test test'

  it('encryptCommon', async () => {
    // encrypt
    const encrypted = Waves.cryptoTool.encryptCommon(
      recipients.map(r => r.keyPair.publicKey),
      sender.keyPair.privateKey,
      data
    )

    // encrypted text is the same for all recipients
    const first = encrypted[0].encryptedText
    encrypted.slice(1).forEach(result => {
      expect(result.encryptedText).to.be.equal(first)
    })

    // decrypt
    encrypted.forEach((result, i) => {
      expect(
        Waves.cryptoTool.decrypt(
          recipients[i].keyPair.privateKey,
          sender.keyPair.publicKey,
          result.encryptedText,
          result.wrappedKey
        )).to.be.equal(data)
    })
  });

  it('encryptSeparate', async () => {
    // encrypt
    const encrypted = Waves.cryptoTool.encryptSeparate(
      recipients.map(r => r.keyPair.publicKey),
      sender.keyPair.privateKey,
      data
    )

    // encrypted text is different for all recipients
    const first = encrypted[0].encryptedText
    encrypted.slice(1).forEach(result => {
      expect(result.encryptedText).not.to.be.equal(first)
    })

    // decrypt
    encrypted.forEach((result, i) => {
      expect(
        Waves.cryptoTool.decrypt(
          recipients[i].keyPair.privateKey,
          sender.keyPair.publicKey,
          result.encryptedText,
          result.wrappedKey
        )).to.be.equal(data)
    })
  });

});