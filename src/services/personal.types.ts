export enum PersonIdentificationLevel {
  /** Пользователь не вошёл в кошелёк */
  ANONYMOUS = "ANONYMOUS",
  /** "Минимальный" */
  SIMPLE = "SIMPLE",
  /** "Основной" (данные для идентификации успешно прошли проверку) */
  VERIFIED = "VERIFIED",
  /** "Профессиональный", если кошелек уже ранее получал полную идентификацию по данным ФИО, номеру паспорта и дате рождения. */
  FULL = "FULL"
}

export enum TransactionType {
  /** Все операции */
  ALL = "ALL",
  /** Только пополнения */
  IN = "IN",
  /** Только платежи */
  OUT = "OUT",
  /** Платежи по картам QIWI (QVC, QVP) */
  QIWI_CARD = "QIWI_CARD"
}

/** Статус платежа */
export enum TransactionStatus {
  /** Платеж проводится */
  WAITING = "WAITING",
  /** Успешный платеж */
  SUCCESS = "SUCCESS",
  /** Ошибка платежа */
  ERROR = "ERROR"
}

export enum Currency {
  /** Рубли */
  RUB = 643,
  /** Доллары */
  USD = 840,
  /** Евро */
  EUR = 978,
  /** Тенге */
  KZT = 398
}

export enum ChequeFormat {
  JPEG = "JPEG",
  PDF = "PDF"
}

export enum Recipients {
  /** Альфа Банк */
  AlfaBank = 464,
  /** Тинькофф Банк */
  TinkoffBank = 466,
  /** ОТП Банк */
  OTPBank = 804,
  /** РосСельхозБанк */
  RosSelkhozBank = 810,
  /** Банк "Русский Стандарт" */
  RusskiyStandardBank = 815,
  /** ВТБ */
  VTBank = 816,
  /** ПромСвязьБанк */
  PromSvyazBank = 821,
  /** Сбербанк */
  SberBank = 870,
  /** Ренессанс Кредит */
  RenessansCreditBank = 881,
  /** Московский Кредитный Банк */
  MKBank = 1134,
  /** Перевод на карту VISA по России */
  VisaRusCard = 1963,
  /** Перевод на карту VISA по СНГ */
  VisaSngCard = 1960,
  /** Перевод на карту MasterCard по России */
  MasterCardRus = 21013,
  /** Перевод на карту MasterCard по СНГ */
  MasterCardSng = 21012,
  /** Перевод на карту МИР */
  MirCard = 31652,
  /** Перевод в `OnLime` */
  OnLime = 674,
  /** Перевод в фонд "Подари Жизнь" */
  PodariZhiznFound = 1239,
  /** Перевод на QIWI-Кошелёк по номеру телефона */
  QIWI = 99,
  /** Перевод на QIWI-Кошелёк по никнейму */
  QIWI_Nickname = 99999,
  /** Перевод по банковским реквизитам */
  BankRequisites = 1717,
  /** Перевод на QIWI-Кошелёк по номеру виртуальной карты */
  QIWI_VirtualCard = 22351
}

