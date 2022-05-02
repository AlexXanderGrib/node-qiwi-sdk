"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("../../http.js"),
  bills_api = require("./bills.api.js"),
  cards_api = require("./cards.api.js"),
  fundingSources_api = require("./funding-sources.api.js"),
  identification_api = require("./identification.api.js"),
  limits_api = require("./limits.api.js"),
  paymentHistory_api = require("./payment-history.api.js"),
  payments_api = require("./payments.api.js"),
  personProfile_api = require("./person-profile.api.js"),
  restrictions_api = require("./restrictions.api.js"),
  webhooks_api = require("./webhooks.api.js"),
  wallet_types = require("./wallet.types.js"),
  identity = require("../../identity.js"),
  wallet_errors = require("./wallet.errors.js"),
  api = require("../api.js"),
  providers_api = require("./providers.api.js"),
  querystring = require("../shared/querystring.js");
/**
 * # API Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)
 *
 * @export
 * @class Wallet
 */
class Wallet extends api.ApiClass {
  /**
   * Creates an instance of Wallet.
   * @param {WalletApiOptions} [options]
   * @memberof Wallet
   */
  constructor({
    token = "",
    walletId = "",
    http = Wallet.httpClientFactory(token)
  } = {}) {
    super({ token, walletId, http });
    this.personProfile = new Wallet.PersonProfileApi(this._options);
    this.identification = new Wallet.IdentificationApi(this._options);
    this.limits = new Wallet.LimitsApi(this._options);
    this.restrictions = new Wallet.RestrictionsApi(this._options);
    this.paymentHistory = new Wallet.PaymentHistoryApi(this._options);
    this.fundingSources = new Wallet.FundingSourcesApi(this._options);
    this.cards = new Wallet.CardsApi(this._options);
    this.payments = new Wallet.PaymentsApi(this._options);
    this.bills = new Wallet.BillsApi(this._options);
    this.webhooks = new Wallet.WebhooksApi(this._options);
    this.providers = new Wallet.ProvidersApi(this._options);
  }
  /**
   *
   *
   * @static
   * @param {string} token
   * @param {string} [walletId=""]
   * @return {Wallet}  {Wallet}
   * @memberof Wallet
   */
  static create(token, walletId = "") {
    return new this({
      http: this.httpClientFactory(token),
      token,
      walletId
    });
  }
  /**
   * Автоматически подтягивает номер телефона из API QIWI.
   * Номер телефона требуется для вызова большинства методов из
   * классов API:
   *
   * - {@link IdentificationApi}
   * - {@link LimitsApi}
   * - {@link RestrictionsApi}
   * - {@link PaymentHistoryApi}
   * - {@link FundingSourcesApi}
   * - {@link CardsApi}
   *
   * @static
   * @param {string} token
   * @return {Promise<Wallet>}  {Promise<Wallet>}
   * @memberof Wallet
   */
  static async createAndFetchWalletId(token, { setupHttp } = {}) {
    const options = {
      token,
      walletId: "",
      http: this.httpClientFactory(token)
    };
    setupHttp === null || setupHttp === void 0 ? void 0 : setupHttp(options.http);
    const personProfileApi = new this.PersonProfileApi(options);
    const profile = await personProfileApi.getCurrent();
    const walletId = profile.contractInfo.contractId.toString();
    return new this({ ...options, walletId });
  }
  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
   */
  async createOauthToken() {
    const commonOptions = {
      baseURL: "https://qiwi.com/oauth/",
      url: "",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      stringifyBody: querystring.formatQuerystring
    };
    const clientId = "api_wallet_private";
    const codeResponse = await this._options.http.request({
      ...commonOptions,
      url: "authorize",
      body: {
        response_type: "code",
        client_id: clientId,
        token: this.options.token,
        client_software: "api"
      }
    });
    const { code } = codeResponse;
    const tokenResponse = await this._options.http.request({
      ...commonOptions,
      url: "token",
      body: {
        grant_type: "authorization_code",
        client_id: clientId,
        client_secret: "hTFPyt",
        code
      }
    });
    const { access_token: token, expires_in: expiry } = tokenResponse;
    return {
      token,
      expiry: Number.parseInt(expiry, 10),
      client: new Wallet({
        ...this._options,
        token
      })
    };
  }
}
Wallet.PersonIdentificationLevel = wallet_types.PersonIdentificationLevel;
Wallet.TransactionType = wallet_types.TransactionType;
Wallet.TransactionStatus = wallet_types.TransactionStatus;
Wallet.Currency = wallet_types.Currency;
Wallet.ChequeFormat = wallet_types.ChequeFormat;
Wallet.Recipients = wallet_types.Recipients;
Wallet.PaymentHistorySource = wallet_types.PaymentHistorySource;
Wallet.LimitType = wallet_types.LimitType;
Wallet.CardStatus = wallet_types.CardStatus;
Wallet.CardActionStatus = wallet_types.CardActionStatus;
Wallet.PersonProfileApi = personProfile_api.WalletPersonProfileApi;
Wallet.IdentificationApi = identification_api.WalletIdentificationApi;
Wallet.LimitsApi = limits_api.WalletLimitsApi;
Wallet.RestrictionsApi = restrictions_api.WalletRestrictionsApi;
Wallet.PaymentHistoryApi = paymentHistory_api.WalletPaymentHistoryApi;
Wallet.FundingSourcesApi = fundingSources_api.WalletFundingSourcesApi;
Wallet.CardsApi = cards_api.WalletCardsApi;
Wallet.PaymentsApi = payments_api.WalletPaymentsApi;
Wallet.BillsApi = bills_api.WalletBillsApi;
Wallet.WebhooksApi = webhooks_api.WalletWebhooksApi;
Wallet.ProvidersApi = providers_api.WalletProvidersApi;
/**
 *
 *
 * @static
 * @param {string} token
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof Wallet
 */
Wallet.httpClientFactory = (token) => {
  const http$1 = new http.SimpleJsonHttp();
  http$1.client.options = {
    ...http$1.client.options,
    baseURL: "https://edge.qiwi.com/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": identity.USER_AGENT,
      Authorization: `Bearer ${token}`
    },
    okStatusCodes: [200, 201, 202, 203, 204],
    timeout: 10000,
    mapHttpErrors: wallet_errors.mapHttpErrors
  };
  return http$1;
};
exports.Wallet = Wallet;
