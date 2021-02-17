import { MapErrorsAsync } from "sweet-decorators";
import { createQS } from "..";
import { ExtendedError } from "../error";
import { HttpAPI, HttpError } from "../http";
import { USER_AGENT } from "../indentity";
import type * as types from "./personal.types";
import * as values from "./personal.types";

export class PersonalApiError extends ExtendedError {
  constructor(public message: string = "", public data?: any) {
    super(message);
  }
}

function mapError(error: any) {
  if (error instanceof HttpError) {
    return new PersonalApiError(error.message, JSON.parse(error.body));
  }

  return error;
}

export class Personal extends HttpAPI {
  public static readonly Currency = values.Currency;
  public static readonly IdentificationLevel = values.PersonIdentificationLevel;
  public static readonly ReceiptFormat = values.ChequeFormat;
  public static readonly Recipients = values.Recipients;
  public static readonly LimitType = values.LimitType;
  public static readonly TransactionType = values.TransactionType;
  public static readonly TransactionStatus = values.TransactionStatus;
  public static readonly ChequeFormat = values.ChequeFormat;

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
   * @param wallet
   * @param data
   */
  @MapErrorsAsync(mapError)
  async setIdentification(
    wallet: string,
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
   * @param wallet
   */
  @MapErrorsAsync(mapError)
  async getIdentification(
    wallet: string
  ): Promise<types.IdentificationResponse> {
    return await this.get(`identification/v1/persons/${wallet}/identification`);
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем QIWI кошельке. Лимиты действуют как ограничения на сумму определенных операций.
   * @param wallet
   * @param limits
   */
  @MapErrorsAsync(mapError)
  async getLimits<L extends types.LimitType[] = types.LimitType[]>(
    wallet: string,
    limits: L
  ): Promise<types.LimitsResponse<L[number]>> {
    const query = createQS({ types: limits });

    return await this.get(
      `qw-limits/v1/persons/${wallet}/actual-limits?${query}`
    );
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с QIWI Кошелька.
   * @param wallet
   */
  @MapErrorsAsync(mapError)
  async getRestrictions(wallet: string): Promise<types.Restrictions> {
    return await this.get(
      `person-profile/v1/persons/${wallet}/status/restrictions`
    );
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька. Можно использовать фильтр по количеству, ID и дате (интервалу дат) транзакций.
   * @param wallet Номер кошелька
   * @param params Тело запроса
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistory(
    wallet: string,
    params: types.GetPaymentHistoryParams
  ): Promise<types.GetTransactionsHistoryResponse> {
    const query = createQS(params);

    return await this.get(
      `payment-history/v2/persons/${wallet}/payments?${query}`
    );
  }
  /**
   * Данный запрос используется для получения сводной статистики по суммам платежей за заданный период.
   * @param wallet
   * @param params
   */
  @MapErrorsAsync(mapError)
  async getPaymentHistoryTotal(
    wallet: string,
    params: types.GetPaymentHistoryTotalParams
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    const query = createQS(params);

    return await this.get(
      `payment-history/v2/persons/${wallet}/payments/total?${query}`
    );
  }
  /**
   * Запрос используется для получения информации по определенной транзакции из вашей истории платежей.
   * @param transactionId Номер транзакции
   * @param type Тип транзакции
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
   * @param transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  @MapErrorsAsync(mapError)
  async getTransactionCheque(
    transactionId: number | string,
    type: types.TransactionType,
    format: types.ChequeFormat = Personal.ChequeFormat.JPEG
  ): Promise<Buffer> {
    return await this.get(
      `payment-history/v1/transactions/${transactionId}/cheque/file?type=${type}&format=${format}`
    );
  }

  /**
   *
   * @param transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param email Адрес для отправки электронной квитанции
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
   * @param wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccounts(
    wallet: string
  ): Promise<types.GetAccountsResponse["accounts"]> {
    const { accounts } = await this.get(
      `funding-sources/v2/persons/${wallet}/accounts`
    );

    return accounts;
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно создать
   * @param wallet Номер кошелька
   */
  @MapErrorsAsync(mapError)
  async getAccountOffers(
    wallet: string
  ): Promise<types.GetAccountOffersResponse> {
    return await this.get(
      `funding-sources/v2/persons/${wallet}/accounts/offer`
    );
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param wallet Номер кошелька
   * @param alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   */
  @MapErrorsAsync(mapError)
  async createAccount(wallet: string, alias: string): Promise<""> {
    return await this.post(
      `funding-sources/v2/persons/${wallet}/accounts`,
      {},
      JSON.stringify({ alias })
    );
  }

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param wallet Номер кошелька
   * @param alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   */
  @MapErrorsAsync(mapError)
  async setDefaultAccount(wallet: string, alias: string) {
    return await this.patch(
      `funding-sources/v2/persons/${wallet}/accounts/${alias}`,
      {},
      JSON.stringify({ defaultAccount: true })
    );
  }

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
   * Данный метод создаёт ссылку на автозаполненную форму
   * @param provider ID
   * @param options
   */
  @MapErrorsAsync(mapError)
  createFormUrl(provider: number, options: types.FormUrlOptions) {
    let data = {
      currency: Personal.Currency.RUB
    } as any;

    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction =
        Math.round(options.amount - data.amountInteger) * 10;
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
   * {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments Документация QIWI по методу оплаты}
   *
   * @param provider Ака ID, в доках, номер провайдера у QIWI
   * @param account Номер кошелька или карты или типа того
   * @param amount Сумма платежа
   * @param currency Валюта платежа, по умолчанию = рубли
   * @param fields Доп. поля, их невозможно типизировать, просто читайте доки
   * @param comment Комментарий к платежу, необязательный
   */
  @MapErrorsAsync(mapError)
  async pay(
    provider: number | types.Recipients,
    account: string,
    amount: number,
    currency: types.Currency = Personal.Currency.RUB,
    fields: Record<string, string> = {},
    comment: string = ""
  ) {
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
   * @param name Название связки ключей
   * @param server URL сервера для отправки уведомлений
   *
   * @returns {[string, string]} Массив, где - [0=Публичный ключ, 1=Секретный ключ]
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
}
