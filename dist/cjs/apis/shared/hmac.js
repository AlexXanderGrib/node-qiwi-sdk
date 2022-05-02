"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
/**
 *
 *
 * @param {BinaryLike} data
 * @return {NodeJS.ArrayBufferView}  {NodeJS.ArrayBufferView}
 */
function parseBinaryAlike(data) {
  if (typeof data === "string") return Buffer.from(data, "hex");
  return data;
}
/**
 *
 *
 * @export
 * @param {HmacOptions} options
 * @return {boolean}
 */
function compareHmac({ algorithm = "sha256", data, digest, key }) {
  const hash = crypto.createHmac(algorithm, key).update(data).digest();
  return crypto.timingSafeEqual(hash, parseBinaryAlike(digest));
}
exports.compareHmac = compareHmac;
