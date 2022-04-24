import { HttpRequestOptions, SimpleJsonHttp } from "../../http";

import { WalletBillsApi } from "./bills.api";
import { WalletCardsApi } from "./cards.api";
import { WalletFundingSourcesApi } from "./funding-sources.api";
import { WalletIdentificationApi } from "./identification.api";
import { WalletLimitsApi } from "./limits.api";
import { WalletPaymentHistoryApi } from "./payment-history.api";
import { WalletPaymentsApi } from "./payments.api";
import { WalletPersonProfileApi } from "./person-profile.api";
import { WalletRestrictionsApi } from "./restrictions.api";
import { WalletApiOptions } from "./wallet.options";
import { WalletWebhooksApi } from "./webhooks.api";

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
  CardActionStatus,
  PrettyTokenResponse,
  CodeResponse,
  TokenResponse
} from "./wallet.types";
import { stringify } from "querystring";
import { USER_AGENT } from "../../identity";
import { mapHttpErrors } from "./wallet.errors";
import { ApiClass } from "../api";

/**
 * @callback SetupHttp
 * @param {SimpleJsonHttp} http
 * @return {void} nothing
 */
type SetupHttp = (http: SimpleJsonHttp) => void;

type CreateAndFetchWalletIdParameters = {
  setupHttp?: SetupHttp;
};

/**
 * # API Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)
 *
 * @export
 * @class Wallet
 */
export class Wallet extends ApiClass<WalletApiOptions> {
  static readonly PersonIdentificationLevel = PersonIdentificationLevel;
  static readonly TransactionType = TransactionType;
  static readonly TransactionStatus = TransactionStatus;
  static readonly Currency = Currency;
  static readonly ChequeFormat = ChequeFormat;
  static readonly Recipients = Recipients;
  static readonly PaymentHistorySource = PaymentHistorySource;
  static readonly LimitType = LimitType;
  static readonly CardStatus = CardStatus;
  static readonly CardActionStatus = CardActionStatus;

  static readonly PersonProfileApi = WalletPersonProfileApi;
  static readonly IdentificationApi = WalletIdentificationApi;
  static readonly LimitsApi = WalletLimitsApi;
  static readonly RestrictionsApi = WalletRestrictionsApi;
  static readonly PaymentHistoryApi = WalletPaymentHistoryApi;
  static readonly FundingSourcesApi = WalletFundingSourcesApi;
  static readonly CardsApi = WalletCardsApi;
  static readonly PaymentsApi = WalletPaymentsApi;
  static readonly BillsApi = WalletBillsApi;
  static readonly WebhooksApi = WalletWebhooksApi;

  /**
   *
   *
   * @static
   * @param {string} token
   * @return {SimpleJsonHttp} {SimpleJsonHttp}
   * @memberof Wallet
   */
  static httpClientFactory = (token: string): SimpleJsonHttp => {
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
      timeout: 10_000,
      mapHttpErrors
    };

    return http;
  };

  /**
   *
   *
   * @static
   * @param {string} token
   * @param {string} [walletId=""]
   * @return {Wallet}  {Wallet}
   * @memberof Wallet
   */
  static create(token: string, walletId = ""): Wallet {
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
  static async createAndFetchWalletId(
    token: string,
    { setupHttp }: CreateAndFetchWalletIdParameters = {}
  ): Promise<Wallet> {
    const options: WalletApiOptions = {
      token,
      walletId: "",
      http: this.httpClientFactory(token)
    };

    setupHttp?.(options.http);

    const personProfileApi = new this.PersonProfileApi(options);
    const profile = await personProfileApi.getCurrent();
    const walletId = profile.contractInfo.contractId.toString();

    return new this({ ...options, walletId });
  }

  readonly personProfile = new Wallet.PersonProfileApi(this._options);
  readonly identification = new Wallet.IdentificationApi(this._options);
  readonly limits = new Wallet.LimitsApi(this._options);
  readonly restrictions = new Wallet.RestrictionsApi(this._options);
  readonly paymentHistory = new Wallet.PaymentHistoryApi(this._options);
  readonly fundingSources = new Wallet.FundingSourcesApi(this._options);
  readonly cards = new Wallet.CardsApi(this._options);
  readonly payments = new Wallet.PaymentsApi(this._options);
  readonly bills = new Wallet.BillsApi(this._options);
  readonly webhooks = new Wallet.WebhooksApi(this._options);

  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
   */
  async createOauthToken(): Promise<PrettyTokenResponse<Wallet>> {
    const commonOptions: HttpRequestOptions = {
      baseURL: "https://qiwi.com/oauth/",
      url: "",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      stringifyBody: stringify
    };

    const codeResponse: CodeResponse = await this._options.http.request({
      ...commonOptions,
      body: {
        response_type: "code",
        client_id: "api_wallet_private",
        token: this.options.token,
        client_software: "api"
      }
    });

    const { code } = codeResponse;

    const tokenResponse: TokenResponse = await this._options.http.request({
      ...commonOptions,
      body: {
        grant_type: "authorization_code",
        client_id: "api_wallet_private",
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
