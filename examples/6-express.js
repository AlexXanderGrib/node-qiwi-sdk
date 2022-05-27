// const { P2p, P2pBillNotificationError, formatOffsetDate } = require('qiwi-sdk');
const { P2p, P2pBillNotificationError, formatOffsetDate } = require("..");

const express = require("express");
const app = express();
const p2p = new P2p({
  secretKey: process.env.QIWI_SECRET_KEY
});
const port = parseInt(process.env.PORT, 10) || 3000;

app.get("/pay", async (_req, res) => {
  const bill = await p2p.bills.create({
    amount: { value: 10, currency: P2P.Currency.RUB },
    expirationDateTime: formatOffsetDate(15, "min"),
    successUrl: `https://localhost:${port}/success`,
    paySource: P2p.BillPaySource.Card
  });

  res.redirect(bill.payUrl);
});

app.get("/success", (_req, res) => {
  res.end("Спасибо за покупку!");
});

app.post(
  "/webhook/qiwi",
  p2p.notificationMiddleware({}, (req) => {
    req.body; // BillStatusData
  })
);

app.use((error, _req, _res, next) => {
  if (error instanceof P2pBillNotificationError) {
    console.log(error); // Кто-то отправил невалидное уведомление
  }

  return next();
});
