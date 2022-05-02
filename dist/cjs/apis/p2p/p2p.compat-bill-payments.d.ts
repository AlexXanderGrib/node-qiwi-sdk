import { P2p } from "./p2p";
import { BillCreateParameters, BillCurrencyAny, BillFormParameters, BillRefundStatusData, BillStatusBody, BillStatusData } from "./p2p.types";
/**
 *
 * @deprecated Это класс для тех, кто мигрирует с `@qiwi/bill-payments-node-js-sdk`.
 * Остальным рекомендуется использовать
 * @export
 * @class _P2pCompatBillPayments
 * @extends {P2p}
 */
export declare class _P2pCompatBillPayments extends P2p {
    readonly secretKey: string;
    readonly publicKey: string;
    /**
     * Creates an instance of _P2pCompatBillPayments.
     * @param {string} secretKey
     * @param {string} publicKey
     * @memberof _P2pCompatBillPayments
     */
    constructor(secretKey: string, publicKey?: string);
    /**
     *
     *
     * @readonly
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    get _key(): string;
    /**
     *
     *
     * @readonly
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    get key(): string;
    /**
     * Normalize amount
     *
     * @param {(string | number)} amount The amount
     * @return {string} {string}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    _normalizeAmount(amount: string | number): string;
    /**
     * Checks notification data signature
     *
     * @param {string} signature The signature
     * @param {BillStatusBody} body The notification body
     * @param {string} [merchantSecret=this.secretKey] The merchant key for validating signature
     * @return {*}  {boolean}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    checkNotificationSignature(signature: string, body: BillStatusBody, merchantSecret?: string): boolean;
    /**
     * Generate lifetime in format
     *
     * @param {number} [days=45] Days of lifetime
     * @return {string} Lifetime in ISO
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    getLifetimeByDay(days?: number): string;
    /**
     * Generate id
     *
     * @return {string} Return uuid v4
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    generateId(): string;
    /**
     * Creating checkout link
     *
     * @param {*} parameters
     * @return {string}  {string}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    createPaymentForm(parameters: Pick<BillFormParameters, "billId" | "amount" | "successUrl"> & {
        publicKey?: string;
    } & Record<string, any>): string;
    /**
     * Creating bill
     *
     * @param {string} billId
     * @param {BillCreateParameters} parameters
     * @return {*}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    createBill(billId: string, parameters: BillCreateParameters): Promise<BillStatusData>;
    /**
     * Getting bill info
     *
     * @param {string} billId The bill identifier
     * @return {Promise<BillStatusData>}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    getBillInfo(billId: string): Promise<BillStatusData>;
    /**
     * Cancelling unpaid bill
     *
     * @param {string} billId The bill identifier
     * @return {Promise<BillStatusData>}  {Promise<BillStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    cancelBill(billId: string): Promise<BillStatusData>;
    /**
     * Getting refund info
     * Method is not available for individuals
     *
     * @param {(string | number)} billId The bill identifier
     * @param {(string | number)} refundId The refund identifier
     * @return {*}  {Promise<BillRefundStatusData>}
     * @memberof _P2pCompatBillPaymentsUniversal
     */
    getRefundInfo(billId: string | number, refundId: string | number): Promise<BillRefundStatusData>;
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
    refund(billId: string | number, refundId: string | number, amount?: number, currency?: BillCurrencyAny): Promise<BillRefundStatusData>;
}
