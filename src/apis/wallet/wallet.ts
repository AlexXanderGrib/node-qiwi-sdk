import type { WalletApiOptions } from "./wallet.options";
import { WalletBillsApi } from "./bills.api";
import { WalletCardsApi } from "./cards.api";
import { WalletFundingSourcesApi } from "./funding-sources.api";
import { WalletIdentificationApi } from "./identification.api";
import { WalletLimitsApi } from "./limits.api";
import { WalletPaymentHistoryApi } from "./payment-history.api";
import { WalletPaymentsApi } from "./payments.api";
import { WalletPersonProfileApi } from "./person-profile.api";
import { WalletRestrictionsApi } from "./restrictions.api";
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
  PrettyTokenResponse
} from "./wallet.types";

import { mapHttpErrors } from "./wallet.errors";
import { ApiClass } from "../api";
import { WalletProvidersApi } from "./providers.api";
import { environment } from "../shared/environment";
import { SimpleJsonHttp } from "../shared/http";
import { url } from "../shared/url";
import { USER_AGENT } from "../shared/identity";
import { WalletNicknameApi } from "./nickname.api";
import { WalletOauthApi } from "./oauth.api";

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
  static readonly IdentificationLevel = PersonIdentificationLevel;
  static readonly ReceiptFormat = ChequeFormat;

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
  static readonly ProvidersApi = WalletProvidersApi;
  static readonly NicknameApi = WalletNicknameApi;
  static readonly OauthApi = WalletOauthApi;

  /**
   *
   *
   * @static
   * @param {string} token
   * @return {SimpleJsonHttp} SimpleJsonHttp
   * @memberof Wallet
   */
  static httpClientFactory = (token: string): SimpleJsonHttp => {
    const http = new SimpleJsonHttp();

    http.client.options = {
      ...http.client.options,
      baseURL: url`https://edge.qiwi.com/`(),
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
   * Создаёт экземпляр класса.
   *
   * Если используете с переменными окружения, то:
   * - Переименуйте переменную с токеном в `QIWI_TOKEN`
   * - Переименуйте переменную с номером кошелька (если есть) в `QIWI_WALLET`
   * - Используйте статический метод {@link Wallet.env} вместо этого
   *
   *
   * @static
   * @param {string} token
   * @param {string} [walletId=""]
   * @return {Wallet} Wallet
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
   * Подхватывает токен из переменной окружения `QIWI_TOKEN` и
   * номер телефона из переменной `QIWI_WALLET` и использует их
   * для создания экземпляра
   *
   * @static
   * @param {string} [token=process.env.QIWI_TOKEN]
   * @param {string} [walletId=process.env.QIWI_WALLET]
   * @return {Wallet} Wallet
   * @memberof Wallet
   */
  static env(
    token = environment.QIWI_TOKEN,
    walletId = environment.QIWI_WALLET
  ): Wallet {
    return this.create(token, walletId);
  }

  /**
   * Автоматически подтягивает номер телефона из API QIWI.
   * Номер телефона требуется для вызова большинства методов из
   * классов API:
   *
   * - {@link Wallet.IdentificationApi}
   * - {@link Wallet.LimitsApi}
   * - {@link Wallet.RestrictionsApi}
   * - {@link Wallet.PaymentHistoryApi}
   * - {@link Wallet.FundingSourcesApi}
   * - {@link Wallet.CardsApi}
   *
   * @static
   * @param {string} token
   * @return {Promise<Wallet>} Promise<Wallet>
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

  /**
   * Creates an instance of Wallet.
   * @param {WalletApiOptions} [options]
   * @memberof Wallet
   */
  constructor({
    token = "",
    walletId = "",
    http = Wallet.httpClientFactory(token)
  }: Partial<WalletApiOptions> = {}) {
    super({ token, walletId, http });
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
  readonly providers = new Wallet.ProvidersApi(this._options);
  readonly nickname = new Wallet.NicknameApi(this._options);
  readonly oauth = new Wallet.OauthApi(this._options);

  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)
   */
  async createOauthToken(): Promise<PrettyTokenResponse<Wallet>> {
    /* istanbul ignore next */
    const { expiry, token } = await this.oauth.createToken();

    /* istanbul ignore next */
    return { expiry, token, client: new Wallet({ ...this._options, token }) };
  }
}
