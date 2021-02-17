import qs from "query-string";

export * from "./services/p2p";
export * from "./services/p2p.types";
export * from "./services/personal";
export * from "./services/personal.types";

/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {Date | number | string} date Аргумент для конструктора
 */
export function formatDate(date: Date | number | string): string {
  const d = new Date(date);
  const tz = d.getTimezoneOffset();
  const sign = tz > 0 ? "-" : "+";

  const base = d.toISOString().split(".")[0];
  const fd = (x: number) => x.toString().padStart(2, "0");

  return base + sign + fd(Math.trunc(Math.abs(tz) / 60)) + ":" + fd(tz % 60);
}

/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param string Строка запроса
 */
export function parseQS(string: string) {
  return qs.parse(string, {
    arrayFormat: "index",
    parseBooleans: true,
    parseNumbers: true
  }) as any;
}

/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 * @param object Объект для преобразования
 */
export function createQS(object: object) {
  return qs.stringify(object as any, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}
