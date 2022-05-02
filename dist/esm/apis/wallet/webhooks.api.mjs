import { WalletApi } from "./api.mjs";
import { compareHmac } from "../shared/hmac.mjs";
import { formatQuerystring } from "../shared/querystring.mjs";
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
class WalletWebhooksApi extends WalletApi {
  constructor() {
    super(...arguments);
    this.keys = new Map();
  }
  /**
   * Регистрирует обработчик вебхука
   * @param {string} parameter Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.**
   * @param {number} txnType Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все"
   * @return {Promise<WebHookInfo>}
   */
  async add(parameter, txnType) {
    const hookResponse = await this.http.put(
      `payment-notifier/v1/hooks?${formatQuerystring({
        hookType: 1,
        param: parameter,
        txnType
      })}`
    );
    this.activeId = hookResponse.hookId;
    return hookResponse;
  }
  /**
   * Удаляет обработчик вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<*>}
   */
  remove(hookId = this.activeId) {
    this.keys.delete(hookId);
    this.activeId = undefined;
    return this.http.delete(`payment-notifier/v1/hooks/${hookId}`);
  }
  /**
   * Получает секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async getSecret(hookId = this.activeId) {
    const { key } = await this.http.get(`payment-notifier/v1/hooks/${hookId}/key`);
    this.keys.set(hookId, key);
    return key;
  }
  /**
   * Измененяет секретный ключ вебхука
   * @param {string} hookId UUID вебхука
   * @return {Promise<string>}
   */
  async updateSecret(hookId = this.activeId) {
    const { key } = await this.http.post(
      `payment-notifier/v1/hooks/${hookId}/newkey`
    );
    this.keys.set(hookId, key);
    return key;
  }
  /**
   *
   * @return {Promise<WebHookInfo>}
   */
  async getActiveWebhook() {
    const hookResponse = await this.http.get("payment-notifier/v1/hooks/active");
    this.activeId = hookResponse.hookId;
    return hookResponse;
  }
  /**
   * Отправляет тестовое уведомление
   * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
   *
   * @return {Promise<*>}
   */
  testActiveWebhook() {
    return this.http.get("payment-notifier/v1/hooks/test");
  }
  /**
   * Проверяет подпись уведомления вебхука
   * @param {WebhookTransaction} transaction Объект уведомления транзакции вебхука
   * @return {Promise<boolean | undefined>}
   */
  async checkSign(transaction) {
    const { hookId, payment, hash } = transaction;
    if (!this.keys.has(hookId)) {
      try {
        await this.getSecret(hookId);
      } catch (_a) {
        return;
      }
    }
    const signPayload = payment.signFields
      .split(",")
      .map((p) =>
        p.split(".").reduce((p, c) => {
          return (p === null || p === void 0 ? void 0 : p[c]) || "null";
        }, payment)
      )
      .join("|");
    return compareHmac({
      key: Buffer.from(this.keys.get(hookId), "base64"),
      data: signPayload,
      digest: hash
    });
  }
}
export { WalletWebhooksApi };
