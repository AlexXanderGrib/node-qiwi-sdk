import { Wallet } from "./wallet";
import * as types from "./wallet.types";
/**
 *
 * @deprecated Это класс для тех, кто мигрирует с `node-qiwi`.
 * Остальным рекомендуется использовать
 *
 * @export
 * @class _WalletCompatNodeQiwi
 * @extends {Wallet}
 */
export declare class _WalletCompatNodeQiwi extends Wallet {
    readonly key: string;
    readonly contractId: string;
    /**
     * Creates an instance of _WalletCompatNodeQiwi.
     * @param {string} key
     * @param {string} [contractId=""]
     * @memberof _WalletCompatNodeQiwi
     */
    constructor(key: string, contractId?: string);
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
    protected _executeWithContractId<T>(contractId: string | number, executor: (api: _WalletCompatNodeQiwi) => Promise<T>): Promise<T>;
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.IdentificationBase} [body]
     * @return {Promise<types.IdentificationResponse>}  {Promise<types.IdentificationResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    getIdentification(contractId: string | number, body?: types.IdentificationBase): Promise<types.IdentificationResponse>;
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.GetPaymentHistoryParams} settings
     * @return {Promise<types.GetTransactionsHistoryResponse>}  {Promise<types.GetTransactionsHistoryResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    getHistory(contractId: string | number, settings?: Partial<types.GetPaymentHistoryParams>): Promise<types.GetTransactionsHistoryResponse>;
    /**
     *
     *
     * @param {(string | number)} contractId
     * @param {types.GetPaymentHistoryTotalParams} settings
     * @return {Promise<types.GetPaymentHistoryTotalResponse>}  {Promise<types.GetPaymentHistoryTotalResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    getTransactionsStats(contractId: string | number, settings: types.GetPaymentHistoryTotalParams): Promise<types.GetPaymentHistoryTotalResponse>;
    /**
     *
     *
     * @param {(string | number)} transactionId
     * @param {{ type: types.TransactionTypeAny? }} [settings={}]
     * @return {*}  {Promise<types.Transaction>}
     * @memberof _WalletCompatNodeQiwi
     */
    getTransaction(transactionId: string | number, settings?: {
        type?: types.TransactionTypeAny;
    }): Promise<types.Transaction>;
    /**
     *
     *
     * @return {*}  {Promise<types.PersonProfile>}
     * @memberof _WalletCompatNodeQiwi
     */
    getProfile(): Promise<types.PersonProfile>;
    /**
     *
     *
     * @return {Promise<types.Account[]>}  {Promise<types.Account[]>}
     * @memberof _WalletCompatNodeQiwi
     */
    getBalance(): Promise<types.Account[]>;
    /**
     *
     *
     * @param {number} amount
     * @param {string} account
     * @param {string} [comment]
     * @return {Promise<types.PaymentResponse>}  {Promise<types.PaymentResponse>}
     * @memberof _WalletCompatNodeQiwi
     */
    sendPayment(amount: number, account: string, comment?: string): Promise<types.PaymentResponse>;
}
