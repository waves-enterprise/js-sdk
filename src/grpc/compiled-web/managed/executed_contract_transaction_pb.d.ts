import * as jspb from 'google-protobuf'

import * as executable_contract_transaction_pb from '../executable_contract_transaction_pb'
import * as data_entry_pb from '../data_entry_pb'
import * as validation_proof_pb from '../validation_proof_pb'


export class ExecutedContractTransaction extends jspb.Message {
  getId(): Uint8Array | string
  getId_asU8(): Uint8Array
  getId_asB64(): string
  setId(value: Uint8Array | string): ExecutedContractTransaction

  getSenderPublicKey(): Uint8Array | string
  getSenderPublicKey_asU8(): Uint8Array
  getSenderPublicKey_asB64(): string
  setSenderPublicKey(value: Uint8Array | string): ExecutedContractTransaction

  getTx(): executable_contract_transaction_pb.ExecutableTransaction | undefined
  setTx(value?: executable_contract_transaction_pb.ExecutableTransaction): ExecutedContractTransaction
  hasTx(): boolean
  clearTx(): ExecutedContractTransaction

  getResultsList(): data_entry_pb.DataEntry[]
  setResultsList(value: data_entry_pb.DataEntry[]): ExecutedContractTransaction
  clearResultsList(): ExecutedContractTransaction
  addResults(value?: data_entry_pb.DataEntry, index?: number): data_entry_pb.DataEntry

  getResultsHash(): Uint8Array | string
  getResultsHash_asU8(): Uint8Array
  getResultsHash_asB64(): string
  setResultsHash(value: Uint8Array | string): ExecutedContractTransaction

  getValidationProofsList(): validation_proof_pb.ValidationProof[]
  setValidationProofsList(value: validation_proof_pb.ValidationProof[]): ExecutedContractTransaction
  clearValidationProofsList(): ExecutedContractTransaction
  addValidationProofs(value?: validation_proof_pb.ValidationProof, index?: number): validation_proof_pb.ValidationProof

  getTimestamp(): number
  setTimestamp(value: number): ExecutedContractTransaction

  getProofsList(): (Uint8Array | string)[]
  setProofsList(value: (Uint8Array | string)[]): ExecutedContractTransaction
  clearProofsList(): ExecutedContractTransaction
  addProofs(value: Uint8Array | string, index?: number): ExecutedContractTransaction

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ExecutedContractTransaction.AsObject
  static toObject(includeInstance: boolean, msg: ExecutedContractTransaction): ExecutedContractTransaction.AsObject
  static serializeBinaryToWriter(message: ExecutedContractTransaction, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ExecutedContractTransaction
  static deserializeBinaryFromReader(message: ExecutedContractTransaction, reader: jspb.BinaryReader): ExecutedContractTransaction
}

export namespace ExecutedContractTransaction {
  export type AsObject = {
    id: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    tx?: executable_contract_transaction_pb.ExecutableTransaction.AsObject,
    resultsList: data_entry_pb.DataEntry.AsObject[],
    resultsHash: Uint8Array | string,
    validationProofsList: validation_proof_pb.ValidationProof.AsObject[],
    timestamp: number,
    proofsList: (Uint8Array | string)[],
  }
}

