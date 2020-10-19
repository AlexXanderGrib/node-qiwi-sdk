import { createQS } from "..";
import { HttpAPI } from "../http";
import type * as t from "./personal.types";
import {
  ChequeFormat,
  Currency,
  PersonIdentificationLevel,
  Recipients
} from "./personal.types";

export class Personal extends HttpAPI {
  public static readonly Currency = Currency;
  public static readonly IdentificationLevel = PersonIdentificationLevel;
  public static readonly ReceiptFormat = ChequeFormat;
  public static readonly Recipients = Recipients;

  public readonly API_HEADERS = {
    Accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${this.API_TOKEN}`
  };

  public readonly API_URL = "https://edge.qiwi.com";
  public readonly API_OK_RESPONSE_CODES = [200, 201, 204];

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
  getPersonProfile(): Promise<t.PersonProfile> {
    return this.get(
      "person-profile/v1/profile/current?authInfoEnabled=true&contractInfoEnabled=true&userInfoEnabled=true"
    );
  }

  /**
   * Данный запрос позволяет отправить данные для идентификации вашего QIWI кошелька.
   * @param wallet
   * @param data
   */
  setIdentification(
    wallet: string,
    data: t.IdentificationBase
  ): Promise<t.IdentificationResponse> {
    return this.post(
      `identification/v1/persons/${wallet}/identification`,
      {},
      JSON.stringify(data)
    );
  }

  /**
   * Данный запрос позволяет выгрузить маскированные данные и статус идентификации своего QIWI кошелька.
   * @param wallet
   */
  getIdentification(wallet: string): Promise<t.IdentificationResponse> {
    return this.get(`identification/v1/persons/${wallet}/identification`);
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем QIWI кошельке. Лимиты действуют как ограничения на сумму определенных операций.
   * @param wallet
   * @param limits
   */
  getLimits<L extends t.LimitType[] = t.LimitType[]>(
    wallet: string,
    limits: L
  ): Promise<t.LimitsResponse<L[number]>> {
    const query = createQS({ types: limits });

    return this.get(`qw-limits/v1/persons/${wallet}/actual-limits?${query}`);
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с QIWI Кошелька.
   * @param wallet
   */
  getRestrictions(wallet: string): Promise<t.Restrictions> {
    return this.get(`person-profile/v1/persons/${wallet}/status/restrictions`);
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька. Можно использовать фильтр по количеству, ID и дате (интервалу дат) транзакций.
   * @param wallet Номер кошелька
   * @param params Тело запроса
   */
  getPaymentHistory(
    wallet: string,
    params: t.GetPaymentHistoryParams
  ): Promise<t.GetTransactionsHistoryResponse> {
    const query = createQS(params);

    return this.get(`payment-history/v2/persons/${wallet}/payments?${query}`);
  }
  /**
   * Данный запрос используется для получения сводной статистики по суммам платежей за заданный период.
   * @param wallet
   * @param params
   */
  getPaymentHistoryTotal(
    wallet: string,
    params: t.GetPaymentHistoryTotalParams
  ): Promise<t.GetPaymentHistoryTotalResponse> {
    const query = createQS(params);

    return this.get(
      `payment-history/v2/persons/${wallet}/payments/total?${query}`
    );
  }
  /**
   * Запрос используется для получения информации по определенной транзакции из вашей истории платежей.
   * @param transactionId Номер транзакции
   * @param type Тип транзакции
   */
  getTransaction(
    transactionId: number,
    type: t.TransactionType
  ): Promise<t.Transaction> {
    return this.get(
      `payment-history/v2/transactions/${transactionId}?type=${type}`
    );
  }

  /**
   *
   * @param transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  async getTransactionCheque(
    transactionId: number,
    type: t.TransactionType,
    format: t.ChequeFormat = ChequeFormat.JPEG
  ): Promise<Buffer> {
    const response = await this.get(
      `payment-history/v2/transactions/${transactionId}/cheque/file?type=${type}&format=${format}`
    );

    return Buffer.from(response as string);
  }

  /**
   *
   * @param transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param email Адрес для отправки электронной квитанции
   */
  sendTransactionCheque(
    transactionId: number,
    type: t.TransactionType,
    email: string
  ): Promise<""> {
    return this.post(
      `payment-history/v2/transactions/${transactionId}/cheque/send?type=${type}`,
      {},
      JSON.stringify({ email })
    );
  }

  /**
   * Успешный ответ содержит JSON-массив счетов вашего QIWI Кошелька для фондирования платежей и текущие балансы счетов
   * @param wallet Номер кошелька
   */
  async getAccounts(
    wallet: string
  ): Promise<t.GetAccountsResponse["accounts"]> {
    const { accounts } = await this.get(
      `funding-sources/v2/persons/${wallet}/accounts`
    );

    return accounts;
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно создать
   * @param wallet Номер кошелька
   */
  getAccountOffers(wallet: string): Promise<t.GetAccountOffersResponse> {
    return this.get(`funding-sources/v2/persons/${wallet}/accounts/offer`);
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param wallet Номер кошелька
   * @param alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   */
  createAccount(wallet: string, alias: string): Promise<""> {
    return this.post(
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
  setDefaultAccount(wallet: string, alias: string) {
    return this.patch(
      `funding-sources/v2/persons/${wallet}/accounts/${alias}`,
      {},
      JSON.stringify({ defaultAccount: true })
    );
  }

  async getCommission(
    provider: number,
    account: string,
    amount: number
  ): Promise<number> {
    const data: t.PaymentCommissionRequest = {
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
  createFormUrl(provider: number, options: t.FormUrlOptions) {
    let data = {
      currency: Currency.RUB
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
   * Бля, это самый сложный метод, и я просто не хочу себя морально
   * уничтожать, пытаясь его полностью типизировать и документировать.
   *
   * Он реально очень сложный и комплексный, так как в соло отвечает
   * за всю логику переводов, которым в доках QIWI API посвящено 6
   * разделов
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments|Документация QIWI по методу оплаты}
   *
   * @param provider Ака ID, в доках, номер провайдера у QIWI
   * @param account Номер кошелька или карты или типа того
   * @param amount Сумма платежа
   * @param currency Валюта платежа, по умолчанию = рубли
   * @param fields Доп. поля, их невозможно типизировать, просто читайте доки
   * @param comment Комментарий к платежу, необязательный
   */
  async pay(
    provider: number,
    account: string,
    amount: number,
    currency: Currency = Currency.RUB,
    fields: Record<string, string> = {},
    comment: string = ""
  ) {
    return this.post(
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
