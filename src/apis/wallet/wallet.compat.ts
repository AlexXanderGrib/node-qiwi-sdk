/* istanbul ignore file */
import { Wallet } from "./wallet";
import * as types from "./wallet.types";

/**
 *
 * @deprecated Используйте класс `Wallet` и новые сигнатуры
 * методов
 *
 * @export
 * @class WalletCompat
 * @extends {Wallet}
 */
export class WalletCompat extends Wallet {
  static readonly IdentificationLevel = types.PersonIdentificationLevel;
  static readonly ReceiptFormat = types.ChequeFormat;

  /**
   * Creates an instance of WalletCompat.
   * @param {string} token
   * @param {string} [walletId=""]
   * @memberof WalletCompat
   */
  constructor(public readonly token: string, public readonly walletId = "") {
    super({
      http: WalletCompat.httpClientFactory(token),
      token,
      walletId
    });
  }

  /**
   *
   *
   * @readonly
   * @memberof WalletCompat
   */
  get API_TOKEN() {
    return this.token;
  }

  /**
   *
   *
   * @readonly
   * @memberof WalletCompat
   */
  get webhookKey() {
    return this.webhooks.keys;
  }

  /**
   *
   *
   * @readonly
   * @memberof WalletCompat
   */
  get hookId() {
    return this.webhooks.activeId;
  }

  /**
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   */
  async getPersonProfile(): Promise<types.PersonProfile> {
    return await this.personProfile.getCurrent();
  }

  /**
   * Данный запрос позволяет отправить данные для идентификации
   * вашего QIWI кошелька.
   *
   * @param {types.IdentificationBase} data
   */
  async setIdentification(
    data: types.IdentificationBase
  ): Promise<types.IdentificationResponse> {
    return await this.identification.set(data);
  }

