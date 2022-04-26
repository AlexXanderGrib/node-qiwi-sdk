import type { Collection } from "./types";

/**
 *
 *
 * @export
 * @template T
 * @param {Collection<T>} collection
 * @return {T[]}
 */
export function collect<T>(collection: Collection<T>): T[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(collection);
}
