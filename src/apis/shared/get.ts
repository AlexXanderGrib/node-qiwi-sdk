type AnyRecord = Record<string, unknown>;

export function getOwnProperty<O extends AnyRecord, K extends keyof O>(
  object: O,
  key: K
): O[K];

/**
 * Безопасно получает свойство объекта
 *
 * @export
 * @template T
 * @param {Record<string, unknown>} object
 * @param {string} key
 * @return {T|undefined}  {(T | undefined)}
 */
export function getOwnProperty(object: AnyRecord, key: string): unknown | undefined {
  const keys = Object.keys(object);

  if (!keys.includes(key as string)) return undefined;

  return Reflect.get(object, key);
}

/**
 * Safe _.get
 *
 * @export
 * @template {T}
 * @param {Record<string, unknown>} object
 * @param {string} key
 * @return {T|undefined}
 */
export function getOwnPropertyDeep<T>(
  object: Record<string, unknown>,
  key: string
): T | undefined {
  const parts = key.split(".");

  let value: any = object;

  for (const path of parts) {
    value = getOwnProperty(value, path);
  }

  return value;
}
