'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable unicorn/prevent-abbreviations */
exports.BillStatus = void 0;
(function (BillStatus) {
    /** Счет выставлен, ожидает оплаты */
    BillStatus["WAITING"] = "WAITING";
    /** Счет оплачен */
    BillStatus["PAID"] = "PAID";
    /** Счет отклонен */
    BillStatus["REJECTED"] = "REJECTED";
    /** Время жизни счета истекло. Счет не оплачен */
    BillStatus["EXPIRED"] = "EXPIRED";
})(exports.BillStatus || (exports.BillStatus = {}));
exports.BillCurrency = void 0;
(function (BillCurrency) {
    BillCurrency["RUB"] = "RUB";
    BillCurrency["KZT"] = "KZT";
})(exports.BillCurrency || (exports.BillCurrency = {}));
exports.BillPaySource = void 0;
(function (BillPaySource) {
    BillPaySource["QIWI"] = "qw";
    BillPaySource["Card"] = "card";
    BillPaySource["Mobile"] = "mobile";
})(exports.BillPaySource || (exports.BillPaySource = {}));
exports.BillRefundStatus = void 0;
(function (BillRefundStatus) {
    BillRefundStatus["FULL"] = "FULL";
    BillRefundStatus["PARTIAL"] = "PARTIAL";
})(exports.BillRefundStatus || (exports.BillRefundStatus = {}));
