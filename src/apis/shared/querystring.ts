import { URLSearchParameters } from "./url-globals";
import type { AnyRecord } from "./types";

type Primitive = string | number | boolean;

/**
 *
 *
 * @param {unknown} value
 * @return {boolean} value is Primitive
 */
function isPrimitive(value: unknown): value is Primitive {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint"
  );
}

/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyRecord} object Объект для преобразования
 * @return {string}
 */
export function formatQuerystring(object: AnyRecord): string {
  const parameters = new URLSearchParameters();

  for (const [key, value] of Object.entries(object)) {
    if (isPrimitive(value)) {
      parameters.set(key, String(value));
      continue;
    }

    if (!(typeof value === "object" && value)) {
      continue;
    }

    for (const [subKey, subValue] of Object.entries(value)) {
      let string: string;

      if (isPrimitive(subValue)) {
        string = String(subValue);
      } else {
        continue;
      }

      parameters.set(`${key}[${subKey}]`, string);
    }
  }

  return parameters.toString();
}
