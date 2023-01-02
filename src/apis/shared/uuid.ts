import { randomBytes } from "./platform/crypto";

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
export function generateUUID(): string {
  const bytes = randomBytes(16);

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const plain = Array.from(bytes)
    .map((byte) => byteToString(byte))
    .join("");

  return (
    plain.slice(0, 8) +
    "-" +
    plain.slice(8, 12) +
    "-" +
    plain.slice(12, 16) +
    "-" +
    plain.slice(16, 20) +
    "-" +
    plain.slice(20, 32)
  );
}

const cache = new Map<number, string>();

/**
 *
 *
 * @param {number} byte
 * @return {string} string
 *
 * @example
 * byteToString(255) // -> "ff"
 */
function byteToString(byte: number): string {
  const cached = cache.get(byte);
  if (typeof cached === "string") return cached;

  const value = byte.toString(16).padStart(2, "0");
  cache.set(byte, value);
  return value;
}
