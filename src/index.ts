import { ByteProcessor as byteProcessors, Seed, utils } from '@wavesenterprise/transactions-factory';
import { IWavesConfig } from '../interfaces';

import NodeAPI from './api';
import config from './config';

import * as constants from './constants';
import fetchSubstitute from "./libs/fetch";
import fetch from './libs/fetch';
import tools from './tools';
import * as request from "./utils/request";

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

    public readonly API: {
        Node: NodeAPI;
    };

    private static _instance;

    constructor(params: IWeSdkCtr) {
        const { initialConfiguration, fetchInstance = fetchSubstitute } = params;
        this.API = {
            Node: new NodeAPI(fetchInstance),
        };

        if (this instanceof WeSdk) {

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

}


export function create({ initialConfiguration, fetchInstance }: IWeSdkCtr): WeSdk {
    return new WeSdk({ initialConfiguration, fetchInstance });
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG;
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG;
