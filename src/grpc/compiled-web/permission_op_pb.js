// source: permission_op.proto
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
var op_type_pb = require('./op_type_pb.js');
goog.object.extend(proto, op_type_pb);
var role_pb = require('./role_pb.js');
goog.object.extend(proto, role_pb);
goog.exportSymbol('proto.wavesenterprise.PermissionOp', null, global);
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
proto.wavesenterprise.PermissionOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wavesenterprise.PermissionOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.PermissionOp.displayName = 'proto.wavesenterprise.PermissionOp';
}



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
proto.wavesenterprise.PermissionOp.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.PermissionOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.PermissionOp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.PermissionOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    opType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    role: (f = msg.getRole()) && role_pb.Role.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dueTimestamp: (f = msg.getDueTimestamp()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.wavesenterprise.PermissionOp}
 */
proto.wavesenterprise.PermissionOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.PermissionOp;
  return proto.wavesenterprise.PermissionOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.PermissionOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.PermissionOp}
 */
proto.wavesenterprise.PermissionOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.wavesenterprise.OpType} */ (reader.readEnum());
      msg.setOpType(value);
      break;
    case 2:
      var value = new role_pb.Role;
      reader.readMessage(value,role_pb.Role.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setDueTimestamp(value);
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
proto.wavesenterprise.PermissionOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.PermissionOp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.PermissionOp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.PermissionOp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      role_pb.Role.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getDueTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional OpType op_type = 1;
 * @return {!proto.wavesenterprise.OpType}
 */
proto.wavesenterprise.PermissionOp.prototype.getOpType = function() {
  return /** @type {!proto.wavesenterprise.OpType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.wavesenterprise.OpType} value
 * @return {!proto.wavesenterprise.PermissionOp} returns this
 */
proto.wavesenterprise.PermissionOp.prototype.setOpType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Role role = 2;
 * @return {?proto.wavesenterprise.Role}
 */
proto.wavesenterprise.PermissionOp.prototype.getRole = function() {
  return /** @type{?proto.wavesenterprise.Role} */ (
    jspb.Message.getWrapperField(this, role_pb.Role, 2));
};


/**
 * @param {?proto.wavesenterprise.Role|undefined} value
 * @return {!proto.wavesenterprise.PermissionOp} returns this
*/
proto.wavesenterprise.PermissionOp.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.PermissionOp} returns this
 */
proto.wavesenterprise.PermissionOp.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.PermissionOp.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.wavesenterprise.PermissionOp.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.PermissionOp} returns this
 */
proto.wavesenterprise.PermissionOp.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Int64Value due_timestamp = 4;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.wavesenterprise.PermissionOp.prototype.getDueTimestamp = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.wavesenterprise.PermissionOp} returns this
*/
proto.wavesenterprise.PermissionOp.prototype.setDueTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wavesenterprise.PermissionOp} returns this
 */
proto.wavesenterprise.PermissionOp.prototype.clearDueTimestamp = function() {
  return this.setDueTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.PermissionOp.prototype.hasDueTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.wavesenterprise);