  /**
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   */
  async getIdentification(): Promise<types.IdentificationResponse> {
    return await this.identification.get();
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем
   * QIWI кошельке. Лимиты действуют как ограничения на сумму
   * определенных операций.
   *
   * @template Limits
   * @param {Limits} limits
   */
  async getLimits<Limits extends types.LimitTypeAny[] = types.LimitTypeAny[]>(
    limits: Limits
  ): Promise<types.LimitsResponse<Limits[number]>> {
    return await this.limits.get<Limits>(limits);
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   */
  async getRestrictions(): Promise<types.Restrictions> {
    return await this.restrictions.get();
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька.
   * Можно использовать фильтр по количеству, ID и дате
   * (интервалу дат) транзакций.
   *
   * @param {types.GetPaymentHistoryParams} parameters Тело запроса
   */
  async getPaymentHistory(
    parameters: types.GetPaymentHistoryParams
  ): Promise<types.GetTransactionsHistoryResponse> {
    return await this.paymentHistory.getHistory(parameters);
  }
  /**
   * Данный запрос используется для получения сводной статистики
   * по суммам платежей за заданный период.
   *
   * @param {types.GetPaymentHistoryTotalParams} parameters
   */
  async getPaymentHistoryTotal(
    parameters: types.GetPaymentHistoryTotalParams
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    return await this.paymentHistory.getTotal(parameters);
  }
  /**
   * Запрос используется для получения информации по определенной
   * транзакции из вашей истории платежей.
   *
   * @param {number} transactionId Номер транзакции
   * @param {types.TransactionType} [type] Тип транзакции
   */
  async getTransaction(
    transactionId: number,
    type?: types.TransactionType
  ): Promise<types.Transaction> {
    return await this.paymentHistory.getTransaction(transactionId, type);
  }

  /**
   *
   * @param {types.StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {types.ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  async getTransactionCheque(
    transactionId: types.StringOrNumber,
    type: types.TransactionType,
    format: types.ChequeFormat = types.ChequeFormat.JPEG
  ): Promise<Buffer> {
    return await this.paymentHistory.getTransactionCheque(
      transactionId,
      type,
      format
    );
  }

  /**
   *
   * @param {types.StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {string} email Адрес для отправки электронной квитанции
   */
  async sendTransactionCheque(
    transactionId: types.StringOrNumber,
    type: types.TransactionType,
    email: string
  ): Promise<""> {
    await this.paymentHistory.sendTransactionCheque(transactionId, type, email);

    return "";
  }

  /**
   * Успешный ответ содержит JSON-массив счетов вашего QIWI
   * Кошелька для фондирования платежей и текущие балансы счетов
   */
  async getAccounts(): Promise<types.GetAccountsResponse["accounts"]> {
    return await this.fundingSources.getAccounts();
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно
   * создать
   */
  async getAccountOffers(): Promise<types.GetAccountOffersResponse> {
    return await this.fundingSources.getAccountOffers();
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */
  async createAccount(alias: string): Promise<""> {
    await this.fundingSources.createAccount(alias);
    return "";
  }

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */
  async setDefaultAccount(alias: string): Promise<""> {
    await this.fundingSources.setDefaultAccount(alias);
    return "";
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
  async getCommission(
    provider: number,
    account: string,
    amount: number
  ): Promise<number> {
    return await this.payments.getCommission(provider, account, amount);
  }

  /**
   * Данный метод создаёт ссылку на предзаполненную форму
   *
   * @param {number} provider ID провайдера
   * @param {types.FormUrlOptions} options
   * @return {string}
   */
  static createFormUrl(
    provider: number | types.Recipients,
    options: types.FormUrlOptions = {}
  ): string {
    return WalletCompat.PaymentsApi.createFormUrl(provider, options);
  }

  /**
   * Данный метод создаёт ссылку на предзаполненную форму
   *
   * @param {number} provider ID провайдера
   * @param {types.FormUrlOptions} options
   * @return {string}
   */
  createFormUrl(
    provider: number | types.Recipients,
    options: types.FormUrlOptions = {}
  ): string {
    return this.payments.createFormUrl(provider, options);
  }

  /**
   * Перевод с кошелька
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
  async pay(
    provider: types.PayParameters["provider"],
    account: types.PayParameters["account"],
    amount: types.PayParameters["amount"],
    currency: types.PayParameters["currency"] = WalletCompat.Currency.RUB,
    fields: types.PayParameters["fields"] = {},
    comment: types.PayParameters["comment"] = ""
  ): Promise<types.PaymentResponse> {
    return await this.pay2({ provider, account, amount, currency, fields, comment });
  }

  /**
   * Более читаемая версия метода {@link pay}
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {types.Pay2Params} params Параметры платежа
   * @return {Promise<types.PaymentResponse>}
   */
  async pay2({
    account,
    amount,
    provider = WalletCompat.Recipients.QIWI,
    comment = "",
    currency = WalletCompat.Currency.RUB,
    fields = {}
  }: types.PayParameters): Promise<types.PaymentResponse> {
    return await this.payments.pay({
      account,
      amount,
      provider,
      comment,
      currency,
      fields
    });
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
  async createP2PKeyPair(
    name: string,
    server?: string
  ): Promise<[PublicKey: string, SecretKey: string]> {
    const { publicKey, secretKey } = await this.bills.createP2PKeyPair(name, server);

    return [publicKey, secretKey];
  }

  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
   */
  async createOauthToken(): Promise<types.PrettyTokenResponse<WalletCompat>> {
    const { token, expiry } = await super.createOauthToken();
    const client = new WalletCompat(token, this.options.walletId);
    Object.assign(client.options, { http: this.options.http });

    return {
      token,
      expiry,
      client
    };
  }

  /**
   * Возвращает список карт
   *
   * @return {Promise<types.CardResponse>}
   */
  async getCards(): Promise<types.CardResponse[]> {
    return await this.cards.get();
  }

  /**
   * Блокирует карту
   *
   * @param {types.StringOrNumber} cardId
   *
   * @return {Promise<*>}
   */
  async blockCard(cardId: types.StringOrNumber): Promise<any> {
    return await this.cards.block(cardId);
  }

  /**
   * Разблокирует карту
   *
   * @param {types.CardUnblockResponse} cardId
   * @param {types.CardUnblockResponse} wallet
   * @return {Promise<types.CardUnblockResponse>}
   */
  async unblockCard(
    cardId: types.StringOrNumber
  ): Promise<types.CardUnblockResponse> {
    return await this.cards.unblock(cardId);
  }

  /**
   * Получает реквизиты карты
   *
   * @param {types.StringOrNumber} cardId
   * @return {Promise<types.CardRequisitesResponse>}
   */
  async getCardRequisites(
    cardId: types.StringOrNumber
  ): Promise<types.CardRequisitesResponse> {
    return await this.cards.getRequisites(cardId);
  }

  /**
   *
   * @param {types.StringOrNumber} cardId
   * @param {string} alias
   * @return {Promise<types.CardRenameResponse>}
   */
  async renameCard(
    cardId: types.StringOrNumber,
    alias: string
  ): Promise<types.CardRenameResponse> {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return await this.cards.rename(cardId, alias);
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
    return await this.webhooks.add(parameter, txnType);
  }

  /**
   * Удаляет обработчик вебхука
   * @param {string} [hookId] UUID вебхука
   * @return {Promise<*>}
   */
  async removeWebHook(hookId?: string): Promise<any> {
    return await this.webhooks.remove(hookId);
  }

  /**
   * Получает секретный ключ вебхука
   * @param {string} [hookId] UUID вебхука
   * @return {Promise<string>}
   */
  async getWebHookSecret(hookId?: string): Promise<string> {
    return await this.webhooks.getSecret(hookId);
  }

  /**
   * Измененяет секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async getNewWebHookSecret(hookId?: string): Promise<string> {
    return await this.webhooks.updateSecret(hookId);
  }

  /**
   *
   * @return {Promise<types.WebHookInfo>}
   */
  async getActiveWebHook(): Promise<types.WebHookInfo> {
    return await this.webhooks.getActiveWebhook();
  }

  /**
   * Отправляет тестовое уведомление
   * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
   *
   * @return {Promise<*>}
   */
  async testActiveWebHook(): Promise<any> {
    return await this.webhooks.testActiveWebhook();
  }

  /**
   * Проверяет подпись уведомления вебхука
   * @param {types.WebhookTransaction} transaction Объект уведомления транзакции вебхука
   * @return {Promise<boolean | undefined>}
   */
  async checkWebHookSign(
    transaction: types.WebhookTransaction
  ): Promise<boolean | undefined> {
    return await this.webhooks.checkSign(transaction);
  }
}
