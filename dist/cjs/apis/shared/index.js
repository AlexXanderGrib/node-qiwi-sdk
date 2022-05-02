'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var collect = require('./collect.js');
var querystring = require('./querystring.js');
var time = require('./time.js');
var uuid = require('./uuid.js');



exports.collect = collect.collect;
exports.formatQuerystring = querystring.formatQuerystring;
exports.parseQuerystring = querystring.parseQuerystring;
Object.defineProperty(exports, 'TimeSpan', {
	enumerable: true,
	get: function () { return time.TimeSpan; }
});
exports.TimeSpanMapping = time.TimeSpanMapping;
exports.formatDate = time.formatDate;
exports.formatOffsetDate = time.formatOffsetDate;
exports.generateUUID = uuid.generateUUID;
