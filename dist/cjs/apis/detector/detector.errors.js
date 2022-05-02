'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var error = require('../../error.js');

/**
 * Ошибка, которую выбрасывает персональное API в случае
 * неправильного кода ответа от QIWI
 */
class DetectorError extends error.ExtendedError {
}

exports.DetectorError = DetectorError;
