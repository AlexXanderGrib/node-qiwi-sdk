/**
 * Превращает число в двухзначную строку
 * @param {number} number
 * @return {string}
 *
 * @example
 * 3 // -> '03'
 */
const dd = (number) => number.toFixed(0).padStart(2, "0");
/**
 * Форматирует дату в понятную для QIWI строку:
 *
 * `ГГГГ-ММ-ДДTЧЧ:ММ:СС+\-ЧЧ:ММ`
 *
 * @param {Date | number | string} dateTime Аргумент для конструктора
 * @return {string}
 */
function formatDate(dateTime) {
    const date = new Date(dateTime);
    const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    const offset = date.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const base = utc.toISOString().split(".")[0];
    const hours = dd(Math.trunc(Math.abs(offset) / 60));
    const minutes = dd(offset % 60);
    //      [ Дата ][    Временная зона     ]
    return `${base}${sign}${hours}:${minutes}`;
}
var TimeSpan;
(function (TimeSpan) {
    TimeSpan[TimeSpan["Millisecond"] = 1] = "Millisecond";
    TimeSpan[TimeSpan["Second"] = 1000] = "Second";
    TimeSpan[TimeSpan["Minute"] = 60000] = "Minute";
    TimeSpan[TimeSpan["Hour"] = 3600000] = "Hour";
    TimeSpan[TimeSpan["Day"] = 86400000] = "Day";
    TimeSpan[TimeSpan["Week"] = 604800000] = "Week";
    TimeSpan[TimeSpan["Month"] = 2592000000] = "Month";
    TimeSpan[TimeSpan["Year"] = 31536000000] = "Year";
})(TimeSpan || (TimeSpan = {}));
const TimeSpanMapping = {
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
/**
 *
 *
 * @export
 * @param {number} amount
 * @param {(TimeSpan | number | TimeSpanKeys)} unit
 * @param {Date} [currentDate=new Date()]
 * @return {string}  {string}
 */
function formatOffsetDate(amount, unit = TimeSpan.Millisecond, currentDate = new Date()) {
    const date = new Date(currentDate);
    if (typeof unit !== "number") {
        // eslint-disable-next-line security/detect-object-injection
        unit = TimeSpanMapping[unit];
    }
    const time = Math.round(date.getTime() + amount * unit);
    date.setTime(time);
    return formatDate(date);
}

export { TimeSpan, TimeSpanMapping, formatDate, formatOffsetDate };
