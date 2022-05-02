"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillStatus = void 0;
(function (BillStatus) {
  BillStatus["WAITING"] = "WAITING";
  BillStatus["PAID"] = "PAID";
  BillStatus["REJECTED"] = "REJECTED";
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
