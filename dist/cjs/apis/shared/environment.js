"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Создаёт копию `process.env` ограниченную по ключам
 *
 * @template T
 * @param {Record<string, string | string>} baseEnvironment
 * @param {...T} keys
 * @return {Object}  {(Record<T[number], string | undefined>)}
 */
function loadEnvironment(baseEnvironment, ...keys) {
  const environment = {};
  for (const key of keys) {
    Object.defineProperty(environment, key, {
      get: () => baseEnvironment[key]
    });
  }
  return environment;
}
const environment = loadEnvironment(
  process.env,
  "QIWI_TOKEN",
  "QIWI_WALLET",
  "QIWI_SECRET_KEY",
  "QIWI_PUBLIC_KEY"
);
exports.environment = environment;
