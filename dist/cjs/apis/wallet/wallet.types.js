"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonIdentificationLevel = void 0;
(function (PersonIdentificationLevel) {
  PersonIdentificationLevel["ANONYMOUS"] = "ANONYMOUS";
  PersonIdentificationLevel["SIMPLE"] = "SIMPLE";
  PersonIdentificationLevel["VERIFIED"] = "VERIFIED";
  PersonIdentificationLevel["FULL"] = "FULL";
})(exports.PersonIdentificationLevel || (exports.PersonIdentificationLevel = {}));
exports.TransactionType = void 0;
(function (TransactionType) {
  TransactionType["ALL"] = "ALL";
  TransactionType["IN"] = "IN";
  TransactionType["OUT"] = "OUT";
  TransactionType["QIWI_CARD"] = "QIWI_CARD";
})(exports.TransactionType || (exports.TransactionType = {}));
exports.TransactionStatus = void 0;
(function (TransactionStatus) {
  TransactionStatus["WAITING"] = "WAITING";
  TransactionStatus["SUCCESS"] = "SUCCESS";
  TransactionStatus["ERROR"] = "ERROR";
})(exports.TransactionStatus || (exports.TransactionStatus = {}));
exports.Currency = void 0;
(function (Currency) {
  Currency[(Currency["RUB"] = 643)] = "RUB";
  Currency[(Currency["USD"] = 840)] = "USD";
  Currency[(Currency["EUR"] = 978)] = "EUR";
  Currency[(Currency["KZT"] = 398)] = "KZT";
})(exports.Currency || (exports.Currency = {}));
exports.ChequeFormat = void 0;
(function (ChequeFormat) {
  ChequeFormat["JPEG"] = "JPEG";
  ChequeFormat["PDF"] = "PDF";
})(exports.ChequeFormat || (exports.ChequeFormat = {}));
exports.Recipients = void 0;
(function (Recipients) {
  Recipients[(Recipients["MTS"] = 1)] = "MTS";
  Recipients[(Recipients["Beeline"] = 2)] = "Beeline";
  Recipients[(Recipients["MegaFon"] = 3)] = "MegaFon";
  Recipients[(Recipients["Tele2"] = 42)] = "Tele2";
  Recipients[(Recipients["Yota"] = 25598)] = "Yota";
  Recipients[(Recipients["TinkoffMobile"] = 32596)] = "TinkoffMobile";
  Recipients[(Recipients["SberMobile"] = 34050)] = "SberMobile";
  Recipients[(Recipients["AlfaBank"] = 464)] = "AlfaBank";
  Recipients[(Recipients["TinkoffBank"] = 466)] = "TinkoffBank";
  Recipients[(Recipients["OTPBank"] = 804)] = "OTPBank";
  Recipients[(Recipients["RosSelkhozBank"] = 810)] = "RosSelkhozBank";
  Recipients[(Recipients["RusskiyStandardBank"] = 815)] = "RusskiyStandardBank";
  Recipients[(Recipients["VTBank"] = 816)] = "VTBank";
  Recipients[(Recipients["PromSvyazBank"] = 821)] = "PromSvyazBank";
  Recipients[(Recipients["SberBank"] = 870)] = "SberBank";
  Recipients[(Recipients["RenessansCreditBank"] = 881)] = "RenessansCreditBank";
  Recipients[(Recipients["MKBank"] = 1134)] = "MKBank";
  Recipients[(Recipients["VisaRusCard"] = 1963)] = "VisaRusCard";
  Recipients[(Recipients["VisaSngCard"] = 1960)] = "VisaSngCard";
  Recipients[(Recipients["MasterCardRus"] = 21013)] = "MasterCardRus";
  Recipients[(Recipients["MasterCardSng"] = 21012)] = "MasterCardSng";
  Recipients[(Recipients["MirCard"] = 31652)] = "MirCard";
  Recipients[(Recipients["OnLime"] = 674)] = "OnLime";
  Recipients[(Recipients["PodariZhiznFound"] = 1239)] = "PodariZhiznFound";
  Recipients[(Recipients["QIWI"] = 99)] = "QIWI";
  Recipients[(Recipients["QIWINickname"] = 99999)] = "QIWINickname";
  Recipients[(Recipients["AnyRusCard"] = 31873)] = "AnyRusCard";
  Recipients[(Recipients["AnyKzCard"] = 27292)] = "AnyKzCard";
  /**
   * Перевод на QIWI-Кошелёк по никнейму
   * @deprecated Переименовано в `QIWINickname`
   * @see {@link QIWINickname}
   */
  Recipients[(Recipients["QIWI_Nickname"] = 99999)] = "QIWI_Nickname";
  Recipients[(Recipients["BankRequisites"] = 1717)] = "BankRequisites";
  Recipients[(Recipients["QIWIVirtualCard"] = 22351)] = "QIWIVirtualCard";
  /**
   * Перевод на QIWI-Кошелёк по номеру виртуальной карты
   * @deprecated Переименовано в `QIWIVirtualCard`
   * @see {@link QIWIVirtualCard}
   */
  Recipients[(Recipients["QIWI_VirtualCard"] = 22351)] = "QIWI_VirtualCard";
  /**
   * Перевод в Яндекс.Деньги
   *
   * @deprecated Сейчас называется `YooMoney`
   * @see {@link YooMoney}
   */
  Recipients[(Recipients["YandexMoney"] = 26476)] = "YandexMoney";
  Recipients[(Recipients["YooMoney"] = 26476)] = "YooMoney";
  Recipients[(Recipients["YooMoneyKz"] = 36459)] = "YooMoneyKz";
  Recipients[(Recipients["UnionPayMoneyExpress"] = 26340)] = "UnionPayMoneyExpress";
  Recipients[(Recipients["Contact"] = 26580)] = "Contact";
})(exports.Recipients || (exports.Recipients = {}));
exports.PaymentHistorySource = void 0;
(function (PaymentHistorySource) {
  PaymentHistorySource["QW_RUB"] = "QW_RUB";
  PaymentHistorySource["QW_USD"] = "QW_USD";
  PaymentHistorySource["QW_EUR"] = "QW_EUR";
  PaymentHistorySource["CARD"] = "CARD";
  PaymentHistorySource["MK"] = "MK";
})(exports.PaymentHistorySource || (exports.PaymentHistorySource = {}));
exports.LimitType = void 0;
(function (LimitType) {
  LimitType["REFILL"] = "REFILL";
  LimitType["TURNOVER"] = "TURNOVER";
  LimitType["PAYMENTS_P2P"] = "PAYMENTS_P2P";
  LimitType["PAYMENTS_PROVIDER_INTERNATIONALS"] = "PAYMENTS_PROVIDER_INTERNATIONALS";
  LimitType["PAYMENTS_PROVIDER_PAYOUT"] = "PAYMENTS_PROVIDER_PAYOUT";
  LimitType["WITHDRAW_CASH"] = "WITHDRAW_CASH";
})(exports.LimitType || (exports.LimitType = {}));
exports.CardStatus = void 0;
(function (CardStatus) {
  CardStatus["ACTIVE"] = "ACTIVE";
  CardStatus["SENDED_TO_BANK"] = "SENDED_TO_BANK";
  CardStatus["SENDED_TO_USER"] = "SENDED_TO_USER";
  CardStatus["BLOCKED"] = "BLOCKED";
  CardStatus["UNKNOWN"] = "UNKNOWN";
})(exports.CardStatus || (exports.CardStatus = {}));
exports.CardActionStatus = void 0;
(function (CardActionStatus) {
  CardActionStatus["OK"] = "OK";
  CardActionStatus["FAIL"] = "FAIL";
  CardActionStatus["CONFIRMATION_REQUIRED"] = "CONFIRMATION_REQUIRED";
  CardActionStatus["CONFIRMATION_LIMIT_EXCEED"] = "CONFIRMATION_LIMIT_EXCEED";
})(exports.CardActionStatus || (exports.CardActionStatus = {}));
exports.CommissionPayer = void 0;
(function (CommissionPayer) {
  CommissionPayer["RECEIVER"] = "RECEIVER";
  CommissionPayer["SENDER"] = "SENDER";
})(exports.CommissionPayer || (exports.CommissionPayer = {}));
exports.QuickPayRecipients = void 0;
(function (QuickPayRecipients) {
  QuickPayRecipients["Card"] = "card";
  QuickPayRecipients["Phone"] = "phone";
})(exports.QuickPayRecipients || (exports.QuickPayRecipients = {}));
