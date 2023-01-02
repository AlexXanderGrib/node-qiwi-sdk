import { hmac, timingSafeEqual, BinaryAlike } from "./platform/crypto";
import { hexToUint8Array, utf8ToUint8Array } from "./platform/decode";

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
  if (typeof key === "string") key = utf8ToUint8Array(key);
  if (typeof data === "string") data = utf8ToUint8Array(data);
  if (typeof digest === "string") digest = hexToUint8Array(digest);

  const hash = hmac(algorithm, key, data);
  return timingSafeEqual(hash, digest);
}

const QIWI_JOINER = "|";

/**
 *
 *
 * @export
 * @param {string} key
 * @param {string} digest
 * @param {string[]} data
 * @return {boolean} boolean
 */
export function compareQiwiHmac(
  key: BinaryAlike,
  digest: BinaryAlike,
  data: string[]
): boolean {
  return compareHmac({ key, digest, data: data.join(QIWI_JOINER) });
}
