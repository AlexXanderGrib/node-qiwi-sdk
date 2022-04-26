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
