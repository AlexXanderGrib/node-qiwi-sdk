"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryString = require("query-string");
/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param {string} querystring Строка запроса
 * @return {*}
 */
function parseQuerystring(querystring) {
  return queryString.parse(querystring, {
    arrayFormat: "index",
    parseBooleans: true,
    parseNumbers: true
  });
}
/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyResponse} object Объект для преобразования
 * @return {string}
 */
function formatQuerystring(object) {
  return queryString.stringify(object, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}
exports.formatQuerystring = formatQuerystring;
exports.parseQuerystring = parseQuerystring;
