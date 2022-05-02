/**
 * @template {CallableFunction} T
 *
 * @param {T} function_
 * @return {T}
 */
export declare function promise<T extends (...parameters: any) => any>(function_: T): (...arguments_: Parameters<T>) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;
