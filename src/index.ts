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
import { TransactionServiceClient } from './grpc/compiled/transaction/transaction_grpc_pb';
import * as grpc from '@grpc/grpc-js';


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
    public grpcService: TransactionServiceClient;

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
                this.grpcService = new TransactionServiceClient(
                  initialConfiguration.grpcAddress,
                  grpc.credentials.createInsecure()
                )
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
        this.grpcService = new TransactionServiceClient(
          address,
          grpc.credentials.createInsecure()
        )
    }

}


export function create({ initialConfiguration, fetchInstance }: IWeSdkCtr): WeSdk {
    return new WeSdk({ initialConfiguration, fetchInstance });
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG;
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG;
