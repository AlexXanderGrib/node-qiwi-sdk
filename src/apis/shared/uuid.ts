import { v4 } from "uuid";

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
export function generateUUID(): string {
  return v4();
}
