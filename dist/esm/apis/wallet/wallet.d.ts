import { SimpleJsonHttp } from "../../http";
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
import { PersonIdentificationLevel, TransactionType, TransactionStatus, Currency, ChequeFormat, Recipients, PaymentHistorySource, LimitType, CardStatus, CardActionStatus, PrettyTokenResponse } from "./wallet.types";
import { ApiClass } from "../api";
import { WalletProvidersApi } from "./providers.api";
/**
 * @callback SetupHttp
 * @param {SimpleJsonHttp} http
 * @return {void} nothing
 */
declare type SetupHttp = (http: SimpleJsonHttp) => void;
declare type CreateAndFetchWalletIdParameters = {
    setupHttp?: SetupHttp;
};
/**
 * # API Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/)
 *
 * @export
 * @class Wallet
 */
export declare class Wallet extends ApiClass<WalletApiOptions> {
    static readonly PersonIdentificationLevel: typeof PersonIdentificationLevel;
    static readonly TransactionType: typeof TransactionType;
    static readonly TransactionStatus: typeof TransactionStatus;
    static readonly Currency: typeof Currency;
    static readonly ChequeFormat: typeof ChequeFormat;
    static readonly Recipients: typeof Recipients;
    static readonly PaymentHistorySource: typeof PaymentHistorySource;
    static readonly LimitType: typeof LimitType;
    static readonly CardStatus: typeof CardStatus;
    static readonly CardActionStatus: typeof CardActionStatus;
    static readonly PersonProfileApi: typeof WalletPersonProfileApi;
    static readonly IdentificationApi: typeof WalletIdentificationApi;
    static readonly LimitsApi: typeof WalletLimitsApi;
    static readonly RestrictionsApi: typeof WalletRestrictionsApi;
    static readonly PaymentHistoryApi: typeof WalletPaymentHistoryApi;
    static readonly FundingSourcesApi: typeof WalletFundingSourcesApi;
    static readonly CardsApi: typeof WalletCardsApi;
    static readonly PaymentsApi: typeof WalletPaymentsApi;
    static readonly BillsApi: typeof WalletBillsApi;
    static readonly WebhooksApi: typeof WalletWebhooksApi;
    static readonly ProvidersApi: typeof WalletProvidersApi;
    /**
     *
     *
     * @static
     * @param {string} token
     * @return {SimpleJsonHttp} {SimpleJsonHttp}
     * @memberof Wallet
     */
    static httpClientFactory: (token: string) => SimpleJsonHttp;
    /**
     *
     *
     * @static
     * @param {string} token
     * @param {string} [walletId=""]
     * @return {Wallet}  {Wallet}
     * @memberof Wallet
     */
    static create(token: string, walletId?: string): Wallet;
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
    static createAndFetchWalletId(token: string, { setupHttp }?: CreateAndFetchWalletIdParameters): Promise<Wallet>;
    /**
     * Creates an instance of Wallet.
     * @param {WalletApiOptions} [options]
     * @memberof Wallet
     */
    constructor({ token, walletId, http }?: Partial<WalletApiOptions>);
    readonly personProfile: WalletPersonProfileApi;
    readonly identification: WalletIdentificationApi;
    readonly limits: WalletLimitsApi;
    readonly restrictions: WalletRestrictionsApi;
    readonly paymentHistory: WalletPaymentHistoryApi;
    readonly fundingSources: WalletFundingSourcesApi;
    readonly cards: WalletCardsApi;
    readonly payments: WalletPaymentsApi;
    readonly bills: WalletBillsApi;
    readonly webhooks: WalletWebhooksApi;
    readonly providers: WalletProvidersApi;
    /**
     * Создаёт токен с увеличенным сроком действия (10 лет)
     *
     * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
     */
    createOauthToken(): Promise<PrettyTokenResponse<Wallet>>;
}
export {};
