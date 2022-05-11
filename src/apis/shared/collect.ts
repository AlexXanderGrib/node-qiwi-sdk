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
  return Array.from(collection);
}
