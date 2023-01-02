/* istanbul ignore file */
import { Wallet } from "./wallet";
import * as types from "./wallet.types";

/**
 *
 * @deprecated Используйте класс `Wallet` и новые сигнатуры
 * методов
 *
 * @export
 * @class _WalletCompat
 * @extends {Wallet}
 */
export class _WalletCompat extends Wallet {
  /**
   * Creates an instance of _WalletCompat.
   * @param {string} token
   * @param {string} [walletId=""]
   * @memberof _WalletCompat
   */
  constructor(public readonly token: string, public readonly walletId = "") {
    super({
      http: _WalletCompat.httpClientFactory(token),
      token,
      walletId
    });
  }

  /**
   *
   *
   * @private
   * @template T
   * @param {(types.StringOrNumber | undefined)} walletId
   * @param {Function} executor
   * @return {Promise<T>} Promise<T>
   * @memberof _WalletCompat
   */
  private async _executeWithWalletId<T>(
    walletId: types.StringOrNumber | undefined,
    executor: (wallet: _WalletCompat) => Promise<T>
  ): Promise<T> {
    if (!walletId || walletId === this.walletId) {
      // Если walletId не меняется, то нет смысла показывать
      // `_executeWithWalletId` в стактрейсе
      return executor(this);
    }

    const instance = new _WalletCompat(this.token, walletId.toString());
    instance.agent = this.agent;

    try {
      return await executor(instance);
    } finally {
      instance.agent = undefined;
    }
  }

  /**
   *
   *
   * @readonly
   * @memberof _WalletCompat
   */
  get API_TOKEN() {
    return this.token;
  }

  /**
   *
   *
   * @readonly
   * @memberof _WalletCompat
   */
  get webhookKey() {
    return this.webhooks.keys;
  }

  /**
   *
   *
   * @readonly
   * @memberof _WalletCompat
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
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   * @return {Promise<types.IdentificationResponse>} Promise<types.IdentificationResponse>
   *
   */
  async setIdentification(
    data: types.IdentificationBase,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.IdentificationResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.identification.set(data);
    });
  }

  /**
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   *
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   * @return {Promise<types.IdentificationResponse>} Promise<types.IdentificationResponse>
   */
  async getIdentification(
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.IdentificationResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.identification.get();
    });
  }

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем
   * QIWI кошельке. Лимиты действуют как ограничения на сумму
   * определенных операций.
   *
   * @template Limits
   * @param {Limits} limits
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getLimits<Limits extends types.LimitTypeAny[] = types.LimitTypeAny[]>(
    limits: Limits,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.LimitsResponse<Limits[number]>> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.limits.get<Limits>(limits);
    });
  }

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getRestrictions(
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.Restrictions> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.restrictions.get();
    });
  }

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька.
   * Можно использовать фильтр по количеству, ID и дате
   * (интервалу дат) транзакций.
   *
   * @param {types.GetPaymentHistoryParameters} parameters Тело запроса
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getPaymentHistory(
    parameters: types.GetPaymentHistoryParameters,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.GetTransactionsHistoryResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.paymentHistory.getHistory(parameters);
    });
  }
  /**
   * Данный запрос используется для получения сводной статистики
   * по суммам платежей за заданный период.
   *
   * @param {types.GetPaymentHistoryTotalParameters} parameters
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getPaymentHistoryTotal(
    parameters: types.GetPaymentHistoryTotalParameters,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.paymentHistory.getTotal(parameters);
    });
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
   * @param {types.StringOrNumber} transactionId  номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе)
   * @param {types.ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  async getTransactionCheque(
    transactionId: types.StringOrNumber,
    type: types.TransactionType,
    format: types.ChequeFormat = types.ChequeFormat.JPEG
  ): Promise<Buffer> {
    const data = await this.paymentHistory.getTransactionCheque(
      transactionId,
      type,
      format
    );

    return typeof Buffer === "undefined" ? (data as Buffer) : Buffer.from(data);
  }

  /**
   *
   * @param {types.StringOrNumber} transactionId  номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе)
   * @param {types.TransactionType} type тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе)
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
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getAccounts(
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.GetAccountsResponse["accounts"]> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.fundingSources.getAccounts();
    });
  }

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно
   * создать
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async getAccountOffers(
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.GetAccountOffersResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.fundingSources.getAccountOffers();
    });
  }

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer))
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async createAccount(
    alias: string,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<""> {
    await this._executeWithWalletId(walletId, async () => {
      await this.fundingSources.createAccount(alias);
    });
    return "";
  }

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer))
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   */
  async setDefaultAccount(
    alias: string,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<""> {
    await this._executeWithWalletId(walletId, async () => {
      await this.fundingSources.setDefaultAccount(alias);
    });
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
    return _WalletCompat.PaymentsApi.createFormUrl(provider, options);
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
   * @deprecated Используйте {@link _WalletCompat.pay2}, так-как он более читаемый
   * @return {Promise<types.PaymentResponse>}
   */
  async pay(
    provider: types.PayParameters["provider"],
    account: types.PayParameters["account"],
    amount: types.PayParameters["amount"],
    currency: types.PayParameters["currency"] = _WalletCompat.Currency.RUB,
    fields: types.PayParameters["fields"] = {},
    comment: types.PayParameters["comment"] = ""
  ): Promise<types.PaymentResponse> {
    return await this.pay2({ provider, account, amount, currency, fields, comment });
  }

  /**
   * Более читаемая версия метода {@link _WalletCompat.pay}
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {types.Pay2Params} params Параметры платежа
   * @return {Promise<types.PaymentResponse>}
   */
  async pay2({
    account,
    amount,
    provider = _WalletCompat.Recipients.QIWI,
    comment = "",
    currency = _WalletCompat.Currency.RUB,
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
   * [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)
   */
  async createOauthToken(): Promise<types.PrettyTokenResponse<_WalletCompat>> {
    const { token, expiry } = await this.oauth.createToken();
    const client = new _WalletCompat(token, this.options.walletId);
    Object.assign(client.options, { http: this.options.http });

    return { token, expiry, client };
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
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   *
   * @return {Promise<*>}
   */
  async blockCard(
    cardId: types.StringOrNumber,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<any> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.cards.block(cardId);
    });
  }

  /**
   * Разблокирует карту
   *
   * @param {types.StringOrNumber} cardId
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   * @return {Promise<types.CardUnblockResponse>}
   */
  async unblockCard(
    cardId: types.StringOrNumber,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.CardUnblockResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.cards.unblock(cardId);
    });
  }

  /**
   * Получает реквизиты карты
   *
   * @param {types.StringOrNumber} cardId
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   * @return {Promise<types.CardRequisitesResponse>}
   */
  async getCardRequisites(
    cardId: types.StringOrNumber,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.CardRequisitesResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.cards.getRequisites(cardId);
    });
  }

  /**
   *
   * @param {types.StringOrNumber} cardId
   * @param {string} alias
   * @param {types.StringOrNumber} [walletId] Номер телефона привязанный к кошельку
   * @return {Promise<types.CardRenameResponse>}
   */
  async renameCard(
    cardId: types.StringOrNumber,
    alias: string,
    walletId: types.StringOrNumber = this.walletId
  ): Promise<types.CardRenameResponse> {
    return await this._executeWithWalletId(walletId, async () => {
      return await this.cards.rename(cardId, alias);
    });
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
   * Изменяет секретный ключ вебхука
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
