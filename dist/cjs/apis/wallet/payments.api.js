"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api.js"),
  wallet_types = require("./wallet.types.js"),
  detector = require("../detector/detector.js"),
  detector_errors = require("../detector/detector.errors.js"),
  querystring = require("../shared/querystring.js");
/**
 * # Платежное API
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
 *
 * @export
 * @class WalletPaymentsApi
 * @extends {WalletApi}
 */
class WalletPaymentsApi extends api.WalletApi {
  /**
   * ## Комиссионные тарифы
   *
   * Чтобы узнать комиссию за платеж до его совершения по заданному
   * набору платежных реквизитов, используйте этот запрос.
   * Возвращается полная комиссия QIWI Кошелька за платеж в пользу
   * указанного провайдера с учетом всех тарифов.
   *
   * @param {(number | Recipients)} provider Идентификатор провайдера
   * @param {string} account Пользовательский идентификатор (номер телефона с международным префиксом, номер карты/счета получателя, и т.д., в зависимости от провайдера)
   * @param {number} amount Сумма
   * @return {Promise<number>}
   * @memberof WalletPaymentsApi
   */
  async getCommission(
    provider,
    account,
    amount,
    {
      accountCurrency = wallet_types.Currency.RUB,
      paymentCurrency = wallet_types.Currency.RUB
    } = {}
  ) {
    const response = await this.http.post(
      `sinap/providers/${provider}/onlineCommission`,
      {
        account,
        paymentMethod: {
          accountId: String(accountCurrency),
          type: "Account"
        },
        purchaseTotals: {
          total: {
            amount,
            currency: String(paymentCurrency)
          }
        }
      }
    );
    return response.qwCommission.amount;
  }
  /**
   * Данный метод создаёт ссылку на предзаполненную форму оплаты
   *
   * @static
   * @param {(number | Recipients)} provider Идентификатор провайдера
   * @param {FormUrlOptions} [options={}] Параметры формы
   * @return {string} {string} Ссылка
   * @memberof WalletPaymentsApi
   */
  static createFormUrl(provider, options = {}) {
    const data = {
      currency: wallet_types.Currency.RUB,
      ...options.custom
    };
    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction = Math.round((options.amount - data.amountInteger) * 100);
    }
    if (options.comment) data["extra['comment']"] = options.comment;
    if (options.account) data["extra['account']"] = options.account;
    if (options.accountType) data["extra['accountType']"] = options.accountType;
    if (options.blocked) data.blocked = options.blocked;
    return `https://qiwi.com/payment/form/${provider}?${querystring.formatQuerystring(
      data
    )}`;
  }
  /**
   * Данный метод создаёт ссылку на предзаполненную форму оплаты
   *
   * @param {(number | Recipients)} provider Идентификатор провайдера
   * @param {FormUrlOptions} [options={}] Параметры формы
   * @return {string} {string} Ссылка
   * @memberof WalletPaymentsApi
   */
  createFormUrl(provider, options = {}) {
    let account = options.account;
    if (account === undefined && provider === wallet_types.Recipients.QIWI) {
      account = this.walletId.toString();
    }
    return WalletPaymentsApi.createFormUrl(provider, { ...options, account });
  }
  /**
   *
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {PayParameters} params Параметры платежа
   * @return {Promise<PaymentResponse>} {Promise<PaymentResponse>}
   * @memberof WalletPaymentsApi
   */
  async pay({
    account,
    amount,
    provider = wallet_types.Recipients.QIWI,
    comment = "",
    currency = wallet_types.Currency.RUB,
    fields = {},
    accountCurrency = wallet_types.Currency.RUB
  }) {
    return await this.http.post(`sinap/api/v2/terms/${provider}/payments`, {
      id: (Date.now() * 1000).toString(),
      sum: {
        amount,
        currency: String(currency)
      },
      paymentMethod: {
        type: "Account",
        accountId: String(accountCurrency)
      },
      fields: {
        account,
        ...fields
      },
      ...(comment && { comment })
    });
  }
  /**
   * Метод для отправки платежа с возможностью автоматического вычета
   * комиссии и распознавания `provider`'а
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {QuickPayParameters} parameters
   * @throws {DetectorError} Под капотом создаётся и вызывается `Detector`. Он может выкинуть эту ошибку
   * @return {Promise<PaymentResponse>}  {Promise<PaymentResponse>}
   * @memberof WalletPaymentsApi
   */
  async quickPay({
    account,
    amount,
    commissionPayer = wallet_types.CommissionPayer.SENDER,
    provider = wallet_types.Recipients.QIWI,
    comment = "",
    currency = wallet_types.Currency.RUB,
    fields = {},
    accountCurrency = wallet_types.Currency.RUB
  }) {
    provider = await this._resolveProvider(provider, account);
    if (commissionPayer === wallet_types.CommissionPayer.RECEIVER) {
      const commission = await this.getCommission(provider, account, amount, {
        accountCurrency,
        paymentCurrency: currency
      });
      amount -= commission;
    }
    return await this.pay({
      account,
      amount,
      provider,
      accountCurrency,
      comment,
      currency,
      fields
    });
  }
  /**
   *
   *
   * @protected
   * @param {string|number} provider
   * @param {string} account
   * @return {Promise<number>} {Promise<number>}
   * @throws {DetectorError}
   * @memberof WalletPaymentsApi
   */
  async _resolveProvider(provider, account) {
    if (typeof provider === "number") return provider;
    const detector$1 = detector.Detector.create();
    try {
      detector$1.agent = this._options.http.client.options.agent;
      switch (provider) {
        case "card":
        case wallet_types.QuickPayRecipients.Card:
          return await detector$1.detectProvider.byCardNumber(account);
        case "phone":
        case wallet_types.QuickPayRecipients.Phone:
          return await detector$1.detectProvider.byPhone(account);
        case "qiwi":
          return wallet_types.Recipients.QIWI;
        case "yoomoney":
          return wallet_types.Recipients.YooMoney;
      }
    } finally {
      detector$1.agent = undefined;
    }
    throw new detector_errors.DetectorError("Unable to detect provider");
  }
}
exports.WalletPaymentsApi = WalletPaymentsApi;