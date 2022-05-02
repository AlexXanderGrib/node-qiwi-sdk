import 'query-string';
import { formatOffsetDate } from '../shared/time.mjs';
import { generateUUID } from '../shared/uuid.mjs';
import { P2p } from './p2p.mjs';
import { BillCurrency } from './p2p.types.mjs';

/* istanbul ignore file */
/**
 *
 * @deprecated Это класс для тех, кто мигрирует с `@qiwi/bill-payments-node-js-sdk`.
 * Остальным рекомендуется использовать
 * @export
 * @class _P2pCompatBillPayments
 * @extends {P2p}
 */
class _P2pCompatBillPayments extends P2p {
    /**
     * Creates an instance of _P2pCompatBillPayments.
     * @param {string} secretKey
     * @param {string} publicKey
     * @memberof _P2pCompatBillPayments
     */
    constructor(secretKey, publicKey = "") {
        super({
            http: _P2pCompatBillPayments.httpClientFactory(secretKey),
            publicKey,
            secretKey
        });
        this.secretKey = secretKey;
        this.publicKey = publicKey;
    }
    /**
     *
     *
     * @readonly
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    get _key() {
        return this.secretKey;
    }
    /**
     *
     *
     * @readonly
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    get key() {
        return this.secretKey;
    }
    /**
     * Normalize amount
     *
     * @param {(string | number)} amount The amount
     * @return {string} {string}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    _normalizeAmount(amount) {
        return this.bills["_normalizeAmount"](amount);
    }
    /**
     * Checks notification data signature
     *
     * @param {string} signature The signature
     * @param {BillStatusBody} body The notification body
     * @param {string} [merchantSecret=this.secretKey] The merchant key for validating signature
     * @return {*}  {boolean}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    checkNotificationSignature(signature, body, merchantSecret = this.secretKey) {
        return this.bills.checkNotificationSignature(signature, body, merchantSecret);
    }
    /**
     * Generate lifetime in format
     *
     * @param {number} [days=45] Days of lifetime
     * @return {string} Lifetime in ISO
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    getLifetimeByDay(days = 45) {
        return formatOffsetDate(days, "day");
    }
    /**
     * Generate id
     *
     * @return {string} Return uuid v4
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    generateId() {
        return generateUUID();
    }
    /**
     * Creating checkout link
     *
     * @param {*} parameters
     * @return {string}  {string}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    createPaymentForm(parameters) {
        return this.bills.createFormUrl(parameters);
    }
    /**
     * Creating bill
     *
     * @param {string} billId
     * @param {BillCreateParameters} parameters
     * @return {*}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    async createBill(billId, parameters) {
        return await this.bills.create({ ...parameters, billId });
    }
    /**
     * Getting bill info
     *
     * @param {string} billId The bill identifier
     * @return {Promise<BillStatusData>}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    async getBillInfo(billId) {
        return await this.bills.getStatus(billId);
    }
    /**
     * Cancelling unpaid bill
     *
     * @param {string} billId The bill identifier
     * @return {Promise<BillStatusData>}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    async cancelBill(billId) {
        return await this.bills.reject(billId);
    }
    /**
     * Getting refund info
     * Method is not available for individuals
     *
     * @param {(string | number)} billId The bill identifier
     * @param {(string | number)} refundId The refund identifier
     * @return {*}  {Promise<BillRefundStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    async getRefundInfo(billId, refundId) {
        return await this.bills.getRefundStatus(billId.toString(), refundId.toString());
    }
    /**
     * Refund paid bill
     * Method is not available for individuals
     *
     * @param {(string | number)} billId The bill identifier
     * @param {(string | number)} refundId The refund identifier
     * @param {number} [amount=0] The amount
     * @param {BillCurrencyAny} [currency=BillCurrency.RUB] The currency
     * @return {Promise<BillRefundStatusData>}  {Promise<BillRefundStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    async refund(billId, refundId, amount = 0, currency = BillCurrency.RUB) {
        return await this.bills.refund(billId.toString(), {
            refundId: refundId.toString(),
            amount: { value: amount, currency }
        });
    }
}

export { _P2pCompatBillPayments };
