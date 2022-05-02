'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uuid = require('uuid');
var crypto = require('crypto');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
function generateUUID() {
    return crypto__default["default"].randomUUID ? crypto__default["default"].randomUUID() : uuid.v4();
}

exports.generateUUID = generateUUID;
