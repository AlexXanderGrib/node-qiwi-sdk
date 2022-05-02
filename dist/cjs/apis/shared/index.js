"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collect = require("./collect.js"),
  querystring = require("./querystring.js"),
  time = require("./time.js"),
  uuid = require("./uuid.js"),
  hmac = require("./hmac.js");
exports.collect = collect.collect;
exports.formatQuerystring = querystring.formatQuerystring;
exports.parseQuerystring = querystring.parseQuerystring;
Object.defineProperty(exports, "TimeSpan", {
  enumerable: true,
  get: () => time.TimeSpan
});
exports.TimeSpanMapping = time.TimeSpanMapping;
exports.formatDate = time.formatDate;
exports.formatOffsetDate = time.formatOffsetDate;
exports.generateUUID = uuid.generateUUID;
exports.compareHmac = hmac.compareHmac;
