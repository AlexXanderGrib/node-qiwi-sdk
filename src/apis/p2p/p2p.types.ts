/* eslint-disable unicorn/prevent-abbreviations */
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

export type BillCreationRequest = {
  /** Данные о сумме счета */
  amount: {
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
    currency: BillCurrency;
  };

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

export type BillStatusData = {
  /** Уникальный идентификатор выставляемого счета в вашей системе */
  billId: string;

  /** Ваш идентификатор в системе p2p.qiwi */
  siteId: string;

  /** Данные о сумме счета */
  amount: BillCreationRequest["amount"];

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

export type BillFormParameters = {
  /** Уникальный идентификатор выставляемого счета в вашей системе */
  billId?: string;
  // /** Ваш ключ идентификации полученный в p2p.qiwi.com */
  // publicKey: string;
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

export enum BillPaySource {
  QIWI = "qw",
  Card = "card",
  Mobile = "mobile"
}

export type PayUrlPatchParameters = Partial<{
  paySource: BillPaySource;
  successUrl: string;
}>;

export type BillCreateParameters = BillCreationRequest &
  PayUrlPatchParameters & {
    billId?: string;
  };
