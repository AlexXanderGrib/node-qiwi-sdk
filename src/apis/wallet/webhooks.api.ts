/* istanbul ignore file */
import { base64ToUint8Array } from "../shared/platform/decode";
import { url } from "../shared/url";
import { compareQiwiHmac } from "../shared/hmac";
import { getOwnPropertyDeep } from "../shared/get";
import { WalletApi } from "./api";
import type { WebHookInfo, WebhookTransaction } from "./wallet.types";

/**
 * # Уведомления (вебхуки)
 *
 * Хуки или уведомления с данными о событии (платеже/пополнении)
 * отправляются на ваш сервер. В настоящее время поддерживаются
 * только вебхуки (webhook) - сообщения, адресованные веб-сервисам.
 * Для приема вебхуков вам необходимо настроить свой сервер на
 * прием и обработку POST-запросов ([Формат запросов](https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_format)).
 *
 * **От вашего сервера успешный ответ 200 OK на входящий запрос
 * должен поступить в течение 1-2 сек. Не дождавшись ответа, сервис
 * КИВИ отправляет еще одно уведомление через 10 минут, потом еще
 * одно через 1 час.**
 *
 * Пулы IP-адресов, с которых сервисы QIWI отправляют webhook:
 * - `79.142.16.0/20`
 * - `195.189.100.0/22`
 * - `91.232.230.0/23`
 * - `91.213.51.0/24`
 *
 * Если ваш сервер обработки вебхуков работает за брандмауэром, необходимо добавить эти IP-адреса в список разрешенных адресов входящих TCP-пакетов.
 *
 * @export
 * @class WalletWebhooksApi
 * @extends {WalletApi}
 */
export class WalletWebhooksApi extends WalletApi {
  public keys: Map<string, string> = new Map();
  public activeId?: string;

  /**
   *
   *
   * @protected
   * @return {string}
   * @memberof WalletWebhooksApi
   */
  protected _getDefaultHookId(): string {
    if (this.activeId) return this.activeId;

    throw new Error("Unable to get default hook id");
  }

  /**
   * Регистрирует обработчик вебхука
   * @param {string} parameter Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.**
   * @param {number} txnType Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все"
   * @return {Promise<WebHookInfo>}
   */
  async add(parameter: string, txnType: 0 | 1 | 2): Promise<WebHookInfo> {
    const hookResponse = await this.http.put<WebHookInfo>(
      url`payment-notifier/v1/hooks`({
        hookType: 1,
        param: parameter,
        txnType
      })
    );
    this.activeId = hookResponse.hookId;
    return hookResponse;
  }

  /**
   * Удаляет обработчик вебхука
   * @param {string} [hookId] UUID вебхука
   * @return {Promise<*>}
   */
  remove(hookId = this._getDefaultHookId()): Promise<any> {
    this.keys.delete(hookId);
    this.activeId = undefined;
    return this.http.delete<{ response: "Hook deleted" }>(
      url`payment-notifier/v1/hooks/${hookId}`
    );
  }

  /**
   * Получает секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async getSecret(hookId = this._getDefaultHookId()): Promise<string> {
    const { key } = await this.http.get<{ key: string }>(
      url`payment-notifier/v1/hooks/${hookId}/key`
    );
    this.keys.set(hookId, key);
    return key;
  }

  /**
   * Изменяет секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async updateSecret(hookId = this._getDefaultHookId()): Promise<string> {
    const { key } = await this.http.post<{ key: string }>(
      url`payment-notifier/v1/hooks/${hookId}/newkey`
    );
    this.keys.set(hookId, key);
    return key;
  }

  /**
   *
   * @return {Promise<WebHookInfo>}
   */
  async getActiveWebhook(): Promise<WebHookInfo> {
    const hookResponse = await this.http.get<WebHookInfo>(
      url`payment-notifier/v1/hooks/active`
    );
    this.activeId = hookResponse.hookId;
    return hookResponse;
  }

  /**
   * Отправляет тестовое уведомление
   * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
   *
   * @return {Promise<*>}
   */
  testActiveWebhook(): Promise<any> {
    return this.http.get<{ response: "Webhook sent" }>(
      url`payment-notifier/v1/hooks/test`
    );
  }

  /**
   * Проверяет подпись уведомления вебхука
   * @param {WebhookTransaction} transaction Объект уведомления транзакции вебхука
   * @return {Promise<boolean | undefined>}
   */
  async checkSign(transaction: WebhookTransaction): Promise<boolean | undefined> {
    const { hookId, payment, hash } = transaction;

    if (!this.keys.has(hookId)) {
      try {
        await this.getSecret(hookId);
      } catch {
        return;
      }
    }

    const signPayload = payment.signFields
      .split(",")
      .map((fieldName) => String(getOwnPropertyDeep(payment, fieldName) ?? "null"));

    return compareQiwiHmac(
      base64ToUint8Array(this.keys.get(hookId) ?? ""),
      hash,
      signPayload
    );
  }
}
