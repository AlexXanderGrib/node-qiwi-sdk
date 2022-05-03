import type { ApiClassOptions } from "../api";

export interface P2pApiOptions extends ApiClassOptions {
  readonly secretKey: string;
  readonly publicKey: string;
}
