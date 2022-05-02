"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
function generateUUID() {
  return uuid.v4();
}
exports.generateUUID = generateUUID;
