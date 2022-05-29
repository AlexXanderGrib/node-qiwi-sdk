import type { AnyRecord } from "./types";

export function getOwnProperty<O extends AnyRecord, K extends keyof O>(
  object: O,
  key: K
): O[K];

/**
 * Безопасно получает свойство объекта
 *
 * @export
 * @template T
 * @param {AnyRecord} object
 * @param {string} key
 * @return {T|undefined}  {(T | undefined)}
 */
export function getOwnProperty(object: AnyRecord, key: string): unknown | undefined {
  return Object.getOwnPropertyDescriptor(object, key)?.value;
}

/**
 * Safe _.get
 *
 * @export
 * @template {T}
 * @param {AnyRecord} object
 * @param {string} key
 * @return {T|undefined}
 */
export function getOwnPropertyDeep<T>(
  object: AnyRecord,
  key: string
): T | undefined {
  const parts = key.split(".");

  let value: any = object;

  for (const path of parts) {
    value = getOwnProperty(value, path);
  }

  return value;
}
