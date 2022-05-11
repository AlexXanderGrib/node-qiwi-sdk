/**
 * Безопасно получает свойство объекта
 *
 * @export
 * @template T
 * @param {Record<string, unknown>} object
 * @param {string} key
 * @return {T|undefined}  {(T | undefined)}
 */
export function getOwnProperty<O extends Record<string, unknown>, K extends keyof O>(
  object: O,
  key: K
): O[K] {
  const keys = Object.keys(object);

  if (!keys.includes(key as string)) return undefined as O[K];

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
