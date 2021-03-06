import * as jspb from 'google-protobuf'

import * as managed_create_contract_transaction_pb from './managed/create_contract_transaction_pb';
import * as managed_call_contract_transaction_pb from './managed/call_contract_transaction_pb';
import * as managed_update_contract_transaction_pb from './managed/update_contract_transaction_pb';


export class ExecutableTransaction extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): ExecutableTransaction;

  getCreateContractTransaction(): managed_create_contract_transaction_pb.CreateContractTransaction | undefined;
  setCreateContractTransaction(value?: managed_create_contract_transaction_pb.CreateContractTransaction): ExecutableTransaction;
  hasCreateContractTransaction(): boolean;
  clearCreateContractTransaction(): ExecutableTransaction;

  getCallContractTransaction(): managed_call_contract_transaction_pb.CallContractTransaction | undefined;
  setCallContractTransaction(value?: managed_call_contract_transaction_pb.CallContractTransaction): ExecutableTransaction;
  hasCallContractTransaction(): boolean;
  clearCallContractTransaction(): ExecutableTransaction;

  getUpdateContractTransaction(): managed_update_contract_transaction_pb.UpdateContractTransaction | undefined;
  setUpdateContractTransaction(value?: managed_update_contract_transaction_pb.UpdateContractTransaction): ExecutableTransaction;
  hasUpdateContractTransaction(): boolean;
  clearUpdateContractTransaction(): ExecutableTransaction;

  getTransactionCase(): ExecutableTransaction.TransactionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutableTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutableTransaction): ExecutableTransaction.AsObject;
  static serializeBinaryToWriter(message: ExecutableTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutableTransaction;
  static deserializeBinaryFromReader(message: ExecutableTransaction, reader: jspb.BinaryReader): ExecutableTransaction;
}

export namespace ExecutableTransaction {
  export type AsObject = {
    version: number,
    createContractTransaction?: managed_create_contract_transaction_pb.CreateContractTransaction.AsObject,
    callContractTransaction?: managed_call_contract_transaction_pb.CallContractTransaction.AsObject,
    updateContractTransaction?: managed_update_contract_transaction_pb.UpdateContractTransaction.AsObject,
  }

  export enum TransactionCase { 
    TRANSACTION_NOT_SET = 0,
    CREATE_CONTRACT_TRANSACTION = 1000,
    CALL_CONTRACT_TRANSACTION = 1001,
    UPDATE_CONTRACT_TRANSACTION = 1002,
  }
}

