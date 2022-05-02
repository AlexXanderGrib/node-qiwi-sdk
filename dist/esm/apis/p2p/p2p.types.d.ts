export declare enum BillStatus {
    /** Счет выставлен, ожидает оплаты */
    WAITING = "WAITING",
    /** Счет оплачен */
    PAID = "PAID",
    /** Счет отклонен */
    REJECTED = "REJECTED",
    /** Время жизни счета истекло. Счет не оплачен */
    EXPIRED = "EXPIRED"
}
export declare type BillStatusPlain = keyof typeof BillStatus;
export declare type BillStatusAny = BillStatus | BillStatusPlain;
export declare enum BillCurrency {
    RUB = "RUB",
    KZT = "KZT"
}
export declare type BillCurrencyPlain = keyof typeof BillCurrency;
export declare type BillCurrencyAny = BillCurrency | BillCurrencyPlain;
export declare type BillMoneyAmount = {
    /**
     * Сумма, на которую выставляется счет, округленная в меньшую
     * сторону до 2 десятичных знаков
     *
     * @type {number|string} Number(6.2)
     */
    value: number | string;
    /**
     * Валюта суммы счета. Возможные значения:
     * `RUB` - рубли
     * `KZT` - тенге
     */
    currency: BillCurrencyAny;
};
export declare type BillCreationRequest = {
    /** Данные о сумме счета */
    amount: BillMoneyAmount;
    /**
     * Дата, до которой счет будет доступен для оплаты. Если перевод
     * не будет совершен до этой даты, ему присваивается финальный
     * статус `EXPIRED` и последующий перевод станет невозможен.
     *
     * @type {string} URL-закодированная строка `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм`
     *
     * @example
     * "2020-07-10T09:02:00+03:00"
     */
    expirationDateTime?: string | Date;
    /** Идентификаторы пользователя */
    customer?: {
        /** Номер телефона пользователя (в международном формате) */
        phone?: string;
        /** E-mail пользователя */
        email?: string;
        /** Идентификатор пользователя в вашей системе */
        account?: string;
    };
    /**
     * Комментарий к счету
     * @maxlength 255
     */
    comment?: string;
    /**
     * Дополнительные данные счета. Так же при помощи этого параметра вы
     * можете настроить
     * {@link https://developer.qiwi.com/ru/p2p-payments/#custom|персонализацию}
     * вашей формы, передав переменную `themeCode`
     */
    customFields?: Record<string, string>;
};
export declare type BillStatusData = {
    /** Уникальный идентификатор выставляемого счета в вашей системе */
    billId: string;
    /** Ваш идентификатор в системе p2p.qiwi */
    siteId: string;
    /** Данные о сумме счета */
    amount: BillMoneyAmount;
    status: {
        /** Текущий статус счета */
        value: BillStatusAny;
        /** Дата обновления статуса */
        changedDateTime: string;
    };
    /** Объект строковых дополнительных параметров, переданных вами */
    customFields: Record<string, string>;
    /** Идентификаторы пользователя */
    customer?: BillCreationRequest["customer"];
    /** Комментарий к счету */
    comment?: string;
    /**
     * Системная дата создания счета. Формат даты:
     * `ГГГГ-ММ-ДДTчч:мм:сс`
     */
    creationDateTime: string;
    /**
     * {@link https://developer.qiwi.com/ru/p2p-payments/#option|Ссылка для переадресации}
     * пользователя на созданную форму
     */
    payUrl: string;
    /**
     * Срок действия созданной формы для перевода. Формат даты:
     * `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм`
     */
    expirationDateTime: string;
};
export declare type BillStatusBody = {
    bill: BillStatusData;
};
export declare type BillError = {
    /** Название сервиса, зачастую начинается на `invoicing` */
    serviceName: string;
    /** Внутренний код ошибки */
    errorCode: string;
    /** Вот это надо пихать в поле `Error.message` */
    description: string;
    /**  */
    userMessage: string;
    /** Дата и время ответа */
    datetime: string;
    /** Хз что это */
    traceId: string;
};
export declare type BillFormParameters = {
    /** Уникальный идентификатор выставляемого счета в вашей системе */
    billId?: string;
    /**
     * Сумма, на которую выставляется счет, округленная в меньшую
     * сторону до 2 десятичных знаков
     */
    amount: string | number;
    /**
     * URL для переадресации в случае успешного перевода с баланса
     * QIWI Кошелька. При ином способе оплаты переадресация не
     * выполняется. Ссылка должна вести на ваш сайт.
     */
    successUrl?: string;
    /** Комментарий к счету */
    comment?: string;
    /** Дополнительные данные счета */
    customFields?: Record<string, string>;
    /**
     * Дата, до которой счет будет доступен для перевода. Если
     * перевод по счету не будет произведен до этой даты, ему
     * присваивается финальный статус EXPIRED и последующий перевод
     * станет невозможен.
     *
     * **Внимание! По истечении 45 суток от даты выставления счет
     * автоматически будет переведен в финальный статус**
     */
    lifetime?: string;
} & BillCreationRequest["customer"];
export declare enum BillPaySource {
    QIWI = "qw",
    Card = "card",
    Mobile = "mobile"
}
export declare type PayUrlPatchParameters = Partial<{
    paySource: BillPaySource;
    successUrl: string;
}>;
export declare type BillCreateParameters = BillCreationRequest & PayUrlPatchParameters & {
    billId?: string;
};
export declare type RefundCreationRequest = {
    refundId?: string;
    amount: BillMoneyAmount;
};
export declare enum BillRefundStatus {
    FULL = "FULL",
    PARTIAL = "PARTIAL"
}
export declare type BillRefundStatusPlain = keyof typeof BillRefundStatus;
export declare type BillRefundStatusAny = BillRefundStatus | BillRefundStatusPlain;
export declare type BillRefundStatusData = {
    datetime: string;
    amount: BillMoneyAmount;
    refundId: string;
    status: BillRefundStatusAny;
};
