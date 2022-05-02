/* eslint-disable unicorn/prevent-abbreviations */
var BillStatus;
(function (BillStatus) {
    /** Счет выставлен, ожидает оплаты */
    BillStatus["WAITING"] = "WAITING";
    /** Счет оплачен */
    BillStatus["PAID"] = "PAID";
    /** Счет отклонен */
    BillStatus["REJECTED"] = "REJECTED";
    /** Время жизни счета истекло. Счет не оплачен */
    BillStatus["EXPIRED"] = "EXPIRED";
})(BillStatus || (BillStatus = {}));
var BillCurrency;
(function (BillCurrency) {
    BillCurrency["RUB"] = "RUB";
    BillCurrency["KZT"] = "KZT";
})(BillCurrency || (BillCurrency = {}));
var BillPaySource;
(function (BillPaySource) {
    BillPaySource["QIWI"] = "qw";
    BillPaySource["Card"] = "card";
    BillPaySource["Mobile"] = "mobile";
})(BillPaySource || (BillPaySource = {}));
var BillRefundStatus;
(function (BillRefundStatus) {
    BillRefundStatus["FULL"] = "FULL";
    BillRefundStatus["PARTIAL"] = "PARTIAL";
})(BillRefundStatus || (BillRefundStatus = {}));

export { BillCurrency, BillPaySource, BillRefundStatus, BillStatus };
