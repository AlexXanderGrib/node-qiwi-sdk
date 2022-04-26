import { parse, stringify } from "query-string";
import type { AnyResponse } from "./types";

/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param {string} querystring Строка запроса
 * @return {*}
 */
export function parseQuerystring(querystring: string): AnyResponse {
  // Парсинг строки не используется в тестах
  // Пакет `query-string` уже протестирован
  /* istanbul ignore next */
  return parse(querystring, {
    arrayFormat: "index",
    parseBooleans: true,
    parseNumbers: true
  }) as any;
}

/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyResponse} object Объект для преобразования
 * @return {string}
 */
export function formatQuerystring(object: AnyResponse): string {
  return stringify(object as any, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}
