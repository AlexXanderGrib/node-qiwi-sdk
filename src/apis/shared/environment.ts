type Environment<
  K extends string = string,
  X extends string | undefined = string | undefined
> = Readonly<Record<K, X>>;

/**
 * Создаёт копию `process.env` ограниченную по ключам
 *
 * @template T
 * @param {Record<string, string | string>} baseEnvironment
 * @param {...T} keys
 * @return {Object}  {(Record<T[number], string | undefined>)}
 */
function loadEnvironment<T extends string[]>(
  baseEnvironment: Environment,
  ...keys: T
): Environment<T[number], string> {
  const environment = {} as Environment<string, string>;

  for (const key of keys) {
    Object.defineProperty(environment, key, {
      // eslint-disable-next-line security/detect-object-injection
      get: () => baseEnvironment[key]
    });
  }

  return environment;
}

export const environment = loadEnvironment(
  process.env,
  "QIWI_TOKEN",
  "QIWI_WALLET",
  "QIWI_SECRET_KEY",
  "QIWI_PUBLIC_KEY"
);
