import { SimpleJsonHttp } from "../../http.mjs";
import { WalletBillsApi } from "./bills.api.mjs";
import { WalletCardsApi } from "./cards.api.mjs";
import { WalletFundingSourcesApi } from "./funding-sources.api.mjs";
import { WalletIdentificationApi } from "./identification.api.mjs";
import { WalletLimitsApi } from "./limits.api.mjs";
import { WalletPaymentHistoryApi } from "./payment-history.api.mjs";
import { WalletPaymentsApi } from "./payments.api.mjs";
import { WalletPersonProfileApi } from "./person-profile.api.mjs";
import { WalletRestrictionsApi } from "./restrictions.api.mjs";
import { WalletWebhooksApi } from "./webhooks.api.mjs";
import {
  PersonIdentificationLevel,
  TransactionType,
  TransactionStatus,
  Currency,
  ChequeFormat,
  Recipients,
  PaymentHistorySource,
  LimitType,
  CardStatus,
  CardActionStatus
} from "./wallet.types.mjs";
import { USER_AGENT } from "../../identity.mjs";
import { mapHttpErrors } from "./wallet.errors.mjs";
import { ApiClass } from "../api.mjs";
import { WalletProvidersApi } from "./providers.api.mjs";
import { environment } from "../shared/environment.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
/**
 * # API Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)
 *
 * @export
 * @class Wallet
 */
class Wallet extends ApiClass {
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
   * Создаёт экземпляр класса.
   *
   * Если используете с переменными окружения, то:
   * - Переименуйте переменную с токеном в `QIWI_TOKEN`
   * - Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
   * - Используйте статический метод {@link env} вместо этого
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
   * Подхватывает токен из переменной окружения `QIWI_TOKEN` и
   * номер телефона из переменной `QIWI_WALLET` и использует их
   * для создания экземпляра
   *
   * @static
   * @param {string} [token=process.env.QIWI_TOKEN]
   * @param {string} [walletId=process.env.QIWI_WALLET]
   * @return {Wallet}  {Wallet}
   * @memberof Wallet
   */
  static env(token = environment.QIWI_TOKEN, walletId = environment.QIWI_WALLET) {
    return this.create(token, walletId);
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
      stringifyBody: formatQuerystring
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
Wallet.PersonIdentificationLevel = PersonIdentificationLevel;
Wallet.TransactionType = TransactionType;
Wallet.TransactionStatus = TransactionStatus;
Wallet.Currency = Currency;
Wallet.ChequeFormat = ChequeFormat;
Wallet.Recipients = Recipients;
Wallet.PaymentHistorySource = PaymentHistorySource;
Wallet.LimitType = LimitType;
Wallet.CardStatus = CardStatus;
Wallet.CardActionStatus = CardActionStatus;
Wallet.PersonProfileApi = WalletPersonProfileApi;
Wallet.IdentificationApi = WalletIdentificationApi;
Wallet.LimitsApi = WalletLimitsApi;
Wallet.RestrictionsApi = WalletRestrictionsApi;
Wallet.PaymentHistoryApi = WalletPaymentHistoryApi;
Wallet.FundingSourcesApi = WalletFundingSourcesApi;
Wallet.CardsApi = WalletCardsApi;
Wallet.PaymentsApi = WalletPaymentsApi;
Wallet.BillsApi = WalletBillsApi;
Wallet.WebhooksApi = WalletWebhooksApi;
Wallet.ProvidersApi = WalletProvidersApi;
/**
 *
 *
 * @static
 * @param {string} token
 * @return {SimpleJsonHttp} {SimpleJsonHttp}
 * @memberof Wallet
 */
Wallet.httpClientFactory = (token) => {
  const http = new SimpleJsonHttp();
  http.client.options = {
    ...http.client.options,
    baseURL: "https://edge.qiwi.com/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": USER_AGENT,
      Authorization: `Bearer ${token}`
    },
    okStatusCodes: [200, 201, 202, 203, 204],
    timeout: 10000,
    mapHttpErrors
  };
  return http;
};
export { Wallet };
