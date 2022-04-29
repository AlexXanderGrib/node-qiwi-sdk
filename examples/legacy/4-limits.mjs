// import { Personal, LimitType } from "qiwi-sdk";
import { Personal, LimitType } from "..";

const wallet = new Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

async function main() {
  // 2.0
  const { limits } = await wallet.getLimits([LimitType.TURNOVER]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
main();
