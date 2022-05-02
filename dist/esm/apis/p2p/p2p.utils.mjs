/**
 * @template {CallableFunction} T
 *
 * @param {T} function_
 * @return {T}
 */
function promise(function_) {
  const wrapper = (...parameters) => {
    try {
      const result = function_(...parameters);
      if (result instanceof Promise) return result;
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return wrapper;
}
export { promise };
