// source: managed/mass_transfer_transaction.proto
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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var transfer_pb = require('../transfer_pb.js');
goog.object.extend(proto, transfer_pb);
goog.exportSymbol('proto.wavesenterprise.MassTransferTransaction', null, global);
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
proto.wavesenterprise.MassTransferTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wavesenterprise.MassTransferTransaction.repeatedFields_, null);
};
goog.inherits(proto.wavesenterprise.MassTransferTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.MassTransferTransaction.displayName = 'proto.wavesenterprise.MassTransferTransaction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wavesenterprise.MassTransferTransaction.repeatedFields_ = [4,9];



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
proto.wavesenterprise.MassTransferTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.MassTransferTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.MassTransferTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.MassTransferTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    assetId: (f = msg.getAssetId()) && google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance, f),
    transfersList: jspb.Message.toObjectList(msg.getTransfersList(),
    transfer_pb.Transfer.toObject, includeInstance),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 6, 0),
    attachment: msg.getAttachment_asB64(),
    feeAssetId: (f = msg.getFeeAssetId()) && google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance, f),
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
 * @return {!proto.wavesenterprise.MassTransferTransaction}
 */
proto.wavesenterprise.MassTransferTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.MassTransferTransaction;
  return proto.wavesenterprise.MassTransferTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.MassTransferTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.MassTransferTransaction}
 */
proto.wavesenterprise.MassTransferTransaction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSenderPublicKey(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BytesValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader);
      msg.setAssetId(value);
      break;
    case 4:
      var value = new transfer_pb.Transfer;
      reader.readMessage(value,transfer_pb.Transfer.deserializeBinaryFromReader);
      msg.addTransfers(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAttachment(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.BytesValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader);
      msg.setFeeAssetId(value);
      break;
    case 9:
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
proto.wavesenterprise.MassTransferTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.MassTransferTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.MassTransferTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.MassTransferTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSenderPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAssetId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter
    );
  }
  f = message.getTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      transfer_pb.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
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
  f = message.getAttachment_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getFeeAssetId();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter
    );
  }
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      9,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getId_asB64 = function() {
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
proto.wavesenterprise.MassTransferTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sender_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sender_public_key = 2;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getSenderPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderPublicKey()));
};


/**
 * optional bytes sender_public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setSenderPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional google.protobuf.BytesValue asset_id = 3;
 * @return {?proto.google.protobuf.BytesValue}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getAssetId = function() {
  return /** @type{?proto.google.protobuf.BytesValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BytesValue, 3));
};


/**
 * @param {?proto.google.protobuf.BytesValue|undefined} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
*/
proto.wavesenterprise.MassTransferTransaction.prototype.setAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.clearAssetId = function() {
  return this.setAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.hasAssetId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Transfer transfers = 4;
 * @return {!Array<!proto.wavesenterprise.Transfer>}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getTransfersList = function() {
  return /** @type{!Array<!proto.wavesenterprise.Transfer>} */ (
    jspb.Message.getRepeatedWrapperField(this, transfer_pb.Transfer, 4));
};


/**
 * @param {!Array<!proto.wavesenterprise.Transfer>} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
*/
proto.wavesenterprise.MassTransferTransaction.prototype.setTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.wavesenterprise.Transfer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.Transfer}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.addTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.wavesenterprise.Transfer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.clearTransfersList = function() {
  return this.setTransfersList([]);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 fee = 6;
 * @return {number}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes attachment = 7;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getAttachment = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes attachment = 7;
 * This is a type-conversion wrapper around `getAttachment()`
 * @return {string}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getAttachment_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAttachment()));
};


/**
 * optional bytes attachment = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAttachment()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getAttachment_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAttachment()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setAttachment = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional google.protobuf.BytesValue fee_asset_id = 8;
 * @return {?proto.google.protobuf.BytesValue}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getFeeAssetId = function() {
  return /** @type{?proto.google.protobuf.BytesValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BytesValue, 8));
};


/**
 * @param {?proto.google.protobuf.BytesValue|undefined} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
*/
proto.wavesenterprise.MassTransferTransaction.prototype.setFeeAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.clearFeeAssetId = function() {
  return this.setFeeAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.hasFeeAssetId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated bytes proofs = 9;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * repeated bytes proofs = 9;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.wavesenterprise.MassTransferTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.MassTransferTransaction} returns this
 */
proto.wavesenterprise.MassTransferTransaction.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


goog.object.extend(exports, proto.wavesenterprise);
