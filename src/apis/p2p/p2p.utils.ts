/* istanbul ignore file */

/**
 * @template {CallableFunction} T
 *
 * @param {T} function_
 * @return {T}
 */
export function promise<T extends (...parameters: any) => any>(function_: T) {
  const wrapper = (...parameters: any[]): any => {
    try {
      const result = function_(...parameters);

      if (result instanceof Promise) return result;

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return wrapper as (
    ...arguments_: Parameters<T>
  ) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;
}
