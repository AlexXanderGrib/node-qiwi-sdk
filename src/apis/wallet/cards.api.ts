/* istanbul ignore file */
import { generateUUID } from "../shared";
import { WalletApi } from "./api";
import {
  CardResponse,
  StringOrNumber,
  CardUnblockResponse,
  CardRequisitesResponse,
  CardRenameResponse
} from "./wallet.types";

/**
 * # API QIWI Мастер
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#default_balance)
 *
 * @export
 * @class WalletCardsApi
 * @extends {WalletApi}
 */
export class WalletCardsApi extends WalletApi {
  /**
   * ## Список карт
   *
   * Успешный ответ содержит JSON-массив с информацией о
   * выпущенных картах
   *
   * @return {Promise<CardResponse[]>} {Promise<CardResponse[]>}
   * @memberof WalletCardsApi
   */
  async get(): Promise<CardResponse[]> {
    return await this.http.get("cards/v1/cards");
  }

  /**
   * ## Блокировка карты
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {StringOrNumber} cardId
   * @return {Promise<void>} {Promise<void>}
   * @memberof WalletCardsApi
   */
  async block(cardId: StringOrNumber): Promise<void> {
    await this.http.put(`cards/v2/persons/${this.walletId}/cards/${cardId}/block`);
  }

  /**
   * ## Разблокировка карты
   *
   * Успешный ответ содержит JSON со статусом операции
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {StringOrNumber} cardId
   * @return {Promise<CardUnblockResponse>} {Promise<CardUnblockResponse>}
   * @memberof WalletCardsApi
   */
  async unblock(cardId: StringOrNumber): Promise<CardUnblockResponse> {
    return await this.http.put(
      `cards/v2/persons/${this.walletId}/cards/${cardId}/unblock`
    );
  }

  /**
   * ## Получение реквизитов карты
   *
   * Успешный ответ содержит JSON с PAN и CVV карты
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {StringOrNumber} cardId
   * @return {Promise<CardRequisitesResponse>} {Promise<CardRequisitesResponse>}
   * @memberof WalletCardsApi
   */
  async getRequisites(cardId: StringOrNumber): Promise<CardRequisitesResponse> {
    return await this.http.put(`cards/v1/cards/${cardId}/details`, {
      operationId: generateUUID()
    });
  }

  /**
   * ## Переименование карты
   *
   * Успешный ответ содержит JSON со статусом операции
   *
   * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} alias
   * @return {Promise<CardRenameResponse>} {Promise<CardRenameResponse>}
   * @memberof WalletCardsApi
   */
  async rename(cardId: StringOrNumber, alias: string): Promise<CardRenameResponse> {
    return await this.http.put(`cards/v1/cards/${cardId}/alias`, { alias });
  }
}
