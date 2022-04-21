import { SimpleJsonHttp } from "../../http";

export interface P2pApiOptions {
  readonly http: SimpleJsonHttp;
  readonly secretKey: string;
  readonly publicKey: string;
}
