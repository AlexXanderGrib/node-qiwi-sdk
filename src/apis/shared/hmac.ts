import { createHmac, timingSafeEqual } from "crypto";

// For compatibility with NodeJS v10 typings
type BinaryAlike = string | NodeJS.ArrayBufferView;

/**
 *
 *
 * @param {BinaryAlike} data
 * @return {NodeJS.ArrayBufferView}  {NodeJS.ArrayBufferView}
 */
function parseBinaryAlike(data: BinaryAlike): NodeJS.ArrayBufferView {
  if (typeof data === "string") return Buffer.from(data, "hex");

  return data;
}

export type HmacOptions = {
  algorithm?: string;
  key: BinaryAlike;
  data: BinaryAlike;
  digest: BinaryAlike;
};

/**
 *
 *
 * @export
 * @param {HmacOptions} options
 * @return {boolean}
 */
export function compareHmac({
  algorithm = "sha256",
  data,
  digest,
  key
}: HmacOptions) {
  const hash = createHmac(algorithm, key).update(data).digest();

  return timingSafeEqual(hash, parseBinaryAlike(digest));
}
