import { createHmac, timingSafeEqual } from "crypto";
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
  const hash = createHmac(algorithm, key).update(data).digest();
  return timingSafeEqual(hash, parseBinaryAlike(digest));
}
export { compareHmac };
