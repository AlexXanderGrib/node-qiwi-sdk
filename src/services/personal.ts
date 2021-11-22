/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-invalid-this */
import { MapErrorsAsync, MapErrors } from "sweet-decorators";
import { createQS } from "./shared";
import { ExtendedError } from "../error";
import { Agent, HttpAPI, HttpError } from "../http";
import { USER_AGENT } from "../identity";
import type * as types from "./personal.types";
import * as values from "./personal.types";
import { AnyResponse } from "./shared.types";
import { stringify } from "query-string";
import { v4 as uuid } from "uuid";
import { createHmac, timingSafeEqual } from "crypto";
import { IPersonalAPI } from "./personal.types";

type StringOrNumber = string | number;

/**
 * Ошибка, которую выбрасывает персональное API в случае
 * неправильного кода ответа от QIWI
 */
export class PersonalApiError extends ExtendedError {
  /**
   * @param {string=} message Сообщение
   * @param {*=} data Данные которыми ответил QIWI
   */
  constructor(public message: string = "", public data?: AnyResponse) {
    super(message);
  }
}

/**
 * Оборачивает ошибки чтобы чтобы их было удобнее обрабатывать
 *
 * @param {Error} error
 * @return {Error}
 */
function mapError(error: any) {
  if (error instanceof HttpError) {
    return new PersonalApiError(
      error.message,
      error.body ? JSON.parse(error.body) : undefined
    );
  }

  return error;
}

/**
 * Имплементирует [персональное API QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal)
 *
 * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal|Описание}
 */
export class Personal extends HttpAPI implements IPersonalAPI {
  public static readonly Currency = values.Currency;
  public static readonly IdentificationLevel = values.PersonIdentificationLevel;
  public static readonly ReceiptFormat = values.ChequeFormat;
  public static readonly Recipients = values.Recipients;
  public static readonly LimitType = values.LimitType;
  public static readonly TransactionType = values.TransactionType;
  public static readonly TransactionStatus = values.TransactionStatus;
  public static readonly ChequeFormat = values.ChequeFormat;

  public agent?: Agent;

  public webhookKey: Map<string, string> = new Map();
  public hookId?: string;

