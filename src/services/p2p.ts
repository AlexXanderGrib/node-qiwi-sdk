import { createHmac } from "crypto";
import { MapErrorsAsync } from "sweet-decorators";
import { v4 as uuid } from "uuid";
import { createQS, formatDate } from "..";
import { ErrorWithCode } from "../error";
import { HttpAPI, HttpError } from "../http";
import { USER_AGENT } from "../indentity";
import type * as t from "./p2p.types";
import { BillCurrency, BillStatus } from "./p2p.types";

export class P2PPaymentError extends ErrorWithCode<string> {
  constructor(public data: any) {
    super(data.description, data.errorCode);
  }
}

/**
 * Проверяет ответ на предмет ошибки.
 * Если вернулась ошибка - кидает её
 *
 * @throws {P2PPaymentError} Ошибка запроса к QIWI P2P
 * @param {T | Promise<T>} response$ Ответ от сервера
 */
function mapErrors(e: any) {
  if (e instanceof HttpError) {
    if (!e.body) return e;

    const error = JSON.parse(e.body) as t.BillError;

    error.description += ` (${e.code})`;

    if ("errorCode" in error) {
      return new P2PPaymentError(error);
    }
  }

  return e;
}

export class P2P extends HttpAPI {
  public static readonly BillStatus = BillStatus;
  public static readonly Currency = BillCurrency;

  protected readonly API_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${this.secretKey}`,
    "User-Agent": USER_AGENT
  };

  protected readonly API_URL = "https://api.qiwi.com/partner/bill/v1/bills";

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
  @MapErrorsAsync(mapErrors)
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

    return this.put(id, {}, JSON.stringify(patchedBill));
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
  @MapErrorsAsync(mapErrors)
  public billStatus(billId: string): Promise<t.BillStatusData> {
    return this.get(billId);
  }

  /**
   * ### Отмена неоплаченного счета
   *
   * Метод позволяет отменить счет, по которому не был выполнен перевод.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   */
  @MapErrorsAsync(mapErrors)
  public rejectBill(billId: string): Promise<t.BillStatusData> {
    return this.post(`${billId}/reject`);
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
