import type { AnyResponse } from "./types";
/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param {string} querystring Строка запроса
 * @return {*}
 */
export declare function parseQuerystring(querystring: string): AnyResponse;
/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyResponse} object Объект для преобразования
 * @return {string}
 */
export declare function formatQuerystring(object: AnyResponse): string;
