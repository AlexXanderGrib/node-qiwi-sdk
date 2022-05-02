'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable camelcase */
/* eslint-disable unicorn/prevent-abbreviations */
exports.PersonIdentificationLevel = void 0;
(function (PersonIdentificationLevel) {
    /** Пользователь не вошёл в кошелёк */
    PersonIdentificationLevel["ANONYMOUS"] = "ANONYMOUS";
    /** "Минимальный" */
    PersonIdentificationLevel["SIMPLE"] = "SIMPLE";
    /**
     * "Основной" (данные для идентификации успешно прошли проверку)
     */
    PersonIdentificationLevel["VERIFIED"] = "VERIFIED";
    /**
     * "Профессиональный", если кошелек уже ранее получал полную
     * идентификацию по данным ФИО, номеру паспорта и дате рождения.
     */
    PersonIdentificationLevel["FULL"] = "FULL";
})(exports.PersonIdentificationLevel || (exports.PersonIdentificationLevel = {}));
exports.TransactionType = void 0;
(function (TransactionType) {
    /** Все операции */
    TransactionType["ALL"] = "ALL";
    /** Только пополнения */
    TransactionType["IN"] = "IN";
    /** Только платежи */
    TransactionType["OUT"] = "OUT";
    /** Платежи по картам QIWI (QVC, QVP) */
    TransactionType["QIWI_CARD"] = "QIWI_CARD";
})(exports.TransactionType || (exports.TransactionType = {}));
/** Статус платежа */
exports.TransactionStatus = void 0;
(function (TransactionStatus) {
    /** Платеж проводится */
    TransactionStatus["WAITING"] = "WAITING";
    /** Успешный платеж */
    TransactionStatus["SUCCESS"] = "SUCCESS";
    /** Ошибка платежа */
    TransactionStatus["ERROR"] = "ERROR";
})(exports.TransactionStatus || (exports.TransactionStatus = {}));
exports.Currency = void 0;
(function (Currency) {
    /** Рубли */
    Currency[Currency["RUB"] = 643] = "RUB";
    /** Доллары */
    Currency[Currency["USD"] = 840] = "USD";
    /** Евро */
    Currency[Currency["EUR"] = 978] = "EUR";
    /** Тенге */
    Currency[Currency["KZT"] = 398] = "KZT";
})(exports.Currency || (exports.Currency = {}));
exports.ChequeFormat = void 0;
(function (ChequeFormat) {
    ChequeFormat["JPEG"] = "JPEG";
    ChequeFormat["PDF"] = "PDF";
})(exports.ChequeFormat || (exports.ChequeFormat = {}));
exports.Recipients = void 0;
(function (Recipients) {
    /** МТС */
    Recipients[Recipients["MTS"] = 1] = "MTS";
    /** Билайн */
    Recipients[Recipients["Beeline"] = 2] = "Beeline";
    /** Мегафон */
    Recipients[Recipients["MegaFon"] = 3] = "MegaFon";
    /** Теле2 */
    Recipients[Recipients["Tele2"] = 42] = "Tele2";
    /** Йота (ООО "Скартел") */
    Recipients[Recipients["Yota"] = 25598] = "Yota";
    /** Тинькофф Мобайл */
    Recipients[Recipients["TinkoffMobile"] = 32596] = "TinkoffMobile";
    /** Сбер Мобайл */
    Recipients[Recipients["SberMobile"] = 34050] = "SberMobile";
    /** Альфа Банк */
    Recipients[Recipients["AlfaBank"] = 464] = "AlfaBank";
    /** Тинькофф Банк */
    Recipients[Recipients["TinkoffBank"] = 466] = "TinkoffBank";
    /** ОТП Банк */
    Recipients[Recipients["OTPBank"] = 804] = "OTPBank";
    /** РосСельхозБанк */
    Recipients[Recipients["RosSelkhozBank"] = 810] = "RosSelkhozBank";
    /** Банк "Русский Стандарт" */
    Recipients[Recipients["RusskiyStandardBank"] = 815] = "RusskiyStandardBank";
    /** ВТБ */
    Recipients[Recipients["VTBank"] = 816] = "VTBank";
    /** ПромСвязьБанк */
    Recipients[Recipients["PromSvyazBank"] = 821] = "PromSvyazBank";
    /** Сбербанк */
    Recipients[Recipients["SberBank"] = 870] = "SberBank";
    /** Ренессанс Кредит */
    Recipients[Recipients["RenessansCreditBank"] = 881] = "RenessansCreditBank";
    /** Московский Кредитный Банк */
    Recipients[Recipients["MKBank"] = 1134] = "MKBank";
    /** Перевод на карту VISA по России */
    Recipients[Recipients["VisaRusCard"] = 1963] = "VisaRusCard";
    /** Перевод на карту VISA по СНГ */
    Recipients[Recipients["VisaSngCard"] = 1960] = "VisaSngCard";
    /** Перевод на карту MasterCard по России */
    Recipients[Recipients["MasterCardRus"] = 21013] = "MasterCardRus";
    /** Перевод на карту MasterCard по СНГ */
    Recipients[Recipients["MasterCardSng"] = 21012] = "MasterCardSng";
    /** Перевод на карту МИР */
    Recipients[Recipients["MirCard"] = 31652] = "MirCard";
    /** Перевод в `OnLime` */
    Recipients[Recipients["OnLime"] = 674] = "OnLime";
    /** Перевод в фонд "Подари Жизнь" */
    Recipients[Recipients["PodariZhiznFound"] = 1239] = "PodariZhiznFound";
    /** Перевод на QIWI-Кошелёк по номеру телефона */
    Recipients[Recipients["QIWI"] = 99] = "QIWI";
    /** Перевод на QIWI-Кошелёк по никнейму */
    Recipients[Recipients["QIWINickname"] = 99999] = "QIWINickname";
    /** Перевод на любую карту РФ */
    Recipients[Recipients["AnyRusCard"] = 31873] = "AnyRusCard";
    Recipients[Recipients["AnyKzCard"] = 27292] = "AnyKzCard";
    /**
     * Перевод на QIWI-Кошелёк по никнейму
     * @deprecated Переименовано в `QIWINickname`
     * @see {@link QIWINickname}
     */
    // eslint-disable-next-line camelcase
    Recipients[Recipients["QIWI_Nickname"] = 99999] = "QIWI_Nickname";
    /** Перевод по банковским реквизитам */
    Recipients[Recipients["BankRequisites"] = 1717] = "BankRequisites";
    /** Перевод на QIWI-Кошелёк по номеру виртуальной карты */
    Recipients[Recipients["QIWIVirtualCard"] = 22351] = "QIWIVirtualCard";
    /**
     * Перевод на QIWI-Кошелёк по номеру виртуальной карты
     * @deprecated Переименовано в `QIWIVirtualCard`
     * @see {@link QIWIVirtualCard}
     */
    // eslint-disable-next-line camelcase
    Recipients[Recipients["QIWI_VirtualCard"] = 22351] = "QIWI_VirtualCard";
    /**
     * Перевод в Яндекс.Деньги
     *
     * @deprecated Сейчас называется `YooMoney`
     * @see {@link YooMoney}
     */
    Recipients[Recipients["YandexMoney"] = 26476] = "YandexMoney";
    /** Перевод в YooMoney (бывшие Яндекс.Деньги) */
    Recipients[Recipients["YooMoney"] = 26476] = "YooMoney";
    Recipients[Recipients["YooMoneyKz"] = 36459] = "YooMoneyKz";
    Recipients[Recipients["UnionPayMoneyExpress"] = 26340] = "UnionPayMoneyExpress";
    Recipients[Recipients["Contact"] = 26580] = "Contact";
})(exports.Recipients || (exports.Recipients = {}));
exports.PaymentHistorySource = void 0;
(function (PaymentHistorySource) {
    /**
     * Рублевый счет кошелька
     */
    PaymentHistorySource["QW_RUB"] = "QW_RUB";
    /**
     * Счет кошелька в долларах
     */
    PaymentHistorySource["QW_USD"] = "QW_USD";
    /**
     * Счет кошелька в евро
     */
    PaymentHistorySource["QW_EUR"] = "QW_EUR";
    /**
     * Привязанные и непривязанные к кошельку банковские
     * карты,
     */
    PaymentHistorySource["CARD"] = "CARD";
    /**
     * Счет мобильного оператора. Если не указан, учитываются
     * все источники
     */
    PaymentHistorySource["MK"] = "MK";
})(exports.PaymentHistorySource || (exports.PaymentHistorySource = {}));
exports.LimitType = void 0;
(function (LimitType) {
    /** Максимальный допустимый остаток на счёте */
    LimitType["REFILL"] = "REFILL";
    /** Оборот в месяц */
    LimitType["TURNOVER"] = "TURNOVER";
    /** Переводы на другие кошельки в месяц */
    LimitType["PAYMENTS_P2P"] = "PAYMENTS_P2P";
    /** Платежи в адрес иностранных компаний в месяц */
    LimitType["PAYMENTS_PROVIDER_INTERNATIONALS"] = "PAYMENTS_PROVIDER_INTERNATIONALS";
    /** Переводы на банковские счета и карты, кошельки других систем */
    LimitType["PAYMENTS_PROVIDER_PAYOUT"] = "PAYMENTS_PROVIDER_PAYOUT";
    /** Снятие наличных в месяц */
    LimitType["WITHDRAW_CASH"] = "WITHDRAW_CASH";
})(exports.LimitType || (exports.LimitType = {}));
/** Статус карты */
exports.CardStatus = void 0;
(function (CardStatus) {
    /** Активна */
    CardStatus["ACTIVE"] = "ACTIVE";
    /** Отправлена в банк */
    CardStatus["SENDED_TO_BANK"] = "SENDED_TO_BANK";
    /** Отправлена владельцу */
    CardStatus["SENDED_TO_USER"] = "SENDED_TO_USER";
    /** Заблокированная */
    CardStatus["BLOCKED"] = "BLOCKED";
    /** Хз */
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
