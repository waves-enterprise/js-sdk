/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.wavesenterprise = (function() {

    /**
     * Namespace wavesenterprise.
     * @exports wavesenterprise
     * @namespace
     */
    var wavesenterprise = {};

    wavesenterprise.grpc = (function() {

        /**
         * Namespace grpc.
         * @memberof wavesenterprise
         * @namespace
         */
        var grpc = {};

        grpc.TransactionService = (function() {

            /**
             * Constructs a new TransactionService service.
             * @memberof wavesenterprise.grpc
             * @classdesc Represents a TransactionService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function TransactionService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (TransactionService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TransactionService;

            /**
             * Creates new TransactionService service using the specified rpc implementation.
             * @function create
             * @memberof wavesenterprise.grpc.TransactionService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {TransactionService} RPC service. Useful where requests and/or responses are streamed.
             */
            TransactionService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link wavesenterprise.grpc.TransactionService#broadcast}.
             * @memberof wavesenterprise.grpc.TransactionService
             * @typedef BroadcastCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {wavesenterprise.Transaction} [response] Transaction
             */

            /**
             * Calls Broadcast.
             * @function broadcast
             * @memberof wavesenterprise.grpc.TransactionService
             * @instance
             * @param {wavesenterprise.ITransaction} request Transaction message or plain object
             * @param {wavesenterprise.grpc.TransactionService.BroadcastCallback} callback Node-style callback called with the error, if any, and Transaction
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(TransactionService.prototype.broadcast = function broadcast(request, callback) {
                return this.rpcCall(broadcast, $root.wavesenterprise.Transaction, $root.wavesenterprise.Transaction, request, callback);
            }, "name", { value: "Broadcast" });

            /**
             * Calls Broadcast.
             * @function broadcast
             * @memberof wavesenterprise.grpc.TransactionService
             * @instance
             * @param {wavesenterprise.ITransaction} request Transaction message or plain object
             * @returns {Promise<wavesenterprise.Transaction>} Promise
             * @variation 2
             */

            return TransactionService;
        })();

        return grpc;
    })();

    wavesenterprise.Transaction = (function() {

        /**
         * Properties of a Transaction.
         * @memberof wavesenterprise
         * @interface ITransaction
         * @property {number|null} [version] Transaction version
         * @property {wavesenterprise.IGenesisTransaction|null} [genesisTransaction] Transaction genesisTransaction
         * @property {wavesenterprise.IGenesisPermitTransaction|null} [genesisPermitTransaction] Transaction genesisPermitTransaction
         * @property {wavesenterprise.IGenesisRegisterNodeTransaction|null} [genesisRegisterNodeTransaction] Transaction genesisRegisterNodeTransaction
         * @property {wavesenterprise.IRegisterNodeTransaction|null} [registerNodeTransaction] Transaction registerNodeTransaction
         * @property {wavesenterprise.ICreateAliasTransaction|null} [createAliasTransaction] Transaction createAliasTransaction
         * @property {wavesenterprise.IIssueTransaction|null} [issueTransaction] Transaction issueTransaction
         * @property {wavesenterprise.IReissueTransaction|null} [reissueTransaction] Transaction reissueTransaction
         * @property {wavesenterprise.IBurnTransaction|null} [burnTransaction] Transaction burnTransaction
         * @property {wavesenterprise.ILeaseTransaction|null} [leaseTransaction] Transaction leaseTransaction
         * @property {wavesenterprise.ILeaseCancelTransaction|null} [leaseCancelTransaction] Transaction leaseCancelTransaction
         * @property {wavesenterprise.ISponsorFeeTransaction|null} [sponsorFeeTransaction] Transaction sponsorFeeTransaction
         * @property {wavesenterprise.ISetAssetScriptTransaction|null} [setAssetScriptTransaction] Transaction setAssetScriptTransaction
         * @property {wavesenterprise.IDataTransaction|null} [dataTransaction] Transaction dataTransaction
         * @property {wavesenterprise.ITransferTransaction|null} [transferTransaction] Transaction transferTransaction
         * @property {wavesenterprise.IMassTransferTransaction|null} [massTransferTransaction] Transaction massTransferTransaction
         * @property {wavesenterprise.IPermitTransaction|null} [permitTransaction] Transaction permitTransaction
         * @property {wavesenterprise.ICreatePolicyTransaction|null} [createPolicyTransaction] Transaction createPolicyTransaction
         * @property {wavesenterprise.IUpdatePolicyTransaction|null} [updatePolicyTransaction] Transaction updatePolicyTransaction
         * @property {wavesenterprise.IPolicyDataHashTransaction|null} [policyDataHashTransaction] Transaction policyDataHashTransaction
         * @property {wavesenterprise.ICreateContractTransaction|null} [createContractTransaction] Transaction createContractTransaction
         * @property {wavesenterprise.ICallContractTransaction|null} [callContractTransaction] Transaction callContractTransaction
         * @property {wavesenterprise.IExecutedContractTransaction|null} [executedContractTransaction] Transaction executedContractTransaction
         * @property {wavesenterprise.IDisableContractTransaction|null} [disableContractTransaction] Transaction disableContractTransaction
         * @property {wavesenterprise.IUpdateContractTransaction|null} [updateContractTransaction] Transaction updateContractTransaction
         * @property {wavesenterprise.ISetScriptTransaction|null} [setScriptTransaction] Transaction setScriptTransaction
         * @property {wavesenterprise.IAtomicTransaction|null} [atomicTransaction] Transaction atomicTransaction
         */

        /**
         * Constructs a new Transaction.
         * @memberof wavesenterprise
         * @classdesc Represents a Transaction.
         * @implements ITransaction
         * @constructor
         * @param {wavesenterprise.ITransaction=} [properties] Properties to set
         */
        function Transaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transaction version.
         * @member {number} version
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.version = 0;

        /**
         * Transaction genesisTransaction.
         * @member {wavesenterprise.IGenesisTransaction|null|undefined} genesisTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.genesisTransaction = null;

        /**
         * Transaction genesisPermitTransaction.
         * @member {wavesenterprise.IGenesisPermitTransaction|null|undefined} genesisPermitTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.genesisPermitTransaction = null;

        /**
         * Transaction genesisRegisterNodeTransaction.
         * @member {wavesenterprise.IGenesisRegisterNodeTransaction|null|undefined} genesisRegisterNodeTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.genesisRegisterNodeTransaction = null;

        /**
         * Transaction registerNodeTransaction.
         * @member {wavesenterprise.IRegisterNodeTransaction|null|undefined} registerNodeTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.registerNodeTransaction = null;

        /**
         * Transaction createAliasTransaction.
         * @member {wavesenterprise.ICreateAliasTransaction|null|undefined} createAliasTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.createAliasTransaction = null;

        /**
         * Transaction issueTransaction.
         * @member {wavesenterprise.IIssueTransaction|null|undefined} issueTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.issueTransaction = null;

        /**
         * Transaction reissueTransaction.
         * @member {wavesenterprise.IReissueTransaction|null|undefined} reissueTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.reissueTransaction = null;

        /**
         * Transaction burnTransaction.
         * @member {wavesenterprise.IBurnTransaction|null|undefined} burnTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.burnTransaction = null;

        /**
         * Transaction leaseTransaction.
         * @member {wavesenterprise.ILeaseTransaction|null|undefined} leaseTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.leaseTransaction = null;

        /**
         * Transaction leaseCancelTransaction.
         * @member {wavesenterprise.ILeaseCancelTransaction|null|undefined} leaseCancelTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.leaseCancelTransaction = null;

        /**
         * Transaction sponsorFeeTransaction.
         * @member {wavesenterprise.ISponsorFeeTransaction|null|undefined} sponsorFeeTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.sponsorFeeTransaction = null;

        /**
         * Transaction setAssetScriptTransaction.
         * @member {wavesenterprise.ISetAssetScriptTransaction|null|undefined} setAssetScriptTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.setAssetScriptTransaction = null;

        /**
         * Transaction dataTransaction.
         * @member {wavesenterprise.IDataTransaction|null|undefined} dataTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.dataTransaction = null;

        /**
         * Transaction transferTransaction.
         * @member {wavesenterprise.ITransferTransaction|null|undefined} transferTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.transferTransaction = null;

        /**
         * Transaction massTransferTransaction.
         * @member {wavesenterprise.IMassTransferTransaction|null|undefined} massTransferTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.massTransferTransaction = null;

        /**
         * Transaction permitTransaction.
         * @member {wavesenterprise.IPermitTransaction|null|undefined} permitTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.permitTransaction = null;

        /**
         * Transaction createPolicyTransaction.
         * @member {wavesenterprise.ICreatePolicyTransaction|null|undefined} createPolicyTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.createPolicyTransaction = null;

        /**
         * Transaction updatePolicyTransaction.
         * @member {wavesenterprise.IUpdatePolicyTransaction|null|undefined} updatePolicyTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.updatePolicyTransaction = null;

        /**
         * Transaction policyDataHashTransaction.
         * @member {wavesenterprise.IPolicyDataHashTransaction|null|undefined} policyDataHashTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.policyDataHashTransaction = null;

        /**
         * Transaction createContractTransaction.
         * @member {wavesenterprise.ICreateContractTransaction|null|undefined} createContractTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.createContractTransaction = null;

        /**
         * Transaction callContractTransaction.
         * @member {wavesenterprise.ICallContractTransaction|null|undefined} callContractTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.callContractTransaction = null;

        /**
         * Transaction executedContractTransaction.
         * @member {wavesenterprise.IExecutedContractTransaction|null|undefined} executedContractTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.executedContractTransaction = null;

        /**
         * Transaction disableContractTransaction.
         * @member {wavesenterprise.IDisableContractTransaction|null|undefined} disableContractTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.disableContractTransaction = null;

        /**
         * Transaction updateContractTransaction.
         * @member {wavesenterprise.IUpdateContractTransaction|null|undefined} updateContractTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.updateContractTransaction = null;

        /**
         * Transaction setScriptTransaction.
         * @member {wavesenterprise.ISetScriptTransaction|null|undefined} setScriptTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.setScriptTransaction = null;

        /**
         * Transaction atomicTransaction.
         * @member {wavesenterprise.IAtomicTransaction|null|undefined} atomicTransaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Transaction.prototype.atomicTransaction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Transaction transaction.
         * @member {"genesisTransaction"|"genesisPermitTransaction"|"genesisRegisterNodeTransaction"|"registerNodeTransaction"|"createAliasTransaction"|"issueTransaction"|"reissueTransaction"|"burnTransaction"|"leaseTransaction"|"leaseCancelTransaction"|"sponsorFeeTransaction"|"setAssetScriptTransaction"|"dataTransaction"|"transferTransaction"|"massTransferTransaction"|"permitTransaction"|"createPolicyTransaction"|"updatePolicyTransaction"|"policyDataHashTransaction"|"createContractTransaction"|"callContractTransaction"|"executedContractTransaction"|"disableContractTransaction"|"updateContractTransaction"|"setScriptTransaction"|"atomicTransaction"|undefined} transaction
         * @memberof wavesenterprise.Transaction
         * @instance
         */
        Object.defineProperty(Transaction.prototype, "transaction", {
            get: $util.oneOfGetter($oneOfFields = ["genesisTransaction", "genesisPermitTransaction", "genesisRegisterNodeTransaction", "registerNodeTransaction", "createAliasTransaction", "issueTransaction", "reissueTransaction", "burnTransaction", "leaseTransaction", "leaseCancelTransaction", "sponsorFeeTransaction", "setAssetScriptTransaction", "dataTransaction", "transferTransaction", "massTransferTransaction", "permitTransaction", "createPolicyTransaction", "updatePolicyTransaction", "policyDataHashTransaction", "createContractTransaction", "callContractTransaction", "executedContractTransaction", "disableContractTransaction", "updateContractTransaction", "setScriptTransaction", "atomicTransaction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Transaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {wavesenterprise.ITransaction=} [properties] Properties to set
         * @returns {wavesenterprise.Transaction} Transaction instance
         */
        Transaction.create = function create(properties) {
            return new Transaction(properties);
        };

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link wavesenterprise.Transaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {wavesenterprise.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.genesisTransaction != null && Object.hasOwnProperty.call(message, "genesisTransaction"))
                $root.wavesenterprise.GenesisTransaction.encode(message.genesisTransaction, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.genesisPermitTransaction != null && Object.hasOwnProperty.call(message, "genesisPermitTransaction"))
                $root.wavesenterprise.GenesisPermitTransaction.encode(message.genesisPermitTransaction, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.genesisRegisterNodeTransaction != null && Object.hasOwnProperty.call(message, "genesisRegisterNodeTransaction"))
                $root.wavesenterprise.GenesisRegisterNodeTransaction.encode(message.genesisRegisterNodeTransaction, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
            if (message.registerNodeTransaction != null && Object.hasOwnProperty.call(message, "registerNodeTransaction"))
                $root.wavesenterprise.RegisterNodeTransaction.encode(message.registerNodeTransaction, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
            if (message.createAliasTransaction != null && Object.hasOwnProperty.call(message, "createAliasTransaction"))
                $root.wavesenterprise.CreateAliasTransaction.encode(message.createAliasTransaction, writer.uint32(/* id 1004, wireType 2 =*/8034).fork()).ldelim();
            if (message.issueTransaction != null && Object.hasOwnProperty.call(message, "issueTransaction"))
                $root.wavesenterprise.IssueTransaction.encode(message.issueTransaction, writer.uint32(/* id 1005, wireType 2 =*/8042).fork()).ldelim();
            if (message.reissueTransaction != null && Object.hasOwnProperty.call(message, "reissueTransaction"))
                $root.wavesenterprise.ReissueTransaction.encode(message.reissueTransaction, writer.uint32(/* id 1006, wireType 2 =*/8050).fork()).ldelim();
            if (message.burnTransaction != null && Object.hasOwnProperty.call(message, "burnTransaction"))
                $root.wavesenterprise.BurnTransaction.encode(message.burnTransaction, writer.uint32(/* id 1007, wireType 2 =*/8058).fork()).ldelim();
            if (message.leaseTransaction != null && Object.hasOwnProperty.call(message, "leaseTransaction"))
                $root.wavesenterprise.LeaseTransaction.encode(message.leaseTransaction, writer.uint32(/* id 1008, wireType 2 =*/8066).fork()).ldelim();
            if (message.leaseCancelTransaction != null && Object.hasOwnProperty.call(message, "leaseCancelTransaction"))
                $root.wavesenterprise.LeaseCancelTransaction.encode(message.leaseCancelTransaction, writer.uint32(/* id 1009, wireType 2 =*/8074).fork()).ldelim();
            if (message.sponsorFeeTransaction != null && Object.hasOwnProperty.call(message, "sponsorFeeTransaction"))
                $root.wavesenterprise.SponsorFeeTransaction.encode(message.sponsorFeeTransaction, writer.uint32(/* id 1010, wireType 2 =*/8082).fork()).ldelim();
            if (message.setAssetScriptTransaction != null && Object.hasOwnProperty.call(message, "setAssetScriptTransaction"))
                $root.wavesenterprise.SetAssetScriptTransaction.encode(message.setAssetScriptTransaction, writer.uint32(/* id 1011, wireType 2 =*/8090).fork()).ldelim();
            if (message.dataTransaction != null && Object.hasOwnProperty.call(message, "dataTransaction"))
                $root.wavesenterprise.DataTransaction.encode(message.dataTransaction, writer.uint32(/* id 1012, wireType 2 =*/8098).fork()).ldelim();
            if (message.transferTransaction != null && Object.hasOwnProperty.call(message, "transferTransaction"))
                $root.wavesenterprise.TransferTransaction.encode(message.transferTransaction, writer.uint32(/* id 1013, wireType 2 =*/8106).fork()).ldelim();
            if (message.massTransferTransaction != null && Object.hasOwnProperty.call(message, "massTransferTransaction"))
                $root.wavesenterprise.MassTransferTransaction.encode(message.massTransferTransaction, writer.uint32(/* id 1014, wireType 2 =*/8114).fork()).ldelim();
            if (message.permitTransaction != null && Object.hasOwnProperty.call(message, "permitTransaction"))
                $root.wavesenterprise.PermitTransaction.encode(message.permitTransaction, writer.uint32(/* id 1015, wireType 2 =*/8122).fork()).ldelim();
            if (message.createPolicyTransaction != null && Object.hasOwnProperty.call(message, "createPolicyTransaction"))
                $root.wavesenterprise.CreatePolicyTransaction.encode(message.createPolicyTransaction, writer.uint32(/* id 1016, wireType 2 =*/8130).fork()).ldelim();
            if (message.updatePolicyTransaction != null && Object.hasOwnProperty.call(message, "updatePolicyTransaction"))
                $root.wavesenterprise.UpdatePolicyTransaction.encode(message.updatePolicyTransaction, writer.uint32(/* id 1017, wireType 2 =*/8138).fork()).ldelim();
            if (message.policyDataHashTransaction != null && Object.hasOwnProperty.call(message, "policyDataHashTransaction"))
                $root.wavesenterprise.PolicyDataHashTransaction.encode(message.policyDataHashTransaction, writer.uint32(/* id 1018, wireType 2 =*/8146).fork()).ldelim();
            if (message.createContractTransaction != null && Object.hasOwnProperty.call(message, "createContractTransaction"))
                $root.wavesenterprise.CreateContractTransaction.encode(message.createContractTransaction, writer.uint32(/* id 1019, wireType 2 =*/8154).fork()).ldelim();
            if (message.callContractTransaction != null && Object.hasOwnProperty.call(message, "callContractTransaction"))
                $root.wavesenterprise.CallContractTransaction.encode(message.callContractTransaction, writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
            if (message.executedContractTransaction != null && Object.hasOwnProperty.call(message, "executedContractTransaction"))
                $root.wavesenterprise.ExecutedContractTransaction.encode(message.executedContractTransaction, writer.uint32(/* id 1021, wireType 2 =*/8170).fork()).ldelim();
            if (message.disableContractTransaction != null && Object.hasOwnProperty.call(message, "disableContractTransaction"))
                $root.wavesenterprise.DisableContractTransaction.encode(message.disableContractTransaction, writer.uint32(/* id 1022, wireType 2 =*/8178).fork()).ldelim();
            if (message.updateContractTransaction != null && Object.hasOwnProperty.call(message, "updateContractTransaction"))
                $root.wavesenterprise.UpdateContractTransaction.encode(message.updateContractTransaction, writer.uint32(/* id 1023, wireType 2 =*/8186).fork()).ldelim();
            if (message.setScriptTransaction != null && Object.hasOwnProperty.call(message, "setScriptTransaction"))
                $root.wavesenterprise.SetScriptTransaction.encode(message.setScriptTransaction, writer.uint32(/* id 1024, wireType 2 =*/8194).fork()).ldelim();
            if (message.atomicTransaction != null && Object.hasOwnProperty.call(message, "atomicTransaction"))
                $root.wavesenterprise.AtomicTransaction.encode(message.atomicTransaction, writer.uint32(/* id 1025, wireType 2 =*/8202).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link wavesenterprise.Transaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {wavesenterprise.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.Transaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 1000:
                    message.genesisTransaction = $root.wavesenterprise.GenesisTransaction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.issueTransaction = $root.wavesenterprise.IssueTransaction.decode(reader, reader.uint32());
                    break;
                case 1006:
                    message.reissueTransaction = $root.wavesenterprise.ReissueTransaction.decode(reader, reader.uint32());
                    break;
                case 1007:
                    message.burnTransaction = $root.wavesenterprise.BurnTransaction.decode(reader, reader.uint32());
                    break;
                case 1008:
                    message.leaseTransaction = $root.wavesenterprise.LeaseTransaction.decode(reader, reader.uint32());
                    break;
                case 1009:
                    message.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.decode(reader, reader.uint32());
                    break;
                case 1010:
                    message.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.decode(reader, reader.uint32());
                    break;
                case 1011:
                    message.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.decode(reader, reader.uint32());
                    break;
                case 1012:
                    message.dataTransaction = $root.wavesenterprise.DataTransaction.decode(reader, reader.uint32());
                    break;
                case 1013:
                    message.transferTransaction = $root.wavesenterprise.TransferTransaction.decode(reader, reader.uint32());
                    break;
                case 1014:
                    message.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.decode(reader, reader.uint32());
                    break;
                case 1015:
                    message.permitTransaction = $root.wavesenterprise.PermitTransaction.decode(reader, reader.uint32());
                    break;
                case 1016:
                    message.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.decode(reader, reader.uint32());
                    break;
                case 1017:
                    message.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.decode(reader, reader.uint32());
                    break;
                case 1018:
                    message.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.decode(reader, reader.uint32());
                    break;
                case 1019:
                    message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1020:
                    message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1021:
                    message.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1022:
                    message.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1023:
                    message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1024:
                    message.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.decode(reader, reader.uint32());
                    break;
                case 1025:
                    message.atomicTransaction = $root.wavesenterprise.AtomicTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transaction message.
         * @function verify
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.genesisTransaction != null && message.hasOwnProperty("genesisTransaction")) {
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisTransaction.verify(message.genesisTransaction);
                    if (error)
                        return "genesisTransaction." + error;
                }
            }
            if (message.genesisPermitTransaction != null && message.hasOwnProperty("genesisPermitTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisPermitTransaction.verify(message.genesisPermitTransaction);
                    if (error)
                        return "genesisPermitTransaction." + error;
                }
            }
            if (message.genesisRegisterNodeTransaction != null && message.hasOwnProperty("genesisRegisterNodeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisRegisterNodeTransaction.verify(message.genesisRegisterNodeTransaction);
                    if (error)
                        return "genesisRegisterNodeTransaction." + error;
                }
            }
            if (message.registerNodeTransaction != null && message.hasOwnProperty("registerNodeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.RegisterNodeTransaction.verify(message.registerNodeTransaction);
                    if (error)
                        return "registerNodeTransaction." + error;
                }
            }
            if (message.createAliasTransaction != null && message.hasOwnProperty("createAliasTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreateAliasTransaction.verify(message.createAliasTransaction);
                    if (error)
                        return "createAliasTransaction." + error;
                }
            }
            if (message.issueTransaction != null && message.hasOwnProperty("issueTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.IssueTransaction.verify(message.issueTransaction);
                    if (error)
                        return "issueTransaction." + error;
                }
            }
            if (message.reissueTransaction != null && message.hasOwnProperty("reissueTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.ReissueTransaction.verify(message.reissueTransaction);
                    if (error)
                        return "reissueTransaction." + error;
                }
            }
            if (message.burnTransaction != null && message.hasOwnProperty("burnTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.BurnTransaction.verify(message.burnTransaction);
                    if (error)
                        return "burnTransaction." + error;
                }
            }
            if (message.leaseTransaction != null && message.hasOwnProperty("leaseTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.LeaseTransaction.verify(message.leaseTransaction);
                    if (error)
                        return "leaseTransaction." + error;
                }
            }
            if (message.leaseCancelTransaction != null && message.hasOwnProperty("leaseCancelTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.LeaseCancelTransaction.verify(message.leaseCancelTransaction);
                    if (error)
                        return "leaseCancelTransaction." + error;
                }
            }
            if (message.sponsorFeeTransaction != null && message.hasOwnProperty("sponsorFeeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SponsorFeeTransaction.verify(message.sponsorFeeTransaction);
                    if (error)
                        return "sponsorFeeTransaction." + error;
                }
            }
            if (message.setAssetScriptTransaction != null && message.hasOwnProperty("setAssetScriptTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SetAssetScriptTransaction.verify(message.setAssetScriptTransaction);
                    if (error)
                        return "setAssetScriptTransaction." + error;
                }
            }
            if (message.dataTransaction != null && message.hasOwnProperty("dataTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.DataTransaction.verify(message.dataTransaction);
                    if (error)
                        return "dataTransaction." + error;
                }
            }
            if (message.transferTransaction != null && message.hasOwnProperty("transferTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.TransferTransaction.verify(message.transferTransaction);
                    if (error)
                        return "transferTransaction." + error;
                }
            }
            if (message.massTransferTransaction != null && message.hasOwnProperty("massTransferTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.MassTransferTransaction.verify(message.massTransferTransaction);
                    if (error)
                        return "massTransferTransaction." + error;
                }
            }
            if (message.permitTransaction != null && message.hasOwnProperty("permitTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.PermitTransaction.verify(message.permitTransaction);
                    if (error)
                        return "permitTransaction." + error;
                }
            }
            if (message.createPolicyTransaction != null && message.hasOwnProperty("createPolicyTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreatePolicyTransaction.verify(message.createPolicyTransaction);
                    if (error)
                        return "createPolicyTransaction." + error;
                }
            }
            if (message.updatePolicyTransaction != null && message.hasOwnProperty("updatePolicyTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.UpdatePolicyTransaction.verify(message.updatePolicyTransaction);
                    if (error)
                        return "updatePolicyTransaction." + error;
                }
            }
            if (message.policyDataHashTransaction != null && message.hasOwnProperty("policyDataHashTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.PolicyDataHashTransaction.verify(message.policyDataHashTransaction);
                    if (error)
                        return "policyDataHashTransaction." + error;
                }
            }
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreateContractTransaction.verify(message.createContractTransaction);
                    if (error)
                        return "createContractTransaction." + error;
                }
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CallContractTransaction.verify(message.callContractTransaction);
                    if (error)
                        return "callContractTransaction." + error;
                }
            }
            if (message.executedContractTransaction != null && message.hasOwnProperty("executedContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.ExecutedContractTransaction.verify(message.executedContractTransaction);
                    if (error)
                        return "executedContractTransaction." + error;
                }
            }
            if (message.disableContractTransaction != null && message.hasOwnProperty("disableContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.DisableContractTransaction.verify(message.disableContractTransaction);
                    if (error)
                        return "disableContractTransaction." + error;
                }
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.UpdateContractTransaction.verify(message.updateContractTransaction);
                    if (error)
                        return "updateContractTransaction." + error;
                }
            }
            if (message.setScriptTransaction != null && message.hasOwnProperty("setScriptTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SetScriptTransaction.verify(message.setScriptTransaction);
                    if (error)
                        return "setScriptTransaction." + error;
                }
            }
            if (message.atomicTransaction != null && message.hasOwnProperty("atomicTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.AtomicTransaction.verify(message.atomicTransaction);
                    if (error)
                        return "atomicTransaction." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.Transaction} Transaction
         */
        Transaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.Transaction)
                return object;
            var message = new $root.wavesenterprise.Transaction();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.genesisTransaction != null) {
                if (typeof object.genesisTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.genesisTransaction: object expected");
                message.genesisTransaction = $root.wavesenterprise.GenesisTransaction.fromObject(object.genesisTransaction);
            }
            if (object.genesisPermitTransaction != null) {
                if (typeof object.genesisPermitTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.genesisPermitTransaction: object expected");
                message.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.fromObject(object.genesisPermitTransaction);
            }
            if (object.genesisRegisterNodeTransaction != null) {
                if (typeof object.genesisRegisterNodeTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.genesisRegisterNodeTransaction: object expected");
                message.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.fromObject(object.genesisRegisterNodeTransaction);
            }
            if (object.registerNodeTransaction != null) {
                if (typeof object.registerNodeTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.registerNodeTransaction: object expected");
                message.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.fromObject(object.registerNodeTransaction);
            }
            if (object.createAliasTransaction != null) {
                if (typeof object.createAliasTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.createAliasTransaction: object expected");
                message.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.fromObject(object.createAliasTransaction);
            }
            if (object.issueTransaction != null) {
                if (typeof object.issueTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.issueTransaction: object expected");
                message.issueTransaction = $root.wavesenterprise.IssueTransaction.fromObject(object.issueTransaction);
            }
            if (object.reissueTransaction != null) {
                if (typeof object.reissueTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.reissueTransaction: object expected");
                message.reissueTransaction = $root.wavesenterprise.ReissueTransaction.fromObject(object.reissueTransaction);
            }
            if (object.burnTransaction != null) {
                if (typeof object.burnTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.burnTransaction: object expected");
                message.burnTransaction = $root.wavesenterprise.BurnTransaction.fromObject(object.burnTransaction);
            }
            if (object.leaseTransaction != null) {
                if (typeof object.leaseTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.leaseTransaction: object expected");
                message.leaseTransaction = $root.wavesenterprise.LeaseTransaction.fromObject(object.leaseTransaction);
            }
            if (object.leaseCancelTransaction != null) {
                if (typeof object.leaseCancelTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.leaseCancelTransaction: object expected");
                message.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.fromObject(object.leaseCancelTransaction);
            }
            if (object.sponsorFeeTransaction != null) {
                if (typeof object.sponsorFeeTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.sponsorFeeTransaction: object expected");
                message.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.fromObject(object.sponsorFeeTransaction);
            }
            if (object.setAssetScriptTransaction != null) {
                if (typeof object.setAssetScriptTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.setAssetScriptTransaction: object expected");
                message.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.fromObject(object.setAssetScriptTransaction);
            }
            if (object.dataTransaction != null) {
                if (typeof object.dataTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.dataTransaction: object expected");
                message.dataTransaction = $root.wavesenterprise.DataTransaction.fromObject(object.dataTransaction);
            }
            if (object.transferTransaction != null) {
                if (typeof object.transferTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.transferTransaction: object expected");
                message.transferTransaction = $root.wavesenterprise.TransferTransaction.fromObject(object.transferTransaction);
            }
            if (object.massTransferTransaction != null) {
                if (typeof object.massTransferTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.massTransferTransaction: object expected");
                message.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.fromObject(object.massTransferTransaction);
            }
            if (object.permitTransaction != null) {
                if (typeof object.permitTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.permitTransaction: object expected");
                message.permitTransaction = $root.wavesenterprise.PermitTransaction.fromObject(object.permitTransaction);
            }
            if (object.createPolicyTransaction != null) {
                if (typeof object.createPolicyTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.createPolicyTransaction: object expected");
                message.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.fromObject(object.createPolicyTransaction);
            }
            if (object.updatePolicyTransaction != null) {
                if (typeof object.updatePolicyTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.updatePolicyTransaction: object expected");
                message.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.fromObject(object.updatePolicyTransaction);
            }
            if (object.policyDataHashTransaction != null) {
                if (typeof object.policyDataHashTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.policyDataHashTransaction: object expected");
                message.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.fromObject(object.policyDataHashTransaction);
            }
            if (object.createContractTransaction != null) {
                if (typeof object.createContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.createContractTransaction: object expected");
                message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.fromObject(object.createContractTransaction);
            }
            if (object.callContractTransaction != null) {
                if (typeof object.callContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.callContractTransaction: object expected");
                message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.fromObject(object.callContractTransaction);
            }
            if (object.executedContractTransaction != null) {
                if (typeof object.executedContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.executedContractTransaction: object expected");
                message.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.fromObject(object.executedContractTransaction);
            }
            if (object.disableContractTransaction != null) {
                if (typeof object.disableContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.disableContractTransaction: object expected");
                message.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.fromObject(object.disableContractTransaction);
            }
            if (object.updateContractTransaction != null) {
                if (typeof object.updateContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.updateContractTransaction: object expected");
                message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.fromObject(object.updateContractTransaction);
            }
            if (object.setScriptTransaction != null) {
                if (typeof object.setScriptTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.setScriptTransaction: object expected");
                message.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.fromObject(object.setScriptTransaction);
            }
            if (object.atomicTransaction != null) {
                if (typeof object.atomicTransaction !== "object")
                    throw TypeError(".wavesenterprise.Transaction.atomicTransaction: object expected");
                message.atomicTransaction = $root.wavesenterprise.AtomicTransaction.fromObject(object.atomicTransaction);
            }
            return message;
        };

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.Transaction
         * @static
         * @param {wavesenterprise.Transaction} message Transaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = 0;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.genesisTransaction != null && message.hasOwnProperty("genesisTransaction")) {
                object.genesisTransaction = $root.wavesenterprise.GenesisTransaction.toObject(message.genesisTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisTransaction";
            }
            if (message.genesisPermitTransaction != null && message.hasOwnProperty("genesisPermitTransaction")) {
                object.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.toObject(message.genesisPermitTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisPermitTransaction";
            }
            if (message.genesisRegisterNodeTransaction != null && message.hasOwnProperty("genesisRegisterNodeTransaction")) {
                object.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.toObject(message.genesisRegisterNodeTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisRegisterNodeTransaction";
            }
            if (message.registerNodeTransaction != null && message.hasOwnProperty("registerNodeTransaction")) {
                object.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.toObject(message.registerNodeTransaction, options);
                if (options.oneofs)
                    object.transaction = "registerNodeTransaction";
            }
            if (message.createAliasTransaction != null && message.hasOwnProperty("createAliasTransaction")) {
                object.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.toObject(message.createAliasTransaction, options);
                if (options.oneofs)
                    object.transaction = "createAliasTransaction";
            }
            if (message.issueTransaction != null && message.hasOwnProperty("issueTransaction")) {
                object.issueTransaction = $root.wavesenterprise.IssueTransaction.toObject(message.issueTransaction, options);
                if (options.oneofs)
                    object.transaction = "issueTransaction";
            }
            if (message.reissueTransaction != null && message.hasOwnProperty("reissueTransaction")) {
                object.reissueTransaction = $root.wavesenterprise.ReissueTransaction.toObject(message.reissueTransaction, options);
                if (options.oneofs)
                    object.transaction = "reissueTransaction";
            }
            if (message.burnTransaction != null && message.hasOwnProperty("burnTransaction")) {
                object.burnTransaction = $root.wavesenterprise.BurnTransaction.toObject(message.burnTransaction, options);
                if (options.oneofs)
                    object.transaction = "burnTransaction";
            }
            if (message.leaseTransaction != null && message.hasOwnProperty("leaseTransaction")) {
                object.leaseTransaction = $root.wavesenterprise.LeaseTransaction.toObject(message.leaseTransaction, options);
                if (options.oneofs)
                    object.transaction = "leaseTransaction";
            }
            if (message.leaseCancelTransaction != null && message.hasOwnProperty("leaseCancelTransaction")) {
                object.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.toObject(message.leaseCancelTransaction, options);
                if (options.oneofs)
                    object.transaction = "leaseCancelTransaction";
            }
            if (message.sponsorFeeTransaction != null && message.hasOwnProperty("sponsorFeeTransaction")) {
                object.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.toObject(message.sponsorFeeTransaction, options);
                if (options.oneofs)
                    object.transaction = "sponsorFeeTransaction";
            }
            if (message.setAssetScriptTransaction != null && message.hasOwnProperty("setAssetScriptTransaction")) {
                object.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.toObject(message.setAssetScriptTransaction, options);
                if (options.oneofs)
                    object.transaction = "setAssetScriptTransaction";
            }
            if (message.dataTransaction != null && message.hasOwnProperty("dataTransaction")) {
                object.dataTransaction = $root.wavesenterprise.DataTransaction.toObject(message.dataTransaction, options);
                if (options.oneofs)
                    object.transaction = "dataTransaction";
            }
            if (message.transferTransaction != null && message.hasOwnProperty("transferTransaction")) {
                object.transferTransaction = $root.wavesenterprise.TransferTransaction.toObject(message.transferTransaction, options);
                if (options.oneofs)
                    object.transaction = "transferTransaction";
            }
            if (message.massTransferTransaction != null && message.hasOwnProperty("massTransferTransaction")) {
                object.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.toObject(message.massTransferTransaction, options);
                if (options.oneofs)
                    object.transaction = "massTransferTransaction";
            }
            if (message.permitTransaction != null && message.hasOwnProperty("permitTransaction")) {
                object.permitTransaction = $root.wavesenterprise.PermitTransaction.toObject(message.permitTransaction, options);
                if (options.oneofs)
                    object.transaction = "permitTransaction";
            }
            if (message.createPolicyTransaction != null && message.hasOwnProperty("createPolicyTransaction")) {
                object.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.toObject(message.createPolicyTransaction, options);
                if (options.oneofs)
                    object.transaction = "createPolicyTransaction";
            }
            if (message.updatePolicyTransaction != null && message.hasOwnProperty("updatePolicyTransaction")) {
                object.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.toObject(message.updatePolicyTransaction, options);
                if (options.oneofs)
                    object.transaction = "updatePolicyTransaction";
            }
            if (message.policyDataHashTransaction != null && message.hasOwnProperty("policyDataHashTransaction")) {
                object.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.toObject(message.policyDataHashTransaction, options);
                if (options.oneofs)
                    object.transaction = "policyDataHashTransaction";
            }
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                object.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.toObject(message.createContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "createContractTransaction";
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                object.callContractTransaction = $root.wavesenterprise.CallContractTransaction.toObject(message.callContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "callContractTransaction";
            }
            if (message.executedContractTransaction != null && message.hasOwnProperty("executedContractTransaction")) {
                object.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.toObject(message.executedContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "executedContractTransaction";
            }
            if (message.disableContractTransaction != null && message.hasOwnProperty("disableContractTransaction")) {
                object.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.toObject(message.disableContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "disableContractTransaction";
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                object.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.toObject(message.updateContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "updateContractTransaction";
            }
            if (message.setScriptTransaction != null && message.hasOwnProperty("setScriptTransaction")) {
                object.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.toObject(message.setScriptTransaction, options);
                if (options.oneofs)
                    object.transaction = "setScriptTransaction";
            }
            if (message.atomicTransaction != null && message.hasOwnProperty("atomicTransaction")) {
                object.atomicTransaction = $root.wavesenterprise.AtomicTransaction.toObject(message.atomicTransaction, options);
                if (options.oneofs)
                    object.transaction = "atomicTransaction";
            }
            return object;
        };

        /**
         * Converts this Transaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.Transaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Transaction;
    })();

    wavesenterprise.GenesisTransaction = (function() {

        /**
         * Properties of a GenesisTransaction.
         * @memberof wavesenterprise
         * @interface IGenesisTransaction
         * @property {Uint8Array|null} [id] GenesisTransaction id
         * @property {Uint8Array|null} [recipient] GenesisTransaction recipient
         * @property {number|Long|null} [amount] GenesisTransaction amount
         * @property {number|Long|null} [fee] GenesisTransaction fee
         * @property {number|Long|null} [timestamp] GenesisTransaction timestamp
         * @property {Uint8Array|null} [signature] GenesisTransaction signature
         */

        /**
         * Constructs a new GenesisTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a GenesisTransaction.
         * @implements IGenesisTransaction
         * @constructor
         * @param {wavesenterprise.IGenesisTransaction=} [properties] Properties to set
         */
        function GenesisTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenesisTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.id = $util.newBuffer([]);

        /**
         * GenesisTransaction recipient.
         * @member {Uint8Array} recipient
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.recipient = $util.newBuffer([]);

        /**
         * GenesisTransaction amount.
         * @member {number|Long} amount
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisTransaction signature.
         * @member {Uint8Array} signature
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         */
        GenesisTransaction.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new GenesisTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {wavesenterprise.IGenesisTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.GenesisTransaction} GenesisTransaction instance
         */
        GenesisTransaction.create = function create(properties) {
            return new GenesisTransaction(properties);
        };

        /**
         * Encodes the specified GenesisTransaction message. Does not implicitly {@link wavesenterprise.GenesisTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {wavesenterprise.IGenesisTransaction} message GenesisTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.recipient);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified GenesisTransaction message, length delimited. Does not implicitly {@link wavesenterprise.GenesisTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {wavesenterprise.IGenesisTransaction} message GenesisTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenesisTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.GenesisTransaction} GenesisTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.GenesisTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.recipient = reader.bytes();
                    break;
                case 3:
                    message.amount = reader.int64();
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GenesisTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.GenesisTransaction} GenesisTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenesisTransaction message.
         * @function verify
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenesisTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a GenesisTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.GenesisTransaction} GenesisTransaction
         */
        GenesisTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.GenesisTransaction)
                return object;
            var message = new $root.wavesenterprise.GenesisTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a GenesisTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.GenesisTransaction
         * @static
         * @param {wavesenterprise.GenesisTransaction} message GenesisTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenesisTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this GenesisTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.GenesisTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenesisTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenesisTransaction;
    })();

    wavesenterprise.GenesisPermitTransaction = (function() {

        /**
         * Properties of a GenesisPermitTransaction.
         * @memberof wavesenterprise
         * @interface IGenesisPermitTransaction
         * @property {Uint8Array|null} [id] GenesisPermitTransaction id
         * @property {Uint8Array|null} [target] GenesisPermitTransaction target
         * @property {wavesenterprise.IRole|null} [role] GenesisPermitTransaction role
         * @property {number|Long|null} [fee] GenesisPermitTransaction fee
         * @property {number|Long|null} [timestamp] GenesisPermitTransaction timestamp
         * @property {Uint8Array|null} [signature] GenesisPermitTransaction signature
         */

        /**
         * Constructs a new GenesisPermitTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a GenesisPermitTransaction.
         * @implements IGenesisPermitTransaction
         * @constructor
         * @param {wavesenterprise.IGenesisPermitTransaction=} [properties] Properties to set
         */
        function GenesisPermitTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenesisPermitTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.id = $util.newBuffer([]);

        /**
         * GenesisPermitTransaction target.
         * @member {Uint8Array} target
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.target = $util.newBuffer([]);

        /**
         * GenesisPermitTransaction role.
         * @member {wavesenterprise.IRole|null|undefined} role
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.role = null;

        /**
         * GenesisPermitTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisPermitTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisPermitTransaction signature.
         * @member {Uint8Array} signature
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         */
        GenesisPermitTransaction.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new GenesisPermitTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {wavesenterprise.IGenesisPermitTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.GenesisPermitTransaction} GenesisPermitTransaction instance
         */
        GenesisPermitTransaction.create = function create(properties) {
            return new GenesisPermitTransaction(properties);
        };

        /**
         * Encodes the specified GenesisPermitTransaction message. Does not implicitly {@link wavesenterprise.GenesisPermitTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {wavesenterprise.IGenesisPermitTransaction} message GenesisPermitTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisPermitTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.target);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                $root.wavesenterprise.Role.encode(message.role, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified GenesisPermitTransaction message, length delimited. Does not implicitly {@link wavesenterprise.GenesisPermitTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {wavesenterprise.IGenesisPermitTransaction} message GenesisPermitTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisPermitTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenesisPermitTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.GenesisPermitTransaction} GenesisPermitTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisPermitTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.GenesisPermitTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.target = reader.bytes();
                    break;
                case 3:
                    message.role = $root.wavesenterprise.Role.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GenesisPermitTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.GenesisPermitTransaction} GenesisPermitTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisPermitTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenesisPermitTransaction message.
         * @function verify
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenesisPermitTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!(message.target && typeof message.target.length === "number" || $util.isString(message.target)))
                    return "target: buffer expected";
            if (message.role != null && message.hasOwnProperty("role")) {
                var error = $root.wavesenterprise.Role.verify(message.role);
                if (error)
                    return "role." + error;
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a GenesisPermitTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.GenesisPermitTransaction} GenesisPermitTransaction
         */
        GenesisPermitTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.GenesisPermitTransaction)
                return object;
            var message = new $root.wavesenterprise.GenesisPermitTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.target != null)
                if (typeof object.target === "string")
                    $util.base64.decode(object.target, message.target = $util.newBuffer($util.base64.length(object.target)), 0);
                else if (object.target.length)
                    message.target = object.target;
            if (object.role != null) {
                if (typeof object.role !== "object")
                    throw TypeError(".wavesenterprise.GenesisPermitTransaction.role: object expected");
                message.role = $root.wavesenterprise.Role.fromObject(object.role);
            }
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a GenesisPermitTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @static
         * @param {wavesenterprise.GenesisPermitTransaction} message GenesisPermitTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenesisPermitTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.target = "";
                else {
                    object.target = [];
                    if (options.bytes !== Array)
                        object.target = $util.newBuffer(object.target);
                }
                object.role = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = options.bytes === String ? $util.base64.encode(message.target, 0, message.target.length) : options.bytes === Array ? Array.prototype.slice.call(message.target) : message.target;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = $root.wavesenterprise.Role.toObject(message.role, options);
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this GenesisPermitTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.GenesisPermitTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenesisPermitTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenesisPermitTransaction;
    })();

    wavesenterprise.Role = (function() {

        /**
         * Properties of a Role.
         * @memberof wavesenterprise
         * @interface IRole
         * @property {number|null} [id] Role id
         */

        /**
         * Constructs a new Role.
         * @memberof wavesenterprise
         * @classdesc Represents a Role.
         * @implements IRole
         * @constructor
         * @param {wavesenterprise.IRole=} [properties] Properties to set
         */
        function Role(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Role id.
         * @member {number} id
         * @memberof wavesenterprise.Role
         * @instance
         */
        Role.prototype.id = 0;

        /**
         * Creates a new Role instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.Role
         * @static
         * @param {wavesenterprise.IRole=} [properties] Properties to set
         * @returns {wavesenterprise.Role} Role instance
         */
        Role.create = function create(properties) {
            return new Role(properties);
        };

        /**
         * Encodes the specified Role message. Does not implicitly {@link wavesenterprise.Role.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.Role
         * @static
         * @param {wavesenterprise.IRole} message Role message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Role.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Role message, length delimited. Does not implicitly {@link wavesenterprise.Role.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.Role
         * @static
         * @param {wavesenterprise.IRole} message Role message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Role.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.Role
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.Role} Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Role.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.Role();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.Role
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.Role} Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Role.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Role message.
         * @function verify
         * @memberof wavesenterprise.Role
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Role.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.Role
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.Role} Role
         */
        Role.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.Role)
                return object;
            var message = new $root.wavesenterprise.Role();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.Role
         * @static
         * @param {wavesenterprise.Role} message Role
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Role.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Role to JSON.
         * @function toJSON
         * @memberof wavesenterprise.Role
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Role.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Role;
    })();

    wavesenterprise.GenesisRegisterNodeTransaction = (function() {

        /**
         * Properties of a GenesisRegisterNodeTransaction.
         * @memberof wavesenterprise
         * @interface IGenesisRegisterNodeTransaction
         * @property {Uint8Array|null} [id] GenesisRegisterNodeTransaction id
         * @property {Uint8Array|null} [targetPublicKey] GenesisRegisterNodeTransaction targetPublicKey
         * @property {number|Long|null} [fee] GenesisRegisterNodeTransaction fee
         * @property {number|Long|null} [timestamp] GenesisRegisterNodeTransaction timestamp
         * @property {Uint8Array|null} [signature] GenesisRegisterNodeTransaction signature
         */

        /**
         * Constructs a new GenesisRegisterNodeTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a GenesisRegisterNodeTransaction.
         * @implements IGenesisRegisterNodeTransaction
         * @constructor
         * @param {wavesenterprise.IGenesisRegisterNodeTransaction=} [properties] Properties to set
         */
        function GenesisRegisterNodeTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GenesisRegisterNodeTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         */
        GenesisRegisterNodeTransaction.prototype.id = $util.newBuffer([]);

        /**
         * GenesisRegisterNodeTransaction targetPublicKey.
         * @member {Uint8Array} targetPublicKey
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         */
        GenesisRegisterNodeTransaction.prototype.targetPublicKey = $util.newBuffer([]);

        /**
         * GenesisRegisterNodeTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         */
        GenesisRegisterNodeTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisRegisterNodeTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         */
        GenesisRegisterNodeTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GenesisRegisterNodeTransaction signature.
         * @member {Uint8Array} signature
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         */
        GenesisRegisterNodeTransaction.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new GenesisRegisterNodeTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IGenesisRegisterNodeTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.GenesisRegisterNodeTransaction} GenesisRegisterNodeTransaction instance
         */
        GenesisRegisterNodeTransaction.create = function create(properties) {
            return new GenesisRegisterNodeTransaction(properties);
        };

        /**
         * Encodes the specified GenesisRegisterNodeTransaction message. Does not implicitly {@link wavesenterprise.GenesisRegisterNodeTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IGenesisRegisterNodeTransaction} message GenesisRegisterNodeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisRegisterNodeTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.targetPublicKey != null && Object.hasOwnProperty.call(message, "targetPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.targetPublicKey);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified GenesisRegisterNodeTransaction message, length delimited. Does not implicitly {@link wavesenterprise.GenesisRegisterNodeTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IGenesisRegisterNodeTransaction} message GenesisRegisterNodeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GenesisRegisterNodeTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GenesisRegisterNodeTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.GenesisRegisterNodeTransaction} GenesisRegisterNodeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisRegisterNodeTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.GenesisRegisterNodeTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.targetPublicKey = reader.bytes();
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GenesisRegisterNodeTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.GenesisRegisterNodeTransaction} GenesisRegisterNodeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GenesisRegisterNodeTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GenesisRegisterNodeTransaction message.
         * @function verify
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GenesisRegisterNodeTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.targetPublicKey != null && message.hasOwnProperty("targetPublicKey"))
                if (!(message.targetPublicKey && typeof message.targetPublicKey.length === "number" || $util.isString(message.targetPublicKey)))
                    return "targetPublicKey: buffer expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a GenesisRegisterNodeTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.GenesisRegisterNodeTransaction} GenesisRegisterNodeTransaction
         */
        GenesisRegisterNodeTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.GenesisRegisterNodeTransaction)
                return object;
            var message = new $root.wavesenterprise.GenesisRegisterNodeTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.targetPublicKey != null)
                if (typeof object.targetPublicKey === "string")
                    $util.base64.decode(object.targetPublicKey, message.targetPublicKey = $util.newBuffer($util.base64.length(object.targetPublicKey)), 0);
                else if (object.targetPublicKey.length)
                    message.targetPublicKey = object.targetPublicKey;
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a GenesisRegisterNodeTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @static
         * @param {wavesenterprise.GenesisRegisterNodeTransaction} message GenesisRegisterNodeTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GenesisRegisterNodeTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.targetPublicKey = "";
                else {
                    object.targetPublicKey = [];
                    if (options.bytes !== Array)
                        object.targetPublicKey = $util.newBuffer(object.targetPublicKey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.targetPublicKey != null && message.hasOwnProperty("targetPublicKey"))
                object.targetPublicKey = options.bytes === String ? $util.base64.encode(message.targetPublicKey, 0, message.targetPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.targetPublicKey) : message.targetPublicKey;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this GenesisRegisterNodeTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.GenesisRegisterNodeTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GenesisRegisterNodeTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GenesisRegisterNodeTransaction;
    })();

    wavesenterprise.RegisterNodeTransaction = (function() {

        /**
         * Properties of a RegisterNodeTransaction.
         * @memberof wavesenterprise
         * @interface IRegisterNodeTransaction
         * @property {Uint8Array|null} [id] RegisterNodeTransaction id
         * @property {Uint8Array|null} [senderPublicKey] RegisterNodeTransaction senderPublicKey
         * @property {Uint8Array|null} [target] RegisterNodeTransaction target
         * @property {google.protobuf.IStringValue|null} [nodeName] RegisterNodeTransaction nodeName
         * @property {wavesenterprise.OpType|null} [opType] RegisterNodeTransaction opType
         * @property {number|Long|null} [timestamp] RegisterNodeTransaction timestamp
         * @property {number|Long|null} [fee] RegisterNodeTransaction fee
         * @property {Array.<Uint8Array>|null} [proofs] RegisterNodeTransaction proofs
         */

        /**
         * Constructs a new RegisterNodeTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a RegisterNodeTransaction.
         * @implements IRegisterNodeTransaction
         * @constructor
         * @param {wavesenterprise.IRegisterNodeTransaction=} [properties] Properties to set
         */
        function RegisterNodeTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterNodeTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.id = $util.newBuffer([]);

        /**
         * RegisterNodeTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * RegisterNodeTransaction target.
         * @member {Uint8Array} target
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.target = $util.newBuffer([]);

        /**
         * RegisterNodeTransaction nodeName.
         * @member {google.protobuf.IStringValue|null|undefined} nodeName
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.nodeName = null;

        /**
         * RegisterNodeTransaction opType.
         * @member {wavesenterprise.OpType} opType
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.opType = 0;

        /**
         * RegisterNodeTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RegisterNodeTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RegisterNodeTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         */
        RegisterNodeTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new RegisterNodeTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IRegisterNodeTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.RegisterNodeTransaction} RegisterNodeTransaction instance
         */
        RegisterNodeTransaction.create = function create(properties) {
            return new RegisterNodeTransaction(properties);
        };

        /**
         * Encodes the specified RegisterNodeTransaction message. Does not implicitly {@link wavesenterprise.RegisterNodeTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IRegisterNodeTransaction} message RegisterNodeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterNodeTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.target);
            if (message.nodeName != null && Object.hasOwnProperty.call(message, "nodeName"))
                $root.google.protobuf.StringValue.encode(message.nodeName, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.opType != null && Object.hasOwnProperty.call(message, "opType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.opType);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fee);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified RegisterNodeTransaction message, length delimited. Does not implicitly {@link wavesenterprise.RegisterNodeTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {wavesenterprise.IRegisterNodeTransaction} message RegisterNodeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterNodeTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterNodeTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.RegisterNodeTransaction} RegisterNodeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterNodeTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.RegisterNodeTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.target = reader.bytes();
                    break;
                case 4:
                    message.nodeName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.opType = reader.int32();
                    break;
                case 6:
                    message.timestamp = reader.int64();
                    break;
                case 7:
                    message.fee = reader.int64();
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterNodeTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.RegisterNodeTransaction} RegisterNodeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterNodeTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterNodeTransaction message.
         * @function verify
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterNodeTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!(message.target && typeof message.target.length === "number" || $util.isString(message.target)))
                    return "target: buffer expected";
            if (message.nodeName != null && message.hasOwnProperty("nodeName")) {
                var error = $root.google.protobuf.StringValue.verify(message.nodeName);
                if (error)
                    return "nodeName." + error;
            }
            if (message.opType != null && message.hasOwnProperty("opType"))
                switch (message.opType) {
                default:
                    return "opType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a RegisterNodeTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.RegisterNodeTransaction} RegisterNodeTransaction
         */
        RegisterNodeTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.RegisterNodeTransaction)
                return object;
            var message = new $root.wavesenterprise.RegisterNodeTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.target != null)
                if (typeof object.target === "string")
                    $util.base64.decode(object.target, message.target = $util.newBuffer($util.base64.length(object.target)), 0);
                else if (object.target.length)
                    message.target = object.target;
            if (object.nodeName != null) {
                if (typeof object.nodeName !== "object")
                    throw TypeError(".wavesenterprise.RegisterNodeTransaction.nodeName: object expected");
                message.nodeName = $root.google.protobuf.StringValue.fromObject(object.nodeName);
            }
            switch (object.opType) {
            case "UNKNOWN_OP_TYPE":
            case 0:
                message.opType = 0;
                break;
            case "ADD":
            case 1:
                message.opType = 1;
                break;
            case "REMOVE":
            case 2:
                message.opType = 2;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.RegisterNodeTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a RegisterNodeTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @static
         * @param {wavesenterprise.RegisterNodeTransaction} message RegisterNodeTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterNodeTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.target = "";
                else {
                    object.target = [];
                    if (options.bytes !== Array)
                        object.target = $util.newBuffer(object.target);
                }
                object.nodeName = null;
                object.opType = options.enums === String ? "UNKNOWN_OP_TYPE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = options.bytes === String ? $util.base64.encode(message.target, 0, message.target.length) : options.bytes === Array ? Array.prototype.slice.call(message.target) : message.target;
            if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                object.nodeName = $root.google.protobuf.StringValue.toObject(message.nodeName, options);
            if (message.opType != null && message.hasOwnProperty("opType"))
                object.opType = options.enums === String ? $root.wavesenterprise.OpType[message.opType] : message.opType;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this RegisterNodeTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.RegisterNodeTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterNodeTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterNodeTransaction;
    })();

    /**
     * OpType enum.
     * @name wavesenterprise.OpType
     * @enum {number}
     * @property {number} UNKNOWN_OP_TYPE=0 UNKNOWN_OP_TYPE value
     * @property {number} ADD=1 ADD value
     * @property {number} REMOVE=2 REMOVE value
     */
    wavesenterprise.OpType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_OP_TYPE"] = 0;
        values[valuesById[1] = "ADD"] = 1;
        values[valuesById[2] = "REMOVE"] = 2;
        return values;
    })();

    wavesenterprise.CreateAliasTransaction = (function() {

        /**
         * Properties of a CreateAliasTransaction.
         * @memberof wavesenterprise
         * @interface ICreateAliasTransaction
         * @property {Uint8Array|null} [id] CreateAliasTransaction id
         * @property {Uint8Array|null} [senderPublicKey] CreateAliasTransaction senderPublicKey
         * @property {Uint8Array|null} [alias] CreateAliasTransaction alias
         * @property {number|Long|null} [fee] CreateAliasTransaction fee
         * @property {number|Long|null} [timestamp] CreateAliasTransaction timestamp
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] CreateAliasTransaction feeAssetId
         * @property {Array.<Uint8Array>|null} [proofs] CreateAliasTransaction proofs
         */

        /**
         * Constructs a new CreateAliasTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a CreateAliasTransaction.
         * @implements ICreateAliasTransaction
         * @constructor
         * @param {wavesenterprise.ICreateAliasTransaction=} [properties] Properties to set
         */
        function CreateAliasTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAliasTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.id = $util.newBuffer([]);

        /**
         * CreateAliasTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * CreateAliasTransaction alias.
         * @member {Uint8Array} alias
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.alias = $util.newBuffer([]);

        /**
         * CreateAliasTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateAliasTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateAliasTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.feeAssetId = null;

        /**
         * CreateAliasTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         */
        CreateAliasTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new CreateAliasTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {wavesenterprise.ICreateAliasTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.CreateAliasTransaction} CreateAliasTransaction instance
         */
        CreateAliasTransaction.create = function create(properties) {
            return new CreateAliasTransaction(properties);
        };

        /**
         * Encodes the specified CreateAliasTransaction message. Does not implicitly {@link wavesenterprise.CreateAliasTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {wavesenterprise.ICreateAliasTransaction} message CreateAliasTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAliasTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.alias);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateAliasTransaction message, length delimited. Does not implicitly {@link wavesenterprise.CreateAliasTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {wavesenterprise.ICreateAliasTransaction} message CreateAliasTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAliasTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAliasTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.CreateAliasTransaction} CreateAliasTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAliasTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.CreateAliasTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.alias = reader.bytes();
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAliasTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.CreateAliasTransaction} CreateAliasTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAliasTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAliasTransaction message.
         * @function verify
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAliasTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.alias != null && message.hasOwnProperty("alias"))
                if (!(message.alias && typeof message.alias.length === "number" || $util.isString(message.alias)))
                    return "alias: buffer expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateAliasTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.CreateAliasTransaction} CreateAliasTransaction
         */
        CreateAliasTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.CreateAliasTransaction)
                return object;
            var message = new $root.wavesenterprise.CreateAliasTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.alias != null)
                if (typeof object.alias === "string")
                    $util.base64.decode(object.alias, message.alias = $util.newBuffer($util.base64.length(object.alias)), 0);
                else if (object.alias.length)
                    message.alias = object.alias;
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.CreateAliasTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.CreateAliasTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateAliasTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.CreateAliasTransaction
         * @static
         * @param {wavesenterprise.CreateAliasTransaction} message CreateAliasTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAliasTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.alias = "";
                else {
                    object.alias = [];
                    if (options.bytes !== Array)
                        object.alias = $util.newBuffer(object.alias);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = options.bytes === String ? $util.base64.encode(message.alias, 0, message.alias.length) : options.bytes === Array ? Array.prototype.slice.call(message.alias) : message.alias;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this CreateAliasTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.CreateAliasTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAliasTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAliasTransaction;
    })();

    wavesenterprise.IssueTransaction = (function() {

        /**
         * Properties of an IssueTransaction.
         * @memberof wavesenterprise
         * @interface IIssueTransaction
         * @property {Uint8Array|null} [id] IssueTransaction id
         * @property {number|null} [chainId] IssueTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] IssueTransaction senderPublicKey
         * @property {Uint8Array|null} [name] IssueTransaction name
         * @property {Uint8Array|null} [description] IssueTransaction description
         * @property {number|Long|null} [quantity] IssueTransaction quantity
         * @property {number|null} [decimals] IssueTransaction decimals
         * @property {boolean|null} [reissuable] IssueTransaction reissuable
         * @property {number|Long|null} [fee] IssueTransaction fee
         * @property {number|Long|null} [timestamp] IssueTransaction timestamp
         * @property {google.protobuf.IBytesValue|null} [script] IssueTransaction script
         * @property {Array.<Uint8Array>|null} [proofs] IssueTransaction proofs
         */

        /**
         * Constructs a new IssueTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an IssueTransaction.
         * @implements IIssueTransaction
         * @constructor
         * @param {wavesenterprise.IIssueTransaction=} [properties] Properties to set
         */
        function IssueTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IssueTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.id = $util.newBuffer([]);

        /**
         * IssueTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.chainId = 0;

        /**
         * IssueTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * IssueTransaction name.
         * @member {Uint8Array} name
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.name = $util.newBuffer([]);

        /**
         * IssueTransaction description.
         * @member {Uint8Array} description
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.description = $util.newBuffer([]);

        /**
         * IssueTransaction quantity.
         * @member {number|Long} quantity
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IssueTransaction decimals.
         * @member {number} decimals
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.decimals = 0;

        /**
         * IssueTransaction reissuable.
         * @member {boolean} reissuable
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.reissuable = false;

        /**
         * IssueTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IssueTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IssueTransaction script.
         * @member {google.protobuf.IBytesValue|null|undefined} script
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.script = null;

        /**
         * IssueTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         */
        IssueTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new IssueTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {wavesenterprise.IIssueTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.IssueTransaction} IssueTransaction instance
         */
        IssueTransaction.create = function create(properties) {
            return new IssueTransaction(properties);
        };

        /**
         * Encodes the specified IssueTransaction message. Does not implicitly {@link wavesenterprise.IssueTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {wavesenterprise.IIssueTransaction} message IssueTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IssueTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.description);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.quantity);
            if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.decimals);
            if (message.reissuable != null && Object.hasOwnProperty.call(message, "reissuable"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.reissuable);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.timestamp);
            if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                $root.google.protobuf.BytesValue.encode(message.script, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified IssueTransaction message, length delimited. Does not implicitly {@link wavesenterprise.IssueTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {wavesenterprise.IIssueTransaction} message IssueTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IssueTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IssueTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.IssueTransaction} IssueTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IssueTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.IssueTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.name = reader.bytes();
                    break;
                case 5:
                    message.description = reader.bytes();
                    break;
                case 6:
                    message.quantity = reader.int64();
                    break;
                case 7:
                    message.decimals = reader.int32();
                    break;
                case 8:
                    message.reissuable = reader.bool();
                    break;
                case 9:
                    message.fee = reader.int64();
                    break;
                case 10:
                    message.timestamp = reader.int64();
                    break;
                case 11:
                    message.script = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IssueTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.IssueTransaction} IssueTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IssueTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IssueTransaction message.
         * @function verify
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IssueTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!(message.name && typeof message.name.length === "number" || $util.isString(message.name)))
                    return "name: buffer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!(message.description && typeof message.description.length === "number" || $util.isString(message.description)))
                    return "description: buffer expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                if (!$util.isInteger(message.decimals))
                    return "decimals: integer expected";
            if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                if (typeof message.reissuable !== "boolean")
                    return "reissuable: boolean expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.script != null && message.hasOwnProperty("script")) {
                var error = $root.google.protobuf.BytesValue.verify(message.script);
                if (error)
                    return "script." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an IssueTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.IssueTransaction} IssueTransaction
         */
        IssueTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.IssueTransaction)
                return object;
            var message = new $root.wavesenterprise.IssueTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.name != null)
                if (typeof object.name === "string")
                    $util.base64.decode(object.name, message.name = $util.newBuffer($util.base64.length(object.name)), 0);
                else if (object.name.length)
                    message.name = object.name;
            if (object.description != null)
                if (typeof object.description === "string")
                    $util.base64.decode(object.description, message.description = $util.newBuffer($util.base64.length(object.description)), 0);
                else if (object.description.length)
                    message.description = object.description;
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = false;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber();
            if (object.decimals != null)
                message.decimals = object.decimals | 0;
            if (object.reissuable != null)
                message.reissuable = Boolean(object.reissuable);
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.script != null) {
                if (typeof object.script !== "object")
                    throw TypeError(".wavesenterprise.IssueTransaction.script: object expected");
                message.script = $root.google.protobuf.BytesValue.fromObject(object.script);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.IssueTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an IssueTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.IssueTransaction
         * @static
         * @param {wavesenterprise.IssueTransaction} message IssueTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IssueTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.name = "";
                else {
                    object.name = [];
                    if (options.bytes !== Array)
                        object.name = $util.newBuffer(object.name);
                }
                if (options.bytes === String)
                    object.description = "";
                else {
                    object.description = [];
                    if (options.bytes !== Array)
                        object.description = $util.newBuffer(object.description);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
                object.decimals = 0;
                object.reissuable = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.script = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = options.bytes === String ? $util.base64.encode(message.name, 0, message.name.length) : options.bytes === Array ? Array.prototype.slice.call(message.name) : message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = options.bytes === String ? $util.base64.encode(message.description, 0, message.description.length) : options.bytes === Array ? Array.prototype.slice.call(message.description) : message.description;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber() : message.quantity;
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                object.decimals = message.decimals;
            if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                object.reissuable = message.reissuable;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = $root.google.protobuf.BytesValue.toObject(message.script, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this IssueTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.IssueTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IssueTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IssueTransaction;
    })();

    wavesenterprise.ReissueTransaction = (function() {

        /**
         * Properties of a ReissueTransaction.
         * @memberof wavesenterprise
         * @interface IReissueTransaction
         * @property {Uint8Array|null} [id] ReissueTransaction id
         * @property {number|null} [chainId] ReissueTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] ReissueTransaction senderPublicKey
         * @property {Uint8Array|null} [assetId] ReissueTransaction assetId
         * @property {number|Long|null} [quantity] ReissueTransaction quantity
         * @property {boolean|null} [reissuable] ReissueTransaction reissuable
         * @property {number|Long|null} [fee] ReissueTransaction fee
         * @property {number|Long|null} [timestamp] ReissueTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] ReissueTransaction proofs
         */

        /**
         * Constructs a new ReissueTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a ReissueTransaction.
         * @implements IReissueTransaction
         * @constructor
         * @param {wavesenterprise.IReissueTransaction=} [properties] Properties to set
         */
        function ReissueTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReissueTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.id = $util.newBuffer([]);

        /**
         * ReissueTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.chainId = 0;

        /**
         * ReissueTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * ReissueTransaction assetId.
         * @member {Uint8Array} assetId
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.assetId = $util.newBuffer([]);

        /**
         * ReissueTransaction quantity.
         * @member {number|Long} quantity
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReissueTransaction reissuable.
         * @member {boolean} reissuable
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.reissuable = false;

        /**
         * ReissueTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReissueTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReissueTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         */
        ReissueTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new ReissueTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {wavesenterprise.IReissueTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.ReissueTransaction} ReissueTransaction instance
         */
        ReissueTransaction.create = function create(properties) {
            return new ReissueTransaction(properties);
        };

        /**
         * Encodes the specified ReissueTransaction message. Does not implicitly {@link wavesenterprise.ReissueTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {wavesenterprise.IReissueTransaction} message ReissueTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReissueTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.quantity);
            if (message.reissuable != null && Object.hasOwnProperty.call(message, "reissuable"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.reissuable);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified ReissueTransaction message, length delimited. Does not implicitly {@link wavesenterprise.ReissueTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {wavesenterprise.IReissueTransaction} message ReissueTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReissueTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReissueTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.ReissueTransaction} ReissueTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReissueTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.ReissueTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.assetId = reader.bytes();
                    break;
                case 5:
                    message.quantity = reader.int64();
                    break;
                case 6:
                    message.reissuable = reader.bool();
                    break;
                case 7:
                    message.fee = reader.int64();
                    break;
                case 8:
                    message.timestamp = reader.int64();
                    break;
                case 9:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReissueTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.ReissueTransaction} ReissueTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReissueTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReissueTransaction message.
         * @function verify
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReissueTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                if (typeof message.reissuable !== "boolean")
                    return "reissuable: boolean expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ReissueTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.ReissueTransaction} ReissueTransaction
         */
        ReissueTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.ReissueTransaction)
                return object;
            var message = new $root.wavesenterprise.ReissueTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length)
                    message.assetId = object.assetId;
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = false;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber();
            if (object.reissuable != null)
                message.reissuable = Boolean(object.reissuable);
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.ReissueTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ReissueTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.ReissueTransaction
         * @static
         * @param {wavesenterprise.ReissueTransaction} message ReissueTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReissueTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
                object.reissuable = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber() : message.quantity;
            if (message.reissuable != null && message.hasOwnProperty("reissuable"))
                object.reissuable = message.reissuable;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this ReissueTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.ReissueTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReissueTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReissueTransaction;
    })();

    wavesenterprise.BurnTransaction = (function() {

        /**
         * Properties of a BurnTransaction.
         * @memberof wavesenterprise
         * @interface IBurnTransaction
         * @property {Uint8Array|null} [id] BurnTransaction id
         * @property {number|null} [chainId] BurnTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] BurnTransaction senderPublicKey
         * @property {Uint8Array|null} [assetId] BurnTransaction assetId
         * @property {number|Long|null} [amount] BurnTransaction amount
         * @property {number|Long|null} [fee] BurnTransaction fee
         * @property {number|Long|null} [timestamp] BurnTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] BurnTransaction proofs
         */

        /**
         * Constructs a new BurnTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a BurnTransaction.
         * @implements IBurnTransaction
         * @constructor
         * @param {wavesenterprise.IBurnTransaction=} [properties] Properties to set
         */
        function BurnTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BurnTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.id = $util.newBuffer([]);

        /**
         * BurnTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.chainId = 0;

        /**
         * BurnTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * BurnTransaction assetId.
         * @member {Uint8Array} assetId
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.assetId = $util.newBuffer([]);

        /**
         * BurnTransaction amount.
         * @member {number|Long} amount
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BurnTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BurnTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BurnTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         */
        BurnTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new BurnTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {wavesenterprise.IBurnTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.BurnTransaction} BurnTransaction instance
         */
        BurnTransaction.create = function create(properties) {
            return new BurnTransaction(properties);
        };

        /**
         * Encodes the specified BurnTransaction message. Does not implicitly {@link wavesenterprise.BurnTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {wavesenterprise.IBurnTransaction} message BurnTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BurnTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified BurnTransaction message, length delimited. Does not implicitly {@link wavesenterprise.BurnTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {wavesenterprise.IBurnTransaction} message BurnTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BurnTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BurnTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.BurnTransaction} BurnTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BurnTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.BurnTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.assetId = reader.bytes();
                    break;
                case 5:
                    message.amount = reader.int64();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BurnTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.BurnTransaction} BurnTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BurnTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BurnTransaction message.
         * @function verify
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BurnTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a BurnTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.BurnTransaction} BurnTransaction
         */
        BurnTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.BurnTransaction)
                return object;
            var message = new $root.wavesenterprise.BurnTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length)
                    message.assetId = object.assetId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.BurnTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a BurnTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.BurnTransaction
         * @static
         * @param {wavesenterprise.BurnTransaction} message BurnTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BurnTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this BurnTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.BurnTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BurnTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BurnTransaction;
    })();

    wavesenterprise.LeaseTransaction = (function() {

        /**
         * Properties of a LeaseTransaction.
         * @memberof wavesenterprise
         * @interface ILeaseTransaction
         * @property {Uint8Array|null} [id] LeaseTransaction id
         * @property {google.protobuf.IBytesValue|null} [assetId] LeaseTransaction assetId
         * @property {Uint8Array|null} [senderPublicKey] LeaseTransaction senderPublicKey
         * @property {Uint8Array|null} [recipient] LeaseTransaction recipient
         * @property {number|Long|null} [amount] LeaseTransaction amount
         * @property {number|Long|null} [fee] LeaseTransaction fee
         * @property {number|Long|null} [timestamp] LeaseTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] LeaseTransaction proofs
         */

        /**
         * Constructs a new LeaseTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a LeaseTransaction.
         * @implements ILeaseTransaction
         * @constructor
         * @param {wavesenterprise.ILeaseTransaction=} [properties] Properties to set
         */
        function LeaseTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaseTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.id = $util.newBuffer([]);

        /**
         * LeaseTransaction assetId.
         * @member {google.protobuf.IBytesValue|null|undefined} assetId
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.assetId = null;

        /**
         * LeaseTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * LeaseTransaction recipient.
         * @member {Uint8Array} recipient
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.recipient = $util.newBuffer([]);

        /**
         * LeaseTransaction amount.
         * @member {number|Long} amount
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaseTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaseTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaseTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         */
        LeaseTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new LeaseTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {wavesenterprise.ILeaseTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.LeaseTransaction} LeaseTransaction instance
         */
        LeaseTransaction.create = function create(properties) {
            return new LeaseTransaction(properties);
        };

        /**
         * Encodes the specified LeaseTransaction message. Does not implicitly {@link wavesenterprise.LeaseTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {wavesenterprise.ILeaseTransaction} message LeaseTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaseTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                $root.google.protobuf.BytesValue.encode(message.assetId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.recipient);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified LeaseTransaction message, length delimited. Does not implicitly {@link wavesenterprise.LeaseTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {wavesenterprise.ILeaseTransaction} message LeaseTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaseTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaseTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.LeaseTransaction} LeaseTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaseTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.LeaseTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.assetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.recipient = reader.bytes();
                    break;
                case 5:
                    message.amount = reader.int64();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaseTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.LeaseTransaction} LeaseTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaseTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaseTransaction message.
         * @function verify
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaseTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.assetId);
                if (error)
                    return "assetId." + error;
            }
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a LeaseTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.LeaseTransaction} LeaseTransaction
         */
        LeaseTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.LeaseTransaction)
                return object;
            var message = new $root.wavesenterprise.LeaseTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.assetId != null) {
                if (typeof object.assetId !== "object")
                    throw TypeError(".wavesenterprise.LeaseTransaction.assetId: object expected");
                message.assetId = $root.google.protobuf.BytesValue.fromObject(object.assetId);
            }
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.LeaseTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a LeaseTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.LeaseTransaction
         * @static
         * @param {wavesenterprise.LeaseTransaction} message LeaseTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaseTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.assetId = null;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = $root.google.protobuf.BytesValue.toObject(message.assetId, options);
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this LeaseTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.LeaseTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaseTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaseTransaction;
    })();

    wavesenterprise.LeaseCancelTransaction = (function() {

        /**
         * Properties of a LeaseCancelTransaction.
         * @memberof wavesenterprise
         * @interface ILeaseCancelTransaction
         * @property {Uint8Array|null} [id] LeaseCancelTransaction id
         * @property {number|null} [chainId] LeaseCancelTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] LeaseCancelTransaction senderPublicKey
         * @property {number|Long|null} [fee] LeaseCancelTransaction fee
         * @property {number|Long|null} [timestamp] LeaseCancelTransaction timestamp
         * @property {Uint8Array|null} [leaseId] LeaseCancelTransaction leaseId
         * @property {Array.<Uint8Array>|null} [proofs] LeaseCancelTransaction proofs
         */

        /**
         * Constructs a new LeaseCancelTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a LeaseCancelTransaction.
         * @implements ILeaseCancelTransaction
         * @constructor
         * @param {wavesenterprise.ILeaseCancelTransaction=} [properties] Properties to set
         */
        function LeaseCancelTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaseCancelTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.id = $util.newBuffer([]);

        /**
         * LeaseCancelTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.chainId = 0;

        /**
         * LeaseCancelTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * LeaseCancelTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaseCancelTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LeaseCancelTransaction leaseId.
         * @member {Uint8Array} leaseId
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.leaseId = $util.newBuffer([]);

        /**
         * LeaseCancelTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         */
        LeaseCancelTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new LeaseCancelTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {wavesenterprise.ILeaseCancelTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.LeaseCancelTransaction} LeaseCancelTransaction instance
         */
        LeaseCancelTransaction.create = function create(properties) {
            return new LeaseCancelTransaction(properties);
        };

        /**
         * Encodes the specified LeaseCancelTransaction message. Does not implicitly {@link wavesenterprise.LeaseCancelTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {wavesenterprise.ILeaseCancelTransaction} message LeaseCancelTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaseCancelTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.leaseId != null && Object.hasOwnProperty.call(message, "leaseId"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.leaseId);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified LeaseCancelTransaction message, length delimited. Does not implicitly {@link wavesenterprise.LeaseCancelTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {wavesenterprise.ILeaseCancelTransaction} message LeaseCancelTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaseCancelTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaseCancelTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.LeaseCancelTransaction} LeaseCancelTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaseCancelTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.LeaseCancelTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.leaseId = reader.bytes();
                    break;
                case 7:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaseCancelTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.LeaseCancelTransaction} LeaseCancelTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaseCancelTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaseCancelTransaction message.
         * @function verify
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaseCancelTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.leaseId != null && message.hasOwnProperty("leaseId"))
                if (!(message.leaseId && typeof message.leaseId.length === "number" || $util.isString(message.leaseId)))
                    return "leaseId: buffer expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a LeaseCancelTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.LeaseCancelTransaction} LeaseCancelTransaction
         */
        LeaseCancelTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.LeaseCancelTransaction)
                return object;
            var message = new $root.wavesenterprise.LeaseCancelTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.leaseId != null)
                if (typeof object.leaseId === "string")
                    $util.base64.decode(object.leaseId, message.leaseId = $util.newBuffer($util.base64.length(object.leaseId)), 0);
                else if (object.leaseId.length)
                    message.leaseId = object.leaseId;
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.LeaseCancelTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a LeaseCancelTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @static
         * @param {wavesenterprise.LeaseCancelTransaction} message LeaseCancelTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaseCancelTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.leaseId = "";
                else {
                    object.leaseId = [];
                    if (options.bytes !== Array)
                        object.leaseId = $util.newBuffer(object.leaseId);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.leaseId != null && message.hasOwnProperty("leaseId"))
                object.leaseId = options.bytes === String ? $util.base64.encode(message.leaseId, 0, message.leaseId.length) : options.bytes === Array ? Array.prototype.slice.call(message.leaseId) : message.leaseId;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this LeaseCancelTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.LeaseCancelTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaseCancelTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaseCancelTransaction;
    })();

    wavesenterprise.SponsorFeeTransaction = (function() {

        /**
         * Properties of a SponsorFeeTransaction.
         * @memberof wavesenterprise
         * @interface ISponsorFeeTransaction
         * @property {Uint8Array|null} [id] SponsorFeeTransaction id
         * @property {Uint8Array|null} [senderPublicKey] SponsorFeeTransaction senderPublicKey
         * @property {Uint8Array|null} [assetId] SponsorFeeTransaction assetId
         * @property {boolean|null} [isEnabled] SponsorFeeTransaction isEnabled
         * @property {number|Long|null} [fee] SponsorFeeTransaction fee
         * @property {number|Long|null} [timestamp] SponsorFeeTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] SponsorFeeTransaction proofs
         */

        /**
         * Constructs a new SponsorFeeTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a SponsorFeeTransaction.
         * @implements ISponsorFeeTransaction
         * @constructor
         * @param {wavesenterprise.ISponsorFeeTransaction=} [properties] Properties to set
         */
        function SponsorFeeTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SponsorFeeTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.id = $util.newBuffer([]);

        /**
         * SponsorFeeTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * SponsorFeeTransaction assetId.
         * @member {Uint8Array} assetId
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.assetId = $util.newBuffer([]);

        /**
         * SponsorFeeTransaction isEnabled.
         * @member {boolean} isEnabled
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.isEnabled = false;

        /**
         * SponsorFeeTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SponsorFeeTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SponsorFeeTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         */
        SponsorFeeTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new SponsorFeeTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {wavesenterprise.ISponsorFeeTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.SponsorFeeTransaction} SponsorFeeTransaction instance
         */
        SponsorFeeTransaction.create = function create(properties) {
            return new SponsorFeeTransaction(properties);
        };

        /**
         * Encodes the specified SponsorFeeTransaction message. Does not implicitly {@link wavesenterprise.SponsorFeeTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {wavesenterprise.ISponsorFeeTransaction} message SponsorFeeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SponsorFeeTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.assetId);
            if (message.isEnabled != null && Object.hasOwnProperty.call(message, "isEnabled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isEnabled);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified SponsorFeeTransaction message, length delimited. Does not implicitly {@link wavesenterprise.SponsorFeeTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {wavesenterprise.ISponsorFeeTransaction} message SponsorFeeTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SponsorFeeTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SponsorFeeTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.SponsorFeeTransaction} SponsorFeeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SponsorFeeTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.SponsorFeeTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.assetId = reader.bytes();
                    break;
                case 4:
                    message.isEnabled = reader.bool();
                    break;
                case 5:
                    message.fee = reader.int64();
                    break;
                case 6:
                    message.timestamp = reader.int64();
                    break;
                case 7:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SponsorFeeTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.SponsorFeeTransaction} SponsorFeeTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SponsorFeeTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SponsorFeeTransaction message.
         * @function verify
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SponsorFeeTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.isEnabled != null && message.hasOwnProperty("isEnabled"))
                if (typeof message.isEnabled !== "boolean")
                    return "isEnabled: boolean expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a SponsorFeeTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.SponsorFeeTransaction} SponsorFeeTransaction
         */
        SponsorFeeTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.SponsorFeeTransaction)
                return object;
            var message = new $root.wavesenterprise.SponsorFeeTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length)
                    message.assetId = object.assetId;
            if (object.isEnabled != null)
                message.isEnabled = Boolean(object.isEnabled);
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.SponsorFeeTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a SponsorFeeTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @static
         * @param {wavesenterprise.SponsorFeeTransaction} message SponsorFeeTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SponsorFeeTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                object.isEnabled = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.isEnabled != null && message.hasOwnProperty("isEnabled"))
                object.isEnabled = message.isEnabled;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this SponsorFeeTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.SponsorFeeTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SponsorFeeTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SponsorFeeTransaction;
    })();

    wavesenterprise.SetAssetScriptTransaction = (function() {

        /**
         * Properties of a SetAssetScriptTransaction.
         * @memberof wavesenterprise
         * @interface ISetAssetScriptTransaction
         * @property {Uint8Array|null} [id] SetAssetScriptTransaction id
         * @property {number|null} [chainId] SetAssetScriptTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] SetAssetScriptTransaction senderPublicKey
         * @property {Uint8Array|null} [assetId] SetAssetScriptTransaction assetId
         * @property {google.protobuf.IBytesValue|null} [script] SetAssetScriptTransaction script
         * @property {number|Long|null} [fee] SetAssetScriptTransaction fee
         * @property {number|Long|null} [timestamp] SetAssetScriptTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] SetAssetScriptTransaction proofs
         */

        /**
         * Constructs a new SetAssetScriptTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a SetAssetScriptTransaction.
         * @implements ISetAssetScriptTransaction
         * @constructor
         * @param {wavesenterprise.ISetAssetScriptTransaction=} [properties] Properties to set
         */
        function SetAssetScriptTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetAssetScriptTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.id = $util.newBuffer([]);

        /**
         * SetAssetScriptTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.chainId = 0;

        /**
         * SetAssetScriptTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * SetAssetScriptTransaction assetId.
         * @member {Uint8Array} assetId
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.assetId = $util.newBuffer([]);

        /**
         * SetAssetScriptTransaction script.
         * @member {google.protobuf.IBytesValue|null|undefined} script
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.script = null;

        /**
         * SetAssetScriptTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetAssetScriptTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetAssetScriptTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         */
        SetAssetScriptTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new SetAssetScriptTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetAssetScriptTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.SetAssetScriptTransaction} SetAssetScriptTransaction instance
         */
        SetAssetScriptTransaction.create = function create(properties) {
            return new SetAssetScriptTransaction(properties);
        };

        /**
         * Encodes the specified SetAssetScriptTransaction message. Does not implicitly {@link wavesenterprise.SetAssetScriptTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetAssetScriptTransaction} message SetAssetScriptTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetAssetScriptTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                $root.google.protobuf.BytesValue.encode(message.script, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified SetAssetScriptTransaction message, length delimited. Does not implicitly {@link wavesenterprise.SetAssetScriptTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetAssetScriptTransaction} message SetAssetScriptTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetAssetScriptTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetAssetScriptTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.SetAssetScriptTransaction} SetAssetScriptTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetAssetScriptTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.SetAssetScriptTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.assetId = reader.bytes();
                    break;
                case 5:
                    message.script = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetAssetScriptTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.SetAssetScriptTransaction} SetAssetScriptTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetAssetScriptTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetAssetScriptTransaction message.
         * @function verify
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetAssetScriptTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.script != null && message.hasOwnProperty("script")) {
                var error = $root.google.protobuf.BytesValue.verify(message.script);
                if (error)
                    return "script." + error;
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a SetAssetScriptTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.SetAssetScriptTransaction} SetAssetScriptTransaction
         */
        SetAssetScriptTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.SetAssetScriptTransaction)
                return object;
            var message = new $root.wavesenterprise.SetAssetScriptTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length)
                    message.assetId = object.assetId;
            if (object.script != null) {
                if (typeof object.script !== "object")
                    throw TypeError(".wavesenterprise.SetAssetScriptTransaction.script: object expected");
                message.script = $root.google.protobuf.BytesValue.fromObject(object.script);
            }
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.SetAssetScriptTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a SetAssetScriptTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @static
         * @param {wavesenterprise.SetAssetScriptTransaction} message SetAssetScriptTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetAssetScriptTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                object.script = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = $root.google.protobuf.BytesValue.toObject(message.script, options);
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this SetAssetScriptTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.SetAssetScriptTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetAssetScriptTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetAssetScriptTransaction;
    })();

    wavesenterprise.DataTransaction = (function() {

        /**
         * Properties of a DataTransaction.
         * @memberof wavesenterprise
         * @interface IDataTransaction
         * @property {Uint8Array|null} [id] DataTransaction id
         * @property {Uint8Array|null} [senderPublicKey] DataTransaction senderPublicKey
         * @property {Uint8Array|null} [authorPublicKey] DataTransaction authorPublicKey
         * @property {Array.<wavesenterprise.IDataEntry>|null} [data] DataTransaction data
         * @property {number|Long|null} [timestamp] DataTransaction timestamp
         * @property {number|Long|null} [fee] DataTransaction fee
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] DataTransaction feeAssetId
         * @property {Array.<Uint8Array>|null} [proofs] DataTransaction proofs
         */

        /**
         * Constructs a new DataTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a DataTransaction.
         * @implements IDataTransaction
         * @constructor
         * @param {wavesenterprise.IDataTransaction=} [properties] Properties to set
         */
        function DataTransaction(properties) {
            this.data = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.id = $util.newBuffer([]);

        /**
         * DataTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * DataTransaction authorPublicKey.
         * @member {Uint8Array} authorPublicKey
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.authorPublicKey = $util.newBuffer([]);

        /**
         * DataTransaction data.
         * @member {Array.<wavesenterprise.IDataEntry>} data
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.data = $util.emptyArray;

        /**
         * DataTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.feeAssetId = null;

        /**
         * DataTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.DataTransaction
         * @instance
         */
        DataTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new DataTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {wavesenterprise.IDataTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.DataTransaction} DataTransaction instance
         */
        DataTransaction.create = function create(properties) {
            return new DataTransaction(properties);
        };

        /**
         * Encodes the specified DataTransaction message. Does not implicitly {@link wavesenterprise.DataTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {wavesenterprise.IDataTransaction} message DataTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.authorPublicKey != null && Object.hasOwnProperty.call(message, "authorPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.authorPublicKey);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.wavesenterprise.DataEntry.encode(message.data[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified DataTransaction message, length delimited. Does not implicitly {@link wavesenterprise.DataTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {wavesenterprise.IDataTransaction} message DataTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.DataTransaction} DataTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.DataTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.authorPublicKey = reader.bytes();
                    break;
                case 4:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.wavesenterprise.DataEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DataTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.DataTransaction} DataTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataTransaction message.
         * @function verify
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.authorPublicKey != null && message.hasOwnProperty("authorPublicKey"))
                if (!(message.authorPublicKey && typeof message.authorPublicKey.length === "number" || $util.isString(message.authorPublicKey)))
                    return "authorPublicKey: buffer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.wavesenterprise.DataEntry.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a DataTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.DataTransaction} DataTransaction
         */
        DataTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.DataTransaction)
                return object;
            var message = new $root.wavesenterprise.DataTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.authorPublicKey != null)
                if (typeof object.authorPublicKey === "string")
                    $util.base64.decode(object.authorPublicKey, message.authorPublicKey = $util.newBuffer($util.base64.length(object.authorPublicKey)), 0);
                else if (object.authorPublicKey.length)
                    message.authorPublicKey = object.authorPublicKey;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".wavesenterprise.DataTransaction.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".wavesenterprise.DataTransaction.data: object expected");
                    message.data[i] = $root.wavesenterprise.DataEntry.fromObject(object.data[i]);
                }
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.DataTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.DataTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a DataTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.DataTransaction
         * @static
         * @param {wavesenterprise.DataTransaction} message DataTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.data = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.authorPublicKey = "";
                else {
                    object.authorPublicKey = [];
                    if (options.bytes !== Array)
                        object.authorPublicKey = $util.newBuffer(object.authorPublicKey);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.authorPublicKey != null && message.hasOwnProperty("authorPublicKey"))
                object.authorPublicKey = options.bytes === String ? $util.base64.encode(message.authorPublicKey, 0, message.authorPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.authorPublicKey) : message.authorPublicKey;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.wavesenterprise.DataEntry.toObject(message.data[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this DataTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.DataTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DataTransaction;
    })();

    wavesenterprise.DataEntry = (function() {

        /**
         * Properties of a DataEntry.
         * @memberof wavesenterprise
         * @interface IDataEntry
         * @property {string|null} [key] DataEntry key
         * @property {number|Long|null} [intValue] DataEntry intValue
         * @property {boolean|null} [boolValue] DataEntry boolValue
         * @property {Uint8Array|null} [binaryValue] DataEntry binaryValue
         * @property {string|null} [stringValue] DataEntry stringValue
         */

        /**
         * Constructs a new DataEntry.
         * @memberof wavesenterprise
         * @classdesc Represents a DataEntry.
         * @implements IDataEntry
         * @constructor
         * @param {wavesenterprise.IDataEntry=} [properties] Properties to set
         */
        function DataEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataEntry key.
         * @member {string} key
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        DataEntry.prototype.key = "";

        /**
         * DataEntry intValue.
         * @member {number|Long} intValue
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        DataEntry.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataEntry boolValue.
         * @member {boolean} boolValue
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        DataEntry.prototype.boolValue = false;

        /**
         * DataEntry binaryValue.
         * @member {Uint8Array} binaryValue
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        DataEntry.prototype.binaryValue = $util.newBuffer([]);

        /**
         * DataEntry stringValue.
         * @member {string} stringValue
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        DataEntry.prototype.stringValue = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * DataEntry value.
         * @member {"intValue"|"boolValue"|"binaryValue"|"stringValue"|undefined} value
         * @memberof wavesenterprise.DataEntry
         * @instance
         */
        Object.defineProperty(DataEntry.prototype, "value", {
            get: $util.oneOfGetter($oneOfFields = ["intValue", "boolValue", "binaryValue", "stringValue"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DataEntry instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {wavesenterprise.IDataEntry=} [properties] Properties to set
         * @returns {wavesenterprise.DataEntry} DataEntry instance
         */
        DataEntry.create = function create(properties) {
            return new DataEntry(properties);
        };

        /**
         * Encodes the specified DataEntry message. Does not implicitly {@link wavesenterprise.DataEntry.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {wavesenterprise.IDataEntry} message DataEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.intValue);
            if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.boolValue);
            if (message.binaryValue != null && Object.hasOwnProperty.call(message, "binaryValue"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.binaryValue);
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.stringValue);
            return writer;
        };

        /**
         * Encodes the specified DataEntry message, length delimited. Does not implicitly {@link wavesenterprise.DataEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {wavesenterprise.IDataEntry} message DataEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataEntry message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.DataEntry} DataEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.DataEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 10:
                    message.intValue = reader.int64();
                    break;
                case 11:
                    message.boolValue = reader.bool();
                    break;
                case 12:
                    message.binaryValue = reader.bytes();
                    break;
                case 13:
                    message.stringValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DataEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.DataEntry} DataEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataEntry message.
         * @function verify
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.intValue != null && message.hasOwnProperty("intValue")) {
                properties.value = 1;
                if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                    return "intValue: integer|Long expected";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                if (typeof message.boolValue !== "boolean")
                    return "boolValue: boolean expected";
            }
            if (message.binaryValue != null && message.hasOwnProperty("binaryValue")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                if (!(message.binaryValue && typeof message.binaryValue.length === "number" || $util.isString(message.binaryValue)))
                    return "binaryValue: buffer expected";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                if (properties.value === 1)
                    return "value: multiple values";
                properties.value = 1;
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            }
            return null;
        };

        /**
         * Creates a DataEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.DataEntry} DataEntry
         */
        DataEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.DataEntry)
                return object;
            var message = new $root.wavesenterprise.DataEntry();
            if (object.key != null)
                message.key = String(object.key);
            if (object.intValue != null)
                if ($util.Long)
                    (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                else if (typeof object.intValue === "string")
                    message.intValue = parseInt(object.intValue, 10);
                else if (typeof object.intValue === "number")
                    message.intValue = object.intValue;
                else if (typeof object.intValue === "object")
                    message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
            if (object.boolValue != null)
                message.boolValue = Boolean(object.boolValue);
            if (object.binaryValue != null)
                if (typeof object.binaryValue === "string")
                    $util.base64.decode(object.binaryValue, message.binaryValue = $util.newBuffer($util.base64.length(object.binaryValue)), 0);
                else if (object.binaryValue.length)
                    message.binaryValue = object.binaryValue;
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            return message;
        };

        /**
         * Creates a plain object from a DataEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.DataEntry
         * @static
         * @param {wavesenterprise.DataEntry} message DataEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.intValue != null && message.hasOwnProperty("intValue")) {
                if (typeof message.intValue === "number")
                    object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                else
                    object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                if (options.oneofs)
                    object.value = "intValue";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                object.boolValue = message.boolValue;
                if (options.oneofs)
                    object.value = "boolValue";
            }
            if (message.binaryValue != null && message.hasOwnProperty("binaryValue")) {
                object.binaryValue = options.bytes === String ? $util.base64.encode(message.binaryValue, 0, message.binaryValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.binaryValue) : message.binaryValue;
                if (options.oneofs)
                    object.value = "binaryValue";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                    object.value = "stringValue";
            }
            return object;
        };

        /**
         * Converts this DataEntry to JSON.
         * @function toJSON
         * @memberof wavesenterprise.DataEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DataEntry;
    })();

    wavesenterprise.TransferTransaction = (function() {

        /**
         * Properties of a TransferTransaction.
         * @memberof wavesenterprise
         * @interface ITransferTransaction
         * @property {Uint8Array|null} [id] TransferTransaction id
         * @property {Uint8Array|null} [senderPublicKey] TransferTransaction senderPublicKey
         * @property {google.protobuf.IBytesValue|null} [assetId] TransferTransaction assetId
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] TransferTransaction feeAssetId
         * @property {number|Long|null} [timestamp] TransferTransaction timestamp
         * @property {number|Long|null} [amount] TransferTransaction amount
         * @property {number|Long|null} [fee] TransferTransaction fee
         * @property {Uint8Array|null} [recipient] TransferTransaction recipient
         * @property {Uint8Array|null} [attachment] TransferTransaction attachment
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] TransferTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] TransferTransaction proofs
         */

        /**
         * Constructs a new TransferTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a TransferTransaction.
         * @implements ITransferTransaction
         * @constructor
         * @param {wavesenterprise.ITransferTransaction=} [properties] Properties to set
         */
        function TransferTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransferTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.id = $util.newBuffer([]);

        /**
         * TransferTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * TransferTransaction assetId.
         * @member {google.protobuf.IBytesValue|null|undefined} assetId
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.assetId = null;

        /**
         * TransferTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.feeAssetId = null;

        /**
         * TransferTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TransferTransaction amount.
         * @member {number|Long} amount
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TransferTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TransferTransaction recipient.
         * @member {Uint8Array} recipient
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.recipient = $util.newBuffer([]);

        /**
         * TransferTransaction attachment.
         * @member {Uint8Array} attachment
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.attachment = $util.newBuffer([]);

        /**
         * TransferTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.atomicBadge = null;

        /**
         * TransferTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         */
        TransferTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new TransferTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {wavesenterprise.ITransferTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.TransferTransaction} TransferTransaction instance
         */
        TransferTransaction.create = function create(properties) {
            return new TransferTransaction(properties);
        };

        /**
         * Encodes the specified TransferTransaction message. Does not implicitly {@link wavesenterprise.TransferTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {wavesenterprise.ITransferTransaction} message TransferTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                $root.google.protobuf.BytesValue.encode(message.assetId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.amount);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fee);
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.recipient);
            if (message.attachment != null && Object.hasOwnProperty.call(message, "attachment"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.attachment);
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified TransferTransaction message, length delimited. Does not implicitly {@link wavesenterprise.TransferTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {wavesenterprise.ITransferTransaction} message TransferTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.TransferTransaction} TransferTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.TransferTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.assetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.amount = reader.int64();
                    break;
                case 7:
                    message.fee = reader.int64();
                    break;
                case 8:
                    message.recipient = reader.bytes();
                    break;
                case 9:
                    message.attachment = reader.bytes();
                    break;
                case 10:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransferTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.TransferTransaction} TransferTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferTransaction message.
         * @function verify
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.assetId);
                if (error)
                    return "assetId." + error;
            }
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.attachment != null && message.hasOwnProperty("attachment"))
                if (!(message.attachment && typeof message.attachment.length === "number" || $util.isString(message.attachment)))
                    return "attachment: buffer expected";
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a TransferTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.TransferTransaction} TransferTransaction
         */
        TransferTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.TransferTransaction)
                return object;
            var message = new $root.wavesenterprise.TransferTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null) {
                if (typeof object.assetId !== "object")
                    throw TypeError(".wavesenterprise.TransferTransaction.assetId: object expected");
                message.assetId = $root.google.protobuf.BytesValue.fromObject(object.assetId);
            }
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.TransferTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.attachment != null)
                if (typeof object.attachment === "string")
                    $util.base64.decode(object.attachment, message.attachment = $util.newBuffer($util.base64.length(object.attachment)), 0);
                else if (object.attachment.length)
                    message.attachment = object.attachment;
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.TransferTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.TransferTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a TransferTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.TransferTransaction
         * @static
         * @param {wavesenterprise.TransferTransaction} message TransferTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.assetId = null;
                object.feeAssetId = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if (options.bytes === String)
                    object.attachment = "";
                else {
                    object.attachment = [];
                    if (options.bytes !== Array)
                        object.attachment = $util.newBuffer(object.attachment);
                }
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = $root.google.protobuf.BytesValue.toObject(message.assetId, options);
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.attachment != null && message.hasOwnProperty("attachment"))
                object.attachment = options.bytes === String ? $util.base64.encode(message.attachment, 0, message.attachment.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachment) : message.attachment;
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this TransferTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.TransferTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransferTransaction;
    })();

    wavesenterprise.AtomicBadge = (function() {

        /**
         * Properties of an AtomicBadge.
         * @memberof wavesenterprise
         * @interface IAtomicBadge
         * @property {google.protobuf.IBytesValue|null} [trustedSender] AtomicBadge trustedSender
         */

        /**
         * Constructs a new AtomicBadge.
         * @memberof wavesenterprise
         * @classdesc Represents an AtomicBadge.
         * @implements IAtomicBadge
         * @constructor
         * @param {wavesenterprise.IAtomicBadge=} [properties] Properties to set
         */
        function AtomicBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AtomicBadge trustedSender.
         * @member {google.protobuf.IBytesValue|null|undefined} trustedSender
         * @memberof wavesenterprise.AtomicBadge
         * @instance
         */
        AtomicBadge.prototype.trustedSender = null;

        /**
         * Creates a new AtomicBadge instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {wavesenterprise.IAtomicBadge=} [properties] Properties to set
         * @returns {wavesenterprise.AtomicBadge} AtomicBadge instance
         */
        AtomicBadge.create = function create(properties) {
            return new AtomicBadge(properties);
        };

        /**
         * Encodes the specified AtomicBadge message. Does not implicitly {@link wavesenterprise.AtomicBadge.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {wavesenterprise.IAtomicBadge} message AtomicBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trustedSender != null && Object.hasOwnProperty.call(message, "trustedSender"))
                $root.google.protobuf.BytesValue.encode(message.trustedSender, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AtomicBadge message, length delimited. Does not implicitly {@link wavesenterprise.AtomicBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {wavesenterprise.IAtomicBadge} message AtomicBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AtomicBadge message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.AtomicBadge} AtomicBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicBadge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.AtomicBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.trustedSender = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AtomicBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.AtomicBadge} AtomicBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AtomicBadge message.
         * @function verify
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AtomicBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trustedSender != null && message.hasOwnProperty("trustedSender")) {
                var error = $root.google.protobuf.BytesValue.verify(message.trustedSender);
                if (error)
                    return "trustedSender." + error;
            }
            return null;
        };

        /**
         * Creates an AtomicBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.AtomicBadge} AtomicBadge
         */
        AtomicBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.AtomicBadge)
                return object;
            var message = new $root.wavesenterprise.AtomicBadge();
            if (object.trustedSender != null) {
                if (typeof object.trustedSender !== "object")
                    throw TypeError(".wavesenterprise.AtomicBadge.trustedSender: object expected");
                message.trustedSender = $root.google.protobuf.BytesValue.fromObject(object.trustedSender);
            }
            return message;
        };

        /**
         * Creates a plain object from an AtomicBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.AtomicBadge
         * @static
         * @param {wavesenterprise.AtomicBadge} message AtomicBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AtomicBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.trustedSender = null;
            if (message.trustedSender != null && message.hasOwnProperty("trustedSender"))
                object.trustedSender = $root.google.protobuf.BytesValue.toObject(message.trustedSender, options);
            return object;
        };

        /**
         * Converts this AtomicBadge to JSON.
         * @function toJSON
         * @memberof wavesenterprise.AtomicBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AtomicBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AtomicBadge;
    })();

    wavesenterprise.MassTransferTransaction = (function() {

        /**
         * Properties of a MassTransferTransaction.
         * @memberof wavesenterprise
         * @interface IMassTransferTransaction
         * @property {Uint8Array|null} [id] MassTransferTransaction id
         * @property {Uint8Array|null} [senderPublicKey] MassTransferTransaction senderPublicKey
         * @property {google.protobuf.IBytesValue|null} [assetId] MassTransferTransaction assetId
         * @property {Array.<wavesenterprise.ITransfer>|null} [transfers] MassTransferTransaction transfers
         * @property {number|Long|null} [timestamp] MassTransferTransaction timestamp
         * @property {number|Long|null} [fee] MassTransferTransaction fee
         * @property {Uint8Array|null} [attachment] MassTransferTransaction attachment
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] MassTransferTransaction feeAssetId
         * @property {Array.<Uint8Array>|null} [proofs] MassTransferTransaction proofs
         */

        /**
         * Constructs a new MassTransferTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a MassTransferTransaction.
         * @implements IMassTransferTransaction
         * @constructor
         * @param {wavesenterprise.IMassTransferTransaction=} [properties] Properties to set
         */
        function MassTransferTransaction(properties) {
            this.transfers = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MassTransferTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.id = $util.newBuffer([]);

        /**
         * MassTransferTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * MassTransferTransaction assetId.
         * @member {google.protobuf.IBytesValue|null|undefined} assetId
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.assetId = null;

        /**
         * MassTransferTransaction transfers.
         * @member {Array.<wavesenterprise.ITransfer>} transfers
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.transfers = $util.emptyArray;

        /**
         * MassTransferTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MassTransferTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MassTransferTransaction attachment.
         * @member {Uint8Array} attachment
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.attachment = $util.newBuffer([]);

        /**
         * MassTransferTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.feeAssetId = null;

        /**
         * MassTransferTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         */
        MassTransferTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new MassTransferTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {wavesenterprise.IMassTransferTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.MassTransferTransaction} MassTransferTransaction instance
         */
        MassTransferTransaction.create = function create(properties) {
            return new MassTransferTransaction(properties);
        };

        /**
         * Encodes the specified MassTransferTransaction message. Does not implicitly {@link wavesenterprise.MassTransferTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {wavesenterprise.IMassTransferTransaction} message MassTransferTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MassTransferTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                $root.google.protobuf.BytesValue.encode(message.assetId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.transfers != null && message.transfers.length)
                for (var i = 0; i < message.transfers.length; ++i)
                    $root.wavesenterprise.Transfer.encode(message.transfers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.attachment != null && Object.hasOwnProperty.call(message, "attachment"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.attachment);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified MassTransferTransaction message, length delimited. Does not implicitly {@link wavesenterprise.MassTransferTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {wavesenterprise.IMassTransferTransaction} message MassTransferTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MassTransferTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MassTransferTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.MassTransferTransaction} MassTransferTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MassTransferTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.MassTransferTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.assetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.transfers && message.transfers.length))
                        message.transfers = [];
                    message.transfers.push($root.wavesenterprise.Transfer.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.attachment = reader.bytes();
                    break;
                case 8:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MassTransferTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.MassTransferTransaction} MassTransferTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MassTransferTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MassTransferTransaction message.
         * @function verify
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MassTransferTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.assetId);
                if (error)
                    return "assetId." + error;
            }
            if (message.transfers != null && message.hasOwnProperty("transfers")) {
                if (!Array.isArray(message.transfers))
                    return "transfers: array expected";
                for (var i = 0; i < message.transfers.length; ++i) {
                    var error = $root.wavesenterprise.Transfer.verify(message.transfers[i]);
                    if (error)
                        return "transfers." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.attachment != null && message.hasOwnProperty("attachment"))
                if (!(message.attachment && typeof message.attachment.length === "number" || $util.isString(message.attachment)))
                    return "attachment: buffer expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a MassTransferTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.MassTransferTransaction} MassTransferTransaction
         */
        MassTransferTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.MassTransferTransaction)
                return object;
            var message = new $root.wavesenterprise.MassTransferTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.assetId != null) {
                if (typeof object.assetId !== "object")
                    throw TypeError(".wavesenterprise.MassTransferTransaction.assetId: object expected");
                message.assetId = $root.google.protobuf.BytesValue.fromObject(object.assetId);
            }
            if (object.transfers) {
                if (!Array.isArray(object.transfers))
                    throw TypeError(".wavesenterprise.MassTransferTransaction.transfers: array expected");
                message.transfers = [];
                for (var i = 0; i < object.transfers.length; ++i) {
                    if (typeof object.transfers[i] !== "object")
                        throw TypeError(".wavesenterprise.MassTransferTransaction.transfers: object expected");
                    message.transfers[i] = $root.wavesenterprise.Transfer.fromObject(object.transfers[i]);
                }
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.attachment != null)
                if (typeof object.attachment === "string")
                    $util.base64.decode(object.attachment, message.attachment = $util.newBuffer($util.base64.length(object.attachment)), 0);
                else if (object.attachment.length)
                    message.attachment = object.attachment;
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.MassTransferTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.MassTransferTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a MassTransferTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.MassTransferTransaction
         * @static
         * @param {wavesenterprise.MassTransferTransaction} message MassTransferTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MassTransferTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.transfers = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.assetId = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.attachment = "";
                else {
                    object.attachment = [];
                    if (options.bytes !== Array)
                        object.attachment = $util.newBuffer(object.attachment);
                }
                object.feeAssetId = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = $root.google.protobuf.BytesValue.toObject(message.assetId, options);
            if (message.transfers && message.transfers.length) {
                object.transfers = [];
                for (var j = 0; j < message.transfers.length; ++j)
                    object.transfers[j] = $root.wavesenterprise.Transfer.toObject(message.transfers[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.attachment != null && message.hasOwnProperty("attachment"))
                object.attachment = options.bytes === String ? $util.base64.encode(message.attachment, 0, message.attachment.length) : options.bytes === Array ? Array.prototype.slice.call(message.attachment) : message.attachment;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this MassTransferTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.MassTransferTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MassTransferTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MassTransferTransaction;
    })();

    wavesenterprise.Transfer = (function() {

        /**
         * Properties of a Transfer.
         * @memberof wavesenterprise
         * @interface ITransfer
         * @property {Uint8Array|null} [recipient] Transfer recipient
         * @property {number|Long|null} [amount] Transfer amount
         */

        /**
         * Constructs a new Transfer.
         * @memberof wavesenterprise
         * @classdesc Represents a Transfer.
         * @implements ITransfer
         * @constructor
         * @param {wavesenterprise.ITransfer=} [properties] Properties to set
         */
        function Transfer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transfer recipient.
         * @member {Uint8Array} recipient
         * @memberof wavesenterprise.Transfer
         * @instance
         */
        Transfer.prototype.recipient = $util.newBuffer([]);

        /**
         * Transfer amount.
         * @member {number|Long} amount
         * @memberof wavesenterprise.Transfer
         * @instance
         */
        Transfer.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Transfer instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {wavesenterprise.ITransfer=} [properties] Properties to set
         * @returns {wavesenterprise.Transfer} Transfer instance
         */
        Transfer.create = function create(properties) {
            return new Transfer(properties);
        };

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link wavesenterprise.Transfer.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {wavesenterprise.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.recipient);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link wavesenterprise.Transfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {wavesenterprise.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.Transfer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.bytes();
                    break;
                case 2:
                    message.amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transfer message.
         * @function verify
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.Transfer} Transfer
         */
        Transfer.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.Transfer)
                return object;
            var message = new $root.wavesenterprise.Transfer();
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.Transfer
         * @static
         * @param {wavesenterprise.Transfer} message Transfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            }
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            return object;
        };

        /**
         * Converts this Transfer to JSON.
         * @function toJSON
         * @memberof wavesenterprise.Transfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Transfer;
    })();

    wavesenterprise.PermitTransaction = (function() {

        /**
         * Properties of a PermitTransaction.
         * @memberof wavesenterprise
         * @interface IPermitTransaction
         * @property {Uint8Array|null} [id] PermitTransaction id
         * @property {Uint8Array|null} [senderPublicKey] PermitTransaction senderPublicKey
         * @property {Uint8Array|null} [target] PermitTransaction target
         * @property {number|Long|null} [timestamp] PermitTransaction timestamp
         * @property {number|Long|null} [fee] PermitTransaction fee
         * @property {wavesenterprise.IPermissionOp|null} [permissionOp] PermitTransaction permissionOp
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] PermitTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] PermitTransaction proofs
         */

        /**
         * Constructs a new PermitTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a PermitTransaction.
         * @implements IPermitTransaction
         * @constructor
         * @param {wavesenterprise.IPermitTransaction=} [properties] Properties to set
         */
        function PermitTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PermitTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.id = $util.newBuffer([]);

        /**
         * PermitTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * PermitTransaction target.
         * @member {Uint8Array} target
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.target = $util.newBuffer([]);

        /**
         * PermitTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermitTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermitTransaction permissionOp.
         * @member {wavesenterprise.IPermissionOp|null|undefined} permissionOp
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.permissionOp = null;

        /**
         * PermitTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.atomicBadge = null;

        /**
         * PermitTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         */
        PermitTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new PermitTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {wavesenterprise.IPermitTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.PermitTransaction} PermitTransaction instance
         */
        PermitTransaction.create = function create(properties) {
            return new PermitTransaction(properties);
        };

        /**
         * Encodes the specified PermitTransaction message. Does not implicitly {@link wavesenterprise.PermitTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {wavesenterprise.IPermitTransaction} message PermitTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PermitTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.target);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.fee);
            if (message.permissionOp != null && Object.hasOwnProperty.call(message, "permissionOp"))
                $root.wavesenterprise.PermissionOp.encode(message.permissionOp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified PermitTransaction message, length delimited. Does not implicitly {@link wavesenterprise.PermitTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {wavesenterprise.IPermitTransaction} message PermitTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PermitTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PermitTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.PermitTransaction} PermitTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PermitTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.PermitTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.target = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.int64();
                    break;
                case 5:
                    message.fee = reader.int64();
                    break;
                case 6:
                    message.permissionOp = $root.wavesenterprise.PermissionOp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PermitTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.PermitTransaction} PermitTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PermitTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PermitTransaction message.
         * @function verify
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PermitTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.target != null && message.hasOwnProperty("target"))
                if (!(message.target && typeof message.target.length === "number" || $util.isString(message.target)))
                    return "target: buffer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.permissionOp != null && message.hasOwnProperty("permissionOp")) {
                var error = $root.wavesenterprise.PermissionOp.verify(message.permissionOp);
                if (error)
                    return "permissionOp." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a PermitTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.PermitTransaction} PermitTransaction
         */
        PermitTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.PermitTransaction)
                return object;
            var message = new $root.wavesenterprise.PermitTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.target != null)
                if (typeof object.target === "string")
                    $util.base64.decode(object.target, message.target = $util.newBuffer($util.base64.length(object.target)), 0);
                else if (object.target.length)
                    message.target = object.target;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.permissionOp != null) {
                if (typeof object.permissionOp !== "object")
                    throw TypeError(".wavesenterprise.PermitTransaction.permissionOp: object expected");
                message.permissionOp = $root.wavesenterprise.PermissionOp.fromObject(object.permissionOp);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.PermitTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.PermitTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a PermitTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.PermitTransaction
         * @static
         * @param {wavesenterprise.PermitTransaction} message PermitTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PermitTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.target = "";
                else {
                    object.target = [];
                    if (options.bytes !== Array)
                        object.target = $util.newBuffer(object.target);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.permissionOp = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.target != null && message.hasOwnProperty("target"))
                object.target = options.bytes === String ? $util.base64.encode(message.target, 0, message.target.length) : options.bytes === Array ? Array.prototype.slice.call(message.target) : message.target;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.permissionOp != null && message.hasOwnProperty("permissionOp"))
                object.permissionOp = $root.wavesenterprise.PermissionOp.toObject(message.permissionOp, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this PermitTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.PermitTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PermitTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PermitTransaction;
    })();

    wavesenterprise.PermissionOp = (function() {

        /**
         * Properties of a PermissionOp.
         * @memberof wavesenterprise
         * @interface IPermissionOp
         * @property {wavesenterprise.OpType|null} [opType] PermissionOp opType
         * @property {wavesenterprise.IRole|null} [role] PermissionOp role
         * @property {number|Long|null} [timestamp] PermissionOp timestamp
         * @property {google.protobuf.IInt64Value|null} [dueTimestamp] PermissionOp dueTimestamp
         */

        /**
         * Constructs a new PermissionOp.
         * @memberof wavesenterprise
         * @classdesc Represents a PermissionOp.
         * @implements IPermissionOp
         * @constructor
         * @param {wavesenterprise.IPermissionOp=} [properties] Properties to set
         */
        function PermissionOp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PermissionOp opType.
         * @member {wavesenterprise.OpType} opType
         * @memberof wavesenterprise.PermissionOp
         * @instance
         */
        PermissionOp.prototype.opType = 0;

        /**
         * PermissionOp role.
         * @member {wavesenterprise.IRole|null|undefined} role
         * @memberof wavesenterprise.PermissionOp
         * @instance
         */
        PermissionOp.prototype.role = null;

        /**
         * PermissionOp timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.PermissionOp
         * @instance
         */
        PermissionOp.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermissionOp dueTimestamp.
         * @member {google.protobuf.IInt64Value|null|undefined} dueTimestamp
         * @memberof wavesenterprise.PermissionOp
         * @instance
         */
        PermissionOp.prototype.dueTimestamp = null;

        /**
         * Creates a new PermissionOp instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {wavesenterprise.IPermissionOp=} [properties] Properties to set
         * @returns {wavesenterprise.PermissionOp} PermissionOp instance
         */
        PermissionOp.create = function create(properties) {
            return new PermissionOp(properties);
        };

        /**
         * Encodes the specified PermissionOp message. Does not implicitly {@link wavesenterprise.PermissionOp.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {wavesenterprise.IPermissionOp} message PermissionOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PermissionOp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opType != null && Object.hasOwnProperty.call(message, "opType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.opType);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                $root.wavesenterprise.Role.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            if (message.dueTimestamp != null && Object.hasOwnProperty.call(message, "dueTimestamp"))
                $root.google.protobuf.Int64Value.encode(message.dueTimestamp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PermissionOp message, length delimited. Does not implicitly {@link wavesenterprise.PermissionOp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {wavesenterprise.IPermissionOp} message PermissionOp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PermissionOp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PermissionOp message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.PermissionOp} PermissionOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PermissionOp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.PermissionOp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.opType = reader.int32();
                    break;
                case 2:
                    message.role = $root.wavesenterprise.Role.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                case 4:
                    message.dueTimestamp = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PermissionOp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.PermissionOp} PermissionOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PermissionOp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PermissionOp message.
         * @function verify
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PermissionOp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opType != null && message.hasOwnProperty("opType"))
                switch (message.opType) {
                default:
                    return "opType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.role != null && message.hasOwnProperty("role")) {
                var error = $root.wavesenterprise.Role.verify(message.role);
                if (error)
                    return "role." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.dueTimestamp != null && message.hasOwnProperty("dueTimestamp")) {
                var error = $root.google.protobuf.Int64Value.verify(message.dueTimestamp);
                if (error)
                    return "dueTimestamp." + error;
            }
            return null;
        };

        /**
         * Creates a PermissionOp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.PermissionOp} PermissionOp
         */
        PermissionOp.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.PermissionOp)
                return object;
            var message = new $root.wavesenterprise.PermissionOp();
            switch (object.opType) {
            case "UNKNOWN_OP_TYPE":
            case 0:
                message.opType = 0;
                break;
            case "ADD":
            case 1:
                message.opType = 1;
                break;
            case "REMOVE":
            case 2:
                message.opType = 2;
                break;
            }
            if (object.role != null) {
                if (typeof object.role !== "object")
                    throw TypeError(".wavesenterprise.PermissionOp.role: object expected");
                message.role = $root.wavesenterprise.Role.fromObject(object.role);
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.dueTimestamp != null) {
                if (typeof object.dueTimestamp !== "object")
                    throw TypeError(".wavesenterprise.PermissionOp.dueTimestamp: object expected");
                message.dueTimestamp = $root.google.protobuf.Int64Value.fromObject(object.dueTimestamp);
            }
            return message;
        };

        /**
         * Creates a plain object from a PermissionOp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.PermissionOp
         * @static
         * @param {wavesenterprise.PermissionOp} message PermissionOp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PermissionOp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.opType = options.enums === String ? "UNKNOWN_OP_TYPE" : 0;
                object.role = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.dueTimestamp = null;
            }
            if (message.opType != null && message.hasOwnProperty("opType"))
                object.opType = options.enums === String ? $root.wavesenterprise.OpType[message.opType] : message.opType;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = $root.wavesenterprise.Role.toObject(message.role, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.dueTimestamp != null && message.hasOwnProperty("dueTimestamp"))
                object.dueTimestamp = $root.google.protobuf.Int64Value.toObject(message.dueTimestamp, options);
            return object;
        };

        /**
         * Converts this PermissionOp to JSON.
         * @function toJSON
         * @memberof wavesenterprise.PermissionOp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PermissionOp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PermissionOp;
    })();

    wavesenterprise.CreatePolicyTransaction = (function() {

        /**
         * Properties of a CreatePolicyTransaction.
         * @memberof wavesenterprise
         * @interface ICreatePolicyTransaction
         * @property {Uint8Array|null} [id] CreatePolicyTransaction id
         * @property {Uint8Array|null} [senderPublicKey] CreatePolicyTransaction senderPublicKey
         * @property {string|null} [policyName] CreatePolicyTransaction policyName
         * @property {string|null} [description] CreatePolicyTransaction description
         * @property {Array.<Uint8Array>|null} [recipients] CreatePolicyTransaction recipients
         * @property {Array.<Uint8Array>|null} [owners] CreatePolicyTransaction owners
         * @property {number|Long|null} [timestamp] CreatePolicyTransaction timestamp
         * @property {number|Long|null} [fee] CreatePolicyTransaction fee
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] CreatePolicyTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] CreatePolicyTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] CreatePolicyTransaction proofs
         */

        /**
         * Constructs a new CreatePolicyTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a CreatePolicyTransaction.
         * @implements ICreatePolicyTransaction
         * @constructor
         * @param {wavesenterprise.ICreatePolicyTransaction=} [properties] Properties to set
         */
        function CreatePolicyTransaction(properties) {
            this.recipients = [];
            this.owners = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePolicyTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.id = $util.newBuffer([]);

        /**
         * CreatePolicyTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * CreatePolicyTransaction policyName.
         * @member {string} policyName
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.policyName = "";

        /**
         * CreatePolicyTransaction description.
         * @member {string} description
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.description = "";

        /**
         * CreatePolicyTransaction recipients.
         * @member {Array.<Uint8Array>} recipients
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.recipients = $util.emptyArray;

        /**
         * CreatePolicyTransaction owners.
         * @member {Array.<Uint8Array>} owners
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.owners = $util.emptyArray;

        /**
         * CreatePolicyTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePolicyTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreatePolicyTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.feeAssetId = null;

        /**
         * CreatePolicyTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.atomicBadge = null;

        /**
         * CreatePolicyTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         */
        CreatePolicyTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new CreatePolicyTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {wavesenterprise.ICreatePolicyTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.CreatePolicyTransaction} CreatePolicyTransaction instance
         */
        CreatePolicyTransaction.create = function create(properties) {
            return new CreatePolicyTransaction(properties);
        };

        /**
         * Encodes the specified CreatePolicyTransaction message. Does not implicitly {@link wavesenterprise.CreatePolicyTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {wavesenterprise.ICreatePolicyTransaction} message CreatePolicyTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePolicyTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.policyName != null && Object.hasOwnProperty.call(message, "policyName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.policyName);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.recipients != null && message.recipients.length)
                for (var i = 0; i < message.recipients.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.recipients[i]);
            if (message.owners != null && message.owners.length)
                for (var i = 0; i < message.owners.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.owners[i]);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.fee);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified CreatePolicyTransaction message, length delimited. Does not implicitly {@link wavesenterprise.CreatePolicyTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {wavesenterprise.ICreatePolicyTransaction} message CreatePolicyTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePolicyTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePolicyTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.CreatePolicyTransaction} CreatePolicyTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePolicyTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.CreatePolicyTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.policyName = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    if (!(message.recipients && message.recipients.length))
                        message.recipients = [];
                    message.recipients.push(reader.bytes());
                    break;
                case 6:
                    if (!(message.owners && message.owners.length))
                        message.owners = [];
                    message.owners.push(reader.bytes());
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    message.fee = reader.int64();
                    break;
                case 9:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePolicyTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.CreatePolicyTransaction} CreatePolicyTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePolicyTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePolicyTransaction message.
         * @function verify
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePolicyTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.policyName != null && message.hasOwnProperty("policyName"))
                if (!$util.isString(message.policyName))
                    return "policyName: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.recipients != null && message.hasOwnProperty("recipients")) {
                if (!Array.isArray(message.recipients))
                    return "recipients: array expected";
                for (var i = 0; i < message.recipients.length; ++i)
                    if (!(message.recipients[i] && typeof message.recipients[i].length === "number" || $util.isString(message.recipients[i])))
                        return "recipients: buffer[] expected";
            }
            if (message.owners != null && message.hasOwnProperty("owners")) {
                if (!Array.isArray(message.owners))
                    return "owners: array expected";
                for (var i = 0; i < message.owners.length; ++i)
                    if (!(message.owners[i] && typeof message.owners[i].length === "number" || $util.isString(message.owners[i])))
                        return "owners: buffer[] expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a CreatePolicyTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.CreatePolicyTransaction} CreatePolicyTransaction
         */
        CreatePolicyTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.CreatePolicyTransaction)
                return object;
            var message = new $root.wavesenterprise.CreatePolicyTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.policyName != null)
                message.policyName = String(object.policyName);
            if (object.description != null)
                message.description = String(object.description);
            if (object.recipients) {
                if (!Array.isArray(object.recipients))
                    throw TypeError(".wavesenterprise.CreatePolicyTransaction.recipients: array expected");
                message.recipients = [];
                for (var i = 0; i < object.recipients.length; ++i)
                    if (typeof object.recipients[i] === "string")
                        $util.base64.decode(object.recipients[i], message.recipients[i] = $util.newBuffer($util.base64.length(object.recipients[i])), 0);
                    else if (object.recipients[i].length)
                        message.recipients[i] = object.recipients[i];
            }
            if (object.owners) {
                if (!Array.isArray(object.owners))
                    throw TypeError(".wavesenterprise.CreatePolicyTransaction.owners: array expected");
                message.owners = [];
                for (var i = 0; i < object.owners.length; ++i)
                    if (typeof object.owners[i] === "string")
                        $util.base64.decode(object.owners[i], message.owners[i] = $util.newBuffer($util.base64.length(object.owners[i])), 0);
                    else if (object.owners[i].length)
                        message.owners[i] = object.owners[i];
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.CreatePolicyTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.CreatePolicyTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.CreatePolicyTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePolicyTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @static
         * @param {wavesenterprise.CreatePolicyTransaction} message CreatePolicyTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePolicyTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.recipients = [];
                object.owners = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.policyName = "";
                object.description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.policyName != null && message.hasOwnProperty("policyName"))
                object.policyName = message.policyName;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.recipients && message.recipients.length) {
                object.recipients = [];
                for (var j = 0; j < message.recipients.length; ++j)
                    object.recipients[j] = options.bytes === String ? $util.base64.encode(message.recipients[j], 0, message.recipients[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.recipients[j]) : message.recipients[j];
            }
            if (message.owners && message.owners.length) {
                object.owners = [];
                for (var j = 0; j < message.owners.length; ++j)
                    object.owners[j] = options.bytes === String ? $util.base64.encode(message.owners[j], 0, message.owners[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.owners[j]) : message.owners[j];
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this CreatePolicyTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.CreatePolicyTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePolicyTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePolicyTransaction;
    })();

    wavesenterprise.UpdatePolicyTransaction = (function() {

        /**
         * Properties of an UpdatePolicyTransaction.
         * @memberof wavesenterprise
         * @interface IUpdatePolicyTransaction
         * @property {Uint8Array|null} [id] UpdatePolicyTransaction id
         * @property {Uint8Array|null} [senderPublicKey] UpdatePolicyTransaction senderPublicKey
         * @property {Uint8Array|null} [policyId] UpdatePolicyTransaction policyId
         * @property {Array.<Uint8Array>|null} [recipients] UpdatePolicyTransaction recipients
         * @property {Array.<Uint8Array>|null} [owners] UpdatePolicyTransaction owners
         * @property {wavesenterprise.OpType|null} [opType] UpdatePolicyTransaction opType
         * @property {number|Long|null} [timestamp] UpdatePolicyTransaction timestamp
         * @property {number|Long|null} [fee] UpdatePolicyTransaction fee
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] UpdatePolicyTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] UpdatePolicyTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] UpdatePolicyTransaction proofs
         */

        /**
         * Constructs a new UpdatePolicyTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an UpdatePolicyTransaction.
         * @implements IUpdatePolicyTransaction
         * @constructor
         * @param {wavesenterprise.IUpdatePolicyTransaction=} [properties] Properties to set
         */
        function UpdatePolicyTransaction(properties) {
            this.recipients = [];
            this.owners = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePolicyTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.id = $util.newBuffer([]);

        /**
         * UpdatePolicyTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * UpdatePolicyTransaction policyId.
         * @member {Uint8Array} policyId
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.policyId = $util.newBuffer([]);

        /**
         * UpdatePolicyTransaction recipients.
         * @member {Array.<Uint8Array>} recipients
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.recipients = $util.emptyArray;

        /**
         * UpdatePolicyTransaction owners.
         * @member {Array.<Uint8Array>} owners
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.owners = $util.emptyArray;

        /**
         * UpdatePolicyTransaction opType.
         * @member {wavesenterprise.OpType} opType
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.opType = 0;

        /**
         * UpdatePolicyTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdatePolicyTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdatePolicyTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.feeAssetId = null;

        /**
         * UpdatePolicyTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.atomicBadge = null;

        /**
         * UpdatePolicyTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         */
        UpdatePolicyTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new UpdatePolicyTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {wavesenterprise.IUpdatePolicyTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.UpdatePolicyTransaction} UpdatePolicyTransaction instance
         */
        UpdatePolicyTransaction.create = function create(properties) {
            return new UpdatePolicyTransaction(properties);
        };

        /**
         * Encodes the specified UpdatePolicyTransaction message. Does not implicitly {@link wavesenterprise.UpdatePolicyTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {wavesenterprise.IUpdatePolicyTransaction} message UpdatePolicyTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePolicyTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.policyId != null && Object.hasOwnProperty.call(message, "policyId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.policyId);
            if (message.recipients != null && message.recipients.length)
                for (var i = 0; i < message.recipients.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.recipients[i]);
            if (message.owners != null && message.owners.length)
                for (var i = 0; i < message.owners.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.owners[i]);
            if (message.opType != null && Object.hasOwnProperty.call(message, "opType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.opType);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.fee);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdatePolicyTransaction message, length delimited. Does not implicitly {@link wavesenterprise.UpdatePolicyTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {wavesenterprise.IUpdatePolicyTransaction} message UpdatePolicyTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePolicyTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePolicyTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.UpdatePolicyTransaction} UpdatePolicyTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePolicyTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.UpdatePolicyTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.policyId = reader.bytes();
                    break;
                case 4:
                    if (!(message.recipients && message.recipients.length))
                        message.recipients = [];
                    message.recipients.push(reader.bytes());
                    break;
                case 5:
                    if (!(message.owners && message.owners.length))
                        message.owners = [];
                    message.owners.push(reader.bytes());
                    break;
                case 6:
                    message.opType = reader.int32();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    message.fee = reader.int64();
                    break;
                case 9:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePolicyTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.UpdatePolicyTransaction} UpdatePolicyTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePolicyTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePolicyTransaction message.
         * @function verify
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePolicyTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.policyId != null && message.hasOwnProperty("policyId"))
                if (!(message.policyId && typeof message.policyId.length === "number" || $util.isString(message.policyId)))
                    return "policyId: buffer expected";
            if (message.recipients != null && message.hasOwnProperty("recipients")) {
                if (!Array.isArray(message.recipients))
                    return "recipients: array expected";
                for (var i = 0; i < message.recipients.length; ++i)
                    if (!(message.recipients[i] && typeof message.recipients[i].length === "number" || $util.isString(message.recipients[i])))
                        return "recipients: buffer[] expected";
            }
            if (message.owners != null && message.hasOwnProperty("owners")) {
                if (!Array.isArray(message.owners))
                    return "owners: array expected";
                for (var i = 0; i < message.owners.length; ++i)
                    if (!(message.owners[i] && typeof message.owners[i].length === "number" || $util.isString(message.owners[i])))
                        return "owners: buffer[] expected";
            }
            if (message.opType != null && message.hasOwnProperty("opType"))
                switch (message.opType) {
                default:
                    return "opType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an UpdatePolicyTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.UpdatePolicyTransaction} UpdatePolicyTransaction
         */
        UpdatePolicyTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.UpdatePolicyTransaction)
                return object;
            var message = new $root.wavesenterprise.UpdatePolicyTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.policyId != null)
                if (typeof object.policyId === "string")
                    $util.base64.decode(object.policyId, message.policyId = $util.newBuffer($util.base64.length(object.policyId)), 0);
                else if (object.policyId.length)
                    message.policyId = object.policyId;
            if (object.recipients) {
                if (!Array.isArray(object.recipients))
                    throw TypeError(".wavesenterprise.UpdatePolicyTransaction.recipients: array expected");
                message.recipients = [];
                for (var i = 0; i < object.recipients.length; ++i)
                    if (typeof object.recipients[i] === "string")
                        $util.base64.decode(object.recipients[i], message.recipients[i] = $util.newBuffer($util.base64.length(object.recipients[i])), 0);
                    else if (object.recipients[i].length)
                        message.recipients[i] = object.recipients[i];
            }
            if (object.owners) {
                if (!Array.isArray(object.owners))
                    throw TypeError(".wavesenterprise.UpdatePolicyTransaction.owners: array expected");
                message.owners = [];
                for (var i = 0; i < object.owners.length; ++i)
                    if (typeof object.owners[i] === "string")
                        $util.base64.decode(object.owners[i], message.owners[i] = $util.newBuffer($util.base64.length(object.owners[i])), 0);
                    else if (object.owners[i].length)
                        message.owners[i] = object.owners[i];
            }
            switch (object.opType) {
            case "UNKNOWN_OP_TYPE":
            case 0:
                message.opType = 0;
                break;
            case "ADD":
            case 1:
                message.opType = 1;
                break;
            case "REMOVE":
            case 2:
                message.opType = 2;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.UpdatePolicyTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.UpdatePolicyTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.UpdatePolicyTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdatePolicyTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @static
         * @param {wavesenterprise.UpdatePolicyTransaction} message UpdatePolicyTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdatePolicyTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.recipients = [];
                object.owners = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.policyId = "";
                else {
                    object.policyId = [];
                    if (options.bytes !== Array)
                        object.policyId = $util.newBuffer(object.policyId);
                }
                object.opType = options.enums === String ? "UNKNOWN_OP_TYPE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.policyId != null && message.hasOwnProperty("policyId"))
                object.policyId = options.bytes === String ? $util.base64.encode(message.policyId, 0, message.policyId.length) : options.bytes === Array ? Array.prototype.slice.call(message.policyId) : message.policyId;
            if (message.recipients && message.recipients.length) {
                object.recipients = [];
                for (var j = 0; j < message.recipients.length; ++j)
                    object.recipients[j] = options.bytes === String ? $util.base64.encode(message.recipients[j], 0, message.recipients[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.recipients[j]) : message.recipients[j];
            }
            if (message.owners && message.owners.length) {
                object.owners = [];
                for (var j = 0; j < message.owners.length; ++j)
                    object.owners[j] = options.bytes === String ? $util.base64.encode(message.owners[j], 0, message.owners[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.owners[j]) : message.owners[j];
            }
            if (message.opType != null && message.hasOwnProperty("opType"))
                object.opType = options.enums === String ? $root.wavesenterprise.OpType[message.opType] : message.opType;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this UpdatePolicyTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.UpdatePolicyTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdatePolicyTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdatePolicyTransaction;
    })();

    wavesenterprise.PolicyDataHashTransaction = (function() {

        /**
         * Properties of a PolicyDataHashTransaction.
         * @memberof wavesenterprise
         * @interface IPolicyDataHashTransaction
         * @property {Uint8Array|null} [id] PolicyDataHashTransaction id
         * @property {Uint8Array|null} [senderPublicKey] PolicyDataHashTransaction senderPublicKey
         * @property {Uint8Array|null} [dataHash] PolicyDataHashTransaction dataHash
         * @property {Uint8Array|null} [policyId] PolicyDataHashTransaction policyId
         * @property {number|Long|null} [timestamp] PolicyDataHashTransaction timestamp
         * @property {number|Long|null} [fee] PolicyDataHashTransaction fee
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] PolicyDataHashTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] PolicyDataHashTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] PolicyDataHashTransaction proofs
         */

        /**
         * Constructs a new PolicyDataHashTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a PolicyDataHashTransaction.
         * @implements IPolicyDataHashTransaction
         * @constructor
         * @param {wavesenterprise.IPolicyDataHashTransaction=} [properties] Properties to set
         */
        function PolicyDataHashTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PolicyDataHashTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.id = $util.newBuffer([]);

        /**
         * PolicyDataHashTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * PolicyDataHashTransaction dataHash.
         * @member {Uint8Array} dataHash
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.dataHash = $util.newBuffer([]);

        /**
         * PolicyDataHashTransaction policyId.
         * @member {Uint8Array} policyId
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.policyId = $util.newBuffer([]);

        /**
         * PolicyDataHashTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PolicyDataHashTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PolicyDataHashTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.feeAssetId = null;

        /**
         * PolicyDataHashTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.atomicBadge = null;

        /**
         * PolicyDataHashTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         */
        PolicyDataHashTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new PolicyDataHashTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {wavesenterprise.IPolicyDataHashTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.PolicyDataHashTransaction} PolicyDataHashTransaction instance
         */
        PolicyDataHashTransaction.create = function create(properties) {
            return new PolicyDataHashTransaction(properties);
        };

        /**
         * Encodes the specified PolicyDataHashTransaction message. Does not implicitly {@link wavesenterprise.PolicyDataHashTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {wavesenterprise.IPolicyDataHashTransaction} message PolicyDataHashTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PolicyDataHashTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.dataHash != null && Object.hasOwnProperty.call(message, "dataHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.dataHash);
            if (message.policyId != null && Object.hasOwnProperty.call(message, "policyId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.policyId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified PolicyDataHashTransaction message, length delimited. Does not implicitly {@link wavesenterprise.PolicyDataHashTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {wavesenterprise.IPolicyDataHashTransaction} message PolicyDataHashTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PolicyDataHashTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PolicyDataHashTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.PolicyDataHashTransaction} PolicyDataHashTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PolicyDataHashTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.PolicyDataHashTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.dataHash = reader.bytes();
                    break;
                case 4:
                    message.policyId = reader.bytes();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PolicyDataHashTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.PolicyDataHashTransaction} PolicyDataHashTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PolicyDataHashTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PolicyDataHashTransaction message.
         * @function verify
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PolicyDataHashTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                if (!(message.dataHash && typeof message.dataHash.length === "number" || $util.isString(message.dataHash)))
                    return "dataHash: buffer expected";
            if (message.policyId != null && message.hasOwnProperty("policyId"))
                if (!(message.policyId && typeof message.policyId.length === "number" || $util.isString(message.policyId)))
                    return "policyId: buffer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a PolicyDataHashTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.PolicyDataHashTransaction} PolicyDataHashTransaction
         */
        PolicyDataHashTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.PolicyDataHashTransaction)
                return object;
            var message = new $root.wavesenterprise.PolicyDataHashTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.dataHash != null)
                if (typeof object.dataHash === "string")
                    $util.base64.decode(object.dataHash, message.dataHash = $util.newBuffer($util.base64.length(object.dataHash)), 0);
                else if (object.dataHash.length)
                    message.dataHash = object.dataHash;
            if (object.policyId != null)
                if (typeof object.policyId === "string")
                    $util.base64.decode(object.policyId, message.policyId = $util.newBuffer($util.base64.length(object.policyId)), 0);
                else if (object.policyId.length)
                    message.policyId = object.policyId;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.PolicyDataHashTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.PolicyDataHashTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.PolicyDataHashTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a PolicyDataHashTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @static
         * @param {wavesenterprise.PolicyDataHashTransaction} message PolicyDataHashTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PolicyDataHashTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.dataHash = "";
                else {
                    object.dataHash = [];
                    if (options.bytes !== Array)
                        object.dataHash = $util.newBuffer(object.dataHash);
                }
                if (options.bytes === String)
                    object.policyId = "";
                else {
                    object.policyId = [];
                    if (options.bytes !== Array)
                        object.policyId = $util.newBuffer(object.policyId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.dataHash != null && message.hasOwnProperty("dataHash"))
                object.dataHash = options.bytes === String ? $util.base64.encode(message.dataHash, 0, message.dataHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataHash) : message.dataHash;
            if (message.policyId != null && message.hasOwnProperty("policyId"))
                object.policyId = options.bytes === String ? $util.base64.encode(message.policyId, 0, message.policyId.length) : options.bytes === Array ? Array.prototype.slice.call(message.policyId) : message.policyId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this PolicyDataHashTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.PolicyDataHashTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PolicyDataHashTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PolicyDataHashTransaction;
    })();

    wavesenterprise.CreateContractTransaction = (function() {

        /**
         * Properties of a CreateContractTransaction.
         * @memberof wavesenterprise
         * @interface ICreateContractTransaction
         * @property {Uint8Array|null} [id] CreateContractTransaction id
         * @property {Uint8Array|null} [senderPublicKey] CreateContractTransaction senderPublicKey
         * @property {string|null} [image] CreateContractTransaction image
         * @property {string|null} [imageHash] CreateContractTransaction imageHash
         * @property {string|null} [contractName] CreateContractTransaction contractName
         * @property {Array.<wavesenterprise.IDataEntry>|null} [params] CreateContractTransaction params
         * @property {number|Long|null} [fee] CreateContractTransaction fee
         * @property {number|Long|null} [timestamp] CreateContractTransaction timestamp
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] CreateContractTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] CreateContractTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] CreateContractTransaction proofs
         */

        /**
         * Constructs a new CreateContractTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a CreateContractTransaction.
         * @implements ICreateContractTransaction
         * @constructor
         * @param {wavesenterprise.ICreateContractTransaction=} [properties] Properties to set
         */
        function CreateContractTransaction(properties) {
            this.params = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateContractTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.id = $util.newBuffer([]);

        /**
         * CreateContractTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * CreateContractTransaction image.
         * @member {string} image
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.image = "";

        /**
         * CreateContractTransaction imageHash.
         * @member {string} imageHash
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.imageHash = "";

        /**
         * CreateContractTransaction contractName.
         * @member {string} contractName
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.contractName = "";

        /**
         * CreateContractTransaction params.
         * @member {Array.<wavesenterprise.IDataEntry>} params
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.params = $util.emptyArray;

        /**
         * CreateContractTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateContractTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateContractTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.feeAssetId = null;

        /**
         * CreateContractTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.atomicBadge = null;

        /**
         * CreateContractTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         */
        CreateContractTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new CreateContractTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {wavesenterprise.ICreateContractTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.CreateContractTransaction} CreateContractTransaction instance
         */
        CreateContractTransaction.create = function create(properties) {
            return new CreateContractTransaction(properties);
        };

        /**
         * Encodes the specified CreateContractTransaction message. Does not implicitly {@link wavesenterprise.CreateContractTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {wavesenterprise.ICreateContractTransaction} message CreateContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContractTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
            if (message.imageHash != null && Object.hasOwnProperty.call(message, "imageHash"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.imageHash);
            if (message.contractName != null && Object.hasOwnProperty.call(message, "contractName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.contractName);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.wavesenterprise.DataEntry.encode(message.params[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateContractTransaction message, length delimited. Does not implicitly {@link wavesenterprise.CreateContractTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {wavesenterprise.ICreateContractTransaction} message CreateContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContractTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateContractTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.CreateContractTransaction} CreateContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContractTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.CreateContractTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.image = reader.string();
                    break;
                case 4:
                    message.imageHash = reader.string();
                    break;
                case 5:
                    message.contractName = reader.string();
                    break;
                case 6:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push($root.wavesenterprise.DataEntry.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.fee = reader.int64();
                    break;
                case 8:
                    message.timestamp = reader.int64();
                    break;
                case 9:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateContractTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.CreateContractTransaction} CreateContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContractTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateContractTransaction message.
         * @function verify
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateContractTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.imageHash != null && message.hasOwnProperty("imageHash"))
                if (!$util.isString(message.imageHash))
                    return "imageHash: string expected";
            if (message.contractName != null && message.hasOwnProperty("contractName"))
                if (!$util.isString(message.contractName))
                    return "contractName: string expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.wavesenterprise.DataEntry.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a CreateContractTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.CreateContractTransaction} CreateContractTransaction
         */
        CreateContractTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.CreateContractTransaction)
                return object;
            var message = new $root.wavesenterprise.CreateContractTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.image != null)
                message.image = String(object.image);
            if (object.imageHash != null)
                message.imageHash = String(object.imageHash);
            if (object.contractName != null)
                message.contractName = String(object.contractName);
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".wavesenterprise.CreateContractTransaction.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".wavesenterprise.CreateContractTransaction.params: object expected");
                    message.params[i] = $root.wavesenterprise.DataEntry.fromObject(object.params[i]);
                }
            }
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.CreateContractTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.CreateContractTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.CreateContractTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateContractTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.CreateContractTransaction
         * @static
         * @param {wavesenterprise.CreateContractTransaction} message CreateContractTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateContractTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.params = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.image = "";
                object.imageHash = "";
                object.contractName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.imageHash != null && message.hasOwnProperty("imageHash"))
                object.imageHash = message.imageHash;
            if (message.contractName != null && message.hasOwnProperty("contractName"))
                object.contractName = message.contractName;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.wavesenterprise.DataEntry.toObject(message.params[j], options);
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this CreateContractTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.CreateContractTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateContractTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateContractTransaction;
    })();

    wavesenterprise.CallContractTransaction = (function() {

        /**
         * Properties of a CallContractTransaction.
         * @memberof wavesenterprise
         * @interface ICallContractTransaction
         * @property {Uint8Array|null} [id] CallContractTransaction id
         * @property {Uint8Array|null} [senderPublicKey] CallContractTransaction senderPublicKey
         * @property {Uint8Array|null} [contractId] CallContractTransaction contractId
         * @property {Array.<wavesenterprise.IDataEntry>|null} [params] CallContractTransaction params
         * @property {number|Long|null} [fee] CallContractTransaction fee
         * @property {number|Long|null} [timestamp] CallContractTransaction timestamp
         * @property {number|null} [contractVersion] CallContractTransaction contractVersion
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] CallContractTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] CallContractTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] CallContractTransaction proofs
         */

        /**
         * Constructs a new CallContractTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a CallContractTransaction.
         * @implements ICallContractTransaction
         * @constructor
         * @param {wavesenterprise.ICallContractTransaction=} [properties] Properties to set
         */
        function CallContractTransaction(properties) {
            this.params = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CallContractTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.id = $util.newBuffer([]);

        /**
         * CallContractTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * CallContractTransaction contractId.
         * @member {Uint8Array} contractId
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.contractId = $util.newBuffer([]);

        /**
         * CallContractTransaction params.
         * @member {Array.<wavesenterprise.IDataEntry>} params
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.params = $util.emptyArray;

        /**
         * CallContractTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CallContractTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CallContractTransaction contractVersion.
         * @member {number} contractVersion
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.contractVersion = 0;

        /**
         * CallContractTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.feeAssetId = null;

        /**
         * CallContractTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.atomicBadge = null;

        /**
         * CallContractTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         */
        CallContractTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new CallContractTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {wavesenterprise.ICallContractTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.CallContractTransaction} CallContractTransaction instance
         */
        CallContractTransaction.create = function create(properties) {
            return new CallContractTransaction(properties);
        };

        /**
         * Encodes the specified CallContractTransaction message. Does not implicitly {@link wavesenterprise.CallContractTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {wavesenterprise.ICallContractTransaction} message CallContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallContractTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    $root.wavesenterprise.DataEntry.encode(message.params[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
            if (message.contractVersion != null && Object.hasOwnProperty.call(message, "contractVersion"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.contractVersion);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified CallContractTransaction message, length delimited. Does not implicitly {@link wavesenterprise.CallContractTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {wavesenterprise.ICallContractTransaction} message CallContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallContractTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallContractTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.CallContractTransaction} CallContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallContractTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.CallContractTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.contractId = reader.bytes();
                    break;
                case 4:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push($root.wavesenterprise.DataEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.fee = reader.int64();
                    break;
                case 6:
                    message.timestamp = reader.int64();
                    break;
                case 7:
                    message.contractVersion = reader.int32();
                    break;
                case 8:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallContractTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.CallContractTransaction} CallContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallContractTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallContractTransaction message.
         * @function verify
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallContractTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i) {
                    var error = $root.wavesenterprise.DataEntry.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.contractVersion != null && message.hasOwnProperty("contractVersion"))
                if (!$util.isInteger(message.contractVersion))
                    return "contractVersion: integer expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a CallContractTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.CallContractTransaction} CallContractTransaction
         */
        CallContractTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.CallContractTransaction)
                return object;
            var message = new $root.wavesenterprise.CallContractTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length)
                    message.contractId = object.contractId;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".wavesenterprise.CallContractTransaction.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".wavesenterprise.CallContractTransaction.params: object expected");
                    message.params[i] = $root.wavesenterprise.DataEntry.fromObject(object.params[i]);
                }
            }
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.contractVersion != null)
                message.contractVersion = object.contractVersion | 0;
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.CallContractTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.CallContractTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.CallContractTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a CallContractTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.CallContractTransaction
         * @static
         * @param {wavesenterprise.CallContractTransaction} message CallContractTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CallContractTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.params = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.contractVersion = 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = $root.wavesenterprise.DataEntry.toObject(message.params[j], options);
            }
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.contractVersion != null && message.hasOwnProperty("contractVersion"))
                object.contractVersion = message.contractVersion;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this CallContractTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.CallContractTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CallContractTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CallContractTransaction;
    })();

    wavesenterprise.ExecutedContractTransaction = (function() {

        /**
         * Properties of an ExecutedContractTransaction.
         * @memberof wavesenterprise
         * @interface IExecutedContractTransaction
         * @property {Uint8Array|null} [id] ExecutedContractTransaction id
         * @property {Uint8Array|null} [senderPublicKey] ExecutedContractTransaction senderPublicKey
         * @property {wavesenterprise.IExecutableTransaction|null} [tx] ExecutedContractTransaction tx
         * @property {Array.<wavesenterprise.IDataEntry>|null} [results] ExecutedContractTransaction results
         * @property {Uint8Array|null} [resultsHash] ExecutedContractTransaction resultsHash
         * @property {Array.<wavesenterprise.IValidationProof>|null} [validationProofs] ExecutedContractTransaction validationProofs
         * @property {number|Long|null} [timestamp] ExecutedContractTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] ExecutedContractTransaction proofs
         */

        /**
         * Constructs a new ExecutedContractTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an ExecutedContractTransaction.
         * @implements IExecutedContractTransaction
         * @constructor
         * @param {wavesenterprise.IExecutedContractTransaction=} [properties] Properties to set
         */
        function ExecutedContractTransaction(properties) {
            this.results = [];
            this.validationProofs = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecutedContractTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.id = $util.newBuffer([]);

        /**
         * ExecutedContractTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * ExecutedContractTransaction tx.
         * @member {wavesenterprise.IExecutableTransaction|null|undefined} tx
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.tx = null;

        /**
         * ExecutedContractTransaction results.
         * @member {Array.<wavesenterprise.IDataEntry>} results
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.results = $util.emptyArray;

        /**
         * ExecutedContractTransaction resultsHash.
         * @member {Uint8Array} resultsHash
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.resultsHash = $util.newBuffer([]);

        /**
         * ExecutedContractTransaction validationProofs.
         * @member {Array.<wavesenterprise.IValidationProof>} validationProofs
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.validationProofs = $util.emptyArray;

        /**
         * ExecutedContractTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ExecutedContractTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         */
        ExecutedContractTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new ExecutedContractTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {wavesenterprise.IExecutedContractTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.ExecutedContractTransaction} ExecutedContractTransaction instance
         */
        ExecutedContractTransaction.create = function create(properties) {
            return new ExecutedContractTransaction(properties);
        };

        /**
         * Encodes the specified ExecutedContractTransaction message. Does not implicitly {@link wavesenterprise.ExecutedContractTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {wavesenterprise.IExecutedContractTransaction} message ExecutedContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutedContractTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                $root.wavesenterprise.ExecutableTransaction.encode(message.tx, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.wavesenterprise.DataEntry.encode(message.results[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.resultsHash != null && Object.hasOwnProperty.call(message, "resultsHash"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.resultsHash);
            if (message.validationProofs != null && message.validationProofs.length)
                for (var i = 0; i < message.validationProofs.length; ++i)
                    $root.wavesenterprise.ValidationProof.encode(message.validationProofs[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified ExecutedContractTransaction message, length delimited. Does not implicitly {@link wavesenterprise.ExecutedContractTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {wavesenterprise.IExecutedContractTransaction} message ExecutedContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutedContractTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecutedContractTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.ExecutedContractTransaction} ExecutedContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutedContractTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.ExecutedContractTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.tx = $root.wavesenterprise.ExecutableTransaction.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.wavesenterprise.DataEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.resultsHash = reader.bytes();
                    break;
                case 6:
                    if (!(message.validationProofs && message.validationProofs.length))
                        message.validationProofs = [];
                    message.validationProofs.push($root.wavesenterprise.ValidationProof.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecutedContractTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.ExecutedContractTransaction} ExecutedContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutedContractTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecutedContractTransaction message.
         * @function verify
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecutedContractTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.tx != null && message.hasOwnProperty("tx")) {
                var error = $root.wavesenterprise.ExecutableTransaction.verify(message.tx);
                if (error)
                    return "tx." + error;
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i) {
                    var error = $root.wavesenterprise.DataEntry.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            if (message.resultsHash != null && message.hasOwnProperty("resultsHash"))
                if (!(message.resultsHash && typeof message.resultsHash.length === "number" || $util.isString(message.resultsHash)))
                    return "resultsHash: buffer expected";
            if (message.validationProofs != null && message.hasOwnProperty("validationProofs")) {
                if (!Array.isArray(message.validationProofs))
                    return "validationProofs: array expected";
                for (var i = 0; i < message.validationProofs.length; ++i) {
                    var error = $root.wavesenterprise.ValidationProof.verify(message.validationProofs[i]);
                    if (error)
                        return "validationProofs." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an ExecutedContractTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.ExecutedContractTransaction} ExecutedContractTransaction
         */
        ExecutedContractTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.ExecutedContractTransaction)
                return object;
            var message = new $root.wavesenterprise.ExecutedContractTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.tx != null) {
                if (typeof object.tx !== "object")
                    throw TypeError(".wavesenterprise.ExecutedContractTransaction.tx: object expected");
                message.tx = $root.wavesenterprise.ExecutableTransaction.fromObject(object.tx);
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".wavesenterprise.ExecutedContractTransaction.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".wavesenterprise.ExecutedContractTransaction.results: object expected");
                    message.results[i] = $root.wavesenterprise.DataEntry.fromObject(object.results[i]);
                }
            }
            if (object.resultsHash != null)
                if (typeof object.resultsHash === "string")
                    $util.base64.decode(object.resultsHash, message.resultsHash = $util.newBuffer($util.base64.length(object.resultsHash)), 0);
                else if (object.resultsHash.length)
                    message.resultsHash = object.resultsHash;
            if (object.validationProofs) {
                if (!Array.isArray(object.validationProofs))
                    throw TypeError(".wavesenterprise.ExecutedContractTransaction.validationProofs: array expected");
                message.validationProofs = [];
                for (var i = 0; i < object.validationProofs.length; ++i) {
                    if (typeof object.validationProofs[i] !== "object")
                        throw TypeError(".wavesenterprise.ExecutedContractTransaction.validationProofs: object expected");
                    message.validationProofs[i] = $root.wavesenterprise.ValidationProof.fromObject(object.validationProofs[i]);
                }
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.ExecutedContractTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an ExecutedContractTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @static
         * @param {wavesenterprise.ExecutedContractTransaction} message ExecutedContractTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecutedContractTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.results = [];
                object.validationProofs = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.tx = null;
                if (options.bytes === String)
                    object.resultsHash = "";
                else {
                    object.resultsHash = [];
                    if (options.bytes !== Array)
                        object.resultsHash = $util.newBuffer(object.resultsHash);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.tx != null && message.hasOwnProperty("tx"))
                object.tx = $root.wavesenterprise.ExecutableTransaction.toObject(message.tx, options);
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.wavesenterprise.DataEntry.toObject(message.results[j], options);
            }
            if (message.resultsHash != null && message.hasOwnProperty("resultsHash"))
                object.resultsHash = options.bytes === String ? $util.base64.encode(message.resultsHash, 0, message.resultsHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.resultsHash) : message.resultsHash;
            if (message.validationProofs && message.validationProofs.length) {
                object.validationProofs = [];
                for (var j = 0; j < message.validationProofs.length; ++j)
                    object.validationProofs[j] = $root.wavesenterprise.ValidationProof.toObject(message.validationProofs[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this ExecutedContractTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.ExecutedContractTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecutedContractTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExecutedContractTransaction;
    })();

    wavesenterprise.ExecutableTransaction = (function() {

        /**
         * Properties of an ExecutableTransaction.
         * @memberof wavesenterprise
         * @interface IExecutableTransaction
         * @property {number|null} [version] ExecutableTransaction version
         * @property {wavesenterprise.ICreateContractTransaction|null} [createContractTransaction] ExecutableTransaction createContractTransaction
         * @property {wavesenterprise.ICallContractTransaction|null} [callContractTransaction] ExecutableTransaction callContractTransaction
         * @property {wavesenterprise.IUpdateContractTransaction|null} [updateContractTransaction] ExecutableTransaction updateContractTransaction
         */

        /**
         * Constructs a new ExecutableTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an ExecutableTransaction.
         * @implements IExecutableTransaction
         * @constructor
         * @param {wavesenterprise.IExecutableTransaction=} [properties] Properties to set
         */
        function ExecutableTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecutableTransaction version.
         * @member {number} version
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         */
        ExecutableTransaction.prototype.version = 0;

        /**
         * ExecutableTransaction createContractTransaction.
         * @member {wavesenterprise.ICreateContractTransaction|null|undefined} createContractTransaction
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         */
        ExecutableTransaction.prototype.createContractTransaction = null;

        /**
         * ExecutableTransaction callContractTransaction.
         * @member {wavesenterprise.ICallContractTransaction|null|undefined} callContractTransaction
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         */
        ExecutableTransaction.prototype.callContractTransaction = null;

        /**
         * ExecutableTransaction updateContractTransaction.
         * @member {wavesenterprise.IUpdateContractTransaction|null|undefined} updateContractTransaction
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         */
        ExecutableTransaction.prototype.updateContractTransaction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ExecutableTransaction transaction.
         * @member {"createContractTransaction"|"callContractTransaction"|"updateContractTransaction"|undefined} transaction
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         */
        Object.defineProperty(ExecutableTransaction.prototype, "transaction", {
            get: $util.oneOfGetter($oneOfFields = ["createContractTransaction", "callContractTransaction", "updateContractTransaction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ExecutableTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {wavesenterprise.IExecutableTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.ExecutableTransaction} ExecutableTransaction instance
         */
        ExecutableTransaction.create = function create(properties) {
            return new ExecutableTransaction(properties);
        };

        /**
         * Encodes the specified ExecutableTransaction message. Does not implicitly {@link wavesenterprise.ExecutableTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {wavesenterprise.IExecutableTransaction} message ExecutableTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutableTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.createContractTransaction != null && Object.hasOwnProperty.call(message, "createContractTransaction"))
                $root.wavesenterprise.CreateContractTransaction.encode(message.createContractTransaction, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.callContractTransaction != null && Object.hasOwnProperty.call(message, "callContractTransaction"))
                $root.wavesenterprise.CallContractTransaction.encode(message.callContractTransaction, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.updateContractTransaction != null && Object.hasOwnProperty.call(message, "updateContractTransaction"))
                $root.wavesenterprise.UpdateContractTransaction.encode(message.updateContractTransaction, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExecutableTransaction message, length delimited. Does not implicitly {@link wavesenterprise.ExecutableTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {wavesenterprise.IExecutableTransaction} message ExecutableTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecutableTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecutableTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.ExecutableTransaction} ExecutableTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutableTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.ExecutableTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 1000:
                    message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecutableTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.ExecutableTransaction} ExecutableTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecutableTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecutableTransaction message.
         * @function verify
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecutableTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreateContractTransaction.verify(message.createContractTransaction);
                    if (error)
                        return "createContractTransaction." + error;
                }
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CallContractTransaction.verify(message.callContractTransaction);
                    if (error)
                        return "callContractTransaction." + error;
                }
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.UpdateContractTransaction.verify(message.updateContractTransaction);
                    if (error)
                        return "updateContractTransaction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ExecutableTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.ExecutableTransaction} ExecutableTransaction
         */
        ExecutableTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.ExecutableTransaction)
                return object;
            var message = new $root.wavesenterprise.ExecutableTransaction();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.createContractTransaction != null) {
                if (typeof object.createContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.ExecutableTransaction.createContractTransaction: object expected");
                message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.fromObject(object.createContractTransaction);
            }
            if (object.callContractTransaction != null) {
                if (typeof object.callContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.ExecutableTransaction.callContractTransaction: object expected");
                message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.fromObject(object.callContractTransaction);
            }
            if (object.updateContractTransaction != null) {
                if (typeof object.updateContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.ExecutableTransaction.updateContractTransaction: object expected");
                message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.fromObject(object.updateContractTransaction);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExecutableTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.ExecutableTransaction
         * @static
         * @param {wavesenterprise.ExecutableTransaction} message ExecutableTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecutableTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = 0;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                object.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.toObject(message.createContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "createContractTransaction";
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                object.callContractTransaction = $root.wavesenterprise.CallContractTransaction.toObject(message.callContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "callContractTransaction";
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                object.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.toObject(message.updateContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "updateContractTransaction";
            }
            return object;
        };

        /**
         * Converts this ExecutableTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.ExecutableTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecutableTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExecutableTransaction;
    })();

    wavesenterprise.UpdateContractTransaction = (function() {

        /**
         * Properties of an UpdateContractTransaction.
         * @memberof wavesenterprise
         * @interface IUpdateContractTransaction
         * @property {Uint8Array|null} [id] UpdateContractTransaction id
         * @property {Uint8Array|null} [senderPublicKey] UpdateContractTransaction senderPublicKey
         * @property {Uint8Array|null} [contractId] UpdateContractTransaction contractId
         * @property {string|null} [image] UpdateContractTransaction image
         * @property {string|null} [imageHash] UpdateContractTransaction imageHash
         * @property {number|Long|null} [fee] UpdateContractTransaction fee
         * @property {number|Long|null} [timestamp] UpdateContractTransaction timestamp
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] UpdateContractTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] UpdateContractTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] UpdateContractTransaction proofs
         */

        /**
         * Constructs a new UpdateContractTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an UpdateContractTransaction.
         * @implements IUpdateContractTransaction
         * @constructor
         * @param {wavesenterprise.IUpdateContractTransaction=} [properties] Properties to set
         */
        function UpdateContractTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateContractTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.id = $util.newBuffer([]);

        /**
         * UpdateContractTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * UpdateContractTransaction contractId.
         * @member {Uint8Array} contractId
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.contractId = $util.newBuffer([]);

        /**
         * UpdateContractTransaction image.
         * @member {string} image
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.image = "";

        /**
         * UpdateContractTransaction imageHash.
         * @member {string} imageHash
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.imageHash = "";

        /**
         * UpdateContractTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateContractTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateContractTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.feeAssetId = null;

        /**
         * UpdateContractTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.atomicBadge = null;

        /**
         * UpdateContractTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         */
        UpdateContractTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new UpdateContractTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {wavesenterprise.IUpdateContractTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.UpdateContractTransaction} UpdateContractTransaction instance
         */
        UpdateContractTransaction.create = function create(properties) {
            return new UpdateContractTransaction(properties);
        };

        /**
         * Encodes the specified UpdateContractTransaction message. Does not implicitly {@link wavesenterprise.UpdateContractTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {wavesenterprise.IUpdateContractTransaction} message UpdateContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateContractTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.image);
            if (message.imageHash != null && Object.hasOwnProperty.call(message, "imageHash"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.imageHash);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.timestamp);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateContractTransaction message, length delimited. Does not implicitly {@link wavesenterprise.UpdateContractTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {wavesenterprise.IUpdateContractTransaction} message UpdateContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateContractTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateContractTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.UpdateContractTransaction} UpdateContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateContractTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.UpdateContractTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.contractId = reader.bytes();
                    break;
                case 4:
                    message.image = reader.string();
                    break;
                case 5:
                    message.imageHash = reader.string();
                    break;
                case 6:
                    message.fee = reader.int64();
                    break;
                case 7:
                    message.timestamp = reader.int64();
                    break;
                case 8:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateContractTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.UpdateContractTransaction} UpdateContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateContractTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateContractTransaction message.
         * @function verify
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateContractTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.imageHash != null && message.hasOwnProperty("imageHash"))
                if (!$util.isString(message.imageHash))
                    return "imageHash: string expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an UpdateContractTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.UpdateContractTransaction} UpdateContractTransaction
         */
        UpdateContractTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.UpdateContractTransaction)
                return object;
            var message = new $root.wavesenterprise.UpdateContractTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length)
                    message.contractId = object.contractId;
            if (object.image != null)
                message.image = String(object.image);
            if (object.imageHash != null)
                message.imageHash = String(object.imageHash);
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.UpdateContractTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.UpdateContractTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.UpdateContractTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateContractTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.UpdateContractTransaction
         * @static
         * @param {wavesenterprise.UpdateContractTransaction} message UpdateContractTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateContractTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                object.image = "";
                object.imageHash = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.imageHash != null && message.hasOwnProperty("imageHash"))
                object.imageHash = message.imageHash;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this UpdateContractTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.UpdateContractTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateContractTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateContractTransaction;
    })();

    wavesenterprise.ValidationProof = (function() {

        /**
         * Properties of a ValidationProof.
         * @memberof wavesenterprise
         * @interface IValidationProof
         * @property {Uint8Array|null} [validatorPublicKey] ValidationProof validatorPublicKey
         * @property {Uint8Array|null} [signature] ValidationProof signature
         */

        /**
         * Constructs a new ValidationProof.
         * @memberof wavesenterprise
         * @classdesc Represents a ValidationProof.
         * @implements IValidationProof
         * @constructor
         * @param {wavesenterprise.IValidationProof=} [properties] Properties to set
         */
        function ValidationProof(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidationProof validatorPublicKey.
         * @member {Uint8Array} validatorPublicKey
         * @memberof wavesenterprise.ValidationProof
         * @instance
         */
        ValidationProof.prototype.validatorPublicKey = $util.newBuffer([]);

        /**
         * ValidationProof signature.
         * @member {Uint8Array} signature
         * @memberof wavesenterprise.ValidationProof
         * @instance
         */
        ValidationProof.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new ValidationProof instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {wavesenterprise.IValidationProof=} [properties] Properties to set
         * @returns {wavesenterprise.ValidationProof} ValidationProof instance
         */
        ValidationProof.create = function create(properties) {
            return new ValidationProof(properties);
        };

        /**
         * Encodes the specified ValidationProof message. Does not implicitly {@link wavesenterprise.ValidationProof.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {wavesenterprise.IValidationProof} message ValidationProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidationProof.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validatorPublicKey != null && Object.hasOwnProperty.call(message, "validatorPublicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.validatorPublicKey);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified ValidationProof message, length delimited. Does not implicitly {@link wavesenterprise.ValidationProof.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {wavesenterprise.IValidationProof} message ValidationProof message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidationProof.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidationProof message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.ValidationProof} ValidationProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidationProof.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.ValidationProof();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.validatorPublicKey = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidationProof message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.ValidationProof} ValidationProof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidationProof.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidationProof message.
         * @function verify
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidationProof.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.validatorPublicKey != null && message.hasOwnProperty("validatorPublicKey"))
                if (!(message.validatorPublicKey && typeof message.validatorPublicKey.length === "number" || $util.isString(message.validatorPublicKey)))
                    return "validatorPublicKey: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a ValidationProof message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.ValidationProof} ValidationProof
         */
        ValidationProof.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.ValidationProof)
                return object;
            var message = new $root.wavesenterprise.ValidationProof();
            if (object.validatorPublicKey != null)
                if (typeof object.validatorPublicKey === "string")
                    $util.base64.decode(object.validatorPublicKey, message.validatorPublicKey = $util.newBuffer($util.base64.length(object.validatorPublicKey)), 0);
                else if (object.validatorPublicKey.length)
                    message.validatorPublicKey = object.validatorPublicKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a ValidationProof message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.ValidationProof
         * @static
         * @param {wavesenterprise.ValidationProof} message ValidationProof
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidationProof.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.validatorPublicKey = "";
                else {
                    object.validatorPublicKey = [];
                    if (options.bytes !== Array)
                        object.validatorPublicKey = $util.newBuffer(object.validatorPublicKey);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
            }
            if (message.validatorPublicKey != null && message.hasOwnProperty("validatorPublicKey"))
                object.validatorPublicKey = options.bytes === String ? $util.base64.encode(message.validatorPublicKey, 0, message.validatorPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.validatorPublicKey) : message.validatorPublicKey;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this ValidationProof to JSON.
         * @function toJSON
         * @memberof wavesenterprise.ValidationProof
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidationProof.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidationProof;
    })();

    wavesenterprise.DisableContractTransaction = (function() {

        /**
         * Properties of a DisableContractTransaction.
         * @memberof wavesenterprise
         * @interface IDisableContractTransaction
         * @property {Uint8Array|null} [id] DisableContractTransaction id
         * @property {Uint8Array|null} [senderPublicKey] DisableContractTransaction senderPublicKey
         * @property {Uint8Array|null} [contractId] DisableContractTransaction contractId
         * @property {number|Long|null} [fee] DisableContractTransaction fee
         * @property {number|Long|null} [timestamp] DisableContractTransaction timestamp
         * @property {google.protobuf.IBytesValue|null} [feeAssetId] DisableContractTransaction feeAssetId
         * @property {wavesenterprise.IAtomicBadge|null} [atomicBadge] DisableContractTransaction atomicBadge
         * @property {Array.<Uint8Array>|null} [proofs] DisableContractTransaction proofs
         */

        /**
         * Constructs a new DisableContractTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a DisableContractTransaction.
         * @implements IDisableContractTransaction
         * @constructor
         * @param {wavesenterprise.IDisableContractTransaction=} [properties] Properties to set
         */
        function DisableContractTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisableContractTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.id = $util.newBuffer([]);

        /**
         * DisableContractTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * DisableContractTransaction contractId.
         * @member {Uint8Array} contractId
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.contractId = $util.newBuffer([]);

        /**
         * DisableContractTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DisableContractTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DisableContractTransaction feeAssetId.
         * @member {google.protobuf.IBytesValue|null|undefined} feeAssetId
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.feeAssetId = null;

        /**
         * DisableContractTransaction atomicBadge.
         * @member {wavesenterprise.IAtomicBadge|null|undefined} atomicBadge
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.atomicBadge = null;

        /**
         * DisableContractTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         */
        DisableContractTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new DisableContractTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {wavesenterprise.IDisableContractTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.DisableContractTransaction} DisableContractTransaction instance
         */
        DisableContractTransaction.create = function create(properties) {
            return new DisableContractTransaction(properties);
        };

        /**
         * Encodes the specified DisableContractTransaction message. Does not implicitly {@link wavesenterprise.DisableContractTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {wavesenterprise.IDisableContractTransaction} message DisableContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableContractTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.feeAssetId != null && Object.hasOwnProperty.call(message, "feeAssetId"))
                $root.google.protobuf.BytesValue.encode(message.feeAssetId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.atomicBadge != null && Object.hasOwnProperty.call(message, "atomicBadge"))
                $root.wavesenterprise.AtomicBadge.encode(message.atomicBadge, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified DisableContractTransaction message, length delimited. Does not implicitly {@link wavesenterprise.DisableContractTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {wavesenterprise.IDisableContractTransaction} message DisableContractTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisableContractTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisableContractTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.DisableContractTransaction} DisableContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableContractTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.DisableContractTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.contractId = reader.bytes();
                    break;
                case 4:
                    message.fee = reader.int64();
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    message.feeAssetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.atomicBadge = $root.wavesenterprise.AtomicBadge.decode(reader, reader.uint32());
                    break;
                case 8:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisableContractTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.DisableContractTransaction} DisableContractTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisableContractTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisableContractTransaction message.
         * @function verify
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisableContractTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId")) {
                var error = $root.google.protobuf.BytesValue.verify(message.feeAssetId);
                if (error)
                    return "feeAssetId." + error;
            }
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge")) {
                var error = $root.wavesenterprise.AtomicBadge.verify(message.atomicBadge);
                if (error)
                    return "atomicBadge." + error;
            }
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a DisableContractTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.DisableContractTransaction} DisableContractTransaction
         */
        DisableContractTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.DisableContractTransaction)
                return object;
            var message = new $root.wavesenterprise.DisableContractTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length)
                    message.contractId = object.contractId;
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.feeAssetId != null) {
                if (typeof object.feeAssetId !== "object")
                    throw TypeError(".wavesenterprise.DisableContractTransaction.feeAssetId: object expected");
                message.feeAssetId = $root.google.protobuf.BytesValue.fromObject(object.feeAssetId);
            }
            if (object.atomicBadge != null) {
                if (typeof object.atomicBadge !== "object")
                    throw TypeError(".wavesenterprise.DisableContractTransaction.atomicBadge: object expected");
                message.atomicBadge = $root.wavesenterprise.AtomicBadge.fromObject(object.atomicBadge);
            }
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.DisableContractTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a DisableContractTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.DisableContractTransaction
         * @static
         * @param {wavesenterprise.DisableContractTransaction} message DisableContractTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisableContractTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.feeAssetId = null;
                object.atomicBadge = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.feeAssetId != null && message.hasOwnProperty("feeAssetId"))
                object.feeAssetId = $root.google.protobuf.BytesValue.toObject(message.feeAssetId, options);
            if (message.atomicBadge != null && message.hasOwnProperty("atomicBadge"))
                object.atomicBadge = $root.wavesenterprise.AtomicBadge.toObject(message.atomicBadge, options);
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this DisableContractTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.DisableContractTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisableContractTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisableContractTransaction;
    })();

    wavesenterprise.SetScriptTransaction = (function() {

        /**
         * Properties of a SetScriptTransaction.
         * @memberof wavesenterprise
         * @interface ISetScriptTransaction
         * @property {Uint8Array|null} [id] SetScriptTransaction id
         * @property {number|null} [chainId] SetScriptTransaction chainId
         * @property {Uint8Array|null} [senderPublicKey] SetScriptTransaction senderPublicKey
         * @property {google.protobuf.IBytesValue|null} [script] SetScriptTransaction script
         * @property {Uint8Array|null} [name] SetScriptTransaction name
         * @property {Uint8Array|null} [description] SetScriptTransaction description
         * @property {number|Long|null} [fee] SetScriptTransaction fee
         * @property {number|Long|null} [timestamp] SetScriptTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] SetScriptTransaction proofs
         */

        /**
         * Constructs a new SetScriptTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents a SetScriptTransaction.
         * @implements ISetScriptTransaction
         * @constructor
         * @param {wavesenterprise.ISetScriptTransaction=} [properties] Properties to set
         */
        function SetScriptTransaction(properties) {
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetScriptTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.id = $util.newBuffer([]);

        /**
         * SetScriptTransaction chainId.
         * @member {number} chainId
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.chainId = 0;

        /**
         * SetScriptTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * SetScriptTransaction script.
         * @member {google.protobuf.IBytesValue|null|undefined} script
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.script = null;

        /**
         * SetScriptTransaction name.
         * @member {Uint8Array} name
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.name = $util.newBuffer([]);

        /**
         * SetScriptTransaction description.
         * @member {Uint8Array} description
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.description = $util.newBuffer([]);

        /**
         * SetScriptTransaction fee.
         * @member {number|Long} fee
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.fee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetScriptTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SetScriptTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         */
        SetScriptTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new SetScriptTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetScriptTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.SetScriptTransaction} SetScriptTransaction instance
         */
        SetScriptTransaction.create = function create(properties) {
            return new SetScriptTransaction(properties);
        };

        /**
         * Encodes the specified SetScriptTransaction message. Does not implicitly {@link wavesenterprise.SetScriptTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetScriptTransaction} message SetScriptTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetScriptTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chainId);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderPublicKey);
            if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                $root.google.protobuf.BytesValue.encode(message.script, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.description);
            if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.fee);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified SetScriptTransaction message, length delimited. Does not implicitly {@link wavesenterprise.SetScriptTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {wavesenterprise.ISetScriptTransaction} message SetScriptTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetScriptTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetScriptTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.SetScriptTransaction} SetScriptTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetScriptTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.SetScriptTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.chainId = reader.int32();
                    break;
                case 3:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 4:
                    message.script = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.name = reader.bytes();
                    break;
                case 6:
                    message.description = reader.bytes();
                    break;
                case 7:
                    message.fee = reader.int64();
                    break;
                case 8:
                    message.timestamp = reader.int64();
                    break;
                case 9:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetScriptTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.SetScriptTransaction} SetScriptTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetScriptTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetScriptTransaction message.
         * @function verify
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetScriptTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isInteger(message.chainId))
                    return "chainId: integer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.script != null && message.hasOwnProperty("script")) {
                var error = $root.google.protobuf.BytesValue.verify(message.script);
                if (error)
                    return "script." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!(message.name && typeof message.name.length === "number" || $util.isString(message.name)))
                    return "name: buffer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!(message.description && typeof message.description.length === "number" || $util.isString(message.description)))
                    return "description: buffer expected";
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (!$util.isInteger(message.fee) && !(message.fee && $util.isInteger(message.fee.low) && $util.isInteger(message.fee.high)))
                    return "fee: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a SetScriptTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.SetScriptTransaction} SetScriptTransaction
         */
        SetScriptTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.SetScriptTransaction)
                return object;
            var message = new $root.wavesenterprise.SetScriptTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.chainId != null)
                message.chainId = object.chainId | 0;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.script != null) {
                if (typeof object.script !== "object")
                    throw TypeError(".wavesenterprise.SetScriptTransaction.script: object expected");
                message.script = $root.google.protobuf.BytesValue.fromObject(object.script);
            }
            if (object.name != null)
                if (typeof object.name === "string")
                    $util.base64.decode(object.name, message.name = $util.newBuffer($util.base64.length(object.name)), 0);
                else if (object.name.length)
                    message.name = object.name;
            if (object.description != null)
                if (typeof object.description === "string")
                    $util.base64.decode(object.description, message.description = $util.newBuffer($util.base64.length(object.description)), 0);
                else if (object.description.length)
                    message.description = object.description;
            if (object.fee != null)
                if ($util.Long)
                    (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
                else if (typeof object.fee === "string")
                    message.fee = parseInt(object.fee, 10);
                else if (typeof object.fee === "number")
                    message.fee = object.fee;
                else if (typeof object.fee === "object")
                    message.fee = new $util.LongBits(object.fee.low >>> 0, object.fee.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.SetScriptTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a SetScriptTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.SetScriptTransaction
         * @static
         * @param {wavesenterprise.SetScriptTransaction} message SetScriptTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetScriptTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.proofs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                object.chainId = 0;
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.script = null;
                if (options.bytes === String)
                    object.name = "";
                else {
                    object.name = [];
                    if (options.bytes !== Array)
                        object.name = $util.newBuffer(object.name);
                }
                if (options.bytes === String)
                    object.description = "";
                else {
                    object.description = [];
                    if (options.bytes !== Array)
                        object.description = $util.newBuffer(object.description);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fee = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = $root.google.protobuf.BytesValue.toObject(message.script, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = options.bytes === String ? $util.base64.encode(message.name, 0, message.name.length) : options.bytes === Array ? Array.prototype.slice.call(message.name) : message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = options.bytes === String ? $util.base64.encode(message.description, 0, message.description.length) : options.bytes === Array ? Array.prototype.slice.call(message.description) : message.description;
            if (message.fee != null && message.hasOwnProperty("fee"))
                if (typeof message.fee === "number")
                    object.fee = options.longs === String ? String(message.fee) : message.fee;
                else
                    object.fee = options.longs === String ? $util.Long.prototype.toString.call(message.fee) : options.longs === Number ? new $util.LongBits(message.fee.low >>> 0, message.fee.high >>> 0).toNumber() : message.fee;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this SetScriptTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.SetScriptTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetScriptTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetScriptTransaction;
    })();

    wavesenterprise.AtomicTransaction = (function() {

        /**
         * Properties of an AtomicTransaction.
         * @memberof wavesenterprise
         * @interface IAtomicTransaction
         * @property {Uint8Array|null} [id] AtomicTransaction id
         * @property {Uint8Array|null} [senderPublicKey] AtomicTransaction senderPublicKey
         * @property {google.protobuf.IBytesValue|null} [miner] AtomicTransaction miner
         * @property {Array.<wavesenterprise.IAtomicInnerTransaction>|null} [transactions] AtomicTransaction transactions
         * @property {number|Long|null} [timestamp] AtomicTransaction timestamp
         * @property {Array.<Uint8Array>|null} [proofs] AtomicTransaction proofs
         */

        /**
         * Constructs a new AtomicTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an AtomicTransaction.
         * @implements IAtomicTransaction
         * @constructor
         * @param {wavesenterprise.IAtomicTransaction=} [properties] Properties to set
         */
        function AtomicTransaction(properties) {
            this.transactions = [];
            this.proofs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AtomicTransaction id.
         * @member {Uint8Array} id
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.id = $util.newBuffer([]);

        /**
         * AtomicTransaction senderPublicKey.
         * @member {Uint8Array} senderPublicKey
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.senderPublicKey = $util.newBuffer([]);

        /**
         * AtomicTransaction miner.
         * @member {google.protobuf.IBytesValue|null|undefined} miner
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.miner = null;

        /**
         * AtomicTransaction transactions.
         * @member {Array.<wavesenterprise.IAtomicInnerTransaction>} transactions
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.transactions = $util.emptyArray;

        /**
         * AtomicTransaction timestamp.
         * @member {number|Long} timestamp
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AtomicTransaction proofs.
         * @member {Array.<Uint8Array>} proofs
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         */
        AtomicTransaction.prototype.proofs = $util.emptyArray;

        /**
         * Creates a new AtomicTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {wavesenterprise.IAtomicTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.AtomicTransaction} AtomicTransaction instance
         */
        AtomicTransaction.create = function create(properties) {
            return new AtomicTransaction(properties);
        };

        /**
         * Encodes the specified AtomicTransaction message. Does not implicitly {@link wavesenterprise.AtomicTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {wavesenterprise.IAtomicTransaction} message AtomicTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.senderPublicKey != null && Object.hasOwnProperty.call(message, "senderPublicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderPublicKey);
            if (message.miner != null && Object.hasOwnProperty.call(message, "miner"))
                $root.google.protobuf.BytesValue.encode(message.miner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.transactions != null && message.transactions.length)
                for (var i = 0; i < message.transactions.length; ++i)
                    $root.wavesenterprise.AtomicInnerTransaction.encode(message.transactions[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.proofs != null && message.proofs.length)
                for (var i = 0; i < message.proofs.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.proofs[i]);
            return writer;
        };

        /**
         * Encodes the specified AtomicTransaction message, length delimited. Does not implicitly {@link wavesenterprise.AtomicTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {wavesenterprise.IAtomicTransaction} message AtomicTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AtomicTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.AtomicTransaction} AtomicTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.AtomicTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.senderPublicKey = reader.bytes();
                    break;
                case 3:
                    message.miner = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.transactions && message.transactions.length))
                        message.transactions = [];
                    message.transactions.push($root.wavesenterprise.AtomicInnerTransaction.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.timestamp = reader.int64();
                    break;
                case 6:
                    if (!(message.proofs && message.proofs.length))
                        message.proofs = [];
                    message.proofs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AtomicTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.AtomicTransaction} AtomicTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AtomicTransaction message.
         * @function verify
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AtomicTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                if (!(message.senderPublicKey && typeof message.senderPublicKey.length === "number" || $util.isString(message.senderPublicKey)))
                    return "senderPublicKey: buffer expected";
            if (message.miner != null && message.hasOwnProperty("miner")) {
                var error = $root.google.protobuf.BytesValue.verify(message.miner);
                if (error)
                    return "miner." + error;
            }
            if (message.transactions != null && message.hasOwnProperty("transactions")) {
                if (!Array.isArray(message.transactions))
                    return "transactions: array expected";
                for (var i = 0; i < message.transactions.length; ++i) {
                    var error = $root.wavesenterprise.AtomicInnerTransaction.verify(message.transactions[i]);
                    if (error)
                        return "transactions." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.proofs != null && message.hasOwnProperty("proofs")) {
                if (!Array.isArray(message.proofs))
                    return "proofs: array expected";
                for (var i = 0; i < message.proofs.length; ++i)
                    if (!(message.proofs[i] && typeof message.proofs[i].length === "number" || $util.isString(message.proofs[i])))
                        return "proofs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an AtomicTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.AtomicTransaction} AtomicTransaction
         */
        AtomicTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.AtomicTransaction)
                return object;
            var message = new $root.wavesenterprise.AtomicTransaction();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.senderPublicKey != null)
                if (typeof object.senderPublicKey === "string")
                    $util.base64.decode(object.senderPublicKey, message.senderPublicKey = $util.newBuffer($util.base64.length(object.senderPublicKey)), 0);
                else if (object.senderPublicKey.length)
                    message.senderPublicKey = object.senderPublicKey;
            if (object.miner != null) {
                if (typeof object.miner !== "object")
                    throw TypeError(".wavesenterprise.AtomicTransaction.miner: object expected");
                message.miner = $root.google.protobuf.BytesValue.fromObject(object.miner);
            }
            if (object.transactions) {
                if (!Array.isArray(object.transactions))
                    throw TypeError(".wavesenterprise.AtomicTransaction.transactions: array expected");
                message.transactions = [];
                for (var i = 0; i < object.transactions.length; ++i) {
                    if (typeof object.transactions[i] !== "object")
                        throw TypeError(".wavesenterprise.AtomicTransaction.transactions: object expected");
                    message.transactions[i] = $root.wavesenterprise.AtomicInnerTransaction.fromObject(object.transactions[i]);
                }
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.proofs) {
                if (!Array.isArray(object.proofs))
                    throw TypeError(".wavesenterprise.AtomicTransaction.proofs: array expected");
                message.proofs = [];
                for (var i = 0; i < object.proofs.length; ++i)
                    if (typeof object.proofs[i] === "string")
                        $util.base64.decode(object.proofs[i], message.proofs[i] = $util.newBuffer($util.base64.length(object.proofs[i])), 0);
                    else if (object.proofs[i].length)
                        message.proofs[i] = object.proofs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an AtomicTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.AtomicTransaction
         * @static
         * @param {wavesenterprise.AtomicTransaction} message AtomicTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AtomicTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.transactions = [];
                object.proofs = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.senderPublicKey = "";
                else {
                    object.senderPublicKey = [];
                    if (options.bytes !== Array)
                        object.senderPublicKey = $util.newBuffer(object.senderPublicKey);
                }
                object.miner = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.senderPublicKey != null && message.hasOwnProperty("senderPublicKey"))
                object.senderPublicKey = options.bytes === String ? $util.base64.encode(message.senderPublicKey, 0, message.senderPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderPublicKey) : message.senderPublicKey;
            if (message.miner != null && message.hasOwnProperty("miner"))
                object.miner = $root.google.protobuf.BytesValue.toObject(message.miner, options);
            if (message.transactions && message.transactions.length) {
                object.transactions = [];
                for (var j = 0; j < message.transactions.length; ++j)
                    object.transactions[j] = $root.wavesenterprise.AtomicInnerTransaction.toObject(message.transactions[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.proofs && message.proofs.length) {
                object.proofs = [];
                for (var j = 0; j < message.proofs.length; ++j)
                    object.proofs[j] = options.bytes === String ? $util.base64.encode(message.proofs[j], 0, message.proofs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofs[j]) : message.proofs[j];
            }
            return object;
        };

        /**
         * Converts this AtomicTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.AtomicTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AtomicTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AtomicTransaction;
    })();

    wavesenterprise.AtomicInnerTransaction = (function() {

        /**
         * Properties of an AtomicInnerTransaction.
         * @memberof wavesenterprise
         * @interface IAtomicInnerTransaction
         * @property {number|null} [version] AtomicInnerTransaction version
         * @property {wavesenterprise.IGenesisTransaction|null} [genesisTransaction] AtomicInnerTransaction genesisTransaction
         * @property {wavesenterprise.IGenesisPermitTransaction|null} [genesisPermitTransaction] AtomicInnerTransaction genesisPermitTransaction
         * @property {wavesenterprise.IGenesisRegisterNodeTransaction|null} [genesisRegisterNodeTransaction] AtomicInnerTransaction genesisRegisterNodeTransaction
         * @property {wavesenterprise.IRegisterNodeTransaction|null} [registerNodeTransaction] AtomicInnerTransaction registerNodeTransaction
         * @property {wavesenterprise.ICreateAliasTransaction|null} [createAliasTransaction] AtomicInnerTransaction createAliasTransaction
         * @property {wavesenterprise.IIssueTransaction|null} [issueTransaction] AtomicInnerTransaction issueTransaction
         * @property {wavesenterprise.IReissueTransaction|null} [reissueTransaction] AtomicInnerTransaction reissueTransaction
         * @property {wavesenterprise.IBurnTransaction|null} [burnTransaction] AtomicInnerTransaction burnTransaction
         * @property {wavesenterprise.ILeaseTransaction|null} [leaseTransaction] AtomicInnerTransaction leaseTransaction
         * @property {wavesenterprise.ILeaseCancelTransaction|null} [leaseCancelTransaction] AtomicInnerTransaction leaseCancelTransaction
         * @property {wavesenterprise.ISponsorFeeTransaction|null} [sponsorFeeTransaction] AtomicInnerTransaction sponsorFeeTransaction
         * @property {wavesenterprise.ISetAssetScriptTransaction|null} [setAssetScriptTransaction] AtomicInnerTransaction setAssetScriptTransaction
         * @property {wavesenterprise.IDataTransaction|null} [dataTransaction] AtomicInnerTransaction dataTransaction
         * @property {wavesenterprise.ITransferTransaction|null} [transferTransaction] AtomicInnerTransaction transferTransaction
         * @property {wavesenterprise.IMassTransferTransaction|null} [massTransferTransaction] AtomicInnerTransaction massTransferTransaction
         * @property {wavesenterprise.IPermitTransaction|null} [permitTransaction] AtomicInnerTransaction permitTransaction
         * @property {wavesenterprise.ICreatePolicyTransaction|null} [createPolicyTransaction] AtomicInnerTransaction createPolicyTransaction
         * @property {wavesenterprise.IUpdatePolicyTransaction|null} [updatePolicyTransaction] AtomicInnerTransaction updatePolicyTransaction
         * @property {wavesenterprise.IPolicyDataHashTransaction|null} [policyDataHashTransaction] AtomicInnerTransaction policyDataHashTransaction
         * @property {wavesenterprise.ICreateContractTransaction|null} [createContractTransaction] AtomicInnerTransaction createContractTransaction
         * @property {wavesenterprise.ICallContractTransaction|null} [callContractTransaction] AtomicInnerTransaction callContractTransaction
         * @property {wavesenterprise.IExecutedContractTransaction|null} [executedContractTransaction] AtomicInnerTransaction executedContractTransaction
         * @property {wavesenterprise.IDisableContractTransaction|null} [disableContractTransaction] AtomicInnerTransaction disableContractTransaction
         * @property {wavesenterprise.IUpdateContractTransaction|null} [updateContractTransaction] AtomicInnerTransaction updateContractTransaction
         * @property {wavesenterprise.ISetScriptTransaction|null} [setScriptTransaction] AtomicInnerTransaction setScriptTransaction
         */

        /**
         * Constructs a new AtomicInnerTransaction.
         * @memberof wavesenterprise
         * @classdesc Represents an AtomicInnerTransaction.
         * @implements IAtomicInnerTransaction
         * @constructor
         * @param {wavesenterprise.IAtomicInnerTransaction=} [properties] Properties to set
         */
        function AtomicInnerTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AtomicInnerTransaction version.
         * @member {number} version
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.version = 0;

        /**
         * AtomicInnerTransaction genesisTransaction.
         * @member {wavesenterprise.IGenesisTransaction|null|undefined} genesisTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.genesisTransaction = null;

        /**
         * AtomicInnerTransaction genesisPermitTransaction.
         * @member {wavesenterprise.IGenesisPermitTransaction|null|undefined} genesisPermitTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.genesisPermitTransaction = null;

        /**
         * AtomicInnerTransaction genesisRegisterNodeTransaction.
         * @member {wavesenterprise.IGenesisRegisterNodeTransaction|null|undefined} genesisRegisterNodeTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.genesisRegisterNodeTransaction = null;

        /**
         * AtomicInnerTransaction registerNodeTransaction.
         * @member {wavesenterprise.IRegisterNodeTransaction|null|undefined} registerNodeTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.registerNodeTransaction = null;

        /**
         * AtomicInnerTransaction createAliasTransaction.
         * @member {wavesenterprise.ICreateAliasTransaction|null|undefined} createAliasTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.createAliasTransaction = null;

        /**
         * AtomicInnerTransaction issueTransaction.
         * @member {wavesenterprise.IIssueTransaction|null|undefined} issueTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.issueTransaction = null;

        /**
         * AtomicInnerTransaction reissueTransaction.
         * @member {wavesenterprise.IReissueTransaction|null|undefined} reissueTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.reissueTransaction = null;

        /**
         * AtomicInnerTransaction burnTransaction.
         * @member {wavesenterprise.IBurnTransaction|null|undefined} burnTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.burnTransaction = null;

        /**
         * AtomicInnerTransaction leaseTransaction.
         * @member {wavesenterprise.ILeaseTransaction|null|undefined} leaseTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.leaseTransaction = null;

        /**
         * AtomicInnerTransaction leaseCancelTransaction.
         * @member {wavesenterprise.ILeaseCancelTransaction|null|undefined} leaseCancelTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.leaseCancelTransaction = null;

        /**
         * AtomicInnerTransaction sponsorFeeTransaction.
         * @member {wavesenterprise.ISponsorFeeTransaction|null|undefined} sponsorFeeTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.sponsorFeeTransaction = null;

        /**
         * AtomicInnerTransaction setAssetScriptTransaction.
         * @member {wavesenterprise.ISetAssetScriptTransaction|null|undefined} setAssetScriptTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.setAssetScriptTransaction = null;

        /**
         * AtomicInnerTransaction dataTransaction.
         * @member {wavesenterprise.IDataTransaction|null|undefined} dataTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.dataTransaction = null;

        /**
         * AtomicInnerTransaction transferTransaction.
         * @member {wavesenterprise.ITransferTransaction|null|undefined} transferTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.transferTransaction = null;

        /**
         * AtomicInnerTransaction massTransferTransaction.
         * @member {wavesenterprise.IMassTransferTransaction|null|undefined} massTransferTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.massTransferTransaction = null;

        /**
         * AtomicInnerTransaction permitTransaction.
         * @member {wavesenterprise.IPermitTransaction|null|undefined} permitTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.permitTransaction = null;

        /**
         * AtomicInnerTransaction createPolicyTransaction.
         * @member {wavesenterprise.ICreatePolicyTransaction|null|undefined} createPolicyTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.createPolicyTransaction = null;

        /**
         * AtomicInnerTransaction updatePolicyTransaction.
         * @member {wavesenterprise.IUpdatePolicyTransaction|null|undefined} updatePolicyTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.updatePolicyTransaction = null;

        /**
         * AtomicInnerTransaction policyDataHashTransaction.
         * @member {wavesenterprise.IPolicyDataHashTransaction|null|undefined} policyDataHashTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.policyDataHashTransaction = null;

        /**
         * AtomicInnerTransaction createContractTransaction.
         * @member {wavesenterprise.ICreateContractTransaction|null|undefined} createContractTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.createContractTransaction = null;

        /**
         * AtomicInnerTransaction callContractTransaction.
         * @member {wavesenterprise.ICallContractTransaction|null|undefined} callContractTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.callContractTransaction = null;

        /**
         * AtomicInnerTransaction executedContractTransaction.
         * @member {wavesenterprise.IExecutedContractTransaction|null|undefined} executedContractTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.executedContractTransaction = null;

        /**
         * AtomicInnerTransaction disableContractTransaction.
         * @member {wavesenterprise.IDisableContractTransaction|null|undefined} disableContractTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.disableContractTransaction = null;

        /**
         * AtomicInnerTransaction updateContractTransaction.
         * @member {wavesenterprise.IUpdateContractTransaction|null|undefined} updateContractTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.updateContractTransaction = null;

        /**
         * AtomicInnerTransaction setScriptTransaction.
         * @member {wavesenterprise.ISetScriptTransaction|null|undefined} setScriptTransaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        AtomicInnerTransaction.prototype.setScriptTransaction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * AtomicInnerTransaction transaction.
         * @member {"genesisTransaction"|"genesisPermitTransaction"|"genesisRegisterNodeTransaction"|"registerNodeTransaction"|"createAliasTransaction"|"issueTransaction"|"reissueTransaction"|"burnTransaction"|"leaseTransaction"|"leaseCancelTransaction"|"sponsorFeeTransaction"|"setAssetScriptTransaction"|"dataTransaction"|"transferTransaction"|"massTransferTransaction"|"permitTransaction"|"createPolicyTransaction"|"updatePolicyTransaction"|"policyDataHashTransaction"|"createContractTransaction"|"callContractTransaction"|"executedContractTransaction"|"disableContractTransaction"|"updateContractTransaction"|"setScriptTransaction"|undefined} transaction
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         */
        Object.defineProperty(AtomicInnerTransaction.prototype, "transaction", {
            get: $util.oneOfGetter($oneOfFields = ["genesisTransaction", "genesisPermitTransaction", "genesisRegisterNodeTransaction", "registerNodeTransaction", "createAliasTransaction", "issueTransaction", "reissueTransaction", "burnTransaction", "leaseTransaction", "leaseCancelTransaction", "sponsorFeeTransaction", "setAssetScriptTransaction", "dataTransaction", "transferTransaction", "massTransferTransaction", "permitTransaction", "createPolicyTransaction", "updatePolicyTransaction", "policyDataHashTransaction", "createContractTransaction", "callContractTransaction", "executedContractTransaction", "disableContractTransaction", "updateContractTransaction", "setScriptTransaction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AtomicInnerTransaction instance using the specified properties.
         * @function create
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {wavesenterprise.IAtomicInnerTransaction=} [properties] Properties to set
         * @returns {wavesenterprise.AtomicInnerTransaction} AtomicInnerTransaction instance
         */
        AtomicInnerTransaction.create = function create(properties) {
            return new AtomicInnerTransaction(properties);
        };

        /**
         * Encodes the specified AtomicInnerTransaction message. Does not implicitly {@link wavesenterprise.AtomicInnerTransaction.verify|verify} messages.
         * @function encode
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {wavesenterprise.IAtomicInnerTransaction} message AtomicInnerTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicInnerTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.genesisTransaction != null && Object.hasOwnProperty.call(message, "genesisTransaction"))
                $root.wavesenterprise.GenesisTransaction.encode(message.genesisTransaction, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.genesisPermitTransaction != null && Object.hasOwnProperty.call(message, "genesisPermitTransaction"))
                $root.wavesenterprise.GenesisPermitTransaction.encode(message.genesisPermitTransaction, writer.uint32(/* id 1001, wireType 2 =*/8010).fork()).ldelim();
            if (message.genesisRegisterNodeTransaction != null && Object.hasOwnProperty.call(message, "genesisRegisterNodeTransaction"))
                $root.wavesenterprise.GenesisRegisterNodeTransaction.encode(message.genesisRegisterNodeTransaction, writer.uint32(/* id 1002, wireType 2 =*/8018).fork()).ldelim();
            if (message.registerNodeTransaction != null && Object.hasOwnProperty.call(message, "registerNodeTransaction"))
                $root.wavesenterprise.RegisterNodeTransaction.encode(message.registerNodeTransaction, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
            if (message.createAliasTransaction != null && Object.hasOwnProperty.call(message, "createAliasTransaction"))
                $root.wavesenterprise.CreateAliasTransaction.encode(message.createAliasTransaction, writer.uint32(/* id 1004, wireType 2 =*/8034).fork()).ldelim();
            if (message.issueTransaction != null && Object.hasOwnProperty.call(message, "issueTransaction"))
                $root.wavesenterprise.IssueTransaction.encode(message.issueTransaction, writer.uint32(/* id 1005, wireType 2 =*/8042).fork()).ldelim();
            if (message.reissueTransaction != null && Object.hasOwnProperty.call(message, "reissueTransaction"))
                $root.wavesenterprise.ReissueTransaction.encode(message.reissueTransaction, writer.uint32(/* id 1006, wireType 2 =*/8050).fork()).ldelim();
            if (message.burnTransaction != null && Object.hasOwnProperty.call(message, "burnTransaction"))
                $root.wavesenterprise.BurnTransaction.encode(message.burnTransaction, writer.uint32(/* id 1007, wireType 2 =*/8058).fork()).ldelim();
            if (message.leaseTransaction != null && Object.hasOwnProperty.call(message, "leaseTransaction"))
                $root.wavesenterprise.LeaseTransaction.encode(message.leaseTransaction, writer.uint32(/* id 1008, wireType 2 =*/8066).fork()).ldelim();
            if (message.leaseCancelTransaction != null && Object.hasOwnProperty.call(message, "leaseCancelTransaction"))
                $root.wavesenterprise.LeaseCancelTransaction.encode(message.leaseCancelTransaction, writer.uint32(/* id 1009, wireType 2 =*/8074).fork()).ldelim();
            if (message.sponsorFeeTransaction != null && Object.hasOwnProperty.call(message, "sponsorFeeTransaction"))
                $root.wavesenterprise.SponsorFeeTransaction.encode(message.sponsorFeeTransaction, writer.uint32(/* id 1010, wireType 2 =*/8082).fork()).ldelim();
            if (message.setAssetScriptTransaction != null && Object.hasOwnProperty.call(message, "setAssetScriptTransaction"))
                $root.wavesenterprise.SetAssetScriptTransaction.encode(message.setAssetScriptTransaction, writer.uint32(/* id 1011, wireType 2 =*/8090).fork()).ldelim();
            if (message.dataTransaction != null && Object.hasOwnProperty.call(message, "dataTransaction"))
                $root.wavesenterprise.DataTransaction.encode(message.dataTransaction, writer.uint32(/* id 1012, wireType 2 =*/8098).fork()).ldelim();
            if (message.transferTransaction != null && Object.hasOwnProperty.call(message, "transferTransaction"))
                $root.wavesenterprise.TransferTransaction.encode(message.transferTransaction, writer.uint32(/* id 1013, wireType 2 =*/8106).fork()).ldelim();
            if (message.massTransferTransaction != null && Object.hasOwnProperty.call(message, "massTransferTransaction"))
                $root.wavesenterprise.MassTransferTransaction.encode(message.massTransferTransaction, writer.uint32(/* id 1014, wireType 2 =*/8114).fork()).ldelim();
            if (message.permitTransaction != null && Object.hasOwnProperty.call(message, "permitTransaction"))
                $root.wavesenterprise.PermitTransaction.encode(message.permitTransaction, writer.uint32(/* id 1015, wireType 2 =*/8122).fork()).ldelim();
            if (message.createPolicyTransaction != null && Object.hasOwnProperty.call(message, "createPolicyTransaction"))
                $root.wavesenterprise.CreatePolicyTransaction.encode(message.createPolicyTransaction, writer.uint32(/* id 1016, wireType 2 =*/8130).fork()).ldelim();
            if (message.updatePolicyTransaction != null && Object.hasOwnProperty.call(message, "updatePolicyTransaction"))
                $root.wavesenterprise.UpdatePolicyTransaction.encode(message.updatePolicyTransaction, writer.uint32(/* id 1017, wireType 2 =*/8138).fork()).ldelim();
            if (message.policyDataHashTransaction != null && Object.hasOwnProperty.call(message, "policyDataHashTransaction"))
                $root.wavesenterprise.PolicyDataHashTransaction.encode(message.policyDataHashTransaction, writer.uint32(/* id 1018, wireType 2 =*/8146).fork()).ldelim();
            if (message.createContractTransaction != null && Object.hasOwnProperty.call(message, "createContractTransaction"))
                $root.wavesenterprise.CreateContractTransaction.encode(message.createContractTransaction, writer.uint32(/* id 1019, wireType 2 =*/8154).fork()).ldelim();
            if (message.callContractTransaction != null && Object.hasOwnProperty.call(message, "callContractTransaction"))
                $root.wavesenterprise.CallContractTransaction.encode(message.callContractTransaction, writer.uint32(/* id 1020, wireType 2 =*/8162).fork()).ldelim();
            if (message.executedContractTransaction != null && Object.hasOwnProperty.call(message, "executedContractTransaction"))
                $root.wavesenterprise.ExecutedContractTransaction.encode(message.executedContractTransaction, writer.uint32(/* id 1021, wireType 2 =*/8170).fork()).ldelim();
            if (message.disableContractTransaction != null && Object.hasOwnProperty.call(message, "disableContractTransaction"))
                $root.wavesenterprise.DisableContractTransaction.encode(message.disableContractTransaction, writer.uint32(/* id 1022, wireType 2 =*/8178).fork()).ldelim();
            if (message.updateContractTransaction != null && Object.hasOwnProperty.call(message, "updateContractTransaction"))
                $root.wavesenterprise.UpdateContractTransaction.encode(message.updateContractTransaction, writer.uint32(/* id 1023, wireType 2 =*/8186).fork()).ldelim();
            if (message.setScriptTransaction != null && Object.hasOwnProperty.call(message, "setScriptTransaction"))
                $root.wavesenterprise.SetScriptTransaction.encode(message.setScriptTransaction, writer.uint32(/* id 1024, wireType 2 =*/8194).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AtomicInnerTransaction message, length delimited. Does not implicitly {@link wavesenterprise.AtomicInnerTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {wavesenterprise.IAtomicInnerTransaction} message AtomicInnerTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AtomicInnerTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AtomicInnerTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wavesenterprise.AtomicInnerTransaction} AtomicInnerTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicInnerTransaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.wavesenterprise.AtomicInnerTransaction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.int32();
                    break;
                case 1000:
                    message.genesisTransaction = $root.wavesenterprise.GenesisTransaction.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.issueTransaction = $root.wavesenterprise.IssueTransaction.decode(reader, reader.uint32());
                    break;
                case 1006:
                    message.reissueTransaction = $root.wavesenterprise.ReissueTransaction.decode(reader, reader.uint32());
                    break;
                case 1007:
                    message.burnTransaction = $root.wavesenterprise.BurnTransaction.decode(reader, reader.uint32());
                    break;
                case 1008:
                    message.leaseTransaction = $root.wavesenterprise.LeaseTransaction.decode(reader, reader.uint32());
                    break;
                case 1009:
                    message.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.decode(reader, reader.uint32());
                    break;
                case 1010:
                    message.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.decode(reader, reader.uint32());
                    break;
                case 1011:
                    message.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.decode(reader, reader.uint32());
                    break;
                case 1012:
                    message.dataTransaction = $root.wavesenterprise.DataTransaction.decode(reader, reader.uint32());
                    break;
                case 1013:
                    message.transferTransaction = $root.wavesenterprise.TransferTransaction.decode(reader, reader.uint32());
                    break;
                case 1014:
                    message.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.decode(reader, reader.uint32());
                    break;
                case 1015:
                    message.permitTransaction = $root.wavesenterprise.PermitTransaction.decode(reader, reader.uint32());
                    break;
                case 1016:
                    message.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.decode(reader, reader.uint32());
                    break;
                case 1017:
                    message.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.decode(reader, reader.uint32());
                    break;
                case 1018:
                    message.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.decode(reader, reader.uint32());
                    break;
                case 1019:
                    message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1020:
                    message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1021:
                    message.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1022:
                    message.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1023:
                    message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.decode(reader, reader.uint32());
                    break;
                case 1024:
                    message.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AtomicInnerTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wavesenterprise.AtomicInnerTransaction} AtomicInnerTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AtomicInnerTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AtomicInnerTransaction message.
         * @function verify
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AtomicInnerTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.genesisTransaction != null && message.hasOwnProperty("genesisTransaction")) {
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisTransaction.verify(message.genesisTransaction);
                    if (error)
                        return "genesisTransaction." + error;
                }
            }
            if (message.genesisPermitTransaction != null && message.hasOwnProperty("genesisPermitTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisPermitTransaction.verify(message.genesisPermitTransaction);
                    if (error)
                        return "genesisPermitTransaction." + error;
                }
            }
            if (message.genesisRegisterNodeTransaction != null && message.hasOwnProperty("genesisRegisterNodeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.GenesisRegisterNodeTransaction.verify(message.genesisRegisterNodeTransaction);
                    if (error)
                        return "genesisRegisterNodeTransaction." + error;
                }
            }
            if (message.registerNodeTransaction != null && message.hasOwnProperty("registerNodeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.RegisterNodeTransaction.verify(message.registerNodeTransaction);
                    if (error)
                        return "registerNodeTransaction." + error;
                }
            }
            if (message.createAliasTransaction != null && message.hasOwnProperty("createAliasTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreateAliasTransaction.verify(message.createAliasTransaction);
                    if (error)
                        return "createAliasTransaction." + error;
                }
            }
            if (message.issueTransaction != null && message.hasOwnProperty("issueTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.IssueTransaction.verify(message.issueTransaction);
                    if (error)
                        return "issueTransaction." + error;
                }
            }
            if (message.reissueTransaction != null && message.hasOwnProperty("reissueTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.ReissueTransaction.verify(message.reissueTransaction);
                    if (error)
                        return "reissueTransaction." + error;
                }
            }
            if (message.burnTransaction != null && message.hasOwnProperty("burnTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.BurnTransaction.verify(message.burnTransaction);
                    if (error)
                        return "burnTransaction." + error;
                }
            }
            if (message.leaseTransaction != null && message.hasOwnProperty("leaseTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.LeaseTransaction.verify(message.leaseTransaction);
                    if (error)
                        return "leaseTransaction." + error;
                }
            }
            if (message.leaseCancelTransaction != null && message.hasOwnProperty("leaseCancelTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.LeaseCancelTransaction.verify(message.leaseCancelTransaction);
                    if (error)
                        return "leaseCancelTransaction." + error;
                }
            }
            if (message.sponsorFeeTransaction != null && message.hasOwnProperty("sponsorFeeTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SponsorFeeTransaction.verify(message.sponsorFeeTransaction);
                    if (error)
                        return "sponsorFeeTransaction." + error;
                }
            }
            if (message.setAssetScriptTransaction != null && message.hasOwnProperty("setAssetScriptTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SetAssetScriptTransaction.verify(message.setAssetScriptTransaction);
                    if (error)
                        return "setAssetScriptTransaction." + error;
                }
            }
            if (message.dataTransaction != null && message.hasOwnProperty("dataTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.DataTransaction.verify(message.dataTransaction);
                    if (error)
                        return "dataTransaction." + error;
                }
            }
            if (message.transferTransaction != null && message.hasOwnProperty("transferTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.TransferTransaction.verify(message.transferTransaction);
                    if (error)
                        return "transferTransaction." + error;
                }
            }
            if (message.massTransferTransaction != null && message.hasOwnProperty("massTransferTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.MassTransferTransaction.verify(message.massTransferTransaction);
                    if (error)
                        return "massTransferTransaction." + error;
                }
            }
            if (message.permitTransaction != null && message.hasOwnProperty("permitTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.PermitTransaction.verify(message.permitTransaction);
                    if (error)
                        return "permitTransaction." + error;
                }
            }
            if (message.createPolicyTransaction != null && message.hasOwnProperty("createPolicyTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreatePolicyTransaction.verify(message.createPolicyTransaction);
                    if (error)
                        return "createPolicyTransaction." + error;
                }
            }
            if (message.updatePolicyTransaction != null && message.hasOwnProperty("updatePolicyTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.UpdatePolicyTransaction.verify(message.updatePolicyTransaction);
                    if (error)
                        return "updatePolicyTransaction." + error;
                }
            }
            if (message.policyDataHashTransaction != null && message.hasOwnProperty("policyDataHashTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.PolicyDataHashTransaction.verify(message.policyDataHashTransaction);
                    if (error)
                        return "policyDataHashTransaction." + error;
                }
            }
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CreateContractTransaction.verify(message.createContractTransaction);
                    if (error)
                        return "createContractTransaction." + error;
                }
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.CallContractTransaction.verify(message.callContractTransaction);
                    if (error)
                        return "callContractTransaction." + error;
                }
            }
            if (message.executedContractTransaction != null && message.hasOwnProperty("executedContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.ExecutedContractTransaction.verify(message.executedContractTransaction);
                    if (error)
                        return "executedContractTransaction." + error;
                }
            }
            if (message.disableContractTransaction != null && message.hasOwnProperty("disableContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.DisableContractTransaction.verify(message.disableContractTransaction);
                    if (error)
                        return "disableContractTransaction." + error;
                }
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.UpdateContractTransaction.verify(message.updateContractTransaction);
                    if (error)
                        return "updateContractTransaction." + error;
                }
            }
            if (message.setScriptTransaction != null && message.hasOwnProperty("setScriptTransaction")) {
                if (properties.transaction === 1)
                    return "transaction: multiple values";
                properties.transaction = 1;
                {
                    var error = $root.wavesenterprise.SetScriptTransaction.verify(message.setScriptTransaction);
                    if (error)
                        return "setScriptTransaction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AtomicInnerTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wavesenterprise.AtomicInnerTransaction} AtomicInnerTransaction
         */
        AtomicInnerTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.wavesenterprise.AtomicInnerTransaction)
                return object;
            var message = new $root.wavesenterprise.AtomicInnerTransaction();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.genesisTransaction != null) {
                if (typeof object.genesisTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.genesisTransaction: object expected");
                message.genesisTransaction = $root.wavesenterprise.GenesisTransaction.fromObject(object.genesisTransaction);
            }
            if (object.genesisPermitTransaction != null) {
                if (typeof object.genesisPermitTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.genesisPermitTransaction: object expected");
                message.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.fromObject(object.genesisPermitTransaction);
            }
            if (object.genesisRegisterNodeTransaction != null) {
                if (typeof object.genesisRegisterNodeTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.genesisRegisterNodeTransaction: object expected");
                message.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.fromObject(object.genesisRegisterNodeTransaction);
            }
            if (object.registerNodeTransaction != null) {
                if (typeof object.registerNodeTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.registerNodeTransaction: object expected");
                message.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.fromObject(object.registerNodeTransaction);
            }
            if (object.createAliasTransaction != null) {
                if (typeof object.createAliasTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.createAliasTransaction: object expected");
                message.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.fromObject(object.createAliasTransaction);
            }
            if (object.issueTransaction != null) {
                if (typeof object.issueTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.issueTransaction: object expected");
                message.issueTransaction = $root.wavesenterprise.IssueTransaction.fromObject(object.issueTransaction);
            }
            if (object.reissueTransaction != null) {
                if (typeof object.reissueTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.reissueTransaction: object expected");
                message.reissueTransaction = $root.wavesenterprise.ReissueTransaction.fromObject(object.reissueTransaction);
            }
            if (object.burnTransaction != null) {
                if (typeof object.burnTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.burnTransaction: object expected");
                message.burnTransaction = $root.wavesenterprise.BurnTransaction.fromObject(object.burnTransaction);
            }
            if (object.leaseTransaction != null) {
                if (typeof object.leaseTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.leaseTransaction: object expected");
                message.leaseTransaction = $root.wavesenterprise.LeaseTransaction.fromObject(object.leaseTransaction);
            }
            if (object.leaseCancelTransaction != null) {
                if (typeof object.leaseCancelTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.leaseCancelTransaction: object expected");
                message.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.fromObject(object.leaseCancelTransaction);
            }
            if (object.sponsorFeeTransaction != null) {
                if (typeof object.sponsorFeeTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.sponsorFeeTransaction: object expected");
                message.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.fromObject(object.sponsorFeeTransaction);
            }
            if (object.setAssetScriptTransaction != null) {
                if (typeof object.setAssetScriptTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.setAssetScriptTransaction: object expected");
                message.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.fromObject(object.setAssetScriptTransaction);
            }
            if (object.dataTransaction != null) {
                if (typeof object.dataTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.dataTransaction: object expected");
                message.dataTransaction = $root.wavesenterprise.DataTransaction.fromObject(object.dataTransaction);
            }
            if (object.transferTransaction != null) {
                if (typeof object.transferTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.transferTransaction: object expected");
                message.transferTransaction = $root.wavesenterprise.TransferTransaction.fromObject(object.transferTransaction);
            }
            if (object.massTransferTransaction != null) {
                if (typeof object.massTransferTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.massTransferTransaction: object expected");
                message.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.fromObject(object.massTransferTransaction);
            }
            if (object.permitTransaction != null) {
                if (typeof object.permitTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.permitTransaction: object expected");
                message.permitTransaction = $root.wavesenterprise.PermitTransaction.fromObject(object.permitTransaction);
            }
            if (object.createPolicyTransaction != null) {
                if (typeof object.createPolicyTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.createPolicyTransaction: object expected");
                message.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.fromObject(object.createPolicyTransaction);
            }
            if (object.updatePolicyTransaction != null) {
                if (typeof object.updatePolicyTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.updatePolicyTransaction: object expected");
                message.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.fromObject(object.updatePolicyTransaction);
            }
            if (object.policyDataHashTransaction != null) {
                if (typeof object.policyDataHashTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.policyDataHashTransaction: object expected");
                message.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.fromObject(object.policyDataHashTransaction);
            }
            if (object.createContractTransaction != null) {
                if (typeof object.createContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.createContractTransaction: object expected");
                message.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.fromObject(object.createContractTransaction);
            }
            if (object.callContractTransaction != null) {
                if (typeof object.callContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.callContractTransaction: object expected");
                message.callContractTransaction = $root.wavesenterprise.CallContractTransaction.fromObject(object.callContractTransaction);
            }
            if (object.executedContractTransaction != null) {
                if (typeof object.executedContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.executedContractTransaction: object expected");
                message.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.fromObject(object.executedContractTransaction);
            }
            if (object.disableContractTransaction != null) {
                if (typeof object.disableContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.disableContractTransaction: object expected");
                message.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.fromObject(object.disableContractTransaction);
            }
            if (object.updateContractTransaction != null) {
                if (typeof object.updateContractTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.updateContractTransaction: object expected");
                message.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.fromObject(object.updateContractTransaction);
            }
            if (object.setScriptTransaction != null) {
                if (typeof object.setScriptTransaction !== "object")
                    throw TypeError(".wavesenterprise.AtomicInnerTransaction.setScriptTransaction: object expected");
                message.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.fromObject(object.setScriptTransaction);
            }
            return message;
        };

        /**
         * Creates a plain object from an AtomicInnerTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @static
         * @param {wavesenterprise.AtomicInnerTransaction} message AtomicInnerTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AtomicInnerTransaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = 0;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.genesisTransaction != null && message.hasOwnProperty("genesisTransaction")) {
                object.genesisTransaction = $root.wavesenterprise.GenesisTransaction.toObject(message.genesisTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisTransaction";
            }
            if (message.genesisPermitTransaction != null && message.hasOwnProperty("genesisPermitTransaction")) {
                object.genesisPermitTransaction = $root.wavesenterprise.GenesisPermitTransaction.toObject(message.genesisPermitTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisPermitTransaction";
            }
            if (message.genesisRegisterNodeTransaction != null && message.hasOwnProperty("genesisRegisterNodeTransaction")) {
                object.genesisRegisterNodeTransaction = $root.wavesenterprise.GenesisRegisterNodeTransaction.toObject(message.genesisRegisterNodeTransaction, options);
                if (options.oneofs)
                    object.transaction = "genesisRegisterNodeTransaction";
            }
            if (message.registerNodeTransaction != null && message.hasOwnProperty("registerNodeTransaction")) {
                object.registerNodeTransaction = $root.wavesenterprise.RegisterNodeTransaction.toObject(message.registerNodeTransaction, options);
                if (options.oneofs)
                    object.transaction = "registerNodeTransaction";
            }
            if (message.createAliasTransaction != null && message.hasOwnProperty("createAliasTransaction")) {
                object.createAliasTransaction = $root.wavesenterprise.CreateAliasTransaction.toObject(message.createAliasTransaction, options);
                if (options.oneofs)
                    object.transaction = "createAliasTransaction";
            }
            if (message.issueTransaction != null && message.hasOwnProperty("issueTransaction")) {
                object.issueTransaction = $root.wavesenterprise.IssueTransaction.toObject(message.issueTransaction, options);
                if (options.oneofs)
                    object.transaction = "issueTransaction";
            }
            if (message.reissueTransaction != null && message.hasOwnProperty("reissueTransaction")) {
                object.reissueTransaction = $root.wavesenterprise.ReissueTransaction.toObject(message.reissueTransaction, options);
                if (options.oneofs)
                    object.transaction = "reissueTransaction";
            }
            if (message.burnTransaction != null && message.hasOwnProperty("burnTransaction")) {
                object.burnTransaction = $root.wavesenterprise.BurnTransaction.toObject(message.burnTransaction, options);
                if (options.oneofs)
                    object.transaction = "burnTransaction";
            }
            if (message.leaseTransaction != null && message.hasOwnProperty("leaseTransaction")) {
                object.leaseTransaction = $root.wavesenterprise.LeaseTransaction.toObject(message.leaseTransaction, options);
                if (options.oneofs)
                    object.transaction = "leaseTransaction";
            }
            if (message.leaseCancelTransaction != null && message.hasOwnProperty("leaseCancelTransaction")) {
                object.leaseCancelTransaction = $root.wavesenterprise.LeaseCancelTransaction.toObject(message.leaseCancelTransaction, options);
                if (options.oneofs)
                    object.transaction = "leaseCancelTransaction";
            }
            if (message.sponsorFeeTransaction != null && message.hasOwnProperty("sponsorFeeTransaction")) {
                object.sponsorFeeTransaction = $root.wavesenterprise.SponsorFeeTransaction.toObject(message.sponsorFeeTransaction, options);
                if (options.oneofs)
                    object.transaction = "sponsorFeeTransaction";
            }
            if (message.setAssetScriptTransaction != null && message.hasOwnProperty("setAssetScriptTransaction")) {
                object.setAssetScriptTransaction = $root.wavesenterprise.SetAssetScriptTransaction.toObject(message.setAssetScriptTransaction, options);
                if (options.oneofs)
                    object.transaction = "setAssetScriptTransaction";
            }
            if (message.dataTransaction != null && message.hasOwnProperty("dataTransaction")) {
                object.dataTransaction = $root.wavesenterprise.DataTransaction.toObject(message.dataTransaction, options);
                if (options.oneofs)
                    object.transaction = "dataTransaction";
            }
            if (message.transferTransaction != null && message.hasOwnProperty("transferTransaction")) {
                object.transferTransaction = $root.wavesenterprise.TransferTransaction.toObject(message.transferTransaction, options);
                if (options.oneofs)
                    object.transaction = "transferTransaction";
            }
            if (message.massTransferTransaction != null && message.hasOwnProperty("massTransferTransaction")) {
                object.massTransferTransaction = $root.wavesenterprise.MassTransferTransaction.toObject(message.massTransferTransaction, options);
                if (options.oneofs)
                    object.transaction = "massTransferTransaction";
            }
            if (message.permitTransaction != null && message.hasOwnProperty("permitTransaction")) {
                object.permitTransaction = $root.wavesenterprise.PermitTransaction.toObject(message.permitTransaction, options);
                if (options.oneofs)
                    object.transaction = "permitTransaction";
            }
            if (message.createPolicyTransaction != null && message.hasOwnProperty("createPolicyTransaction")) {
                object.createPolicyTransaction = $root.wavesenterprise.CreatePolicyTransaction.toObject(message.createPolicyTransaction, options);
                if (options.oneofs)
                    object.transaction = "createPolicyTransaction";
            }
            if (message.updatePolicyTransaction != null && message.hasOwnProperty("updatePolicyTransaction")) {
                object.updatePolicyTransaction = $root.wavesenterprise.UpdatePolicyTransaction.toObject(message.updatePolicyTransaction, options);
                if (options.oneofs)
                    object.transaction = "updatePolicyTransaction";
            }
            if (message.policyDataHashTransaction != null && message.hasOwnProperty("policyDataHashTransaction")) {
                object.policyDataHashTransaction = $root.wavesenterprise.PolicyDataHashTransaction.toObject(message.policyDataHashTransaction, options);
                if (options.oneofs)
                    object.transaction = "policyDataHashTransaction";
            }
            if (message.createContractTransaction != null && message.hasOwnProperty("createContractTransaction")) {
                object.createContractTransaction = $root.wavesenterprise.CreateContractTransaction.toObject(message.createContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "createContractTransaction";
            }
            if (message.callContractTransaction != null && message.hasOwnProperty("callContractTransaction")) {
                object.callContractTransaction = $root.wavesenterprise.CallContractTransaction.toObject(message.callContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "callContractTransaction";
            }
            if (message.executedContractTransaction != null && message.hasOwnProperty("executedContractTransaction")) {
                object.executedContractTransaction = $root.wavesenterprise.ExecutedContractTransaction.toObject(message.executedContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "executedContractTransaction";
            }
            if (message.disableContractTransaction != null && message.hasOwnProperty("disableContractTransaction")) {
                object.disableContractTransaction = $root.wavesenterprise.DisableContractTransaction.toObject(message.disableContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "disableContractTransaction";
            }
            if (message.updateContractTransaction != null && message.hasOwnProperty("updateContractTransaction")) {
                object.updateContractTransaction = $root.wavesenterprise.UpdateContractTransaction.toObject(message.updateContractTransaction, options);
                if (options.oneofs)
                    object.transaction = "updateContractTransaction";
            }
            if (message.setScriptTransaction != null && message.hasOwnProperty("setScriptTransaction")) {
                object.setScriptTransaction = $root.wavesenterprise.SetScriptTransaction.toObject(message.setScriptTransaction, options);
                if (options.oneofs)
                    object.transaction = "setScriptTransaction";
            }
            return object;
        };

        /**
         * Converts this AtomicInnerTransaction to JSON.
         * @function toJSON
         * @memberof wavesenterprise.AtomicInnerTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AtomicInnerTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AtomicInnerTransaction;
    })();

    return wavesenterprise;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                var message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                var message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                var message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                var message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                var message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                var message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                var message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                var message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                var message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
