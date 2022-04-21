import { SimpleJsonHttp } from "../../http";

export interface WalletApiOptions {
  readonly http: SimpleJsonHttp;
  readonly token: string;
  readonly walletId: string;
}
