// source: managed/update_contract_transaction.proto
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
var atomic_badge_pb = require('../atomic_badge_pb.js');
goog.object.extend(proto, atomic_badge_pb);
goog.exportSymbol('proto.wavesenterprise.UpdateContractTransaction', null, global);
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
proto.wavesenterprise.UpdateContractTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wavesenterprise.UpdateContractTransaction.repeatedFields_, null);
};
goog.inherits(proto.wavesenterprise.UpdateContractTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.UpdateContractTransaction.displayName = 'proto.wavesenterprise.UpdateContractTransaction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wavesenterprise.UpdateContractTransaction.repeatedFields_ = [10];



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
proto.wavesenterprise.UpdateContractTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.UpdateContractTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.UpdateContractTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.UpdateContractTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    contractId: msg.getContractId_asB64(),
    image: jspb.Message.getFieldWithDefault(msg, 4, ""),
    imageHash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fee: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    feeAssetId: (f = msg.getFeeAssetId()) && google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance, f),
    atomicBadge: (f = msg.getAtomicBadge()) && atomic_badge_pb.AtomicBadge.toObject(includeInstance, f),
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
 * @return {!proto.wavesenterprise.UpdateContractTransaction}
 */
proto.wavesenterprise.UpdateContractTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.UpdateContractTransaction;
  return proto.wavesenterprise.UpdateContractTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.UpdateContractTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.UpdateContractTransaction}
 */
proto.wavesenterprise.UpdateContractTransaction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageHash(value);
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
      var value = new google_protobuf_wrappers_pb.BytesValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader);
      msg.setFeeAssetId(value);
      break;
    case 9:
      var value = new atomic_badge_pb.AtomicBadge;
      reader.readMessage(value,atomic_badge_pb.AtomicBadge.deserializeBinaryFromReader);
      msg.setAtomicBadge(value);
      break;
    case 10:
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
proto.wavesenterprise.UpdateContractTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.UpdateContractTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.UpdateContractTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.UpdateContractTransaction.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getContractId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImageHash();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getFeeAssetId();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter
    );
  }
  f = message.getAtomicBadge();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      atomic_badge_pb.AtomicBadge.serializeBinaryToWriter
    );
  }
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      10,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getId_asB64 = function() {
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
proto.wavesenterprise.UpdateContractTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sender_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sender_public_key = 2;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getSenderPublicKey_asB64 = function() {
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
proto.wavesenterprise.UpdateContractTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setSenderPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes contract_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getContractId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes contract_id = 3;
 * This is a type-conversion wrapper around `getContractId()`
 * @return {string}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getContractId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractId()));
};


/**
 * optional bytes contract_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractId()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getContractId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setContractId = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string image = 4;
 * @return {string}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string image_hash = 5;
 * @return {string}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getImageHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setImageHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 fee = 6;
 * @return {number}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 timestamp = 7;
 * @return {number}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.BytesValue fee_asset_id = 8;
 * @return {?proto.google.protobuf.BytesValue}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getFeeAssetId = function() {
  return /** @type{?proto.google.protobuf.BytesValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BytesValue, 8));
};


/**
 * @param {?proto.google.protobuf.BytesValue|undefined} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
*/
proto.wavesenterprise.UpdateContractTransaction.prototype.setFeeAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.clearFeeAssetId = function() {
  return this.setFeeAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.hasFeeAssetId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AtomicBadge atomic_badge = 9;
 * @return {?proto.wavesenterprise.AtomicBadge}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getAtomicBadge = function() {
  return /** @type{?proto.wavesenterprise.AtomicBadge} */ (
    jspb.Message.getWrapperField(this, atomic_badge_pb.AtomicBadge, 9));
};


/**
 * @param {?proto.wavesenterprise.AtomicBadge|undefined} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
*/
proto.wavesenterprise.UpdateContractTransaction.prototype.setAtomicBadge = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.clearAtomicBadge = function() {
  return this.setAtomicBadge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.hasAtomicBadge = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated bytes proofs = 10;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * repeated bytes proofs = 10;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.UpdateContractTransaction} returns this
 */
proto.wavesenterprise.UpdateContractTransaction.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


goog.object.extend(exports, proto.wavesenterprise);
