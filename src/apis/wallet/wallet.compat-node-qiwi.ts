/* istanbul ignore file */
import { Wallet } from "./wallet";
import type * as types from "./wallet.types";

/**
 *
 * @deprecated Это класс для тех, кто мигрирует с `node-qiwi`.
 * Остальным рекомендуется использовать класс `Wallet`
 *
 * @export
 * @class _WalletCompatNodeQiwi
 * @extends {Wallet}
 */
export class _WalletCompatNodeQiwi extends Wallet {
  /**
   * Creates an instance of _WalletCompatNodeQiwi.
   * @param {string} key
   * @param {string} [contractId=""]
   * @memberof _WalletCompatNodeQiwi
   */
  constructor(public readonly key: string, public readonly contractId: string = "") {
    super({
      http: _WalletCompatNodeQiwi.httpClientFactory(key),
      token: key,
      walletId: contractId
    });
  }

  /**
   *
   *
   * @protected
   * @template T
   * @param {(string | number)} contractId
   * @param {*} executor
   * @return {Promise<T>} Promise<T>
   * @memberof _WalletCompatNodeQiwi
   */
  protected async _executeWithContractId<T>(
    contractId: string | number,
    executor: (api: _WalletCompatNodeQiwi) => Promise<T>
  ): Promise<T> {
    const instance = new _WalletCompatNodeQiwi(this.key, contractId.toString());
    instance.agent = this.agent;

    try {
      return await executor(instance);
    } finally {
      instance.agent = undefined;
    }
  }

  /**
   *
   *
   * @param {(string | number)} contractId
   * @param {types.IdentificationBase} [body]
   * @return {Promise<types.IdentificationResponse>} Promise<types.IdentificationResponse>
   * @memberof _WalletCompatNodeQiwi
   */
  async getIdentification(
    contractId: string | number,
    body?: types.IdentificationBase
  ): Promise<types.IdentificationResponse> {
    return await this._executeWithContractId(contractId, async (wallet) => {
      if (body) return await wallet.identification.set(body);

      return await wallet.identification.get();
    });
  }

  /**
   *
   *
   * @param {(string | number)} contractId
   * @param {types.GetPaymentHistoryParameters} settings
   * @return {Promise<types.GetTransactionsHistoryResponse>} Promise<types.GetTransactionsHistoryResponse>
   * @memberof _WalletCompatNodeQiwi
   */
  async getHistory(
    contractId: string | number,
    settings: Partial<types.GetPaymentHistoryParameters> = {}
  ): Promise<types.GetTransactionsHistoryResponse> {
    return await this._executeWithContractId(contractId, async (wallet) => {
      return await wallet.paymentHistory.getHistory({ rows: 50, ...settings });
    });
  }

  /**
   *
   *
   * @param {(string | number)} contractId
   * @param {types.GetPaymentHistoryTotalParameters} settings
   * @return {Promise<types.GetPaymentHistoryTotalResponse>} Promise<types.GetPaymentHistoryTotalResponse>
   * @memberof _WalletCompatNodeQiwi
   */
  async getTransactionsStats(
    contractId: string | number,
    settings: types.GetPaymentHistoryTotalParameters
  ): Promise<types.GetPaymentHistoryTotalResponse> {
    return await this._executeWithContractId(contractId, async (wallet) => {
      return await wallet.paymentHistory.getTotal(settings);
    });
  }

  /**
   *
   *
   * @param {(string | number)} transactionId
   * @param {{ type: types.TransactionTypeAny? }} [settings]
   * @return {*} Promise<types.Transaction>
   * @memberof _WalletCompatNodeQiwi
   */
  async getTransaction(
    transactionId: string | number,
    settings: { type?: types.TransactionTypeAny } = {}
  ): Promise<types.Transaction> {
    return await this.paymentHistory.getTransaction(transactionId, settings.type);
  }

  /**
   *
   *
   * @return {*} Promise<types.PersonProfile>
   * @memberof _WalletCompatNodeQiwi
   */
  async getProfile(): Promise<types.PersonProfile> {
    return await this.personProfile.getCurrent();
  }

  /**
   *
   *
   * @return {Promise<types.Account[]>} Promise<types.Account[]>
   * @memberof _WalletCompatNodeQiwi
   */
  async getBalance(): Promise<types.Account[]> {
    return await this.fundingSources.getAccounts();
  }

  /**
   *
   *
   * @param {number} amount
   * @param {string} account
   * @param {string} [comment]
   * @return {Promise<types.PaymentResponse>} Promise<types.PaymentResponse>
   * @memberof _WalletCompatNodeQiwi
   */
  async sendPayment(
    amount: number,
    account: string,
    comment?: string
  ): Promise<types.PaymentResponse> {
    return await this.payments.pay({
      account,
      amount,
      comment
    });
  }
}
