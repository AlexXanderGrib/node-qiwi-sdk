'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 *
 * @export
 * @template T
 * @param {Collection<T>} collection
 * @return {T[]}
 */
function collect(collection) {
    // eslint-disable-next-line unicorn/prefer-spread
    return Array.from(collection);
}

exports.collect = collect;