export type PersonProfile = {
  /** Текущие настройки авторизации. Объект может отсутствовать, в зависимости от признака `authInfoEnabled` в запросе. */
  authInfo: {
    /** Номер кошелька */
    personId: number;
    /** Дата/время регистрации QIWI Кошелька (через сайт/мобильное приложение, либо другим способом) */
    registrationDate: string;
    /** E-mail, привязанный к кошельку. Если отсутствует, то `null` */
    boundEmail: string | null;
    /** IP-адрес последней пользовательской сессии */
    ip: string;
    /** Дата/время последней сессии в QIWI Кошельке */
    lastLoginDate: string;
    /** Данные о PIN-коде мобильного приложения QIWI Кошелька */
    mobilePinInfo: {
      /** Логический признак использования PIN-кода (фактически означает, что мобильное приложение используется) */
      mobilePinUsed: boolean;
      /** Дата/время последнего изменения PIN-кода мобильного приложения QIWI Кошелька */
      lastMobilePinChange: string;
      /** Дата/время следующего (планового) изменения PIN-кода мобильного приложения QIWI Кошелька */
      nextMobilePinChange: string;
    };
    /** Данные об использовании пароля к сайту qiwi.com */
    passInfo: {
      /** Логический признак использования пароля (фактически означает использование сайта qiwi.com) */
      passwordUsed: boolean;
      /** Дата/время последнего изменения пароля сайта qiwi.com */
      lastPassChange: string;
      /** Дата/время следующего (планового) изменения пароля сайта qiwi.com */
      nextPassChange: string;
    };
    /** Данные об использовании PIN-кода к приложению QIWI Кошелька на QIWI терминалах самообслуживания */
    pinInfo: {
      /** Логический признак использования PIN-кода для терминала (фактически означает факт использования приложения QIWI Кошелька на терминале) */
      pinUsed: boolean;
    };
  };

  /** Информация о кошельке. Объект может отсутствовать, в зависимости от признака `contractInfoEnabled` в запросе. */
  contractInfo: {
    /** Логический признак блокировки кошелька */
    blocked: boolean;
    /** Номер кошелька */
    contractId: number;
    /** Дата/время создания QIWI Кошелька (через сайт/мобильное приложение, либо при первом пополнении, либо другим способом) */
    creationDate: string;
    /** Служебная информация */
    features: object[];
    /** Данные об {@link https://qiwi.com/settings/identification#ru|идентификации} пользователя. */
    identificationInfo: {
      bankAlias: "QIWI" | string;
      /**
       * Текущий уровень идентификации кошелька. Возможные значения:
       *
       * `ANONYMOUS` - без идентификации;
       *
       * `SIMPLE`, `VERIFIED` - упрощенная идентификация;
       *
       * `FULL` - полная идентификация.
       */
      identificationLevel: PersonIdentificationLevel;
    }[];
  };

  /** Прочие пользовательские данные. Объект может отсутствовать, в зависимости от признака `userInfoEnabled` в запросе. */
  userInfo: {
    /** Код валюты баланса кошелька по умолчанию (number-3 ISO-4217) */
    defaultPayCurrency: Currency;
    /** Служебная информация */
    defaultPaySource: number;
    /** E-mail пользователя */
    email: string;
    /** Номер первой транзакции после регистрации */
    firstTxnId: string;
    /** Служебная информация */
    language: string;
    /** Название мобильного оператора номера пользователя */
    operator: string;
    /** Служебная информация */
    phoneHash: string;
    /** Служебная информация */
    promoEnabled: string;
  };
};

export type IdentificationBase = {
  /** Дата рождения пользователя (в формате "ГГГГ-ММ-ДД") */
  birthDate: string;

  /** Имя пользователя */
  firstName: string;

  /** Отчество пользователя */
  middleName: string;

  /** Фамилия пользователя */
  lastName: string;

  /** Серия и номер паспорта пользователя (только цифры) */
  passport: string;

  /** ИНН пользователя */
  inn: string;

  /** Номер СНИЛС пользователя */
  snils: string;

  /** Номер полиса ОМС пользователя */
  oms: string;
};

export type IdentificationResponse = IdentificationBase & {
  /** Номер кошелька пользователя */
  id: number;

  /**
   * Текущий статус кошелька:
   *
   * `SIMPLE` - "Минимальный".
   *
   * `VERIFIED` - "Основной" (данные для идентификации успешно прошли проверку).
   *
   * `FULL` – "Профессиональный", если кошелек уже ранее получал полную идентификацию по данным ФИО, номеру паспорта и дате рождения.
   */
  type:
    | PersonIdentificationLevel.SIMPLE
    | PersonIdentificationLevel.VERIFIED
    | PersonIdentificationLevel.FULL;
};

export type Restrictions = {
  /** Код блокировки */
  restrictionCode: string;

  /** Описание блокировки */
  restrictionDescription: string;
}[];

