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
 * @return {T|undefined} (T | undefined)
 */
export function getOwnProperty(object: AnyRecord, key: string): unknown | undefined {
  return Object.getOwnPropertyDescriptor(object, key)?.value;
}

/**
 *
 *
 * @export
 * @template T
 * @param {ArrayLike<T>} array
 * @param {number} index
 * @return {T} (T | undefined)
 */
export function getByIndex<T>(array: ArrayLike<T>, index: number): T | undefined {
  /* istanbul ignore next: used in web platform adapters */
  return getOwnProperty<Record<string, T>, string>(array as any, index.toString());
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
