import { ByteProcessor as byteProcessors, Seed, utils } from '@vostokplatform/signature-generator';
import { IWavesConfig } from '../interfaces';

import * as MatcherAPI from './api/matcher';
import { IMatcherAPI } from './api/matcher';

import NodeAPI from './api/node/index';
import config from './config';

import * as constants from './constants';
import fetchSubstitute from "./libs/fetch";
import fetch from './libs/fetch';
import tools from './tools';
import * as request from "./utils/request";

export interface IWavesAPICtr {
    initialConfiguration: IWavesConfig;
    fetchInstance?: typeof fetch;
}

class WavesAPI {
    public readonly Seed = Seed;
    public readonly byteProcessors = byteProcessors;
    public readonly config = config;
    public readonly constants = constants;
    public readonly crypto = utils.crypto;
    public readonly request = request;
    public readonly tools = tools;

    public readonly API: {
        Node: NodeAPI;
        Matcher: IMatcherAPI;
    };

    private static _instance;

    constructor(params: IWavesAPICtr) {
        const { initialConfiguration, fetchInstance = fetchSubstitute } = params;
        this.API = {
            Node: new NodeAPI(fetchInstance),
            Matcher: MatcherAPI
        };

        if (this instanceof WavesAPI) {

            this.config.clear();
            this.config.set(initialConfiguration);

            if (WavesAPI._instance === null) {
                WavesAPI._instance = this;
            } else {
                return WavesAPI._instance;
            }

        } else {

            return new WavesAPI({
                initialConfiguration,
                fetchInstance,
            });

        }

    }

}


export function create({ initialConfiguration, fetchInstance }: IWavesAPICtr): WavesAPI {
    return new WavesAPI({ initialConfiguration, fetchInstance });
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG;
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG;
