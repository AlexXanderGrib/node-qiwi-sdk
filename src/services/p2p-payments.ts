import { createHmac } from "crypto";
import { v4 as uuid } from "uuid";
import { createQS, formatDate } from "..";
import { ErrorWithCode } from "../error";
import { HttpAPI, HttpError } from "../http";
import type * as t from "./p2p-payments.types";
import { BillCurrency, BillStatus } from "./p2p-payments.types";

export class P2PPaymentError extends ErrorWithCode<string> {}

export class P2PPayments extends HttpAPI {
  public static readonly BillStatus = BillStatus;
  public static readonly Currency = BillCurrency;

  public readonly API_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${this.secretKey}`
  };

  public readonly API_URL = "https://api.qiwi.com/partner/bill/v1/bills";

  /**
   *
   * Создаёт клиент P2P API используя Публичный и Приватный ключи, полученные на {@link https://qiwi.com/p2p-admin/transfers/api|Странице P2P API QIWI}
   *
   * @param {string} secretKey Публичный ключ
   * @param {string=} publicKey Приватный ключ (необязателен)
   */
  constructor(public secretKey: string, public publicKey: string = "") {
    super();
  }

  /**
   * ### Выставление счета
   *
   * **По оплаченным счетам возврат денежных средств не предусмотрен.**
   *
   * Доступно выставление счетов в рублях и тенге.
   * Надежный способ для интеграции. Параметры передаются server2server
   * с использованием авторизации. Метод позволяет выставить счет: при
   * успешном выполнении запроса в ответе вернется параметр
   * `payUrl` - ссылка для редиректа пользователя на форму.
   *
   * {@link https://developer.qiwi.com/ru/p2p-payments/#option|Настройки формы и счета}
   *
   * **Для тестирования и отладки сервиса рекомендуем выставлять и оплачивать счета суммой 1 рубль.**
   *
   * @param {t.BillCreationRequest} data Сформированный запрос на создание счёта
   */
  public createBill(
    data: t.BillCreationRequest,
    id = this.generateId()
  ): Promise<t.BillStatusData> {
    const patchedBill = {
      ...data,
      amount: {
        currency: data.amount.currency,
        value: this.normalizeAmount(data.amount.value)
      }
    };

    return this.throwError(this.put(id, {}, JSON.stringify(patchedBill)));
  }

  private normalizeAmount(amount: string | number): string {
    if (typeof amount === "number") return amount.toFixed(2);

    return amount;
  }

  /**
   * ### Проверка статуса перевода по счету
   *
   * Метод позволяет проверить статус перевода по счету. Рекомендуется
   * его использовать после получения уведомления о переводе.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   */
  public billStatus(billId: string): Promise<t.BillStatusData> {
    return this.throwError(this.get(billId));
  }

  /**
   * ### Отмена неоплаченного счета
   *
   * Метод позволяет отменить счет, по которому не был выполнен перевод.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   */
  public rejectBill(billId: string): Promise<t.BillStatusData> {
    return this.throwError(this.post(`${billId}/reject`));
  }

  /**
   * Проверяет ответ на предмет ошибки.
   * Если вернулась ошибка - кидает её
   *
   * @throws {P2PPaymentError} Ошибка запроса к QIWI P2P
   * @param {T | Promise<T>} response$ Ответ от сервера
   */
  private async throwError<T extends object>(
    response$: T | Promise<T>
  ): Promise<T> {
    try {
      const response = await response$;

      if ("errorCode" in response) {
        const error = (response$ as any) as t.BillError;

        throw new P2PPaymentError(error.description, error.errorCode);
      }

      return response;
    } catch (e) {
      if (e instanceof HttpError) {
        if (!e.body) throw e;

        const error = JSON.parse(e.body) as t.BillError;

        throw new P2PPaymentError(
          error.description + ` (${e.code})`,
          error.errorCode
        );
      } else {
        throw e;
      }
    }
  }

  public static formatLifetime(days = 1) {
    const date = new Date();

    const time = Math.round(date.getTime() + days * 24 * 60 * 60 * 1000);

    date.setTime(time);

    return formatDate(date);
  }

  protected generateId() {
    return uuid();
  }

  public checkNotificationSignature(
    signature: string,
    body: t.BillStatusData
  ): boolean {
    const data = `${body.amount.currency}|${body.amount.value}|${body.billId}|${body.siteId}|${body.status.value}`;
    const hash = createHmac("sha256", this.secretKey)
      .update(data)
      .digest("hex");

    return signature === hash;
  }

  public createBillFormUrl(
    params: Omit<t.BillFormParams, "billId" | "publicKey">,
    billId = this.generateId()
  ): string {
    const options: t.BillFormParams = {
      ...params,
      billId,
      publicKey: this.publicKey
    };

    return `https://oplata.qiwi.com/create?${createQS(options)}`;
  }
}
