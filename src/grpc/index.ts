import { TransactionsType } from '../api/transactions/transactionsV2';
import { WeSdk } from '../index';
import { IKeyPair } from '../../interfaces';
import isNode from '../utils/isNode';

// Node
import { DataEntry as DataEntryNode } from './compiled-node/data_entry_pb';
import { Transaction as TransactionNode } from './compiled-node/managed/transaction_pb';
import { CallContractTransaction as CallContractTransactionNode } from './compiled-node/managed/call_contract_transaction_pb';
import { CreateContractTransaction as CreateContractTransactionNode } from './compiled-node/managed/create_contract_transaction_pb';

// Web
import { DataEntry as DataEntryWeb } from './compiled-web/data_entry_pb';
import { Transaction as TransactionWeb } from './compiled-web/managed/transaction_pb';
import { CallContractTransaction as CallContractTransactionWeb } from './compiled-web/managed/call_contract_transaction_pb';
import { CreateContractTransaction as CreateContractTransactionWeb } from './compiled-web/managed/create_contract_transaction_pb';

const DataEntry = isNode ? DataEntryNode : DataEntryWeb;
const Transaction = isNode ? TransactionNode : TransactionWeb;
const CallContractTransaction = isNode ? CallContractTransactionNode : CallContractTransactionWeb;
const CreateContractTransaction = isNode ? CreateContractTransactionNode : CreateContractTransactionWeb;


type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type DockerCallTx = ReturnType<TransactionsType["CallContract"]["V4"]>;
type DockerCreateTx = ReturnType<TransactionsType["CreateContract"]["V3"]>;

export const mapDataEntry = (param: {
  type: 'string' | 'binary' | 'integer' | 'boolean',
  value: any,
  key: string
}): any => {
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
) : Promise<TransactionNode | TransactionWeb> {
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

  txGrpc.setCallContractTransaction(callTx as any)

  return txGrpc

}


export async function createContract(
  inputTx: DockerCreateTx,
  api: WeSdk,
  keyPair: IKeyPair
) : Promise<TransactionNode | TransactionWeb> {
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
  txGrpc.setCreateContractTransaction(createTx as any)

  return txGrpc
}

export function sendGrpcTx(api: WeSdk, tx: TransactionNode | TransactionWeb) {
  return new Promise(async (resolve, reject) => {
    // @ts-ignore
    api.grpcService.broadcast(tx, (err, res) => {
      if (err) {
        reject(err.metadata)
      }
      resolve(res)
    })
  })
}
