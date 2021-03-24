import { ByteProcessor as byteProcessors, Seed, utils } from '@wavesenterprise/transactions-factory'
import { IWavesConfig, IKeyPair, TCrypto } from './interfaces'

import NodeAPI from './api'
import config from './config'

import * as constants from './constants'
import fetch from './libs/fetch'
import tools from './tools'
import * as request from "./utils/request"
import {TransactionsType, Transactions} from './api/transactions/transactionsV2'
import { TransactionPublicServiceClient as TransactionServiceClientWeb } from './grpc/compiled-web/transaction/transaction_public_service_grpc_web_pb'
import isNode from './utils/isNode'

let TransactionServiceClient = TransactionServiceClientWeb

if (isNode) {
  TransactionServiceClient = require('./grpc/compiled-node/transaction/transaction_public_service_grpc_pb').TransactionPublicServiceClient
}


export interface IWeSdkCtr {
  initialConfiguration: Partial<IWavesConfig>
  fetchInstance?: typeof fetch
}

export class WeSdk {
  readonly Seed = Seed
  readonly byteProcessors = byteProcessors
  readonly config = config
  readonly constants = constants
  readonly crypto = utils.crypto
  readonly request = request
  readonly tools = tools
  grpcService: TransactionServiceClientWeb

  readonly API: {
    Node: NodeAPI;
    Transactions: TransactionsType;
  }

  private static _instance

  constructor(params: IWeSdkCtr) {
    const { initialConfiguration, fetchInstance = fetch } = params
    const nodeApi = new NodeAPI(fetchInstance)
    this.API = {
      Node: nodeApi,
      Transactions: {} as any
    }
    Transactions(this)

    if (this instanceof WeSdk) {
      if (initialConfiguration.grpcAddress) {
        this.setGrpcService(initialConfiguration.grpcAddress)
      }

      this.config.clear()
      this.config.set(initialConfiguration)

      if (WeSdk._instance === null) {
        WeSdk._instance = this
      } else {
        return WeSdk._instance
      }

    } else {

      return new WeSdk({
        initialConfiguration,
        fetchInstance,
      })

    }

  }

  setGrpcService(address: string) {
    if (isNode) {
      this.grpcService = new TransactionServiceClient(
        address,
        // tslint:disable-next-line:no-eval
        eval('require')('@grpc/grpc-js').credentials.createInsecure()
      )
    } else {
      const enableDevTools = (window as any).__GRPCWEB_DEVTOOLS__ || (() => null)
      this.grpcService = new TransactionServiceClient(
        address
      )
      enableDevTools([
        this.grpcService,
      ])
    }
  }

}


export function create({ initialConfiguration, fetchInstance }: IWeSdkCtr): WeSdk {
  return new WeSdk({ initialConfiguration, fetchInstance })
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG

export * from '@wavesenterprise/transactions-factory'
export * from './interfaces'
export * from './grpc/node-transactions-factory/TransactionsFactory'