import { ByteProcessor as byteProcessors, Seed, utils } from '@wavesenterprise/transactions-factory';
import { IWavesConfig } from '../interfaces';

import NodeAPI from './api';
import config from './config';

import * as constants from './constants';
import fetchSubstitute from "./libs/fetch";
import fetch from './libs/fetch';
import tools from './tools';
import * as request from "./utils/request";
import {TransactionsType, Transactions} from './api/transactions/transactionsV2';
import { TransactionServiceClient as TransactionServiceClientNode } from './grpc/compiled-node/transaction/transaction_grpc_pb';
import { TransactionServiceClient as TransactionServiceClientWeb } from './grpc/compiled-web/transaction/transaction_grpc_web_pb';
import isNode from './utils/isNode'

import * as grpcNode from '@grpc/grpc-js';


export interface IWeSdkCtr {
  initialConfiguration: Partial<IWavesConfig>;
  fetchInstance?: typeof fetch;
}

export class WeSdk {
  public readonly Seed = Seed;
  public readonly byteProcessors = byteProcessors;
  public readonly config = config;
  public readonly constants = constants;
  public readonly crypto = utils.crypto;
  public readonly request = request;
  public readonly tools = tools;
  public grpcService: TransactionServiceClientNode | TransactionServiceClientWeb;

  public readonly API: {
    Node: NodeAPI;
    Transactions: TransactionsType;
  };

  private static _instance;

  constructor(params: IWeSdkCtr) {
    const { initialConfiguration, fetchInstance = fetchSubstitute } = params;
    const nodeApi = new NodeAPI(fetchInstance);
    this.API = {
      Node: nodeApi,
      Transactions: {} as any
    }
    Transactions(this)

    if (this instanceof WeSdk) {
      if (initialConfiguration.grpcAddress) {
        this.setGrpcService(initialConfiguration.grpcAddress)
      }

      this.config.clear();
      this.config.set(initialConfiguration);

      if (WeSdk._instance === null) {
        WeSdk._instance = this;
      } else {
        return WeSdk._instance;
      }

    } else {

      return new WeSdk({
        initialConfiguration,
        fetchInstance,
      });

    }

  }

  setGrpcService(address: string) {
    if (isNode) {
      this.grpcService = new TransactionServiceClientNode(
        address,
        grpcNode.credentials.createInsecure()
      )
    } else {
      this.grpcService = new TransactionServiceClientWeb(
        address
      )
    }
  }

}


export function create({ initialConfiguration, fetchInstance }: IWeSdkCtr): WeSdk {
  return new WeSdk({ initialConfiguration, fetchInstance });
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG;
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG;