export type GetPaymentHistoryParamsBase = {
  /**
   * Число платежей в ответе, для разбивки отчета на страницы. Целое число от 1 до 50. Запрос возвращает
   * указанное число платежей в обратном хронологическом порядке, начиная от текущей даты или даты в
   * параметре `startDate`
   */
  rows: number;

  /**
   * Тип операций в отчете, для отбора. Допустимые значения:
   *
   * `ALL` - все операции,
   *
   * `IN` - только пополнения,
   *
   * `OUT` - только платежи,
   *
   * `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).
   *
   * По умолчанию `ALL`
   */
  operation?: TransactionType;

  /**
   * Список источников платежа, для фильтра. Каждый источник нумеруется, начиная с нуля (`sources[0]`,
   *  `sources[1]` и т.д.). Допустимые значения:
   *
   * `QW_RUB` - рублевый счет кошелька,
   *
   * `QW_USD` - счет кошелька в долларах,
   *
   * `QW_EUR` - счет кошелька в евро,
   *
   * `CARD` - привязанные и непривязанные к кошельку банковские карты,
   *
   * `MK` - счет мобильного оператора. Если не указан, учитываются все источники
   */
  sources?: ("QW_RUB" | "QW_USD" | "QW_EUR" | "CARD" | "MK")[];
};

export type GetPaymentHistoryParamsStartEnd = {
  /**
   * Начальная дата поиска платежей. **Используется только вместе с `endDate`. Максимальный допустимый
   * интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от
   * текущей даты по московскому времени.
   *
   * Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна
   * совпадать с временной зоной в параметре `endDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм`
   * (временной сдвиг от GMT).
   */
  startDate: string;

  /**
   * Начальная дата поиска платежей. **Используется только вместе с `startDate`. Максимальный допустимый
   * интервал между `startDate` и `endDate` - 90 календарных дней.** По умолчанию, равна суточному сдвигу от
   * текущей даты по московскому времени.
   *
   * Дату можно указать в любой временной зоне `TZD` (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна
   * совпадать с временной зоной в параметре `startDate`. Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм`
   * (временной сдвиг от GMT).
   */
  endDate: string;
};

export type GetPaymentHistoryParams =
  | GetPaymentHistoryParamsBase
  | (GetPaymentHistoryParamsBase & GetPaymentHistoryParamsStartEnd)
  | (GetPaymentHistoryParamsBase & {
      /**
       * Дата транзакции для начала отчета (должна быть равна параметру `nextTxnDate` в предыдущем списке).
       * Используется для продолжения списка, разбитого на страницы. **Используется только вместе с `nextTxnId`**
       */
      nextTxnDate: string;

      /**
       * 	Номер транзакции для начала отчета (должен быть равен параметру `nextTxnId` в предыдущем списке).
       * Используется для продолжения списка, разбитого на страницы. **Используется только вместе с `nextTxnDate`**
       */
      nextTxnId: number;
    });

export type GetPaymentHistoryTotalParams = Omit<
  GetPaymentHistoryParamsBase,
  "rows"
> &
  GetPaymentHistoryParamsStartEnd;

export type GetPaymentHistoryTotalResponse = {
  /** Данные о входящих платежах (пополнениях), отдельно по каждой валюте */
  incomingTotal: {
    amount: number;
    currency: string;
  }[];
  /** Данные об исходящих платежах, отдельно по каждой валюте */
  outgoingTotal: {
    amount: number;
    currency: string;
  }[];
};

