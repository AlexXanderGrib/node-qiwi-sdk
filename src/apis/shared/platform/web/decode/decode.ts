/* istanbul ignore */
import { getByIndex } from "apis/shared/get";

declare const TextEncoder: typeof import("util").TextEncoder;
declare const TextDecoder: typeof import("util").TextDecoder;

/**
 *
 *
 * @export
 * @param {string} base64
 * @return {Uint8Array}  {Uint8Array}
 */
export function base64ToUint8Array(base64: string): Uint8Array {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""); // base64 alphabet
  const result: number[] = [];

  for (let index = 0; index < base64.length / 4; index++) {
    const chunk = [...base64.slice(4 * index, 4 * index + 4)];
    const bin = chunk
      .map((x) => alphabet.indexOf(x).toString(2).padStart(6, "0"))
      .join("");
    const bytes = bin.match(/.{1,8}/g)?.map((x) => Number.parseInt(x, 2)) ?? [];
    result.push(
      ...bytes.slice(
        0,
        3 -
          Number(getByIndex(base64, 4 * index + 2) === "=") -
          Number(getByIndex(base64, 4 * index + 3) === "=")
      )
    );
  }
  return new Uint8Array(result);
}

const hexRegExp = /^[\da-f]*$/i;

/**
 *
 *
 * @export
 * @param {string} hex
 * @return {Uint8Array}  {Uint8Array}
 */
export function hexToUint8Array(hex: string): Uint8Array {
  hex = hex.toLowerCase();
  if (!hexRegExp.test(hex)) {
    throw new TypeError("Input is not in hex format");
  }

  if (hex.length % 2 !== 0) {
    throw new TypeError("Hex input can not have odd length");
  }

  const byteLength = hex.length / 2;
  const bytes = new Array<number>();

  for (let index = 0; index < byteLength; index++) {
    const byte = hex.slice(index * 2, index * 2 + 2);

    bytes.push(Number.parseInt(byte, 16));
  }

  return new Uint8Array(bytes);
}

/**
 *
 *
 * @export
 * @param {string} text
 * @return {Uint8Array}  {Uint8Array}
 */
export function utf8ToUint8Array(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

/**
 *
 *
 * @export
 * @param {Uint8Array} array
 * @return {string}  {string}
 */
export function uint8ArrayToUtf8(array: Uint8Array): string {
  return new TextDecoder().decode(array);
}
