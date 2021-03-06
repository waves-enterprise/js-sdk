// source: managed/burn_transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.wavesenterprise.BurnTransaction', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.wavesenterprise.BurnTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wavesenterprise.BurnTransaction.repeatedFields_, null);
};
goog.inherits(proto.wavesenterprise.BurnTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.BurnTransaction.displayName = 'proto.wavesenterprise.BurnTransaction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wavesenterprise.BurnTransaction.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.wavesenterprise.BurnTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.BurnTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.BurnTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.BurnTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    assetId: msg.getAssetId_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    proofsList: msg.getProofsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.wavesenterprise.BurnTransaction}
 */
proto.wavesenterprise.BurnTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.BurnTransaction;
  return proto.wavesenterprise.BurnTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.BurnTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.BurnTransaction}
 */
proto.wavesenterprise.BurnTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChainId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSenderPublicKey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProofs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.wavesenterprise.BurnTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.BurnTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.BurnTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.BurnTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSenderPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      8,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.BurnTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.BurnTransaction.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.BurnTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 chain_id = 2;
 * @return {number}
 */
proto.wavesenterprise.BurnTransaction.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes sender_public_key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.BurnTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes sender_public_key = 3;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.wavesenterprise.BurnTransaction.prototype.getSenderPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderPublicKey()));
};


/**
 * optional bytes sender_public_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.BurnTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setSenderPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes asset_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.BurnTransaction.prototype.getAssetId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes asset_id = 4;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.wavesenterprise.BurnTransaction.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.BurnTransaction.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 amount = 5;
 * @return {number}
 */
proto.wavesenterprise.BurnTransaction.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 fee = 6;
 * @return {number}
 */
proto.wavesenterprise.BurnTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 timestamp = 7;
 * @return {number}
 */
proto.wavesenterprise.BurnTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated bytes proofs = 8;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.wavesenterprise.BurnTransaction.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * repeated bytes proofs = 8;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.wavesenterprise.BurnTransaction.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.wavesenterprise.BurnTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.BurnTransaction} returns this
 */
proto.wavesenterprise.BurnTransaction.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


goog.object.extend(exports, proto.wavesenterprise);
