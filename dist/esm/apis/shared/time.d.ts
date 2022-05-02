/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {Date | number | string} dateTime Аргумент для конструктора
 * @return {string}
 */
export declare function formatDate(dateTime: Date | number | string): string;
export declare enum TimeSpan {
    Millisecond = 1,
    Second = 1000,
    Minute = 60000,
    Hour = 3600000,
    Day = 86400000,
    Week = 604800000,
    Month = 2592000000,
    Year = 31536000000
}
export declare const TimeSpanMapping: {
    ms: TimeSpan;
    msec: TimeSpan;
    millisecond: TimeSpan;
    s: TimeSpan;
    sec: TimeSpan;
    second: TimeSpan;
    m: TimeSpan;
    min: TimeSpan;
    minute: TimeSpan;
    h: TimeSpan;
    hr: TimeSpan;
    hour: TimeSpan;
    d: TimeSpan;
    day: TimeSpan;
    w: TimeSpan;
    week: TimeSpan;
    mn: TimeSpan;
    mon: TimeSpan;
    month: TimeSpan;
    y: TimeSpan;
    yr: TimeSpan;
    year: TimeSpan;
};
export declare type TimeSpanMapping = typeof TimeSpanMapping;
export declare type TimeSpanKeys = keyof TimeSpanMapping;
/**
 *
 *
 * @export
 * @param {number} amount
 * @param {(TimeSpan | number | TimeSpanKeys)} unit
 * @param {Date} [currentDate=new Date()]
 * @return {string}  {string}
 */
export declare function formatOffsetDate(amount: number, unit?: TimeSpan | number | TimeSpanKeys, currentDate?: Date): string;
