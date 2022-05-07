import type { ApiClassOptions } from "../api";

export interface WalletApiOptions extends ApiClassOptions {
  readonly token: string;
  readonly walletId: string;
}