  protected readonly API_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.API_TOKEN}`,
    "User-Agent": USER_AGENT
  };

  protected readonly API_URL = "https://edge.qiwi.com";
  protected readonly API_OK_RESPONSE_CODES = [200, 201, 204];

  /**
   *
   * @param {string} API_TOKEN Токен полученный на [Странице QIWI API](https://qiwi.com/api)
   * @param {StringOrNumber} walletId Номер кошелька
   */
  constructor(
    public readonly API_TOKEN: string,
    public walletId: StringOrNumber = ""
  ) {
    super();
  }

  /**
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   */
  @MapErrorsAsync(mapError)
  async getPersonProfile(): Promise<types.PersonProfile> {
    return await this.get(
      `person-profile/v1/profile/current?${createQS({
        authInfoEnabled: true,
        contractInfoEnabled: true,
        userInfoEnabled: true
      })}`
    );
  }

  /**
   * Данный запрос позволяет отправить данные для идентификации
   * вашего QIWI кошелька.
   *
   * @param {types.IdentificationBase} data
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async setIdentification(
    data: types.IdentificationBase,
    wallet = this.walletId
  ): Promise<types.IdentificationResponse> {
    return await this.post(
      `identification/v1/persons/${wallet}/identification`,
      {},
      JSON.stringify(data)
    );
  }

  /**
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   *
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getIdentification(
    wallet = this.walletId
  ): Promise<types.IdentificationResponse> {
    return await this.get(`identification/v1/persons/${wallet}/identification`);
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем
   * QIWI кошельке. Лимиты действуют как ограничения на сумму
   * определенных операций.
   *
   * @template Limits
   * @param {Limits} limits
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getLimits<Limits extends types.LimitType[] = types.LimitType[]>(
    limits: Limits,
    wallet = this.walletId
  ): Promise<types.LimitsResponse<Limits[number]>> {
    return await this.get(
      `qw-limits/v1/persons/${wallet}/actual-limits?${createQS({ types: limits })}`
    );
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   *
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getRestrictions(wallet = this.walletId): Promise<types.Restrictions> {
    return await this.get(`person-profile/v1/persons/${wallet}/status/restrictions`);
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька.
   * Можно использовать фильтр по количеству, ID и дате
   * (интервалу дат) транзакций.
   *
   * @param {types.GetPaymentHistoryParams} parameters Тело запроса
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistory(
    parameters: types.GetPaymentHistoryParams,
    wallet = this.walletId
  ): Promise<types.GetTransactionsHistoryResponse> {
    return await this.get(
      `payment-history/v2/persons/${wallet}/payments?${createQS(parameters)}`
    );
  }
  /**
   * Данный запрос используется для получения сводной статистики
   * по суммам платежей за заданный период.
   *
   * @param {types.GetPaymentHistoryTotalParams} parameters
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistoryTotal(
    parameters: types.GetPaymentHistoryTotalParams,
    wallet = this.walletId
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    return await this.get(
      `payment-history/v2/persons/${wallet}/payments/total?${createQS(parameters)}`
    );
  }
  /**
   * Запрос используется для получения информации по определенной
   * транзакции из вашей истории платежей.
   *
   * @param {number} transactionId Номер транзакции
   * @param {types.TransactionType} type Тип транзакции
   */
  @MapErrorsAsync(mapError)
  async getTransaction(
    transactionId: number,
    type: types.TransactionType
  ): Promise<types.Transaction> {
    return await this.get(
      `payment-history/v2/transactions/${transactionId}?${createQS({ type })}`
    );
  }

  /**
   *
   * @param {StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {types.ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  @MapErrorsAsync(mapError)
  async getTransactionCheque(
    transactionId: StringOrNumber,
    type: types.TransactionType,
    format: types.ChequeFormat = Personal.ChequeFormat.JPEG
  ): Promise<Buffer> {
    return await this.get(
      `payment-history/v1/transactions/${transactionId}/cheque/file?${createQS({
        type,
        format
      })}`
    );
  }

  /**
   *
   * @param {number} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {string} email Адрес для отправки электронной квитанции
   */
  @MapErrorsAsync(mapError)
  async sendTransactionCheque(
    transactionId: number,
    type: types.TransactionType,
    email: string
  ): Promise<""> {
    return await this.post(
      `payment-history/v2/transactions/${transactionId}/cheque/send?${createQS({
        type
      })}`,
      {},
      JSON.stringify({ email })
    );
  }

  /**
   * Успешный ответ содержит JSON-массив счетов вашего QIWI
   * Кошелька для фондирования платежей и текущие балансы счетов
   *
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccounts(
    wallet = this.walletId
  ): Promise<types.GetAccountsResponse["accounts"]> {
    const { accounts } = await this.get(
      `funding-sources/v2/persons/${wallet}/accounts`
    );

    return accounts;
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно
   * создать
   *
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccountOffers(
    wallet = this.walletId
  ): Promise<types.GetAccountOffersResponse> {
    return await this.get(`funding-sources/v2/persons/${wallet}/accounts/offer`);
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async createAccount(alias: string, wallet = this.walletId): Promise<""> {
    return await this.post(
      `funding-sources/v2/persons/${wallet}/accounts`,
      {},
      JSON.stringify({ alias })
    );
  }

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async setDefaultAccount(alias: string, wallet = this.walletId): Promise<""> {
    return await this.patch(
      `funding-sources/v2/persons/${wallet}/accounts/${alias}`,
      {},
      JSON.stringify({ defaultAccount: true })
    );
  }

  /**
   *
   * Получает сумму комиссии по заданным реквизитам
   *
   * @param {number} provider ID Провайдера у QIWI
   * @param {string} account ID получателя у провайдера
   * @param {number} amount Сумма
   * @return {Promise<number>}
   */
  @MapErrorsAsync(mapError)
  async getCommission(
    provider: number,
    account: string,
    amount: number
  ): Promise<number> {
    const data: types.PaymentCommissionRequest = {
      account,
      paymentMethod: {
        accountId: "643",
        type: "Account"
      },
      purchaseTotals: {
        total: {
          amount,
          currency: "643"
        }
      }
    };

    const response: any = await this.post(
      `sinap/providers/${provider}/onlineCommission`,
      {},
      JSON.stringify(data)
    );

    return response.qwCommission.amount;
  }

  /**
   * Данный метод создаёт ссылку на предзаполненную форму
   *
   * @param {number} provider ID провайдера
   * @param {types.FormUrlOptions} options
   * @return {string}
   */
  @MapErrors(mapError)
  createFormUrl(
    provider: number | types.Recipients,
    options: types.FormUrlOptions
  ): string {
    const data = {
      currency: Personal.Currency.RUB,
      ...(options.custom ?? {})
    } as any;

    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction = Math.round((options.amount - data.amountInteger) * 100);
    }

    const account = options.account || (provider === 99 ? this.walletId : undefined);

    if (options.comment) data["extra['comment']"] = options.comment;
    if (account) data["extra['account']"] = account;

    if (options.accountType) data["extra['accountType']"] = options.accountType;

    if (options.blocked) data.blocked = options.blocked;

    return `https://qiwi.com/payment/form/${provider}?${createQS(data)}`;
  }

  /**
   * **От автора:**
   *
   * Типизирование это метода - очень больно и бессмысленно. Его
   * описание в документации занимает 6 страниц
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {number | types.Recipients} provider Ака ID, в доках, номер провайдера у QIWI
   * @param {string} account Номер кошелька или карты или типа того
   * @param {number} amount Сумма платежа
   * @param {types.Currency=} currency Валюта платежа, по умолчанию = рубли
   * @param {Object=} fields Доп. поля, их невозможно типизировать, просто читайте доки
   * @param {string=} comment Комментарий к платежу, необязательный
   *
   * @deprecated Используйте {@link pay2}, так-как он более читаемый
   * @return {Promise<types.PaymentResponse>}
   */
  @MapErrorsAsync(mapError)
  async pay(
    provider: types.Pay2Params["provider"],
    account: types.Pay2Params["account"],
    amount: types.Pay2Params["amount"],
    currency: types.Pay2Params["currency"] = Personal.Currency.RUB,
    fields: types.Pay2Params["fields"] = {},
    comment: types.Pay2Params["comment"] = ""
  ): Promise<types.PaymentResponse> {
    return await this.post(
      `sinap/api/v2/terms/${provider}/payments`,
      {},
      JSON.stringify({
        id: (Date.now() * 1000).toString(),
        sum: {
          amount,
          currency: String(currency)
        },
        paymentMethod: {
          type: "Account",
          accountId: "643"
        },
        fields: {
          account,
          ...fields
        },
        ...(comment && { comment })
      })
    );
  }

  /**
   * Более читаемая версия метода {@link pay}
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {types.Pay2Params} params Параметры платежа
   * @return {Promise<types.PaymentResponse>}
   */
  @MapErrorsAsync(mapError)
  async pay2({
    account,
    amount,
    provider = Personal.Recipients.QIWI,
    comment = "",
    currency = Personal.Currency.RUB,
    fields = {}
  }: types.Pay2Params): Promise<types.PaymentResponse> {
    return await this.pay(provider, account, amount, currency, fields, comment);
  }

  /**
   * Создаёт пару ключей для взаимодействия с P2P BILLS API
   *
   * @param {string} name Название связки ключей
   * @param {string=} server URL сервера для отправки уведомлений
   *
   * @return {string[]} Массив, где - [0=Публичный ключ, 1=Секретный ключ]
   *
   * @example
   *
   * const [PublicKey, SecretKey] = await createP2PKeyPair('my-key-pair');
   */
  @MapErrorsAsync(mapError)
  async createP2PKeyPair(
    name: string,
    server?: string
  ): Promise<[PublicKey: string, SecretKey: string]> {
    const response = await this.post<any>(
      "widgets-api/api/p2p/protected/keys/create",
      {},
      JSON.stringify({
        keysPairName: name,
        ...(server && { serverNotificationsUrl: server })
      })
    );

    const publicKey: string = response.result?.publicKey ?? response.PublicKey;
    const secretKey: string = response.result?.secretKey ?? response.SecretKey;

    return [publicKey, secretKey];
  }

  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
   */
  async createOauthToken(): Promise<types.PrettyTokenResponse<Personal>> {
    const { code } = await this.post<types.CodeResponse>(
      "https://qiwi.com/oauth/authorize",
      {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      stringify({
        response_type: "code",
        client_id: "api_wallet_private",
        token: this.API_TOKEN,
        client_software: "api"
      })
    );

    const { access_token: token, expires_in: expiry } =
      await this.post<types.TokenResponse>(
        "https://qiwi.com/oauth/token",
        {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        stringify({
          grant_type: "authorization_code",
          client_id: "api_wallet_private",
          client_secret: "hTFPyt",
          code
        })
      );

    return {
      token,
      expiry: Number.parseInt(expiry, 10),
      client: new Personal(token, this.walletId)
    };
  }

  /**
   * Возвращает список карт
   *
   * @return {Promise<types.CardResponse>}
   */
  getCards(): Promise<types.CardResponse[]> {
    return this.get("cards/v1/cards", {});
  }

  /**
   * Блокирует карту
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} wallet

   * @return {Promise<*>}
   */
  blockCard(cardId: StringOrNumber, wallet = this.walletId): Promise<any> {
    return this.put(`cards/v2/persons/${wallet}/cards/${cardId}/block`);
  }

  /**
   * Разблокирует карту
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} wallet
   * @return {Promise<types.CardUnblockResponse>}
   */
  unblockCard(
    cardId: StringOrNumber,
    wallet = this.walletId
  ): Promise<types.CardUnblockResponse> {
    return this.put(`cards/v2/persons/${wallet}/cards/${cardId}/unblock`);
  }

  /**
   * Получает реквизиты карты
   *
   * @param {StringOrNumber} cardId
   * @return {Promise<types.CardRequisitesResponse>}
   */
  getCardRequisites(cardId: StringOrNumber): Promise<types.CardRequisitesResponse> {
    return this.put(
      `cards/v1/cards/${cardId}/details`,
      {},
      JSON.stringify({
        operationId: uuid()
      })
    );
  }

  /**
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} alias
   * @return {Promise<types.CardRenameResponse>}
   */
  renameCard(
    cardId: StringOrNumber,
    alias: string
  ): Promise<types.CardRenameResponse> {
    return this.put(`cards/v1/cards/${cardId}/alias`, {}, JSON.stringify({ alias }));
  }

  /**
   * Регистрирует обработчик вебхука
   * @param {string} parameter Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.**
   * @param {number} txnType Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все"
   * @return {Promise<types.WebHookInfo>}
   */
  async addWebHook(
    parameter: string,
    txnType: 0 | 1 | 2
  ): Promise<types.WebHookInfo> {
    const hookResponse = await this.put<types.WebHookInfo>(
      `payment-notifier/v1/hooks?${createQS({
        hookType: 1,
        param: parameter,
        txnType
      })}`
    );
    this.hookId = hookResponse.hookId;
    return hookResponse;
  }

  /**
   * Удаляет обработчик вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<*>}
   */
  removeWebHook(hookId: string = this.hookId!): Promise<any> {
    this.webhookKey.delete(hookId);
    this.hookId = undefined;
    return this.delete<{ response: "Hook deleted" }>(
      `payment-notifier/v1/hooks/${hookId}`
    );
  }

  /**
   * Получает секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async getWebHookSecret(hookId: string = this.hookId!): Promise<string> {
    const { key } = await this.get<{ key: string }>(
      `payment-notifier/v1/hooks/${hookId}/key`
    );
    this.webhookKey.set(hookId, key);
    return key;
  }

  /**
   * Измененяет секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async getNewWebHookSecret(hookId: string = this.hookId!): Promise<string> {
    const { key } = await this.post<{ key: string }>(
      `payment-notifier/v1/hooks/${hookId}/newkey`
    );
    this.webhookKey.set(hookId, key);
    return key;
  }

  /**
   *
   * @return {Promise<types.WebHookInfo>}
   */
  async getActiveWebHook(): Promise<types.WebHookInfo> {
    const hookResponse = await this.get<types.WebHookInfo>(
      "payment-notifier/v1/hooks/active"
    );
    this.hookId = hookResponse.hookId;
    return hookResponse;
  }

  /**
   * Отправляет тестовое уведомление
   * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
   *
   * @return {Promise<*>}
   */
  testActiveWebHook(): Promise<any> {
    return this.get<{ response: "Webhook sent" }>("payment-notifier/v1/hooks/test");
  }

  /**
   * Проверяет подпись уведомления вебхука
   * @param {types.WebhookTransaction} transaction Объект уведомления транзакции вебхука
   * @return {Promise<boolean | undefined>}
   */
  async checkWebHookSign(
    transaction: types.WebhookTransaction
  ): Promise<boolean | undefined> {
    const { hookId, payment, hash } = transaction;
    if (!this.webhookKey.has(hookId)) {
      try {
        await this.getWebHookSecret(hookId);
      } catch {
        return;
      }
    }

    const signPayload = payment.signFields
      .split(",")
      .map((p) =>
        // eslint-disable-next-line unicorn/no-array-reduce
        p.split(".").reduce((p: any, c) => {
          // eslint-disable-next-line security/detect-object-injection
          return p?.[c] || "null";
        }, payment)
      )
      .join("|");

    const hash2 = createHmac(
      "sha256",
      Buffer.from(this.webhookKey.get(hookId)!, "base64")
    )
      .update(signPayload)
      .digest();

    return timingSafeEqual(Buffer.from(hash), hash2);
  }
}
