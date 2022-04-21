import qs from "query-string";
import type {
  AnyMapping,
  AnyResponse,
  Collection,
  Mapping,
  ObjectKey,
  ObjectMapping,
  ReadonlyRecord
} from "./shared.types";
import { v4 as uuid } from "uuid";

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
  const utc = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );

  const offset = date.getTimezoneOffset();
  const sign = offset > 0 ? "-" : "+";

  const base = utc.toISOString().split(".")[0];
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
export function parseQuerystring(querystring: string): AnyResponse {
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
export function formatQuerystring(object: AnyResponse): string {
  return qs.stringify(object as any, {
    arrayFormat: "index",
    skipNull: true,
    skipEmptyString: false
  });
}

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
export function generateUUID() {
  return uuid();
}

/**
 *
 *
 * @export
 * @template T
 * @param {Collection<T>} collection
 * @return {T[]}
 */
export function convertCollection<T>(collection: Collection<T>): T[] {
  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(collection);
}

/**
 *
 *
 * @export
 * @template K
 * @template V
 * @param {AnyMapping<K, V>} mapping
 * @return {ReadonlyMap<K, V>}
 */
export function convertMapping<K, V>(mapping: AnyMapping<K, V>): ReadonlyMap<K, V> {
  if ("entries" in mapping) {
    return new Map(convertCollection(mapping.entries()));
  }

  return new Map(convertCollection(mapping));
}

/**
 *
 *
 * @template K
 * @template V
 * @param {unknown} object
 * @return {*}  {object is Mapping<K, V>}
 */
export function isMapping<K, V>(object: unknown): object is Mapping<K, V> {
  return Boolean(
    object &&
      typeof object === "object" &&
      "entries" in object &&
      typeof (object as any).entries === "function"
  );
}

/**
 *
 *
 * @template T
 * @param {unknown} object
 * @return {*}  {object is Collection<T>}
 */
export function isCollection<T>(object: unknown): object is Collection<T> {
  if (!(object && typeof object === "object")) return false;

  if (Array.isArray(object)) return true;

  const collection = object as any;

  if (typeof collection[Symbol.iterator] === "function") {
    return true;
  }

  const digits = /^\d+$/;

  const numericKeysCount = Object.keys(collection).map(
    (key) => digits.test(key) && !Number.isNaN(Number.parseInt(key))
  ).length;

  if (
    typeof collection.length === "number" &&
    collection.length <= numericKeysCount
  ) {
    return true;
  }

  return false;
}

/**
 *
 *
 * @export
 * @template K
 * @template V
 * @param {ObjectMapping<K, V>} mapping
 * @return {*}  {ReadonlyRecord<K, V>}
 */
export function convertObjectMapping<K extends ObjectKey, V>(
  mapping: ObjectMapping<K, V>
): ReadonlyRecord<K, V> {
  let map: ReadonlyMap<K, V>;

  if (isMapping(mapping)) {
    map = new Map(convertCollection(mapping.entries()));
  } else if (isCollection(mapping)) {
    map = new Map(convertCollection(mapping));
  } else {
    return mapping;
  }

  const record = {} as Record<K, V>;

  for (const [key, value] of map.entries()) {
    // eslint-disable-next-line security/detect-object-injection
    record[key] = value;
  }

  return record;
}

export enum TimeSpan {
  Millisecond = 1,
  Second = Millisecond * 1000,
  Minute = Second * 60,
  Hour = Minute * 60,
  Day = Hour * 24,
  Week = Day * 7,
  Month = Day * 30,
  Year = Day * 365
}

export const TimeSpanMapping = {
  ms: TimeSpan.Millisecond,
  msec: TimeSpan.Millisecond,
  millisecond: TimeSpan.Millisecond,
  s: TimeSpan.Second,
  sec: TimeSpan.Second,
  second: TimeSpan.Second,
  m: TimeSpan.Minute,
  min: TimeSpan.Minute,
  minute: TimeSpan.Minute,
  h: TimeSpan.Hour,
  hr: TimeSpan.Hour,
  hour: TimeSpan.Hour,
  d: TimeSpan.Day,
  day: TimeSpan.Day,
  w: TimeSpan.Week,
  week: TimeSpan.Week,
  mn: TimeSpan.Month,
  mon: TimeSpan.Month,
  month: TimeSpan.Month,
  y: TimeSpan.Year,
  yr: TimeSpan.Year,
  year: TimeSpan.Year
};
export type TimeSpanMapping = typeof TimeSpanMapping;
export type TimeSpanKeys = keyof TimeSpanMapping;
/**
 *
 *
 * @export
 * @param {number} amount
 * @param {(TimeSpan | number | TimeSpanKeys)} unit
 * @param {Date} [currentDate=new Date()]
 * @return {string}  {string}
 */
export function formatOffsetDate(
  amount: number,
  unit: TimeSpan | number | TimeSpanKeys = TimeSpan.Millisecond,
  currentDate = new Date()
): string {
  const date = new Date(currentDate);

  if (typeof unit !== "number") {
    // eslint-disable-next-line security/detect-object-injection
    unit = TimeSpanMapping[unit];
  }

  const time = Math.round(date.getTime() + amount * unit);
  date.setTime(time);

  return formatDate(date);
}
