export enum BillStatus {
  /** Счет выставлен, ожидает оплаты */
  WAITING = "WAITING",
  /** Счет оплачен */
  PAID = "PAID",
  /** Счет отклонен */
  REJECTED = "REJECTED",
  /** Время жизни счета истекло. Счет не оплачен */
  EXPIRED = "EXPIRED"
}

export type BillStatusPlain = keyof typeof BillStatus;
export type BillStatusAny = BillStatus | BillStatusPlain;

export enum BillCurrency {
  RUB = "RUB",
  KZT = "KZT"
}

export type BillCurrencyPlain = keyof typeof BillCurrency;
export type BillCurrencyAny = BillCurrency | BillCurrencyPlain;

export enum BillPaySource {
  QIWI = "qw",
  Card = "card",
  Mobile = "mobile"
}

export type BillPaySourcePlain = "qw" | "card" | "mobile";
export type BillPaySourceAny = BillPaySource | BillPaySourcePlain;

type CustomFields = {
  /**
   * Код персонализации формы
   *
   * [Документация](https://developer.qiwi.com/ru/p2p-payments/#custom)
   *
   * Код получить можно в [настройках p2p](https://qiwi.com/p2p-admin/transfers/link)
   */
  themeCode?: string;

  /**
   * Строка с разделителями-запятыми. При [открытии формы](https://developer.qiwi.com/ru/p2p-payments/#payurl) будут
   * отображаться только указанные способы перевода (один или
   * несколько), если они доступны. Возможные значения:
   * - `qw` - QIWI Кошелек,
   * - `card` - банковская карта.
   *
   * @example
   *
   * [BillPaySource.QIWI, BillPaySource.CARD].join(',')
   */
  paySourcesFilter?: string;
} & Record<string, string>;

export type BillMoneyAmount = {
  /**
   * Сумма, на которую выставляется счет, округленная в меньшую
   * сторону до 2 десятичных знаков
   *
   * @type {number|string} Number(6.2)
   */
  value: number | string;
  /**
   * Валюта суммы счета. Возможные значения:
   * - `RUB` - рубли
   * - `KZT` - тенге
   */
  currency: BillCurrencyAny;
};

type BillCustomFieldsExtension = {
  /**
   * Код персонализации темы, добавляется в поле `customFields`
   */
  themeCode?: string;

  /**
   * Строка с разделителями-запятыми. При [открытии формы](https://developer.qiwi.com/ru/p2p-payments/#payurl) будут
   * отображаться только указанные способы перевода (один или
   * несколько), если они доступны. Возможные значения:
   * - `qw` - QIWI Кошелек,
   * - `card` - банковская карта.
   */
  paySourcesFilter?: BillPaySourceAny | BillPaySourceAny[];
};

export type BillCreationRequest = BillCustomFieldsExtension & {
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
   * [персонализацию](https://developer.qiwi.com/ru/p2p-payments/#custom)
   * вашей формы, передав переменную `themeCode`
   */
  customFields?: CustomFields;
};

export type BillStatusData = {
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
  customFields?: CustomFields;

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
   * [Ссылка для переадресации](https://developer.qiwi.com/ru/p2p-payments/#option)
   * пользователя на созданную форму
   */
  payUrl: string;

  /**
   * Срок действия созданной формы для перевода. Формат даты:
   * `ГГГГ-ММ-ДДTчч:мм:сс+\-чч:мм`
   */
  expirationDateTime: string;

  /**
   * Номер телефона привязанный к киви кошельку, на который
   * совершается платёж
   */
  recipientPhoneNumber?: string;
};

export type BillStatusNotificationBody = BillStatusData;

export type BillStatusBody = {
  bill: BillStatusNotificationBody;
};

export type BillError = {
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

export type PayUrlPatchParameters = {
  /**
   * Выбранный по умолчанию метод оплаты
   */
  paySource?: BillPaySourceAny;

  /**
   * URL для переадресации в случае успешного перевода с баланса
   * QIWI Кошелька. При ином способе оплаты переадресация не
   * выполняется. Ссылка должна вести на ваш сайт.
   */
  successUrl?: string;
};

export type BillFormParameters = PayUrlPatchParameters &
  BillCustomFieldsExtension & {
    /** Уникальный идентификатор выставляемого счета в вашей системе */
    billId?: string;

    /**
     * Сумма в рублях, на которую выставляется счет, округленная в меньшую
     * сторону до 2 десятичных знаков
     */
    amount: string | number;

    /** Комментарий к счету */
    comment?: string;

    /** Дополнительные данные счета */
    customFields?: CustomFields;

    /**
     * Код персонализации формы. Добавляется в `customFields`
     */
    themeCode?: string;

    /**
     * Дата, до которой счет будет доступен для перевода. Если
     * перевод по счету не будет произведен до этой даты, ему
     * присваивается финальный статус `EXPIRED` и последующий перевод
     * станет невозможен.
     *
     * **Внимание! По истечении 45 суток от даты выставления счет
     * автоматически будет переведен в финальный статус**
     *
     * По умолчанию сроком истечения является день, через 45 суток
     * от времени перехода по ссылке
     *
     * Для форматирования используйте функцию `formatAltLifetimeDate()` или `formatOffsetAltLifetimeDate()`
     */
    lifetime?: string;
  } & BillCreationRequest["customer"];

export type BillCreateParameters = BillCreationRequest &
  PayUrlPatchParameters & {
    billId?: string;
  };

export type RefundCreationRequest = {
  refundId?: string;
  amount: BillMoneyAmount;
};

export enum BillRefundStatus {
  FULL = "FULL",
  PARTIAL = "PARTIAL"
}

export type BillRefundStatusPlain = keyof typeof BillRefundStatus;
export type BillRefundStatusAny = BillRefundStatus | BillRefundStatusPlain;

export type BillRefundStatusData = {
  datetime: string;
  amount: BillMoneyAmount;
  refundId: string;
  status: BillRefundStatusAny;
};
