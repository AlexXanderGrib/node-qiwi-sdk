/* istanbul ignore file */
export { P2p } from "./p2p";
export type { P2pApiOptions } from "./p2p.options";
export {
  _P2pCompat,
  _P2pCompat as P2pCompat,
  _P2pCompat as P2P
} from "./p2p.compat";
export {
  _P2pCompatBillPayments,
  _P2pCompatBillPayments as QiwiBillPaymentsAPI
} from "./p2p.compat-bill-payments";
export {
  P2pApiError,
  P2pApiErrorResponse,
  P2pApiError as P2PPaymentError,
  P2pAuthorizationError,
  P2pBillNotificationError,
  P2pBillNotificationError as P2PNotificationError
} from "./p2p.errors";
export * from "./p2p.types";
