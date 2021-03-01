// source: managed/register_node_transaction.proto
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
var op_type_pb = require('../op_type_pb.js');
goog.object.extend(proto, op_type_pb);
goog.exportSymbol('proto.wavesenterprise.RegisterNodeTransaction', null, global);
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
proto.wavesenterprise.RegisterNodeTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wavesenterprise.RegisterNodeTransaction.repeatedFields_, null);
};
goog.inherits(proto.wavesenterprise.RegisterNodeTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.RegisterNodeTransaction.displayName = 'proto.wavesenterprise.RegisterNodeTransaction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wavesenterprise.RegisterNodeTransaction.repeatedFields_ = [8];



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
proto.wavesenterprise.RegisterNodeTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.RegisterNodeTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.RegisterNodeTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.RegisterNodeTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    target: msg.getTarget_asB64(),
    nodeName: (f = msg.getNodeName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    opType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.wavesenterprise.RegisterNodeTransaction}
 */
proto.wavesenterprise.RegisterNodeTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.RegisterNodeTransaction;
  return proto.wavesenterprise.RegisterNodeTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.RegisterNodeTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.RegisterNodeTransaction}
 */
proto.wavesenterprise.RegisterNodeTransaction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTarget(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setNodeName(value);
      break;
    case 5:
      var value = /** @type {!proto.wavesenterprise.OpType} */ (reader.readEnum());
      msg.setOpType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
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
proto.wavesenterprise.RegisterNodeTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.RegisterNodeTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.RegisterNodeTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.RegisterNodeTransaction.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTarget_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getNodeName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getOpType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getFee();
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
proto.wavesenterprise.RegisterNodeTransaction.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getId_asB64 = function() {
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
proto.wavesenterprise.RegisterNodeTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sender_public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sender_public_key = 2;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getSenderPublicKey_asB64 = function() {
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
proto.wavesenterprise.RegisterNodeTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setSenderPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes target = 3;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getTarget = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes target = 3;
 * This is a type-conversion wrapper around `getTarget()`
 * @return {string}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getTarget_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTarget()));
};


/**
 * optional bytes target = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTarget()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getTarget_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTarget()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setTarget = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue node_name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getNodeName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
*/
proto.wavesenterprise.RegisterNodeTransaction.prototype.setNodeName = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.clearNodeName = function() {
  return this.setNodeName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.hasNodeName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OpType op_type = 5;
 * @return {!proto.wavesenterprise.OpType}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getOpType = function() {
  return /** @type {!proto.wavesenterprise.OpType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.wavesenterprise.OpType} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setOpType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 fee = 7;
 * @return {number}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated bytes proofs = 8;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getProofsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * repeated bytes proofs = 8;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.getProofsList_asB64 = function() {
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
proto.wavesenterprise.RegisterNodeTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.setProofsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.addProofs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wavesenterprise.RegisterNodeTransaction} returns this
 */
proto.wavesenterprise.RegisterNodeTransaction.prototype.clearProofsList = function() {
  return this.setProofsList([]);
};


goog.object.extend(exports, proto.wavesenterprise);
