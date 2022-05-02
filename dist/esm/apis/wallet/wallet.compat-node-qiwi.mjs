import { Wallet } from './wallet.mjs';

/* istanbul ignore file */
/**
 *
 * @deprecated Это класс для тех, кто мигрирует с `node-qiwi`.
 * Остальным рекомендуется использовать
 *
 * @export
 * @class _WalletCompatNodeQiwi
 * @extends {Wallet}
 */
class _WalletCompatNodeQiwi extends Wallet {
    /**
     * Creates an instance of _WalletCompatNodeQiwi.
     * @param {string} key
     * @param {string} [contractId=""]
     * @memberof _WalletCompatNodeQiwi
     */
    constructor(key, contractId = "") {
        super({
            http: _WalletCompatNodeQiwi.httpClientFactory(key),
            token: key,
            walletId: contractId
        });
        this.key = key;
        this.contractId = contractId;
    }
    /**
     *
     *
     * @protected
     * @template T
     * @param {(string | number)} contractId
     * @param {*} executor
     * @return {Promise<T>}  {Promise<T>}
     * @memberof _WalletCompatNodeQiwi
     */
    async _executeWithContractId(contractId, executor) {
        const instance = new _WalletCompatNodeQiwi(this.key, contractId.toString());
        instance.agent = this.agent;
        try {
            return await executor(instance);
        }
        finally {
            instance.agent = undefined;
        }
    }
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.IdentificationBase} [body]
     * @return {Promise<types.IdentificationResponse>}  {Promise<types.IdentificationResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getIdentification(contractId, body) {
        return await this._executeWithContractId(contractId, async (wallet) => {
            if (body)
                return await wallet.identification.set(body);
            return await wallet.identification.get();
        });
    }
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.GetPaymentHistoryParams} settings
     * @return {Promise<types.GetTransactionsHistoryResponse>}  {Promise<types.GetTransactionsHistoryResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getHistory(contractId, settings = {}) {
        return await this._executeWithContractId(contractId, async (wallet) => {
            return await wallet.paymentHistory.getHistory({ rows: 50, ...settings });
        });
    }
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.GetPaymentHistoryTotalParams} settings
     * @return {Promise<types.GetPaymentHistoryTotalResponse>}  {Promise<types.GetPaymentHistoryTotalResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getTransactionsStats(contractId, settings) {
        return await this._executeWithContractId(contractId, async (wallet) => {
            return await wallet.paymentHistory.getTotal(settings);
        });
    }
    /**
     *
     *
     * @param {(string | number)} transactionId
     * @param {{ type: types.TransactionTypeAny? }} [settings={}]
     * @return {*}  {Promise<types.Transaction>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getTransaction(transactionId, settings = {}) {
        return await this.paymentHistory.getTransaction(transactionId, settings.type);
    }
    /**
     *
     *
     * @return {*}  {Promise<types.PersonProfile>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getProfile() {
        return await this.personProfile.getCurrent();
    }
    /**
     *
     *
     * @return {Promise<types.Account[]>}  {Promise<types.Account[]>}
     * @memberof _WalletCompatNodeQiwi
     */
    async getBalance() {
        return await this.fundingSources.getAccounts();
    }
    /**
     *
     *
     * @param {number} amount
     * @param {string} account
     * @param {string} [comment]
     * @return {Promise<types.PaymentResponse>}  {Promise<types.PaymentResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    async sendPayment(amount, account, comment) {
        return await this.payments.pay({
            account,
            amount,
            comment
        });
    }
}

export { _WalletCompatNodeQiwi };
