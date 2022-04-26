import { Detector } from "../detector";
import { formatQuerystring } from "../shared";
import { WalletApi } from "./api";
import {
  Recipients,
  FormUrlOptions,
  Currency,
  PayParameters,
  PaymentResponse,
  QuickPayParameters,
  CommissionPayer,
  QuickPayRecipients
} from "./wallet.types";

/**
 * # Платежное API
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
 *
 * @export
 * @class WalletPaymentsApi
 * @extends {WalletApi}
 */
export class WalletPaymentsApi extends WalletApi {
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
    provider: number | Recipients,
    account: string,
    amount: number,
    { accountCurrency = Currency.RUB, paymentCurrency = Currency.RUB } = {}
  ): Promise<number> {
    const response: any = await this.http.post(
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
  static createFormUrl(
    provider: number | Recipients,
    options: FormUrlOptions = {}
  ): string {
    const data = {
      currency: Currency.RUB,
      ...options.custom
    } as any;

    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction = Math.round((options.amount - data.amountInteger) * 100);
    }

    if (options.comment) data["extra['comment']"] = options.comment;
    if (options.account) data["extra['account']"] = options.account;

    if (options.accountType) data["extra['accountType']"] = options.accountType;

    if (options.blocked) data.blocked = options.blocked;

    return `https://qiwi.com/payment/form/${provider}?${formatQuerystring(data)}`;
  }

  /**
   * Данный метод создаёт ссылку на предзаполненную форму оплаты
   *
   * @param {(number | Recipients)} provider Идентификатор провайдера
   * @param {FormUrlOptions} [options={}] Параметры формы
   * @return {string} {string} Ссылка
   * @memberof WalletPaymentsApi
   */
  createFormUrl(
    provider: number | Recipients,
    options: FormUrlOptions = {}
  ): string {
    let account = options.account;

    if (account === undefined && provider === Recipients.QIWI) {
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
    provider = Recipients.QIWI,
    comment = "",
    currency = Currency.RUB,
    fields = {},
    accountCurrency = Currency.RUB
  }: PayParameters): Promise<PaymentResponse> {
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
   *
   * @param {QuickPayParameters} params Параметры платежа
   */
  async quickPay({
    account,
    amount,
    commissionPayer = CommissionPayer.SENDER,
    provider = Recipients.QIWI,
    comment = "",
    currency = Currency.RUB,
    fields = {},
    accountCurrency = Currency.RUB
  }: QuickPayParameters): Promise<PaymentResponse> {
    provider = await this._resolveProvider(provider, account);

    if (commissionPayer === CommissionPayer.RECEIVER) {
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
   * @memberof WalletPaymentsApi
   */
  protected async _resolveProvider(
    provider: QuickPayParameters["provider"],
    account: string
  ): Promise<number> {
    if (typeof provider !== "number") {
      const detector = Detector.create();
      detector.agent = this._options.http.client.options.agent;
      switch (provider) {
        case "card":
        case QuickPayRecipients.Card:
          provider = await detector.detectProvider.byCardNumber(account);
          break;
        case "phone":
        case QuickPayRecipients.Phone:
          provider = await detector.detectProvider.byPhone(account);
          break;
        case "qiwi":
          provider = Recipients.QIWI;
          break;
        case "yoomoney":
          provider = Recipients.YooMoney;
          break;
      }
    }
    return provider as number;
  }
}
