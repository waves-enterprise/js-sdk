import * as $protobuf from "protobufjs";
export namespace wavesenterprise {

    namespace grpc {

        class TransactionService extends $protobuf.rpc.Service {
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TransactionService;
            public broadcast(request: wavesenterprise.ITransaction, callback: wavesenterprise.grpc.TransactionService.BroadcastCallback): void;
            public broadcast(request: wavesenterprise.ITransaction): Promise<wavesenterprise.Transaction>;
        }

        namespace TransactionService {

            type BroadcastCallback = (error: (Error|null), response?: wavesenterprise.Transaction) => void;
        }
    }

    interface ITransaction {
        version?: (number|null);
        genesisTransaction?: (wavesenterprise.IGenesisTransaction|null);
        genesisPermitTransaction?: (wavesenterprise.IGenesisPermitTransaction|null);
        genesisRegisterNodeTransaction?: (wavesenterprise.IGenesisRegisterNodeTransaction|null);
        registerNodeTransaction?: (wavesenterprise.IRegisterNodeTransaction|null);
        createAliasTransaction?: (wavesenterprise.ICreateAliasTransaction|null);
        issueTransaction?: (wavesenterprise.IIssueTransaction|null);
        reissueTransaction?: (wavesenterprise.IReissueTransaction|null);
        burnTransaction?: (wavesenterprise.IBurnTransaction|null);
        leaseTransaction?: (wavesenterprise.ILeaseTransaction|null);
        leaseCancelTransaction?: (wavesenterprise.ILeaseCancelTransaction|null);
        sponsorFeeTransaction?: (wavesenterprise.ISponsorFeeTransaction|null);
        setAssetScriptTransaction?: (wavesenterprise.ISetAssetScriptTransaction|null);
        dataTransaction?: (wavesenterprise.IDataTransaction|null);
        transferTransaction?: (wavesenterprise.ITransferTransaction|null);
        massTransferTransaction?: (wavesenterprise.IMassTransferTransaction|null);
        permitTransaction?: (wavesenterprise.IPermitTransaction|null);
        createPolicyTransaction?: (wavesenterprise.ICreatePolicyTransaction|null);
        updatePolicyTransaction?: (wavesenterprise.IUpdatePolicyTransaction|null);
        policyDataHashTransaction?: (wavesenterprise.IPolicyDataHashTransaction|null);
        createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        executedContractTransaction?: (wavesenterprise.IExecutedContractTransaction|null);
        disableContractTransaction?: (wavesenterprise.IDisableContractTransaction|null);
        updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
        setScriptTransaction?: (wavesenterprise.ISetScriptTransaction|null);
        atomicTransaction?: (wavesenterprise.IAtomicTransaction|null);
    }

