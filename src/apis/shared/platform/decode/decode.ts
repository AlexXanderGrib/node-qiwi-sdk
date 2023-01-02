/**
 *
 *
 * @export
 * @param {string} base64
 * @return {Uint8Array} Uint8Array
 */
export function base64ToUint8Array(base64: string): Uint8Array {
  return Buffer.from(base64, "base64");
}

/**
 *
 *
 * @export
 * @param {string} hex
 * @return {Uint8Array} Uint8Array
 */
export function hexToUint8Array(hex: string): Uint8Array {
  return Buffer.from(hex, "hex");
}

/**
 *
 *
 * @export
 * @param {string} text
 * @return {Uint8Array} Uint8Array
 */
export function utf8ToUint8Array(text: string): Uint8Array {
  return new Uint8Array(Buffer.from(text));
}

/**
 *
 *
 * @export
 * @param {Uint8Array} array
 * @return {string} string
 */
export function uint8ArrayToUtf8(array: Uint8Array): string {
  return Buffer.from(array).toString();
}
