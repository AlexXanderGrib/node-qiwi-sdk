/* eslint-disable no-invalid-this */
import { createHmac } from "crypto";
import { MapErrorsAsync } from "sweet-decorators";
import { v4 as uuid } from "uuid";
import { createQS, formatDate } from "./shared";
import { ErrorWithCode } from "../error";
import { Agent, HttpAPI, HttpError } from "../http";
import { USER_AGENT } from "../identity";
import type * as types from "./p2p.types";
import { BillCurrency, BillStatus } from "./p2p.types";
import { AnyResponse } from "./shared.types";

/**
 *  Ошибка, которую выбрасывает P2P API в случае неправильного кода ответа от QIWI
 */
export class P2PPaymentError extends ErrorWithCode<string> {
  /**
   *
   * @param {*} data
   */
  constructor(public data: AnyResponse) {
    super(data.description, data.errorCode);
  }
}

/**
 * Проверяет ответ на предмет ошибки.
 * Если вернулась ошибка - кидает её
 *
 * @throws {P2PPaymentError} Ошибка запроса к QIWI P2P
 * @param {T | Promise<T>} error Ответ от сервера
 * @return {Error}
 */
function mapErrors(error: any) {
  if (error instanceof HttpError) {
    if (!error.body) return error;

    const billError = JSON.parse(error.body) as types.BillError;

    billError.description += ` (${error.code})`;

    if ("errorCode" in billError) {
      return new P2PPaymentError(billError);
    }
  }

  return error;
}

/**
 * Имплементирует [P2P API QIWI](https://developer.qiwi.com/ru/p2p-payments)
 *
 * @see {@link https://developer.qiwi.com/ru/p2p-payments|Описание}
 */
export class P2P extends HttpAPI {
  public static readonly BillStatus = BillStatus;
  public static readonly Currency = BillCurrency;

  public agent?: Agent;

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
   * @param {types.BillCreationRequest} data Сформированный запрос на создание счёта
   * @param {string=} id Свой ID счёта. По умолчанию генерируется UUID
   * @return {Promise<types.BillStatusData>}
   */
  @MapErrorsAsync(mapErrors)
  public createBill(
    data: types.BillCreationRequest,
    id = this._generateId()
  ): Promise<types.BillStatusData> {
    const patchedBill = {
      ...data,
      amount: {
        currency: data.amount.currency,
        value: this._normalizeAmount(data.amount.value)
      }
    };

    return this.put(id, {}, JSON.stringify(patchedBill));
  }

  /**
   * Нормализует сумму до строки с 2 числами после запятой
   *
   * @param {string|number} amount Сумма
   * @return {string}
   */
  private _normalizeAmount(amount: string | number): string {
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
   * @return {Promise<types.BillStatusData>} Объект счёта
   */
  @MapErrorsAsync(mapErrors)
  public billStatus(billId: string): Promise<types.BillStatusData> {
    return this.get(billId);
  }

  /**
   * ### Отмена неоплаченного счета
   *
   * Метод позволяет отменить счет, по которому не был выполнен перевод.
   *
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<types.BillStatusData>} Объект счёта
   */
  @MapErrorsAsync(mapErrors)
  public rejectBill(billId: string): Promise<types.BillStatusData> {
    return this.post(`${billId}/reject`);
  }

  /**
   *
   * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   */
  public static formatLifetime(days = 1): string {
    const date = new Date();

    const time = Math.round(date.getTime() + days * 24 * 60 * 60 * 1000);

    date.setTime(time);

    return formatDate(date);
  }

  /**
   * Генерирует UUID
   * @return {string} UUID
   */
  protected _generateId(): string {
    return uuid();
  }

  /**
   * Проверяет подпись уведомления о статусе счёта
   *
   * @param {string} signature Подпись
   * @param {types.BillStatusData} body Объект уведомления
   * @return {boolean} Признак валидности
   */
  public checkNotificationSignature(
    signature: string,
    body: types.BillStatusData
  ): boolean {
    const data = `${body.amount.currency}|${body.amount.value}|${body.billId}|${body.siteId}|${body.status.value}`;
    const hash = createHmac("sha256", this.secretKey).update(data).digest("hex");

    return signature === hash;
  }

  /**
   *  Создаёт ссылку оплаты счёта без запроса к API
   *
   * @param {Omit<types.BillFormParams, "billId" | "publicKey">} parameters GET-параметры ссылки
   * @param {string=} billId Свой ID счёта, по умолчанию случайный UUID
   * @return {string} Ссылка на оплату счёта
   */
  public createBillFormUrl(
    parameters: Omit<types.BillFormParams, "billId" | "publicKey">,
    billId = this._generateId()
  ): string {
    const options: types.BillFormParams = {
      ...parameters,
      billId,
      publicKey: this.publicKey
    };

    return `https://oplata.qiwi.com/create?${createQS(options)}`;
  }
}
