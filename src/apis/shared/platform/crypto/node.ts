import crypto from "crypto";
import type { BinaryAlike } from "./shared";

/**
 *
 *
 * @export
 * @param {Uint8Array} array1
 * @param {Uint8Array} array2
 * @return {boolean} boolean
 */
export function timingSafeEqual(array1: Uint8Array, array2: Uint8Array): boolean {
  return crypto.timingSafeEqual(Buffer.from(array1), Buffer.from(array2));
}

/**
 *
 *
 * @export
 * @param {number} size
 * @return {Uint8Array} Uint8Array
 */
export function randomBytes(size: number): Uint8Array {
  return new Uint8Array(crypto.randomBytes(size));
}

/**
 *
 *
 * @export
 * @param {string} algorithm
 * @param {BinaryAlike} key
 * @param {BinaryAlike} data
 * @return {Uint8Array} Uint8Array
 */
export function hmac(
  algorithm: string,
  key: BinaryAlike,
  data: BinaryAlike
): Uint8Array {
  return new Uint8Array(
    crypto.createHmac(algorithm, Buffer.from(key)).update(Buffer.from(data)).digest()
  );
}