    class Transaction implements ITransaction {
        constructor(properties?: wavesenterprise.ITransaction);
        public version: number;
        public genesisTransaction?: (wavesenterprise.IGenesisTransaction|null);
        public genesisPermitTransaction?: (wavesenterprise.IGenesisPermitTransaction|null);
        public genesisRegisterNodeTransaction?: (wavesenterprise.IGenesisRegisterNodeTransaction|null);
        public registerNodeTransaction?: (wavesenterprise.IRegisterNodeTransaction|null);
        public createAliasTransaction?: (wavesenterprise.ICreateAliasTransaction|null);
        public issueTransaction?: (wavesenterprise.IIssueTransaction|null);
        public reissueTransaction?: (wavesenterprise.IReissueTransaction|null);
        public burnTransaction?: (wavesenterprise.IBurnTransaction|null);
        public leaseTransaction?: (wavesenterprise.ILeaseTransaction|null);
        public leaseCancelTransaction?: (wavesenterprise.ILeaseCancelTransaction|null);
        public sponsorFeeTransaction?: (wavesenterprise.ISponsorFeeTransaction|null);
        public setAssetScriptTransaction?: (wavesenterprise.ISetAssetScriptTransaction|null);
        public dataTransaction?: (wavesenterprise.IDataTransaction|null);
        public transferTransaction?: (wavesenterprise.ITransferTransaction|null);
        public massTransferTransaction?: (wavesenterprise.IMassTransferTransaction|null);
        public permitTransaction?: (wavesenterprise.IPermitTransaction|null);
        public createPolicyTransaction?: (wavesenterprise.ICreatePolicyTransaction|null);
        public updatePolicyTransaction?: (wavesenterprise.IUpdatePolicyTransaction|null);
        public policyDataHashTransaction?: (wavesenterprise.IPolicyDataHashTransaction|null);
        public createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        public callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        public executedContractTransaction?: (wavesenterprise.IExecutedContractTransaction|null);
        public disableContractTransaction?: (wavesenterprise.IDisableContractTransaction|null);
        public updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
        public setScriptTransaction?: (wavesenterprise.ISetScriptTransaction|null);
        public atomicTransaction?: (wavesenterprise.IAtomicTransaction|null);
        public transaction?: ("genesisTransaction"|"genesisPermitTransaction"|"genesisRegisterNodeTransaction"|"registerNodeTransaction"|"createAliasTransaction"|"issueTransaction"|"reissueTransaction"|"burnTransaction"|"leaseTransaction"|"leaseCancelTransaction"|"sponsorFeeTransaction"|"setAssetScriptTransaction"|"dataTransaction"|"transferTransaction"|"massTransferTransaction"|"permitTransaction"|"createPolicyTransaction"|"updatePolicyTransaction"|"policyDataHashTransaction"|"createContractTransaction"|"callContractTransaction"|"executedContractTransaction"|"disableContractTransaction"|"updateContractTransaction"|"setScriptTransaction"|"atomicTransaction");
        public static create(properties?: wavesenterprise.ITransaction): wavesenterprise.Transaction;
        public static encode(message: wavesenterprise.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.Transaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.Transaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.Transaction;
        public static toObject(message: wavesenterprise.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGenesisTransaction {
        id?: (Uint8Array|null);
        recipient?: (Uint8Array|null);
        amount?: (number|Long|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        signature?: (Uint8Array|null);
    }

    class GenesisTransaction implements IGenesisTransaction {
        constructor(properties?: wavesenterprise.IGenesisTransaction);
        public id: Uint8Array;
        public recipient: Uint8Array;
        public amount: (number|Long);
        public fee: (number|Long);
        public timestamp: (number|Long);
        public signature: Uint8Array;
        public static create(properties?: wavesenterprise.IGenesisTransaction): wavesenterprise.GenesisTransaction;
        public static encode(message: wavesenterprise.IGenesisTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IGenesisTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.GenesisTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.GenesisTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.GenesisTransaction;
        public static toObject(message: wavesenterprise.GenesisTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGenesisPermitTransaction {
        id?: (Uint8Array|null);
        target?: (Uint8Array|null);
        role?: (wavesenterprise.IRole|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        signature?: (Uint8Array|null);
    }

    class GenesisPermitTransaction implements IGenesisPermitTransaction {
        constructor(properties?: wavesenterprise.IGenesisPermitTransaction);
        public id: Uint8Array;
        public target: Uint8Array;
        public role?: (wavesenterprise.IRole|null);
        public fee: (number|Long);
        public timestamp: (number|Long);
        public signature: Uint8Array;
        public static create(properties?: wavesenterprise.IGenesisPermitTransaction): wavesenterprise.GenesisPermitTransaction;
        public static encode(message: wavesenterprise.IGenesisPermitTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IGenesisPermitTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.GenesisPermitTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.GenesisPermitTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.GenesisPermitTransaction;
        public static toObject(message: wavesenterprise.GenesisPermitTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRole {
        id?: (number|null);
    }

    class Role implements IRole {
        constructor(properties?: wavesenterprise.IRole);
        public id: number;
        public static create(properties?: wavesenterprise.IRole): wavesenterprise.Role;
        public static encode(message: wavesenterprise.IRole, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IRole, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.Role;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.Role;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.Role;
        public static toObject(message: wavesenterprise.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IGenesisRegisterNodeTransaction {
        id?: (Uint8Array|null);
        targetPublicKey?: (Uint8Array|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        signature?: (Uint8Array|null);
    }

    class GenesisRegisterNodeTransaction implements IGenesisRegisterNodeTransaction {
        constructor(properties?: wavesenterprise.IGenesisRegisterNodeTransaction);
        public id: Uint8Array;
        public targetPublicKey: Uint8Array;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public signature: Uint8Array;
        public static create(properties?: wavesenterprise.IGenesisRegisterNodeTransaction): wavesenterprise.GenesisRegisterNodeTransaction;
        public static encode(message: wavesenterprise.IGenesisRegisterNodeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IGenesisRegisterNodeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.GenesisRegisterNodeTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.GenesisRegisterNodeTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.GenesisRegisterNodeTransaction;
        public static toObject(message: wavesenterprise.GenesisRegisterNodeTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IRegisterNodeTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        target?: (Uint8Array|null);
        nodeName?: (google.protobuf.IStringValue|null);
        opType?: (wavesenterprise.OpType|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class RegisterNodeTransaction implements IRegisterNodeTransaction {
        constructor(properties?: wavesenterprise.IRegisterNodeTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public target: Uint8Array;
        public nodeName?: (google.protobuf.IStringValue|null);
        public opType: wavesenterprise.OpType;
        public timestamp: (number|Long);
        public fee: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IRegisterNodeTransaction): wavesenterprise.RegisterNodeTransaction;
        public static encode(message: wavesenterprise.IRegisterNodeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IRegisterNodeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.RegisterNodeTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.RegisterNodeTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.RegisterNodeTransaction;
        public static toObject(message: wavesenterprise.RegisterNodeTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    enum OpType {
        UNKNOWN_OP_TYPE = 0,
        ADD = 1,
        REMOVE = 2
    }

    interface ICreateAliasTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        alias?: (Uint8Array|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        proofs?: (Uint8Array[]|null);
    }

    class CreateAliasTransaction implements ICreateAliasTransaction {
        constructor(properties?: wavesenterprise.ICreateAliasTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public alias: Uint8Array;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ICreateAliasTransaction): wavesenterprise.CreateAliasTransaction;
        public static encode(message: wavesenterprise.ICreateAliasTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ICreateAliasTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.CreateAliasTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.CreateAliasTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.CreateAliasTransaction;
        public static toObject(message: wavesenterprise.CreateAliasTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IIssueTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        name?: (Uint8Array|null);
        description?: (Uint8Array|null);
        quantity?: (number|Long|null);
        decimals?: (number|null);
        reissuable?: (boolean|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        script?: (google.protobuf.IBytesValue|null);
        proofs?: (Uint8Array[]|null);
    }

    class IssueTransaction implements IIssueTransaction {
        constructor(properties?: wavesenterprise.IIssueTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public name: Uint8Array;
        public description: Uint8Array;
        public quantity: (number|Long);
        public decimals: number;
        public reissuable: boolean;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public script?: (google.protobuf.IBytesValue|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IIssueTransaction): wavesenterprise.IssueTransaction;
        public static encode(message: wavesenterprise.IIssueTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IIssueTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.IssueTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.IssueTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.IssueTransaction;
        public static toObject(message: wavesenterprise.IssueTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReissueTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (Uint8Array|null);
        quantity?: (number|Long|null);
        reissuable?: (boolean|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class ReissueTransaction implements IReissueTransaction {
        constructor(properties?: wavesenterprise.IReissueTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public assetId: Uint8Array;
        public quantity: (number|Long);
        public reissuable: boolean;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IReissueTransaction): wavesenterprise.ReissueTransaction;
        public static encode(message: wavesenterprise.IReissueTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IReissueTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.ReissueTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.ReissueTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.ReissueTransaction;
        public static toObject(message: wavesenterprise.ReissueTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IBurnTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (Uint8Array|null);
        amount?: (number|Long|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class BurnTransaction implements IBurnTransaction {
        constructor(properties?: wavesenterprise.IBurnTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public assetId: Uint8Array;
        public amount: (number|Long);
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IBurnTransaction): wavesenterprise.BurnTransaction;
        public static encode(message: wavesenterprise.IBurnTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IBurnTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.BurnTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.BurnTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.BurnTransaction;
        public static toObject(message: wavesenterprise.BurnTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILeaseTransaction {
        id?: (Uint8Array|null);
        assetId?: (google.protobuf.IBytesValue|null);
        senderPublicKey?: (Uint8Array|null);
        recipient?: (Uint8Array|null);
        amount?: (number|Long|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class LeaseTransaction implements ILeaseTransaction {
        constructor(properties?: wavesenterprise.ILeaseTransaction);
        public id: Uint8Array;
        public assetId?: (google.protobuf.IBytesValue|null);
        public senderPublicKey: Uint8Array;
        public recipient: Uint8Array;
        public amount: (number|Long);
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ILeaseTransaction): wavesenterprise.LeaseTransaction;
        public static encode(message: wavesenterprise.ILeaseTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ILeaseTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.LeaseTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.LeaseTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.LeaseTransaction;
        public static toObject(message: wavesenterprise.LeaseTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ILeaseCancelTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        leaseId?: (Uint8Array|null);
        proofs?: (Uint8Array[]|null);
    }

    class LeaseCancelTransaction implements ILeaseCancelTransaction {
        constructor(properties?: wavesenterprise.ILeaseCancelTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public leaseId: Uint8Array;
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ILeaseCancelTransaction): wavesenterprise.LeaseCancelTransaction;
        public static encode(message: wavesenterprise.ILeaseCancelTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ILeaseCancelTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.LeaseCancelTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.LeaseCancelTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.LeaseCancelTransaction;
        public static toObject(message: wavesenterprise.LeaseCancelTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISponsorFeeTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (Uint8Array|null);
        isEnabled?: (boolean|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class SponsorFeeTransaction implements ISponsorFeeTransaction {
        constructor(properties?: wavesenterprise.ISponsorFeeTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public assetId: Uint8Array;
        public isEnabled: boolean;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ISponsorFeeTransaction): wavesenterprise.SponsorFeeTransaction;
        public static encode(message: wavesenterprise.ISponsorFeeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ISponsorFeeTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.SponsorFeeTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.SponsorFeeTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.SponsorFeeTransaction;
        public static toObject(message: wavesenterprise.SponsorFeeTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISetAssetScriptTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (Uint8Array|null);
        script?: (google.protobuf.IBytesValue|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class SetAssetScriptTransaction implements ISetAssetScriptTransaction {
        constructor(properties?: wavesenterprise.ISetAssetScriptTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public assetId: Uint8Array;
        public script?: (google.protobuf.IBytesValue|null);
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ISetAssetScriptTransaction): wavesenterprise.SetAssetScriptTransaction;
        public static encode(message: wavesenterprise.ISetAssetScriptTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ISetAssetScriptTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.SetAssetScriptTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.SetAssetScriptTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.SetAssetScriptTransaction;
        public static toObject(message: wavesenterprise.SetAssetScriptTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDataTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        authorPublicKey?: (Uint8Array|null);
        data?: (wavesenterprise.IDataEntry[]|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        proofs?: (Uint8Array[]|null);
    }

    class DataTransaction implements IDataTransaction {
        constructor(properties?: wavesenterprise.IDataTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public authorPublicKey: Uint8Array;
        public data: wavesenterprise.IDataEntry[];
        public timestamp: (number|Long);
        public fee: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IDataTransaction): wavesenterprise.DataTransaction;
        public static encode(message: wavesenterprise.IDataTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IDataTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.DataTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.DataTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.DataTransaction;
        public static toObject(message: wavesenterprise.DataTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDataEntry {
        key?: (string|null);
        intValue?: (number|Long|null);
        boolValue?: (boolean|null);
        binaryValue?: (Uint8Array|null);
        stringValue?: (string|null);
    }

    class DataEntry implements IDataEntry {
        constructor(properties?: wavesenterprise.IDataEntry);
        public key: string;
        public intValue: (number|Long);
        public boolValue: boolean;
        public binaryValue: Uint8Array;
        public stringValue: string;
        public value?: ("intValue"|"boolValue"|"binaryValue"|"stringValue");
        public static create(properties?: wavesenterprise.IDataEntry): wavesenterprise.DataEntry;
        public static encode(message: wavesenterprise.IDataEntry, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IDataEntry, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.DataEntry;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.DataEntry;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.DataEntry;
        public static toObject(message: wavesenterprise.DataEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ITransferTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (google.protobuf.IBytesValue|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        timestamp?: (number|Long|null);
        amount?: (number|Long|null);
        fee?: (number|Long|null);
        recipient?: (Uint8Array|null);
        attachment?: (Uint8Array|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class TransferTransaction implements ITransferTransaction {
        constructor(properties?: wavesenterprise.ITransferTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public assetId?: (google.protobuf.IBytesValue|null);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public timestamp: (number|Long);
        public amount: (number|Long);
        public fee: (number|Long);
        public recipient: Uint8Array;
        public attachment: Uint8Array;
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ITransferTransaction): wavesenterprise.TransferTransaction;
        public static encode(message: wavesenterprise.ITransferTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ITransferTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.TransferTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.TransferTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.TransferTransaction;
        public static toObject(message: wavesenterprise.TransferTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAtomicBadge {
        trustedSender?: (google.protobuf.IBytesValue|null);
    }

    class AtomicBadge implements IAtomicBadge {
        constructor(properties?: wavesenterprise.IAtomicBadge);
        public trustedSender?: (google.protobuf.IBytesValue|null);
        public static create(properties?: wavesenterprise.IAtomicBadge): wavesenterprise.AtomicBadge;
        public static encode(message: wavesenterprise.IAtomicBadge, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IAtomicBadge, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.AtomicBadge;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.AtomicBadge;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.AtomicBadge;
        public static toObject(message: wavesenterprise.AtomicBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IMassTransferTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        assetId?: (google.protobuf.IBytesValue|null);
        transfers?: (wavesenterprise.ITransfer[]|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        attachment?: (Uint8Array|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        proofs?: (Uint8Array[]|null);
    }

    class MassTransferTransaction implements IMassTransferTransaction {
        constructor(properties?: wavesenterprise.IMassTransferTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public assetId?: (google.protobuf.IBytesValue|null);
        public transfers: wavesenterprise.ITransfer[];
        public timestamp: (number|Long);
        public fee: (number|Long);
        public attachment: Uint8Array;
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IMassTransferTransaction): wavesenterprise.MassTransferTransaction;
        public static encode(message: wavesenterprise.IMassTransferTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IMassTransferTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.MassTransferTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.MassTransferTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.MassTransferTransaction;
        public static toObject(message: wavesenterprise.MassTransferTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ITransfer {
        recipient?: (Uint8Array|null);
        amount?: (number|Long|null);
    }

    class Transfer implements ITransfer {
        constructor(properties?: wavesenterprise.ITransfer);
        public recipient: Uint8Array;
        public amount: (number|Long);
        public static create(properties?: wavesenterprise.ITransfer): wavesenterprise.Transfer;
        public static encode(message: wavesenterprise.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.Transfer;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.Transfer;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.Transfer;
        public static toObject(message: wavesenterprise.Transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPermitTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        target?: (Uint8Array|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        permissionOp?: (wavesenterprise.IPermissionOp|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class PermitTransaction implements IPermitTransaction {
        constructor(properties?: wavesenterprise.IPermitTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public target: Uint8Array;
        public timestamp: (number|Long);
        public fee: (number|Long);
        public permissionOp?: (wavesenterprise.IPermissionOp|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IPermitTransaction): wavesenterprise.PermitTransaction;
        public static encode(message: wavesenterprise.IPermitTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IPermitTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.PermitTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.PermitTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.PermitTransaction;
        public static toObject(message: wavesenterprise.PermitTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPermissionOp {
        opType?: (wavesenterprise.OpType|null);
        role?: (wavesenterprise.IRole|null);
        timestamp?: (number|Long|null);
        dueTimestamp?: (google.protobuf.IInt64Value|null);
    }

    class PermissionOp implements IPermissionOp {
        constructor(properties?: wavesenterprise.IPermissionOp);
        public opType: wavesenterprise.OpType;
        public role?: (wavesenterprise.IRole|null);
        public timestamp: (number|Long);
        public dueTimestamp?: (google.protobuf.IInt64Value|null);
        public static create(properties?: wavesenterprise.IPermissionOp): wavesenterprise.PermissionOp;
        public static encode(message: wavesenterprise.IPermissionOp, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IPermissionOp, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.PermissionOp;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.PermissionOp;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.PermissionOp;
        public static toObject(message: wavesenterprise.PermissionOp, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreatePolicyTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        policyName?: (string|null);
        description?: (string|null);
        recipients?: (Uint8Array[]|null);
        owners?: (Uint8Array[]|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class CreatePolicyTransaction implements ICreatePolicyTransaction {
        constructor(properties?: wavesenterprise.ICreatePolicyTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public policyName: string;
        public description: string;
        public recipients: Uint8Array[];
        public owners: Uint8Array[];
        public timestamp: (number|Long);
        public fee: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ICreatePolicyTransaction): wavesenterprise.CreatePolicyTransaction;
        public static encode(message: wavesenterprise.ICreatePolicyTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ICreatePolicyTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.CreatePolicyTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.CreatePolicyTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.CreatePolicyTransaction;
        public static toObject(message: wavesenterprise.CreatePolicyTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUpdatePolicyTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        policyId?: (Uint8Array|null);
        recipients?: (Uint8Array[]|null);
        owners?: (Uint8Array[]|null);
        opType?: (wavesenterprise.OpType|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class UpdatePolicyTransaction implements IUpdatePolicyTransaction {
        constructor(properties?: wavesenterprise.IUpdatePolicyTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public policyId: Uint8Array;
        public recipients: Uint8Array[];
        public owners: Uint8Array[];
        public opType: wavesenterprise.OpType;
        public timestamp: (number|Long);
        public fee: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IUpdatePolicyTransaction): wavesenterprise.UpdatePolicyTransaction;
        public static encode(message: wavesenterprise.IUpdatePolicyTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IUpdatePolicyTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.UpdatePolicyTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.UpdatePolicyTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.UpdatePolicyTransaction;
        public static toObject(message: wavesenterprise.UpdatePolicyTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPolicyDataHashTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        dataHash?: (Uint8Array|null);
        policyId?: (Uint8Array|null);
        timestamp?: (number|Long|null);
        fee?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class PolicyDataHashTransaction implements IPolicyDataHashTransaction {
        constructor(properties?: wavesenterprise.IPolicyDataHashTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public dataHash: Uint8Array;
        public policyId: Uint8Array;
        public timestamp: (number|Long);
        public fee: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IPolicyDataHashTransaction): wavesenterprise.PolicyDataHashTransaction;
        public static encode(message: wavesenterprise.IPolicyDataHashTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IPolicyDataHashTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.PolicyDataHashTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.PolicyDataHashTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.PolicyDataHashTransaction;
        public static toObject(message: wavesenterprise.PolicyDataHashTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreateContractTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        image?: (string|null);
        imageHash?: (string|null);
        contractName?: (string|null);
        params?: (wavesenterprise.IDataEntry[]|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class CreateContractTransaction implements ICreateContractTransaction {
        constructor(properties?: wavesenterprise.ICreateContractTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public image: string;
        public imageHash: string;
        public contractName: string;
        public params: wavesenterprise.IDataEntry[];
        public fee: (number|Long);
        public timestamp: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ICreateContractTransaction): wavesenterprise.CreateContractTransaction;
        public static encode(message: wavesenterprise.ICreateContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ICreateContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.CreateContractTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.CreateContractTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.CreateContractTransaction;
        public static toObject(message: wavesenterprise.CreateContractTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICallContractTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        contractId?: (Uint8Array|null);
        params?: (wavesenterprise.IDataEntry[]|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        contractVersion?: (number|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class CallContractTransaction implements ICallContractTransaction {
        constructor(properties?: wavesenterprise.ICallContractTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public contractId: Uint8Array;
        public params: wavesenterprise.IDataEntry[];
        public fee: (number|Long);
        public timestamp: (number|Long);
        public contractVersion: number;
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ICallContractTransaction): wavesenterprise.CallContractTransaction;
        public static encode(message: wavesenterprise.ICallContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ICallContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.CallContractTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.CallContractTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.CallContractTransaction;
        public static toObject(message: wavesenterprise.CallContractTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IExecutedContractTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        tx?: (wavesenterprise.IExecutableTransaction|null);
        results?: (wavesenterprise.IDataEntry[]|null);
        resultsHash?: (Uint8Array|null);
        validationProofs?: (wavesenterprise.IValidationProof[]|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class ExecutedContractTransaction implements IExecutedContractTransaction {
        constructor(properties?: wavesenterprise.IExecutedContractTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public tx?: (wavesenterprise.IExecutableTransaction|null);
        public results: wavesenterprise.IDataEntry[];
        public resultsHash: Uint8Array;
        public validationProofs: wavesenterprise.IValidationProof[];
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IExecutedContractTransaction): wavesenterprise.ExecutedContractTransaction;
        public static encode(message: wavesenterprise.IExecutedContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IExecutedContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.ExecutedContractTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.ExecutedContractTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.ExecutedContractTransaction;
        public static toObject(message: wavesenterprise.ExecutedContractTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IExecutableTransaction {
        version?: (number|null);
        createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
    }

    class ExecutableTransaction implements IExecutableTransaction {
        constructor(properties?: wavesenterprise.IExecutableTransaction);
        public version: number;
        public createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        public callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        public updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
        public transaction?: ("createContractTransaction"|"callContractTransaction"|"updateContractTransaction");
        public static create(properties?: wavesenterprise.IExecutableTransaction): wavesenterprise.ExecutableTransaction;
        public static encode(message: wavesenterprise.IExecutableTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IExecutableTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.ExecutableTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.ExecutableTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.ExecutableTransaction;
        public static toObject(message: wavesenterprise.ExecutableTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUpdateContractTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        contractId?: (Uint8Array|null);
        image?: (string|null);
        imageHash?: (string|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class UpdateContractTransaction implements IUpdateContractTransaction {
        constructor(properties?: wavesenterprise.IUpdateContractTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public contractId: Uint8Array;
        public image: string;
        public imageHash: string;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IUpdateContractTransaction): wavesenterprise.UpdateContractTransaction;
        public static encode(message: wavesenterprise.IUpdateContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IUpdateContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.UpdateContractTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.UpdateContractTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.UpdateContractTransaction;
        public static toObject(message: wavesenterprise.UpdateContractTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IValidationProof {
        validatorPublicKey?: (Uint8Array|null);
        signature?: (Uint8Array|null);
    }

    class ValidationProof implements IValidationProof {
        constructor(properties?: wavesenterprise.IValidationProof);
        public validatorPublicKey: Uint8Array;
        public signature: Uint8Array;
        public static create(properties?: wavesenterprise.IValidationProof): wavesenterprise.ValidationProof;
        public static encode(message: wavesenterprise.IValidationProof, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IValidationProof, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.ValidationProof;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.ValidationProof;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.ValidationProof;
        public static toObject(message: wavesenterprise.ValidationProof, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDisableContractTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        contractId?: (Uint8Array|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        feeAssetId?: (google.protobuf.IBytesValue|null);
        atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        proofs?: (Uint8Array[]|null);
    }

    class DisableContractTransaction implements IDisableContractTransaction {
        constructor(properties?: wavesenterprise.IDisableContractTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public contractId: Uint8Array;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public feeAssetId?: (google.protobuf.IBytesValue|null);
        public atomicBadge?: (wavesenterprise.IAtomicBadge|null);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IDisableContractTransaction): wavesenterprise.DisableContractTransaction;
        public static encode(message: wavesenterprise.IDisableContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IDisableContractTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.DisableContractTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.DisableContractTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.DisableContractTransaction;
        public static toObject(message: wavesenterprise.DisableContractTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ISetScriptTransaction {
        id?: (Uint8Array|null);
        chainId?: (number|null);
        senderPublicKey?: (Uint8Array|null);
        script?: (google.protobuf.IBytesValue|null);
        name?: (Uint8Array|null);
        description?: (Uint8Array|null);
        fee?: (number|Long|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class SetScriptTransaction implements ISetScriptTransaction {
        constructor(properties?: wavesenterprise.ISetScriptTransaction);
        public id: Uint8Array;
        public chainId: number;
        public senderPublicKey: Uint8Array;
        public script?: (google.protobuf.IBytesValue|null);
        public name: Uint8Array;
        public description: Uint8Array;
        public fee: (number|Long);
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.ISetScriptTransaction): wavesenterprise.SetScriptTransaction;
        public static encode(message: wavesenterprise.ISetScriptTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.ISetScriptTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.SetScriptTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.SetScriptTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.SetScriptTransaction;
        public static toObject(message: wavesenterprise.SetScriptTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAtomicTransaction {
        id?: (Uint8Array|null);
        senderPublicKey?: (Uint8Array|null);
        miner?: (google.protobuf.IBytesValue|null);
        transactions?: (wavesenterprise.IAtomicInnerTransaction[]|null);
        timestamp?: (number|Long|null);
        proofs?: (Uint8Array[]|null);
    }

    class AtomicTransaction implements IAtomicTransaction {
        constructor(properties?: wavesenterprise.IAtomicTransaction);
        public id: Uint8Array;
        public senderPublicKey: Uint8Array;
        public miner?: (google.protobuf.IBytesValue|null);
        public transactions: wavesenterprise.IAtomicInnerTransaction[];
        public timestamp: (number|Long);
        public proofs: Uint8Array[];
        public static create(properties?: wavesenterprise.IAtomicTransaction): wavesenterprise.AtomicTransaction;
        public static encode(message: wavesenterprise.IAtomicTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IAtomicTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.AtomicTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.AtomicTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.AtomicTransaction;
        public static toObject(message: wavesenterprise.AtomicTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IAtomicInnerTransaction {
        version?: (number|null);
        genesisTransaction?: (wavesenterprise.IGenesisTransaction|null);
        genesisPermitTransaction?: (wavesenterprise.IGenesisPermitTransaction|null);
        genesisRegisterNodeTransaction?: (wavesenterprise.IGenesisRegisterNodeTransaction|null);
        registerNodeTransaction?: (wavesenterprise.IRegisterNodeTransaction|null);
        createAliasTransaction?: (wavesenterprise.ICreateAliasTransaction|null);
        issueTransaction?: (wavesenterprise.IIssueTransaction|null);
        reissueTransaction?: (wavesenterprise.IReissueTransaction|null);
        burnTransaction?: (wavesenterprise.IBurnTransaction|null);
        leaseTransaction?: (wavesenterprise.ILeaseTransaction|null);
        leaseCancelTransaction?: (wavesenterprise.ILeaseCancelTransaction|null);
        sponsorFeeTransaction?: (wavesenterprise.ISponsorFeeTransaction|null);
        setAssetScriptTransaction?: (wavesenterprise.ISetAssetScriptTransaction|null);
        dataTransaction?: (wavesenterprise.IDataTransaction|null);
        transferTransaction?: (wavesenterprise.ITransferTransaction|null);
        massTransferTransaction?: (wavesenterprise.IMassTransferTransaction|null);
        permitTransaction?: (wavesenterprise.IPermitTransaction|null);
        createPolicyTransaction?: (wavesenterprise.ICreatePolicyTransaction|null);
        updatePolicyTransaction?: (wavesenterprise.IUpdatePolicyTransaction|null);
        policyDataHashTransaction?: (wavesenterprise.IPolicyDataHashTransaction|null);
        createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        executedContractTransaction?: (wavesenterprise.IExecutedContractTransaction|null);
        disableContractTransaction?: (wavesenterprise.IDisableContractTransaction|null);
        updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
        setScriptTransaction?: (wavesenterprise.ISetScriptTransaction|null);
    }

    class AtomicInnerTransaction implements IAtomicInnerTransaction {
        constructor(properties?: wavesenterprise.IAtomicInnerTransaction);
        public version: number;
        public genesisTransaction?: (wavesenterprise.IGenesisTransaction|null);
        public genesisPermitTransaction?: (wavesenterprise.IGenesisPermitTransaction|null);
        public genesisRegisterNodeTransaction?: (wavesenterprise.IGenesisRegisterNodeTransaction|null);
        public registerNodeTransaction?: (wavesenterprise.IRegisterNodeTransaction|null);
        public createAliasTransaction?: (wavesenterprise.ICreateAliasTransaction|null);
        public issueTransaction?: (wavesenterprise.IIssueTransaction|null);
        public reissueTransaction?: (wavesenterprise.IReissueTransaction|null);
        public burnTransaction?: (wavesenterprise.IBurnTransaction|null);
        public leaseTransaction?: (wavesenterprise.ILeaseTransaction|null);
        public leaseCancelTransaction?: (wavesenterprise.ILeaseCancelTransaction|null);
        public sponsorFeeTransaction?: (wavesenterprise.ISponsorFeeTransaction|null);
        public setAssetScriptTransaction?: (wavesenterprise.ISetAssetScriptTransaction|null);
        public dataTransaction?: (wavesenterprise.IDataTransaction|null);
        public transferTransaction?: (wavesenterprise.ITransferTransaction|null);
        public massTransferTransaction?: (wavesenterprise.IMassTransferTransaction|null);
        public permitTransaction?: (wavesenterprise.IPermitTransaction|null);
        public createPolicyTransaction?: (wavesenterprise.ICreatePolicyTransaction|null);
        public updatePolicyTransaction?: (wavesenterprise.IUpdatePolicyTransaction|null);
        public policyDataHashTransaction?: (wavesenterprise.IPolicyDataHashTransaction|null);
        public createContractTransaction?: (wavesenterprise.ICreateContractTransaction|null);
        public callContractTransaction?: (wavesenterprise.ICallContractTransaction|null);
        public executedContractTransaction?: (wavesenterprise.IExecutedContractTransaction|null);
        public disableContractTransaction?: (wavesenterprise.IDisableContractTransaction|null);
        public updateContractTransaction?: (wavesenterprise.IUpdateContractTransaction|null);
        public setScriptTransaction?: (wavesenterprise.ISetScriptTransaction|null);
        public transaction?: ("genesisTransaction"|"genesisPermitTransaction"|"genesisRegisterNodeTransaction"|"registerNodeTransaction"|"createAliasTransaction"|"issueTransaction"|"reissueTransaction"|"burnTransaction"|"leaseTransaction"|"leaseCancelTransaction"|"sponsorFeeTransaction"|"setAssetScriptTransaction"|"dataTransaction"|"transferTransaction"|"massTransferTransaction"|"permitTransaction"|"createPolicyTransaction"|"updatePolicyTransaction"|"policyDataHashTransaction"|"createContractTransaction"|"callContractTransaction"|"executedContractTransaction"|"disableContractTransaction"|"updateContractTransaction"|"setScriptTransaction");
        public static create(properties?: wavesenterprise.IAtomicInnerTransaction): wavesenterprise.AtomicInnerTransaction;
        public static encode(message: wavesenterprise.IAtomicInnerTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: wavesenterprise.IAtomicInnerTransaction, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wavesenterprise.AtomicInnerTransaction;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wavesenterprise.AtomicInnerTransaction;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): wavesenterprise.AtomicInnerTransaction;
        public static toObject(message: wavesenterprise.AtomicInnerTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export namespace google {

    namespace protobuf {

        interface IDoubleValue {
            value?: (number|null);
        }

        class DoubleValue implements IDoubleValue {
            constructor(properties?: google.protobuf.IDoubleValue);
            public value: number;
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFloatValue {
            value?: (number|null);
        }

        class FloatValue implements IFloatValue {
            constructor(properties?: google.protobuf.IFloatValue);
            public value: number;
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInt64Value {
            value?: (number|Long|null);
        }

        class Int64Value implements IInt64Value {
            constructor(properties?: google.protobuf.IInt64Value);
            public value: (number|Long);
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUInt64Value {
            value?: (number|Long|null);
        }

        class UInt64Value implements IUInt64Value {
            constructor(properties?: google.protobuf.IUInt64Value);
            public value: (number|Long);
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInt32Value {
            value?: (number|null);
        }

        class Int32Value implements IInt32Value {
            constructor(properties?: google.protobuf.IInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUInt32Value {
            value?: (number|null);
        }

        class UInt32Value implements IUInt32Value {
            constructor(properties?: google.protobuf.IUInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBoolValue {
            value?: (boolean|null);
        }

        class BoolValue implements IBoolValue {
            constructor(properties?: google.protobuf.IBoolValue);
            public value: boolean;
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IStringValue {
            value?: (string|null);
        }

        class StringValue implements IStringValue {
            constructor(properties?: google.protobuf.IStringValue);
            public value: string;
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBytesValue {
            value?: (Uint8Array|null);
        }

        class BytesValue implements IBytesValue {
            constructor(properties?: google.protobuf.IBytesValue);
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
