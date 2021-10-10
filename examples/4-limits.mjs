// import QIWI from "qiwi-sdk";
import QIWI from "..";

const qp = new QIWI.Personal(process.env.QIWI_TOKEN, process.env.QIWI_WALLET);

async function main() {
  // 2.0
  const { limits } = await qp.getLimits([
    Personal.LimitType.TURNOVER
  ]);

  const [limit] = limits.RU;

  console.log(limit);
  // => { type: "TURNOVER", currency: "RUB", max: 400000, spent: 0, rest: 400000, ... }
}
main();