var BillStatus;
(function (BillStatus) {
  BillStatus["WAITING"] = "WAITING";
  BillStatus["PAID"] = "PAID";
  BillStatus["REJECTED"] = "REJECTED";
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
