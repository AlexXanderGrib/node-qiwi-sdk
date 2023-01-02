/* istanbul ignore next */
import { url } from "../shared/url";
import { SimpleJsonHttp } from "../shared/http";
import { formatQuerystring } from "../shared/querystring";
import { WalletApi } from "./api";
import type {
  CodeResponse,
  TokenResponse,
  ShortTokenResponse
} from "./wallet.types";

/**
 * # Доступ к API QIWI Кошелька
 * [Документация QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/)
 *
 * @export
 * @class WalletOauthApi
 * @extends {WalletApi}
 */
export class WalletOauthApi extends WalletApi {
  static readonly CLIENT_ID = "api_wallet_private";
  static readonly CLIENT_SECRET = "hTFPyt";
  static readonly CLIENT_SOFTWARE = "api";

  protected readonly _http = new SimpleJsonHttp();

  /**
   *
   *
   * @protected
   * @return {SimpleJsonHttp}
   * @memberof WalletOauthApi
   */
  protected _getHttp(): SimpleJsonHttp {
    this._http.client.options = {
      ...this._options.http.client.options,
      baseURL: url`https://qiwi.com/oauth/`(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      },
      stringifyBody: formatQuerystring,
      okStatusCodes: [200]
    };

    return this._http;
  }

  /**
   * ## Выпуск OAuth-токена
   *
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)
   *
   * @return {Promise<TokenResponse<Wallet>>} Promise<PrettyTokenResponse<Wallet>>
   * @memberof WalletOauthApi
   */
  async createToken(): Promise<ShortTokenResponse> {
    const http = this._getHttp();

    const codeResponse = await http.post<CodeResponse>(url`authorize`, {
      response_type: "code",
      client_id: WalletOauthApi.CLIENT_ID,
      token: this._options.token,
      client_software: WalletOauthApi.CLIENT_SOFTWARE
    });

    const tokenResponse = await http.post<TokenResponse>(url`token`, {
      grant_type: "authorization_code",
      client_id: WalletOauthApi.CLIENT_ID,
      client_secret: WalletOauthApi.CLIENT_SECRET,
      code: codeResponse.code
    });

    return {
      token: tokenResponse.access_token,
      expiry: Number.parseInt(tokenResponse.expires_in, 10)
    };
  }
}
