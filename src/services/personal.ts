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

type StringOrNumber = string | number;

/**
 * Ошибка, которую выбрасывает персональное API в случае неправильного кода ответа от QIWI
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
export class Personal extends HttpAPI {
  public static readonly Currency = values.Currency;
  public static readonly IdentificationLevel = values.PersonIdentificationLevel;
  public static readonly ReceiptFormat = values.ChequeFormat;
  public static readonly Recipients = values.Recipients;
  public static readonly LimitType = values.LimitType;
  public static readonly TransactionType = values.TransactionType;
  public static readonly TransactionStatus = values.TransactionStatus;
  public static readonly ChequeFormat = values.ChequeFormat;

  public agent?: Agent;

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
   * @param {string} API_TOKEN Токен полученный на {@link https://qiwi.com/api|Странице QIWI API}
   */
  constructor(public readonly API_TOKEN: string) {
    super();
  }

  /**
   * Запрос возвращает информацию о вашем профиле - наборе пользовательских данных и настроек вашего QIWI кошелька.
   */
  @MapErrorsAsync(mapError)
  async getPersonProfile(): Promise<types.PersonProfile> {
    return await this.get(
      "person-profile/v1/profile/current?authInfoEnabled=true&contractInfoEnabled=true&userInfoEnabled=true"
    );
  }

  /**
   * Данный запрос позволяет отправить данные для идентификации вашего QIWI кошелька.
   * @param {StringOrNumber} wallet
   * @param {types.IdentificationBase} data
   */
  @MapErrorsAsync(mapError)
  async setIdentification(
    wallet: StringOrNumber,
    data: types.IdentificationBase
  ): Promise<types.IdentificationResponse> {
    return await this.post(
      `identification/v1/persons/${wallet}/identification`,
      {},
      JSON.stringify(data)
    );
  }

  /**
   * Данный запрос позволяет выгрузить маскированные данные и статус идентификации своего QIWI кошелька.
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getIdentification(
    wallet: StringOrNumber
  ): Promise<types.IdentificationResponse> {
    return await this.get(`identification/v1/persons/${wallet}/identification`);
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем QIWI кошельке. Лимиты действуют как ограничения на сумму определенных операций.
   * @template L
   * @param {StringOrNumber} wallet
   * @param {L} limits
   */
  @MapErrorsAsync(mapError)
  async getLimits<L extends types.LimitType[] = types.LimitType[]>(
    wallet: StringOrNumber,
    limits: L
  ): Promise<types.LimitsResponse<L[number]>> {
    const query = createQS({ types: limits });

    return await this.get(`qw-limits/v1/persons/${wallet}/actual-limits?${query}`);
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с QIWI Кошелька.
   * @param {StringOrNumber} wallet
   */
  @MapErrorsAsync(mapError)
  async getRestrictions(wallet: StringOrNumber): Promise<types.Restrictions> {
    return await this.get(`person-profile/v1/persons/${wallet}/status/restrictions`);
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька. Можно использовать фильтр по количеству, ID и дате (интервалу дат) транзакций.
   * @param {StringOrNumber} wallet Номер кошелька
   * @param {types.GetPaymentHistoryParams} parameters Тело запроса
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistory(
    wallet: StringOrNumber,
    parameters: types.GetPaymentHistoryParams
  ): Promise<types.GetTransactionsHistoryResponse> {
    const query = createQS(parameters);

    return await this.get(`payment-history/v2/persons/${wallet}/payments?${query}`);
  }
  /**
   * Данный запрос используется для получения сводной статистики по суммам платежей за заданный период.
   * @param {StringOrNumber} wallet
   * @param {types.GetPaymentHistoryTotalParams} parameters
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistoryTotal(
    wallet: StringOrNumber,
    parameters: types.GetPaymentHistoryTotalParams
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    const query = createQS(parameters);

    return await this.get(
      `payment-history/v2/persons/${wallet}/payments/total?${query}`
    );
  }
  /**
   * Запрос используется для получения информации по определенной транзакции из вашей истории платежей.
   * @param {number} transactionId Номер транзакции
   * @param {types.TransactionType} type Тип транзакции
   */
  @MapErrorsAsync(mapError)
  async getTransaction(
    transactionId: number,
    type: types.TransactionType
  ): Promise<types.Transaction> {
    return await this.get(
      `payment-history/v2/transactions/${transactionId}?type=${type}`
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
      `payment-history/v1/transactions/${transactionId}/cheque/file?type=${type}&format=${format}`
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
      `payment-history/v2/transactions/${transactionId}/cheque/send?type=${type}`,
      {},
      JSON.stringify({ email })
    );
  }

  /**
   * Успешный ответ содержит JSON-массив счетов вашего QIWI Кошелька для фондирования платежей и текущие балансы счетов
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccounts(
    wallet: StringOrNumber
  ): Promise<types.GetAccountsResponse["accounts"]> {
    const { accounts } = await this.get(
      `funding-sources/v2/persons/${wallet}/accounts`
    );

    return accounts;
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно создать
   * @param {StringOrNumber} wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccountOffers(
    wallet: StringOrNumber
  ): Promise<types.GetAccountOffersResponse> {
    return await this.get(`funding-sources/v2/persons/${wallet}/accounts/offer`);
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param {StringOrNumber} wallet Номер кошелька
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   */
  @MapErrorsAsync(mapError)
  async createAccount(wallet: StringOrNumber, alias: string): Promise<""> {
    return await this.post(
      `funding-sources/v2/persons/${wallet}/accounts`,
      {},
      JSON.stringify({ alias })
    );
  }

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param {StringOrNumber} wallet Номер кошелька
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   */
  @MapErrorsAsync(mapError)
  async setDefaultAccount(wallet: StringOrNumber, alias: string): Promise<""> {
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
  createFormUrl(provider: number, options: types.FormUrlOptions): string {
    const data = {
      currency: Personal.Currency.RUB
    } as any;

    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction = Math.round(options.amount - data.amountInteger) * 10;
    }

    if (options.comment) data["extra['comment']"] = options.comment;
    if (options.account) data["extra['account']"] = options.account;
    if (options.accountType) data["extra['accountType']"] = options.accountType;

    if (options.blocked) data.blocked = options.blocked;

    const query = createQS(data);

    return `https://qiwi.com/payment/form/${provider}?${query}`;
  }

  /**
   * **От автора:**
   *
   * Типизирование это метода - очень больно и бессмысленно. Его
   * описание в документации занимает 6 страниц
   *
   * {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments|Документация QIWI по методу оплаты}
   *
   * @param {number | types.Recipients} provider Ака ID, в доках, номер провайдера у QIWI
   * @param {string} account Номер кошелька или карты или типа того
   * @param {number} amount Сумма платежа
   * @param {types.Currency=} currency Валюта платежа, по умолчанию = рубли
   * @param {Object=} fields Доп. поля, их невозможно типизировать, просто читайте доки
   * @param {string=} comment Комментарий к платежу, необязательный
   */
  @MapErrorsAsync(mapError)
  async pay(
    provider: number | types.Recipients,
    account: string,
    amount: number,
    currency: types.Currency = Personal.Currency.RUB,
    fields: Record<string, string> = {},
    comment = ""
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
   * Создаёт пару ключей для взаимодействия с P2P BILLS API
   *
   * @param {string} name Название связки ключей
   * @param {string=} server URL сервера для отправки уведомлений
   *
   * @return {[string, string]} Массив, где - [0=Публичный ключ, 1=Секретный ключ]
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
    const { PublicKey, SecretKey } = await this.post(
      "widgets-api/api/p2p/protected/keys/create",
      {},
      JSON.stringify({
        keysPairName: name,
        ...(server && { serverNotificationsUrl: server })
      })
    );

    return [PublicKey, SecretKey];
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
      token: token,
      expiry: Number.parseInt(expiry, 10),
      client: new Personal(token)
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
   * @param {StringOrNumber} wallet
   * @param {StringOrNumber} cardId
   * @return {*}
   */
  blockCard(wallet: StringOrNumber, cardId: StringOrNumber): Promise<any> {
    return this.put(`cards/v2/persons/${wallet}/cards/${cardId}/block`);
  }

  /**
   * Разблокирует карту
   *
   * @param {StringOrNumber} wallet
   * @param {StringOrNumber} cardId
   * @return {Promise<types.CardUnblockResponse>}
   */
  unblockCard(
    wallet: StringOrNumber,
    cardId: StringOrNumber
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
   * @return {types.CardRenameResponse}
   */
  renameCard(
    cardId: StringOrNumber,
    alias: string
  ): Promise<types.CardRenameResponse> {
    return this.put(`cards/v1/cards/${cardId}/alias`, {}, JSON.stringify({ alias }));
  }
}
