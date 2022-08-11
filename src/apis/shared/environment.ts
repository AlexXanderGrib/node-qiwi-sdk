import { getOwnProperty } from "./get";
import type { ReadonlyRecord } from "./types";

type Environment<
  K extends string = string,
  X extends string | undefined = string | undefined
> = ReadonlyRecord<K, X>;

/**
 * Создаёт копию `process.env` ограниченную по ключам
 *
 * @template T
 * @param {ReadonlyRecord<string, string | string>} baseEnvironment
 * @param {...T} keys
 * @return {Object} (ReadonlyRecord<T[number], string | undefined>)
 */
function loadEnvironment<T extends string[]>(
  baseEnvironment: Environment,
  ...keys: T
): Environment<T[number], string> {
  const environment = Object.create(null) as Environment<string, string>;

  for (const key of keys) {
    Object.defineProperty(environment, key, {
      get: () => getOwnProperty(baseEnvironment, key)
    });
  }

  return environment;
}

export const environment = loadEnvironment(
  /* istanbul ignore next */
  typeof process === "object" && process?.env ? process.env : {},
  "QIWI_TOKEN",
  "QIWI_WALLET",
  "QIWI_SECRET_KEY",
  "QIWI_PUBLIC_KEY"
);
