import { stringify } from "query-string";
import type { AnyResponse } from "./types";

/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyResponse} object Объект для преобразования
 * @return {string}
 */
export function formatQuerystring(object: AnyResponse): string {
  return stringify(object as any, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}
