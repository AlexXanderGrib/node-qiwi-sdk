// import { Wallet, LimitType } from "qiwi-sdk";
import { Wallet, LimitType } from "..";

const qp = Wallet.create(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

async function main() {
  // 2.0
  const { limits } = await qp.limits.get([LimitType.TURNOVER]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
main();
