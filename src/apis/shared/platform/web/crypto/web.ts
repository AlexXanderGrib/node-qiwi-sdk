/* istanbul ignore */
import { getByIndex } from "apis/shared/get";

/**
 *
 *
 * @export
 * @param {Uint8Array} array1
 * @param {Uint8Array} array2
 * @return {boolean} {boolean}
 */
export function timingSafeEqual(array1: Uint8Array, array2: Uint8Array): boolean {
  if (!(array1 instanceof Uint8Array)) {
    throw new TypeError("First argument must be an Uint8Array");
  }

  if (!(array2 instanceof Uint8Array)) {
    throw new TypeError("Second argument must be an Uint8Array");
  }

  if (array1.length !== array2.length) {
    throw new TypeError("Input arrays must have the same length");
  }

  const length = array1.length;

  let out = 0;
  let index = -1;
  while (++index < length) {
    const value1 = getByIndex(array1, index) as number;
    const value2 = getByIndex(array2, index) as number;

    out |= value1 ^ value2;
  }

  return out === 0;
}

declare const crypto: any;

/**
 *
 *
 * @export
 * @param {number} size
 * @return {Uint8Array}  {Uint8Array}
 */
export function randomBytes(size: number): Uint8Array {
  if (typeof crypto === "undefined") {
    throw new TypeError("Can not access global crypto");
  }

  if ("getRandomValues" in crypto) {
    const bytes = new Uint8Array(size);
    return crypto.getRandomValues(bytes);
  }

  throw new Error("Platform does not support secure random bytes generation");
}

/**
 *
 *
 * @export
 * @param {...unknown[]} parameters
 */
export function hmac(...parameters: unknown[]): Uint8Array {
  throw new Error(
    `Platform does not support native sync hmac (algorithm=${parameters[0]})`
  );
}
