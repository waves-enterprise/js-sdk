import { IKeyPair, TBuffer, TCrypto, TLogLevel } from '@wavesenterprise/transactions-factory'

export { IKeyPair, TBuffer, TCrypto, TLogLevel }

export interface IWavesBasicConfig {
  minimumSeedLength: number;
  requestOffset: number;
  requestLimit: number;
  logLevel: TLogLevel;
  timeDiff: number;
  crypto: string
}

export interface IWavesConfig extends IWavesBasicConfig {
  networkByte: number;
  nodeAddress: string;
  matcherAddress: string;
  assetFactory?: Function;
  minimumFee?: object;
  grpcAddress?: string;
}
