'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var querystring = require('../shared/querystring.js');
require('../shared/time.js');
require('uuid');
require('crypto');
var api = require('./api.js');

/**
 * # Лимиты QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal/#limits)
 *
 * @export
 * @class WalletLimitsApi
 * @extends {WalletApi}
 */
class WalletLimitsApi extends api.WalletApi {
    /**
     * ## Лимиты QIWI Кошелька
     *
     * Запрос возвращает текущие уровни лимитов по операциям в
     * вашем QIWI кошельке. Лимиты действуют как ограничения на
     * сумму определенных операций.
     *
     * **Этот метод требует наличия валидного `walletId` (номера телефона привязанного к кошельку) в конфигурации API.**
     *
     * @template {LimitTypeAny[]} Limits
     * @param {Limits} limits
     * @return {Promise<LimitsResponse>} {Promise<LimitsResponse<Limits[number]>>}
     * @memberof WalletLimitsApi
     */
    async get(limits) {
        return await this.http.get(`qw-limits/v1/persons/${this.walletId}/actual-limits?${querystring.formatQuerystring({
            types: limits
        })}`);
    }
}

exports.WalletLimitsApi = WalletLimitsApi;
