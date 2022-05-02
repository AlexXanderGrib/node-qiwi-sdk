/**
 *
 *
 * @export
 * @template T
 * @param {Collection<T>} collection
 * @return {T[]}
 */
function collect(collection) {
  return Array.from(collection);
}
export { collect };