export type Transaction = {
  /** ID транзакции в сервисе QIWI Кошелек */
  txnId: number;
  /** Номер кошелька */
  personId: number;
  /**
   * Для запросов истории платежей - Дата/время платежа, во временной зоне запроса (см.
   * параметр `startDate`). Формат даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`
   *
   * Для запросов данных о транзакции - Дата/время платежа, время московское (в формате
   * `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`)
   */
  date: string;
  /** {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode|Код ошибки платежа} */
  errorCode: number;
  /** Описание ошибки */
  error: string | null;
  /**
   * Тип платежа. Возможные значения:
   *
   * `IN` - пополнение,
   *
   * `OUT` - платеж,
   *
   * `QIWI_CARD` - платеж с карт QIWI (QVC, QVP).
   */
  type: TransactionType.IN | TransactionType.OUT | TransactionType.QIWI_CARD;
  /**
   * Статус платежа. Возможные значения:
   *
   * `WAITING` - платеж проводится
   *
   * `SUCCESS` - успешный платеж
   *
   * `ERROR` - ошибка платежа.
   */
  status: TransactionStatus;
  /** Текстовое описание статуса платежа */
  statusText: string;
  /** Клиентский ID транзакции */
  trmTxnId: string;
  /** Для платежей - номер счета получателя. Для пополнений - номер отправителя, терминала или название агента пополнения кошелька */
  account: string;
  /** Данные о сумме платежа или пополнения. */
  sum: {
    /** сумма платежа */
    amount: number;
    /** валюта платежа */
    currency: Currency;
  };
  /**	Данные о комиссии платежа */
  commission: {
    /** сумма */
    amount: number;
    /** валюта */
    currency: Currency;
  };
  /** Данные о фактической сумме платежа или пополнения. */
  total: {
    /** сумма (равна сумме платежа `sum.amount` и комиссии `commission.amount`) */
    amount: number;
    /** валюта */
    currency: Currency;
  };
  /** Данные о провайдере. */
  provider: {
    /** ID провайдера в QIWI Wallet */
    id: number;
    /** краткое наименование провайдера */
    shortName: string;
    /** развернутое наименование провайдера */
    longName: string;
    /** ссылка на логотип провайдера */
    logoUrl: string | null;
    /** описание провайдера (HTML) */
    descriptions: string | null;
    /** список ключевых слов */
    keys: string | null;
    /** сайт провайдера */
    siteUrl: string | null;
  };

  /** Служебная информация */
  source: object;
  /** Комментарий к платежу */
  comment: string;
  /** Курс конвертации (если применяется в транзакции) */
  currencyRate: number;
  /** Служебная информация */
  extras: object;

  /** Поидее содержимое этого поля должно быть напрямую в Transaction. Но QIWI возвращает именно так */
  features: {
    /** Специальное поле */
    chequeReady: boolean;
    /** Специальное поле */
    bankDocumentAvailable: boolean;
    /** Специальное поле */
    repeatPaymentEnabled: boolean;
    /** Специальное поле */
    favoritePaymentEnabled: boolean;
    /** Специальное поле */
    regularPaymentEnabled: boolean;
  };
};

export type GetTransactionsHistoryResponse = {
  /**
   * Список объектов {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid|Transaction}.
   * Число транзакций в списке меньше или равно параметру rows из запроса
   */
  data: Transaction[];
  /** ID следующей транзакции в полном списке */
  nextTxnId: number;
  /**
   * Дата/время следующей транзакции в полном списке, время московское (в формате
   * `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`)
   */
  nextTxnDate: string;
};

export enum LimitType {
  /** Максимальный допустимый остаток на счёте */
  REFILL = "REFILL",
  /** Оборот в месяц */
  TURNOVER = "TURNOVER",
  /** Переводы на другие кошельки в месяц */
  PAYMENTS_P2P = "PAYMENTS_P2P",
  /** Платежи в адрес иностранных компаний в месяц */
  PAYMENTS_PROVIDER_INTERNATIONALS = "PAYMENTS_PROVIDER_INTERNATIONALS",
  /** Переводы на банковские счета и карты, кошельки других систем */
  PAYMENTS_PROVIDER_PAYOUT = "PAYMENTS_PROVIDER_PAYOUT",
  /** Снятие наличных в месяц */
  WITHDRAW_CASH = "WITHDRAW_CASH"
}

export type Limit<
  Cur extends keyof typeof Currency = "RUB",
  Type extends LimitType = LimitType
> = {
  /** Валюта операций */
  currency: Cur;
  /** Остаток лимита, который можно потратить в данный период (период задается в параметре `interval`) */
  rest: number;
  /** Значение лимита */
  max: number;
  /** Сумма, потраченная по данным операциям */
  spent: number;
  /** Сведения о периоде действия лимита */
  interval: {
    /** Начало периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` */
    dateFrom: string;
    /** Конец периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` */
    dateTill: string;
  };
  /** Тип операций, на которые действует данный лимит */
  type: Type;
};

