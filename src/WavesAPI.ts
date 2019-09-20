import { ByteProcessor as byteProcessors, Seed, utils } from '@vostokplatform/signature-generator';
import { IHash, IWavesConfig } from '../interfaces';

import * as MatcherAPI from './api/matcher/index';
import { IMatcherAPI } from './api/matcher/index';

import NodeAPI, { INodeAPI } from './api/node/index';
import config from './config';

import * as constants from './constants';
import fetch from './libs/fetch';
import tools from './tools';
import * as request from "./utils/request";
import { createFetchWrapper, processJSON, PRODUCTS, VERSIONS } from "./utils/request";

export interface IAPIVersions {
    Node: INodeAPI,
    Matcher: IMatcherAPI
}

export interface IWavesAPI {
    Seed: typeof Seed;
    byteProcessors: typeof byteProcessors;
    constants: IHash<any>;
    crypto: IHash<any>;
    request: IHash<any>;
    tools: IHash<any>;
    API: IAPIVersions;
}

export interface IWavesAPICtr {
    initialConfiguration: IWavesConfig;
    fetchInstance?: typeof fetch;
}

class WavesAPI implements IWavesAPI {
    public readonly Seed = Seed;
    public readonly byteProcessors = byteProcessors;
    public readonly config = config;
    public readonly constants = constants;
    public readonly crypto = utils.crypto;
    public readonly request = request;
    public readonly tools = tools;

    public readonly API: {
        Node: INodeAPI;
        Matcher: IMatcherAPI;
    };

    private static _instance;

    constructor(params: IWavesAPICtr) {
        const {
            initialConfiguration,
            fetchInstance = createFetchWrapper({
                product: PRODUCTS.NODE,
                version: VERSIONS.V1,
                pipe: processJSON,
                fetchInstance: fetch
            })
        } = params;
        this.API = {
            Node: new NodeAPI(
              createFetchWrapper({
                  product: PRODUCTS.NODE,
                  version: VERSIONS.V1,
                  pipe: processJSON,
                  fetchInstance
              })
            ),
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


export function create({ initialConfiguration, fetchInstance }: IWavesAPICtr): IWavesAPI {
    return new WavesAPI({ initialConfiguration, fetchInstance });
}

export const MAINNET_CONFIG: IWavesConfig = constants.DEFAULT_MAINNET_CONFIG;
export const TESTNET_CONFIG: IWavesConfig = constants.DEFAULT_TESTNET_CONFIG;
