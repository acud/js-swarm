// source: handshake.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.handshake.BzzAddress');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.handshake.BzzAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.handshake.BzzAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.handshake.BzzAddress.displayName = 'proto.handshake.BzzAddress';
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
proto.handshake.BzzAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.handshake.BzzAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.handshake.BzzAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.handshake.BzzAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    underlay: msg.getUnderlay_asB64(),
    signature: msg.getSignature_asB64(),
    overlay: msg.getOverlay_asB64()
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
 * @return {!proto.handshake.BzzAddress}
 */
proto.handshake.BzzAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.handshake.BzzAddress;
  return proto.handshake.BzzAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.handshake.BzzAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.handshake.BzzAddress}
 */
proto.handshake.BzzAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUnderlay(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOverlay(value);
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
proto.handshake.BzzAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.handshake.BzzAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.handshake.BzzAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.handshake.BzzAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnderlay_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOverlay_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes Underlay = 1;
 * @return {!(string|Uint8Array)}
 */
proto.handshake.BzzAddress.prototype.getUnderlay = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Underlay = 1;
 * This is a type-conversion wrapper around `getUnderlay()`
 * @return {string}
 */
proto.handshake.BzzAddress.prototype.getUnderlay_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUnderlay()));
};


/**
 * optional bytes Underlay = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUnderlay()`
 * @return {!Uint8Array}
 */
proto.handshake.BzzAddress.prototype.getUnderlay_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUnderlay()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.handshake.BzzAddress} returns this
 */
proto.handshake.BzzAddress.prototype.setUnderlay = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.handshake.BzzAddress.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.handshake.BzzAddress.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.handshake.BzzAddress.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.handshake.BzzAddress} returns this
 */
proto.handshake.BzzAddress.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes Overlay = 3;
 * @return {!(string|Uint8Array)}
 */
proto.handshake.BzzAddress.prototype.getOverlay = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes Overlay = 3;
 * This is a type-conversion wrapper around `getOverlay()`
 * @return {string}
 */
proto.handshake.BzzAddress.prototype.getOverlay_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOverlay()));
};


/**
 * optional bytes Overlay = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOverlay()`
 * @return {!Uint8Array}
 */
proto.handshake.BzzAddress.prototype.getOverlay_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOverlay()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.handshake.BzzAddress} returns this
 */
proto.handshake.BzzAddress.prototype.setOverlay = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


