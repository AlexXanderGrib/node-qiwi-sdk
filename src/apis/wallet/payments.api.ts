import { Detector, DetectorError } from "../detector";
import { url } from "../shared/url";
import { WalletApi } from "./api";
import {
  Recipients,
  FormUrlOptions,
  Currency,
  PayParameters,
  PaymentResponse,
  QuickPayParameters,
  CommissionPayer,
  QuickPayRecipients,
  Rate
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
      url`sinap/providers/${provider}/onlineCommission`,
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
   * @param {FormUrlOptions} [options] Параметры формы
   * @return {string} string Ссылка
   * @memberof WalletPaymentsApi
   */
  static createFormUrl(
    provider: number | Recipients,
    options: FormUrlOptions = {}
  ): string {
    const data = {
      currency: Currency.RUB,
      extra: {
        "'comment'": options.comment,
        "'account'": options.account,
        "'accountType'": options.accountType
      },
      blocked: options.blocked,
      ...options.custom
    } as any;

    if (options.amount) {
      data.amountInteger = Math.trunc(options.amount);
      data.amountFraction = Math.round((options.amount - data.amountInteger) * 100);
    }

    return url`https://qiwi.com/payment/form/${provider}`(data);
  }

  /**
   * Данный метод создаёт ссылку на предзаполненную форму оплаты
   *
   * @param {(number | Recipients)} provider Идентификатор провайдера
   * @param {FormUrlOptions} [options] Параметры формы
   * @return {string} string Ссылка
   * @memberof WalletPaymentsApi
   */
  createFormUrl(
    provider: number | Recipients,
    options: FormUrlOptions = {}
  ): string {
    let { account } = options;

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
   * @return {Promise<PaymentResponse>} Promise<PaymentResponse>
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
    return await this.http.post(url`sinap/api/v2/terms/${provider}/payments`, {
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
   * @return {Promise<PaymentResponse>} Promise<PaymentResponse>
   * @memberof WalletPaymentsApi
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
   * @return {Promise<number>} Promise<number>
   * @throws {DetectorError}
   * @memberof WalletPaymentsApi
   */
  protected async _resolveProvider(
    provider: QuickPayParameters["provider"],
    account: string
  ): Promise<number> {
    if (typeof provider === "number") return provider;

    const detector = Detector.create();

    try {
      detector.agent = this._options.http.client.options.agent;

      switch (provider) {
        case "card":
        case QuickPayRecipients.Card: {
          return await detector.detectProvider.byCardNumber(account);
        }

        case "phone":
        case QuickPayRecipients.Phone: {
          return await detector.detectProvider.byPhone(account);
        }

        case "qiwi": {
          return Recipients.QIWI;
        }

        case "yoomoney": {
          return Recipients.YooMoney;
        }
      }
    } finally {
      detector.agent = undefined;
    }

    throw new DetectorError("Unable to detect provider");
  }

  /**
   * Получение курсов валют
   *
   * @return {Promise<Rate[]>} Promise<Rate[]>
   * @memberof WalletPaymentsApi
   */
  async getRates(): Promise<Rate[]> {
    const { result: rates } = await this.http.get<any>(url`sinap/crossRates`);

    return rates.map((data: any) => ({
      from: Number.parseInt(data.from),
      to: Number.parseInt(data.from),
      rate: data.rate
    }));
  }
}
