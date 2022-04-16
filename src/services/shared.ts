import qs from "query-string";
import type { AnyResponse } from "./shared.types";

/**
 * Превращает число в двухзначную строку
 * @param {number} number
 * @return {string}
 *
 * @example
 * 3 // -> '03'
 */
const dd = (number: number): string => number.toFixed(0).padStart(2, "0");

/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {Date | number | string} dateTime Аргумент для конструктора
 * @return {string}
 */
export function formatDate(dateTime: Date | number | string): string {
  const date = new Date(dateTime);
  const offset = date.getTimezoneOffset();
  const sign = offset > 0 ? "-" : "+";

  const base = date.toISOString().split(".")[0];
  const hours = dd(Math.trunc(Math.abs(offset) / 60));
  const minutes = dd(offset % 60);

  //      [ Дата ][    Временная зона     ]
  return `${base}${sign}${hours}:${minutes}`;
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
