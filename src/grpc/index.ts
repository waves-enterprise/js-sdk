import { DataEntry } from './compiled/data_entry_pb';
import { WeSdk } from '../index';
import { IKeyPair } from '../../interfaces';
import { Transaction } from './compiled/managed/transaction_pb';
import { CallContractTransaction } from './compiled/managed/call_contract_transaction_pb';
import { CreateContractTransaction } from './compiled/managed/create_contract_transaction_pb';
import { TransactionsType } from '../api/transactions/transactionsV2';

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type DockerCallTx = ReturnType<TransactionsType["CallContract"]["V4"]>;
type DockerCreateTx = ReturnType<TransactionsType["CreateContract"]["V3"]>;

export const mapDataEntry = (param: {
  type: 'string' | 'binary' | 'integer' | 'boolean',
  value: any,
  key: string
}): DataEntry => {
  const dataEntry = new DataEntry()
  dataEntry.setKey(param.key)
  switch (param.type) {
    case 'binary':
      if (!param.value.startsWith('base64')) {
        throw new Error(`binary format must be like 'base64:{base64String}'`)
      }
      const value = param.value.slice('base64:'.length)
      dataEntry.setBinaryValue(Uint8Array.from(new Buffer(value, 'base64')));
      break;
    case 'boolean':
      dataEntry.setBoolValue(!!param.value)
      break;
    case 'integer':
      dataEntry.setIntValue(parseInt(param.value))
      break;
    case 'string':
      dataEntry.setStringValue(param.value + '')
      break;
    default:
      throw new Error(`Wrong docker param type: ${param.type}, must be: 'string' | 'binary' | 'integer' | 'boolean'`)
  }
  return dataEntry
};


// @ts-ignore
export async function callContract(
  inputTx: DockerCallTx,
  api: WeSdk,
  keyPair: IKeyPair
) : Promise<Transaction> {
  const tx = await inputTx.getSignedTx(keyPair);

  const txGrpc = new Transaction()
  const callTx = new CallContractTransaction()

  callTx.setSenderPublicKey(api.tools.base58.decode(tx.senderPublicKey))
  callTx.setContractId(api.tools.base58.decode(tx.contractId))
  callTx.setContractVersion(tx.contractVersion)
  callTx.setFee(tx.fee as number)
  callTx.setTimestamp(tx.timestamp as number)
  callTx.addProofs(api.tools.base58.decode(tx.proofs[0]))
  txGrpc.setVersion(tx.version)
  if (tx.params.length) {
    callTx.setParamsList(tx.params.map(mapDataEntry))
  }

  txGrpc.setCallContractTransaction(callTx)

  return txGrpc

}


export async function createContract(
  inputTx: DockerCreateTx,
  api: WeSdk,
  keyPair: IKeyPair
) : Promise<Transaction> {
  const tx = await inputTx.getSignedTx(keyPair);

  const txGrpc = new Transaction()
  const createTx = new CreateContractTransaction()

  createTx.setSenderPublicKey(api.tools.base58.decode(tx.senderPublicKey))
  createTx.setContractName(tx.contractName)
  createTx.setImage(tx.image)
  createTx.setFee(tx.fee as number)
  createTx.setImageHash(tx.imageHash)
  createTx.setTimestamp(tx.timestamp as number)
  createTx.addProofs(api.tools.base58.decode(tx.proofs[0]))
  if (tx.params.length) {
    createTx.setParamsList(tx.params.map(mapDataEntry))
  }

  txGrpc.setVersion(tx.version)
  txGrpc.setCreateContractTransaction(createTx)

  return txGrpc
}

export function sendGrpcTx(api: WeSdk, tx: Transaction) {
  return new Promise(async (resolve, reject) => {
    api.grpcService.broadcast(tx, (err, res) => {
      if (err) {
        reject(err.metadata)
      }
      resolve(res)
    })
  })
}
