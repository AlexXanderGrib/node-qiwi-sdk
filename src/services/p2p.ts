/* eslint-disable no-invalid-this */
import { createHmac, timingSafeEqual } from "crypto";
import { MapErrorsAsync } from "sweet-decorators";
import { v4 as uuid } from "uuid";
import { createQS, formatDate } from "./shared";
import { ErrorWithCode, ExtendedError } from "../error";
import { Agent, HttpAPI, HttpError } from "../http";
import { USER_AGENT } from "../identity";
import type * as types from "./p2p.types";
import {
  BillCurrency,
  BillStatus,
  BillPaySource,
  PayUrlPatchParams as PayUrlPatchParameters
} from "./p2p.types";
import { AnyResponse } from "./shared.types";
import { RequestHandler } from "express";
import { URL } from "url";

/**
 * Ошибка, которую выбрасывает P2P API в случае неправильного
 * кода ответа от QIWI
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
 * Ошибка валидации уведомления
 */
export class P2PNotificationError extends ExtendedError {}

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
 * @template {CallableFunction} T
 *
 * @param {T} function_
 * @return {T}
 */
function promise<T extends (...parameters: any) => any>(function_: T) {
  const wrapper = (...parameters: any[]): any => {
    try {
      const result = function_(...parameters);

      if (result instanceof Promise) return result;

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return wrapper as (
    ...arguments_: Parameters<T>
  ) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;
}

/**
 * Имплементирует [P2P API QIWI](https://developer.qiwi.com/ru/p2p-payments)
 *
 * @see {@link https://developer.qiwi.com/ru/p2p-payments|Описание}
 */
export class P2P extends HttpAPI implements types.IP2PApi {
  public static readonly BillStatus = BillStatus;
  public static readonly Currency = BillCurrency;
  public static readonly PaySource = BillPaySource;

  public agent?: Agent;

  protected readonly API_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${this.secretKey}`,
    "User-Agent": USER_AGENT
  };

  protected readonly API_URL = "https://api.qiwi.com/partner/bill/v1/bills/";

  /**
   *
   * Создаёт клиент P2P API используя Публичный и Приватный ключи,
   * полученные на {@link https://qiwi.com/p2p-admin/transfers/api|Странице P2P API QIWI}
   *
   * @param {string} secretKey Публичный ключ
   * @param {string=} publicKey Приватный ключ (необязателен)
   */
  constructor(public secretKey: string, public publicKey: string = "") {
    super();
  }

  /**
   * Добавляет параметры
   *
   * @param {string} payUrl
   * @param {PayUrlPatchParams=} options
   * @return {string} Новый URL для оплаты
   */
  public static patchPayUrl(
    payUrl: string,
    options: PayUrlPatchParameters = {}
  ): string {
    const url = new URL(payUrl);

    if (options.paySource) url.searchParams.set("paySource", options.paySource);
    if (options.successUrl) url.searchParams.set("successUrl", options.successUrl);

    return url.toString();
  }

  /**
   * ### Выставление счета
   *
   * **По оплаченным счетам возврат денежных средств не предусмотрен.**
   *
   * Доступно выставление счетов в рублях и тенге.
   * Надежный способ для интеграции. Параметры передаются
   * server2server с использованием авторизации. Метод позволяет
   * выставить счет: при успешном выполнении запроса в ответе
   * вернется параметр `payUrl` - ссылка для редиректа
   * пользователя на форму.
   *
   * {@link https://developer.qiwi.com/ru/p2p-payments/#option|Настройки формы и счета}
   *
   * **Для тестирования и отладки сервиса рекомендуем выставлять и оплачивать счета суммой 1 рубль.**
   *
   * @param {types.BillCreationRequest} data Сформированный запрос на создание счёта
   * @param {string} [id] Свой ID счёта. По умолчанию генерируется UUID
   * @return {Promise<types.BillStatusData>}
   */
  @MapErrorsAsync(mapErrors)
  public createBill(
    data: types.BillCreationRequest,
    id: string = this._generateId()
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

    return this._normalizeAmount(Number.parseFloat(amount));
  }

  /**
   * ### Проверка статуса перевода по счету
   *
   * Метод позволяет проверить статус перевода по счету. Рекомендуется
   * его использовать после получения уведомления о переводе.
   *
   * @deprecated Используйте метод {@link getBillStatus}
   * @param {string} billId Уникальный идентификатор счета в вашей системе.
   * @return {Promise<types.BillStatusData>} Объект счёта
   */
  @MapErrorsAsync(mapErrors)
  public billStatus(billId: string): Promise<types.BillStatusData> {
    return this.get(billId);
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
  public getBillStatus(billId: string): Promise<types.BillStatusData> {
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
   *
   * @deprecated Используйте {@link formatLifetimeDays} или {@link formatLifetimeMinutes}
   */
  public static formatLifetime(days = 1): string {
    return this.formatLifetimeDays(days);
  }

  /**
   *
   * @param {number} days Кол-во дней жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   */
  public static formatLifetimeDays(days = 1): string {
    return this.formatLifetimeMinutes(days * 24 * 60);
  }

  /**
   *
   * @param {number} [minutes] Кол-во минут жизни счёта (может быть не целым числом)
   * @return {string} Дата понятная QIWI
   */
  public static formatLifetimeMinutes(minutes = 15): string {
    const date = new Date();

    const time = Math.round(date.getTime() + minutes * 60 * 1000);

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
    const data = [
      body.amount.currency,
      body.amount.value,
      body.billId,
      body.siteId,
      body.status.value
    ].join("|");
    const hash = createHmac("sha256", this.secretKey).update(data).digest();

    return timingSafeEqual(Buffer.from(signature, "hex"), hash);
  }

  /**
   * `[Экспериментально]` Упрощает интеграцию с `express`
   *
   * ## Это middleware кидает ошибки, позаботьтесь об их обработке
   *
   * @param {Object} [options={}] Параметры обработки запроса
   * @param {boolean} [options.memo=true] Флаг для включения/отключения пропуска повторяющихся запросов, если один из них был успешно обработан
   *
   * @param {RequestHandler<Record<string, string>, any, types.BillStatusData>} actualHandler
   *
   * @return {RequestHandler}
   *
   * ##### Пример:
   * **В начале файла**
   * ```js
   * const p2p = new QIWI.P2P(process.env.QIWI_PRIVATE_KEY);
   * ```
   * *`Вариант 1 - Классический`*
   *
   * ```js
   * app.post('/webhook/qiwi', p2p.notificationMiddleware(), (req, res) => {
   *  req.body // Это `BillStatusData`
   * })
   * ```
   *
   * *`Вариант 2 - Если нужны подсказки типов`*
   *
   * ```js
   * app.post('/webhook/qiwi', p2p.notificationMiddleware({}, (req, res) => {
   *  req.body // Это `BillStatusData`
   * }))
   * ```
   *
   * **Обработка ошибок**
   * ```js
   * app.use((error, request, response, next) => {
   *  console.log(error); // [Error: Notification signature mismatch]
   * })
   * ```
   */
  public notificationMiddleware(
    options: { memo?: boolean } = {},
    actualHandler: RequestHandler<
      Record<string, string>,
      any,
      types.BillStatusData
    > = (_request, _response, next) => next()
  ): RequestHandler {
    const calls = new Set<string>();
    const { memo = true } = options;

    return async (request, response, next) => {
      let notification: any = {};

      if (!request.body) {
        const text = await new Promise<string>((resolve, reject) => {
          let accumulated = "";

          request.on("error", (error) => reject(error));
          request.on("data", (data) => (accumulated += String(data)));
          request.on("end", () => resolve(accumulated));
        });

        notification = JSON.parse(text) as any;
      }

      if (typeof request.body === "object") {
        notification = request.body;
      }

      const hash = request.headers["x-api-signature-sha256"] as string;

      if (memo && calls.has(hash)) return next();

      if (!this.checkNotificationSignature(hash, notification.bill)) {
        return next(new P2PNotificationError("Notification signature mismatch"));
      }

      request.body = notification.bill;

      if (!memo) return actualHandler(request, response, next);
      await promise(actualHandler)(request, response, next);

      calls.add(hash);
    };
  }

  /**
   *  Создаёт ссылку оплаты счёта без запроса к API
   *
   * @param {Omit<types.BillFormParams, "billId" | "publicKey">} parameters GET-параметры ссылки
   * @param {string} [billId] Свой ID счёта, по умолчанию случайный UUID
   * @return {string} Ссылка на оплату счёта
   */
  public createBillFormUrl(
    parameters: Omit<types.BillFormParams, "billId" | "publicKey">,
    billId: string = this._generateId()
  ): string {
    const options: types.BillFormParams = {
      ...parameters,
      amount: this._normalizeAmount(parameters.amount),
      billId,
      publicKey: this.publicKey,
      ...Object.fromEntries(
        Object.entries(parameters.customFields ?? {}).map(([key, value]) => [
          `customFields[${key}]`,
          value
        ])
      )
    };

    delete options.customFields;

    return `https://oplata.qiwi.com/create?${createQS(options)}`;
  }
}
