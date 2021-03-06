// source: data_entry.proto
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

goog.exportSymbol('proto.wavesenterprise.DataEntry', null, global);
goog.exportSymbol('proto.wavesenterprise.DataEntry.ValueCase', null, global);
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
proto.wavesenterprise.DataEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.wavesenterprise.DataEntry.oneofGroups_);
};
goog.inherits(proto.wavesenterprise.DataEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wavesenterprise.DataEntry.displayName = 'proto.wavesenterprise.DataEntry';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.wavesenterprise.DataEntry.oneofGroups_ = [[10,11,12,13]];

/**
 * @enum {number}
 */
proto.wavesenterprise.DataEntry.ValueCase = {
  VALUE_NOT_SET: 0,
  INT_VALUE: 10,
  BOOL_VALUE: 11,
  BINARY_VALUE: 12,
  STRING_VALUE: 13
};

/**
 * @return {proto.wavesenterprise.DataEntry.ValueCase}
 */
proto.wavesenterprise.DataEntry.prototype.getValueCase = function() {
  return /** @type {proto.wavesenterprise.DataEntry.ValueCase} */(jspb.Message.computeOneofCase(this, proto.wavesenterprise.DataEntry.oneofGroups_[0]));
};



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
proto.wavesenterprise.DataEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.wavesenterprise.DataEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wavesenterprise.DataEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.DataEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intValue: jspb.Message.getFieldWithDefault(msg, 10, 0),
    boolValue: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    binaryValue: msg.getBinaryValue_asB64(),
    stringValue: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.wavesenterprise.DataEntry}
 */
proto.wavesenterprise.DataEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wavesenterprise.DataEntry;
  return proto.wavesenterprise.DataEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wavesenterprise.DataEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wavesenterprise.DataEntry}
 */
proto.wavesenterprise.DataEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntValue(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBinaryValue(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
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
proto.wavesenterprise.DataEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wavesenterprise.DataEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wavesenterprise.DataEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wavesenterprise.DataEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.wavesenterprise.DataEntry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 int_value = 10;
 * @return {number}
 */
proto.wavesenterprise.DataEntry.prototype.getIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.setIntValue = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.wavesenterprise.DataEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.clearIntValue = function() {
  return jspb.Message.setOneofField(this, 10, proto.wavesenterprise.DataEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.DataEntry.prototype.hasIntValue = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool bool_value = 11;
 * @return {boolean}
 */
proto.wavesenterprise.DataEntry.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.wavesenterprise.DataEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 11, proto.wavesenterprise.DataEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.DataEntry.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes binary_value = 12;
 * @return {!(string|Uint8Array)}
 */
proto.wavesenterprise.DataEntry.prototype.getBinaryValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes binary_value = 12;
 * This is a type-conversion wrapper around `getBinaryValue()`
 * @return {string}
 */
proto.wavesenterprise.DataEntry.prototype.getBinaryValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBinaryValue()));
};


/**
 * optional bytes binary_value = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinaryValue()`
 * @return {!Uint8Array}
 */
proto.wavesenterprise.DataEntry.prototype.getBinaryValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBinaryValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.setBinaryValue = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.wavesenterprise.DataEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.clearBinaryValue = function() {
  return jspb.Message.setOneofField(this, 12, proto.wavesenterprise.DataEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.DataEntry.prototype.hasBinaryValue = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string string_value = 13;
 * @return {string}
 */
proto.wavesenterprise.DataEntry.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.wavesenterprise.DataEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.wavesenterprise.DataEntry} returns this
 */
proto.wavesenterprise.DataEntry.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 13, proto.wavesenterprise.DataEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wavesenterprise.DataEntry.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 13) != null;
};


goog.object.extend(exports, proto.wavesenterprise);
