import { v4 } from "uuid";
import crypto from "crypto";

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
export function generateUUID(): string {
  return crypto.randomUUID ? crypto.randomUUID() : v4();
}
