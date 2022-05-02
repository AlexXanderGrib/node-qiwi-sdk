import { WalletApi } from "./api";
import { WebHookInfo, WebhookTransaction } from "./wallet.types";
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
export declare class WalletWebhooksApi extends WalletApi {
    keys: Map<string, string>;
    activeId?: string;
    /**
     * Регистрирует обработчик вебхука
     * @param {string} parameter Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.**
     * @param {number} txnType Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все"
     * @return {Promise<WebHookInfo>}
     */
    add(parameter: string, txnType: 0 | 1 | 2): Promise<WebHookInfo>;
    /**
     * Удаляет обработчик вебхука
     * @param {string} hookId UUID вебхука
     * @return {Promise<*>}
     */
    remove(hookId?: string): Promise<any>;
    /**
     * Получает секретный ключ вебхука
     * @param {string} hookId UUID вебхука
     * @return {Promise<string>}
     */
    getSecret(hookId?: string): Promise<string>;
    /**
     * Измененяет секретный ключ вебхука
     * @param {string} hookId UUID вебхука
     * @return {Promise<string>}
     */
    updateSecret(hookId?: string): Promise<string>;
    /**
     *
     * @return {Promise<WebHookInfo>}
     */
    getActiveWebhook(): Promise<WebHookInfo>;
    /**
     * Отправляет тестовое уведомление
     * @link https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test
     *
     * @return {Promise<*>}
     */
    testActiveWebhook(): Promise<any>;
    /**
     * Проверяет подпись уведомления вебхука
     * @param {WebhookTransaction} transaction Объект уведомления транзакции вебхука
     * @return {Promise<boolean | undefined>}
     */
    checkSign(transaction: WebhookTransaction): Promise<boolean | undefined>;
}
