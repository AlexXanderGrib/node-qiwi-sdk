// const { Wallet } = require("qiwi-sdk");
const { Wallet } = require("..");
const { SocksProxyAgent } = require("socks-proxy-agent");

const map = {
  token: "socks://login:password@host:port"
};

/**
 *
 *
 * @param {string} token
 */
async function checkBalance(token) {
  const proxy = map[token];
  const agent = new SocksProxyAgent(proxy);

  // Метод `createAndFetchWalletId()` под капотом делает Http запрос
  // чтобы получить номер телефона, привязанного к аккаунту.
  const wallet = await Wallet.createAndFetchWalletId(token, {
    // `setupHttp` позволяет настроить Http клиент перед тем, как он
    // будет использован для вызова метода получения номера телефона
    setupHttp(http) {
      http.client.options = {
        ...http.client.options,
        agent
      };
    }
  });

  // Номер телефона потребуется тут, для вызова метода `getAccounts`
  const accounts = await wallet.fundingSources.getAccounts();
  const defaultAccount = accounts.find((account) => account.defaultAccount === true);

  return defaultAccount.balance;
}

checkBalance("");
