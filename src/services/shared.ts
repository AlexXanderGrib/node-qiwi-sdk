import qs from "query-string";
import { AnyResponse } from "./shared.types";

/**
 * Форматирует часть даты
 * @param {number} x
 * @return {string}
 */
const fd = (x: number) => x.toString().padStart(2, "0");

/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {Date | number | string} date Аргумент для конструктора
 * @return {string}
 */
export function formatDate(date: Date | number | string): string {
  const d = new Date(date);
  const tz = d.getTimezoneOffset();
  const sign = tz > 0 ? "-" : "+";

  const base = d.toISOString().split(".")[0];

  return base + sign + fd(Math.trunc(Math.abs(tz) / 60)) + ":" + fd(tz % 60);
}

/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param {string} querystring Строка запроса
 * @return {*}
 */
export function parseQS(querystring: string): AnyResponse {
  return qs.parse(querystring, {
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
export function createQS(object: AnyResponse): string {
  return qs.stringify(object as any, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}
