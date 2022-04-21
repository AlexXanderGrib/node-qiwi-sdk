import { formatQuerystring } from "../shared";
import { WalletApi } from "./api";
import {
  PaymentCommissionRequest,
  Recipients,
  FormUrlOptions,
  Currency,
  PayParameters,
  PaymentResponse
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
    amount: number
  ): Promise<number> {
    const data: PaymentCommissionRequest = {
      account,
      paymentMethod: {
        accountId: "643",
        type: "Account"
      },
      purchaseTotals: {
        total: {
          amount,
          currency: "643"
        }
      }
    };

    const response: any = await this.http.post(
      `sinap/providers/${provider}/onlineCommission`,
      data
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
    fields = {}
  }: PayParameters): Promise<PaymentResponse> {
    return await this.http.post(`sinap/api/v2/terms/${provider}/payments`, {
      id: (Date.now() * 1000).toString(),
      sum: {
        amount,
        currency: String(currency)
      },
      paymentMethod: {
        type: "Account",
        accountId: "643"
      },
      fields: {
        account,
        ...fields
      },
      ...(comment && { comment })
    });
  }
}