export type LimitsResponse<RequestedLimits extends LimitType = LimitType> = {
  /** Описание лимитов */
  limits: {
    /** Массив лимитов на операции */
    RU: Limit<"RUB", RequestedLimits>[];
    KZ: Limit<"KZT", RequestedLimits>[];
  };
};

export type Account = {
  /** Псевдоним пользовательского баланса */
  alias: string;
  /** Псевдоним банковского баланса */
  fsAlias: string;
  /** Псевдоним банка */
  bankAlias: string;
  /** Название соответствующего счета кошелька */
  title: string;
  /** Сведения о счете */
  type: {
    /** Описание счета */
    id: string;
    /** Описание счета */
    title: string;
  };
  /** Логический признак реального баланса в системе QIWI Кошелек (не привязанная карта, не счет мобильного телефона и т.д.) */
  hasBalance: boolean;
  balance: {
    amount: number;
    /** Код валюты баланса (number-3 ISO-4217). Возвращаются балансы в следующих валютах: 643 - российский рубль, 840 - американский доллар, 978 - евро */
    currency: Currency;
  } | null;
  /** Код валюты баланса (number-3 ISO-4217) */
  currency: Currency;

  defaultAccount?: boolean;
};

export type GetAccountsResponse = {
  /** Массив балансов */
  accounts: Account[];
};

export type AccountOffer = {
  /** Псевдоним счета */
  alias: string;
  /** ID валюты счета */
  currency: Currency;
};

export type GetAccountOffersResponse = AccountOffer[];

export type PaymentCommissionRequest = {
  /** Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера) */
  account: string;
  /** Объект, определяющий обработку платежа процессингом QIWI Wallet */
  paymentMethod: {
    /** Метод платежа, только `Account` */
    type: "Account";
    /** Идентификатор счета, только `643`. */
    accountId: "643";
  };
  /** Объект с платежными реквизитами */
  purchaseTotals: {
    /** Объект, содержащий данные о сумме платежа */
    total: {
      /** Сумма (можно указать рубли и копейки, разделитель .). Положительное число, округленное до 2 знаков после десятичной точки. При большем числе знаков значение будет округлено до копеек в меньшую сторону. */
      amount: number;
      /** Валюта (только 643, рубли) */
      currency: "643";
    };
  };
};

export type FormUrlOptions = {
  /** Сумма платежа в рублях */
  amount?: number;
  /** Комментарий. **Параметр используется только для ID=99** */
  comment?: string;
  /**
   * Формат совпадает с форматом параметра `fields.account` при оплате
   * соответствующих провайдеров: для провайдера `99` - номер кошелька
   * получателя; для провайдеров сотовой связи - номер мобильного
   * телефона для пополнения (без префикса 8); для провайдеров перевода
   * на карту - номер банковской карты получателя (без пробелов), для
   * других провайдеров - идентификатор пользователя. Для провайдера
   * `99999` указывается никнейм или номер кошелька получателя (задайте
   * соответствующее значение параметра `extra['accountType']`).
   */
  account?: string;
  /**
   * Признак неактивного поля формы. Пользователь не сможет менять
   * значение данного поля. Каждый параметр задает соответствующее
   * поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]
   *  и т.д.). Если не указан, пользователь сможет изменить все поля формы.
   *
   * Допустимые значения:
   *
   * `sum` - поле "сумма платежа",
   *
   * `account` - поле "номер счета/телефона/карты",
   *
   * `comment` - поле "комментарий".
   *
   * Пример (неактивное поле суммы платежа): `blocked[0]=sum`
   */
  blocked?: ("account" | "comment" | "sum")[];
  /**
   * **Параметр используется только для ID=99999**. Значение определяет
   * перевод на QIWI кошелек по никнейму или по номеру кошелька. Если
   * вы не хотите, чтобы пользователь видел номер вашего кошелька на
   * форме, используйте перевод по никнейму.
   *
   * `phone` - для перевода по номеру
   *
   * `nickname` - для перевода по никнейму.
   */
  accountType?: string;
};
