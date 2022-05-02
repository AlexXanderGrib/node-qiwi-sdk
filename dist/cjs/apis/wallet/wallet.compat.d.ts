/// <reference types="node" />
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
export declare class _WalletCompat extends Wallet {
    readonly token: string;
    readonly walletId: string;
    static readonly IdentificationLevel: typeof types.PersonIdentificationLevel;
    static readonly ReceiptFormat: typeof types.ChequeFormat;
    /**
     * Creates an instance of _WalletCompat.
     * @param {string} token
     * @param {string} [walletId=""]
     * @memberof _WalletCompat
     */
    constructor(token: string, walletId?: string);
    /**
     *
     *
     * @readonly
     * @memberof _WalletCompat
     */
    get API_TOKEN(): string;
    /**
     *
     *
     * @readonly
     * @memberof _WalletCompat
     */
    get webhookKey(): Map<string, string>;
    /**
     *
     *
     * @readonly
     * @memberof _WalletCompat
     */
    get hookId(): string | undefined;
    /**
     * Запрос возвращает информацию о вашем профиле - наборе
     * пользовательских данных и настроек вашего QIWI кошелька.
     */
    getPersonProfile(): Promise<types.PersonProfile>;
    /**
     * Данный запрос позволяет отправить данные для идентификации
     * вашего QIWI кошелька.
     *
     * @param {types.IdentificationBase} data
     */
    setIdentification(data: types.IdentificationBase): Promise<types.IdentificationResponse>;
    /**
     * Данный запрос позволяет выгрузить маскированные данные и
     * статус идентификации своего QIWI кошелька.
     */
    getIdentification(): Promise<types.IdentificationResponse>;
    /**
     * Запрос возвращает текущие уровни лимитов по операциям в вашем
     * QIWI кошельке. Лимиты действуют как ограничения на сумму
     * определенных операций.
     *
     * @template Limits
     * @param {Limits} limits
     */
    getLimits<Limits extends types.LimitTypeAny[] = types.LimitTypeAny[]>(limits: Limits): Promise<types.LimitsResponse<Limits[number]>>;
    /**
     * Запрос проверяет, есть ли ограничение на исходящие платежи с
     * QIWI Кошелька.
     */
    getRestrictions(): Promise<types.Restrictions>;
    /**
     * Запрос выгружает список платежей и пополнений вашего кошелька.
     * Можно использовать фильтр по количеству, ID и дате
     * (интервалу дат) транзакций.
     *
     * @param {types.GetPaymentHistoryParams} parameters Тело запроса
     */
    getPaymentHistory(parameters: types.GetPaymentHistoryParams): Promise<types.GetTransactionsHistoryResponse>;
    /**
     * Данный запрос используется для получения сводной статистики
     * по суммам платежей за заданный период.
     *
     * @param {types.GetPaymentHistoryTotalParams} parameters
     */
    getPaymentHistoryTotal(parameters: types.GetPaymentHistoryTotalParams): Promise<types.GetPaymentHistoryTotalResponse>;
    /**
     * Запрос используется для получения информации по определенной
     * транзакции из вашей истории платежей.
     *
     * @param {number} transactionId Номер транзакции
     * @param {types.TransactionType} [type] Тип транзакции
     */
    getTransaction(transactionId: number, type?: types.TransactionType): Promise<types.Transaction>;
    /**
     *
     * @param {types.StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
     * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
     * @param {types.ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
     */
    getTransactionCheque(transactionId: types.StringOrNumber, type: types.TransactionType, format?: types.ChequeFormat): Promise<Buffer>;
    /**
     *
     * @param {types.StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
     * @param {types.TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
     * @param {string} email Адрес для отправки электронной квитанции
     */
    sendTransactionCheque(transactionId: types.StringOrNumber, type: types.TransactionType, email: string): Promise<"">;
    /**
     * Успешный ответ содержит JSON-массив счетов вашего QIWI
     * Кошелька для фондирования платежей и текущие балансы счетов
     */
    getAccounts(): Promise<types.GetAccountsResponse["accounts"]>;
    /**
     * Успешный JSON-ответ содержит данные о счетах, которые можно
     * создать
     */
    getAccountOffers(): Promise<types.GetAccountOffersResponse>;
    /**
     * Создаёт новый счёт по параметру `alias`
     * Успешный ответ возвращает пустую строку
     * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
     * @param {StringOrNumber} wallet Номер кошелька
     */
    createAccount(alias: string): Promise<"">;
    /**
     * Устанавливает счёт по умолчанию
     * Успешный ответ возвращает пустую строку
     * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
     * @param {StringOrNumber} wallet Номер кошелька
     */
    setDefaultAccount(alias: string): Promise<"">;
    /**
     *
     * Получает сумму комиссии по заданным реквизитам
     *
     * @param {number} provider ID Провайдера у QIWI
     * @param {string} account ID получателя у провайдера
     * @param {number} amount Сумма
     * @return {Promise<number>}
     */
    getCommission(provider: number, account: string, amount: number): Promise<number>;
    /**
     * Данный метод создаёт ссылку на предзаполненную форму
     *
     * @param {number} provider ID провайдера
     * @param {types.FormUrlOptions} options
     * @return {string}
     */
    static createFormUrl(provider: number | types.Recipients, options?: types.FormUrlOptions): string;
    /**
     * Данный метод создаёт ссылку на предзаполненную форму
     *
     * @param {number} provider ID провайдера
     * @param {types.FormUrlOptions} options
     * @return {string}
     */
    createFormUrl(provider: number | types.Recipients, options?: types.FormUrlOptions): string;
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
    pay(provider: types.PayParameters["provider"], account: types.PayParameters["account"], amount: types.PayParameters["amount"], currency?: types.PayParameters["currency"], fields?: types.PayParameters["fields"], comment?: types.PayParameters["comment"]): Promise<types.PaymentResponse>;
    /**
     * Более читаемая версия метода {@link pay}
     *
     * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
     *
     * @param {types.Pay2Params} params Параметры платежа
     * @return {Promise<types.PaymentResponse>}
     */
    pay2({ account, amount, provider, comment, currency, fields }: types.PayParameters): Promise<types.PaymentResponse>;
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
    createP2PKeyPair(name: string, server?: string): Promise<[PublicKey: string, SecretKey: string]>;
    /**
     * Создаёт токен с увеличенным сроком действия (10 лет)
     *
     * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
     */
    createOauthToken(): Promise<types.PrettyTokenResponse<_WalletCompat>>;
    /**
     * Возвращает список карт
     *
     * @return {Promise<types.CardResponse>}
     */
    getCards(): Promise<types.CardResponse[]>;
    /**
     * Блокирует карту
     *
     * @param {types.StringOrNumber} cardId
     *
     * @return {Promise<*>}
     */
    blockCard(cardId: types.StringOrNumber): Promise<any>;
    /**
     * Разблокирует карту
     *
     * @param {types.CardUnblockResponse} cardId
     * @param {types.CardUnblockResponse} wallet
     * @return {Promise<types.CardUnblockResponse>}
     */
    unblockCard(cardId: types.StringOrNumber): Promise<types.CardUnblockResponse>;
    /**
     * Получает реквизиты карты
     *
     * @param {types.StringOrNumber} cardId
     * @return {Promise<types.CardRequisitesResponse>}
     */
    getCardRequisites(cardId: types.StringOrNumber): Promise<types.CardRequisitesResponse>;
    /**
     *
     * @param {types.StringOrNumber} cardId
     * @param {string} alias
     * @return {Promise<types.CardRenameResponse>}
     */
    renameCard(cardId: types.StringOrNumber, alias: string): Promise<types.CardRenameResponse>;
    /**
     * Регистрирует обработчик вебхука
     * @param {string} parameter Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.**
     * @param {number} txnType Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все"
     * @return {Promise<types.WebHookInfo>}
     */
    addWebHook(parameter: string, txnType: 0 | 1 | 2): Promise<types.WebHookInfo>;
    /**
     * Удаляет обработчик вебхука
     * @param {string} [hookId] UUID вебхука
     * @return {Promise<*>}
     */
    removeWebHook(hookId?: string): Promise<any>;
    /**
     * Получает секретный ключ вебхука
     * @param {string} [hookId] UUID вебхука
     * @return {Promise<string>}
     */
    getWebHookSecret(hookId?: string): Promise<string>;
    /**
     * Измененяет секретный ключ вебхука
     * @param {string} hookId UUID вебхука
     * @return {Promise<string>}
     */
    getNewWebHookSecret(hookId?: string): Promise<string>;
    /**
     *
     * @return {Promise<types.WebHookInfo>}
     */
    getActiveWebHook(): Promise<types.WebHookInfo>;
    /**
     * Отправляет тестовое уведомление
     * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
     *
     * @return {Promise<*>}
     */
    testActiveWebHook(): Promise<any>;
    /**
     * Проверяет подпись уведомления вебхука
     * @param {types.WebhookTransaction} transaction Объект уведомления транзакции вебхука
     * @return {Promise<boolean | undefined>}
     */
    checkWebHookSign(transaction: types.WebhookTransaction): Promise<boolean | undefined>;
}
