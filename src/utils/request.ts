import { TransactionFactory, TransactionType } from '@wavesenterprise/transactions-factory'
import { IKeyPair } from '../interfaces'
import * as create from 'parse-json-bignumber'
import { BROADCAST_PATH, SIGN_PATH } from "../constants"
import WavesRequestError from '../errors/WavesRequestError'
import config from '../config'
import BigNumber from '../libs/bignumber'
import { TransactionTypeWithDecorator } from '../api/transactions/transactionsV2'


export const SAFE_JSON_PARSE = create({
  BigNumber
}).parse

export const SAFE_JSON_STRINGIFY = create({
  BigNumber
}).stringify

export type TTransactionRequest = (data: object, keyPair: IKeyPair) => Promise<any>

export type IFetchWrapper<T> = (path: string, options?: object) => Promise<T>

export interface IFetchWrapperConfig {
  product: PRODUCTS
  version: VERSIONS
  fetchInstance: typeof fetch
  pipe?: (value: Response) => Response | PromiseLike<Response>
}

export const enum PRODUCTS { NODE, MATCHER }

export const enum VERSIONS { V1 }

export const POST_TEMPLATE = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const key = (product, version) => {
  return `${product}/${version}`
}

const hostResolvers: { [key: string]: () => string } = {
  [key(PRODUCTS.NODE, VERSIONS.V1)]: () => config.getNodeAddress(),
  [key(PRODUCTS.MATCHER, VERSIONS.V1)]: () => config.getMatcherAddress()
}

export function normalizeHost(host): string {
  return host.replace(/\/+$/, '')
}

export function normalizePath(path): string {
  return `/${path}`.replace(/\/+/g, '/').replace(/\/$/, '')
}

export function processJSON(res) {
  if (res.ok) {
    return res.text().then(SAFE_JSON_PARSE)
  } else {
    return res.json().then(Promise.reject.bind(Promise))
  }
}

function handleError(url, data) {
  throw new WavesRequestError(url, data)
}


export function createFetchWrapper(conf: IFetchWrapperConfig): IFetchWrapper<any> {
  const { product, version, pipe, fetchInstance } = conf

  const resolveHost = hostResolvers[key(product, version)]

  return (path: string, options?: object): Promise<any> => {

    const url = resolveHost() + normalizePath(path)

    const request = fetchInstance(url, options)

    if (pipe) {
      return request.then(pipe).catch((data) => handleError(url, data))
    } else {
      return request.catch((data) => handleError(url, data))
    }

  }

}

export const txRequestV2 = async (
  tx: TransactionTypeWithDecorator,
  keyPair: IKeyPair
) => {
  const signedTx = await tx.getSignedTx(keyPair)
  const sendData = {
    ...POST_TEMPLATE,
    rejectUnauthorized: false,
    credentials: 'include',
    body: SAFE_JSON_STRINGIFY(signedTx, null, null)
  }

  return sendData
}


export const txRequest = async (
  factory: TransactionFactory<any>,
  data: object,
  keyPair: IKeyPair,
  withProofs: boolean = false,
  preRemapAsync?: (data: object) => Promise<object>,
  postRemap?: (data: object) => object
) => {
  let preData: any = { ...data, senderPublicKey: keyPair.publicKey }
  if (preRemapAsync) {
    preData = await preRemapAsync(preData)
  }

  const tx = factory(preData)
  const signature = await tx.getSignature(keyPair.privateKey)

  let postData: any = {
    ...preData,
    ...(withProofs ? { proofs: [signature] } : { signature }),
    version: tx.version,
    type: tx.tx_type
  }
  if (postRemap) {
    postData = postRemap(postData)
  }

  const sendData = {
    ...POST_TEMPLATE,
    rejectUnauthorized: false,
    credentials: 'include',
    body: SAFE_JSON_STRINGIFY(postData, null, null)
  }

  return sendData
}


export const createTxRequestWrapper = (fetchInstance: IFetchWrapper<any>) => {
  return async (
    preRemapAsync: (data: object) => Promise<object>,
    postRemap: (data: object) => object,
    postSignRemap: (data: object) => object,
    nodeAddress: string,
    data: any,
    extraData: {
      sender: string;
      password: string;
    }
  ): Promise<any> => {
    nodeAddress = nodeAddress.replace(/\/+$/, '')
    let newData = data
    if (preRemapAsync) {
      newData = await preRemapAsync(newData)
    }
    if (postRemap) {
      newData = postRemap(newData)
    }

    const body: any = {
      ...newData,
      ...extraData,
      type: data.type,
      version: data.version
    }
    if (body.assetId === '') {
      body.assetId = null
    }
    if (body.feeAssetId === '') {
      body.feeAssetId = null
    }

    let tx = await fetchInstance(nodeAddress + SIGN_PATH, {
      ...POST_TEMPLATE,
      credentials: 'include',
      body: SAFE_JSON_STRINGIFY(body, null, null)
    }).then(processJSON)

    if (postSignRemap) {
      tx = postSignRemap(tx)
    }

    return fetchInstance(
      nodeAddress + BROADCAST_PATH,
      {
        ...POST_TEMPLATE,
        credentials: 'include',
        body: SAFE_JSON_STRINGIFY(tx, null, null)
      }).then(processJSON)
  }
}
