import { getOwnProperty } from "./get";

type DateValue = Date | number | string;

/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {DateValue} dateTime Аргумент для конструктора
 * @return {string}
 */
export function formatDate(dateTime: DateValue): string {
  const date = new Date(dateTime);
  const base = date.toISOString().split(".")[0];

  return `${base}+00:00`;
}

/**
 * **Используется только для параметра `lifetime` при создании ссылки на форму оплаты**
 *
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTччмм`
 *
 * @export
 * @param {DateValue} dateTime
 * @return {string} string
 */
export function formatAltLifetimeDate(dateTime: DateValue): string {
  const date = new Date(dateTime);
  const base = date.toISOString().split("T")[0];

  const time =
    date.getHours().toString().padStart(2, "0") +
    date.getMinutes().toString().padStart(2, "0");

  return `${base}T${time}`;
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

export const TimeSpanMapping = Object.freeze({
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
});
export type TimeSpanMapping = typeof TimeSpanMapping;
export type TimeSpanKeys = keyof TimeSpanMapping;

type TimeUnit = TimeSpan | number | TimeSpanKeys;

/**
 *
 *
 * @param {number} amount
 * @param {TimeUnit} unit
 * @param {Date} currentDate
 * @return {Date}
 */
function offsetDate(amount: number, unit: TimeUnit, currentDate: Date): Date {
  const date = new Date(currentDate);

  if (typeof unit !== "number") {
    unit = getOwnProperty(TimeSpanMapping, unit);
  }

  const time = Math.round(date.getTime() + amount * unit);
  date.setTime(time);

  return date;
}

/**
 * **Используется только для параметра `lifetime` при создании ссылки на форму оплаты**
 *
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTччмм`
 *
 * @export
 * @param {number} amount
 * @param {(TimeSpan | number | TimeSpanKeys)} unit
 * @param {Date} [currentDate=new Date()]
 * @return {string} string
 */
export function formatOffsetDate(
  amount: number,
  unit: TimeUnit = TimeSpan.Millisecond,
  currentDate = new Date()
): string {
  return formatDate(offsetDate(amount, unit, currentDate));
}

/**
 *
 *
 * @export
 * @param {number} amount
 * @param {(TimeSpan | number | TimeSpanKeys)} unit
 * @param {Date} [currentDate=new Date()]
 * @return {string} string
 */
export function formatOffsetAltLifetimeDate(
  amount: number,
  unit: TimeUnit = TimeSpan.Millisecond,
  currentDate = new Date()
): string {
  return formatAltLifetimeDate(offsetDate(amount, unit, currentDate));
}
