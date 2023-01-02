// import { Wallet, LimitType } from "qiwi-sdk";
import { Wallet, LimitType } from "..";

// Подхватывает токен из переменной окружения QIWI_TOKEN
// и номер телефона из переменной QIWI_WALLET и использует
// их для создания экземпляра
const wallet = Wallet.env();

async function main() {
  // 2.0
  const { limits } = await wallet.limits.get([LimitType.TURNOVER]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
main();
