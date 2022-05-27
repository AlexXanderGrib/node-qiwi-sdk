// const { P2P, P2PNotificationError } = require('qiwi-sdk');
const { P2P, P2PNotificationError } = require("..");

const express = require("express");
const app = express();
const p2p = new P2P(process.env.QIWI_SECRET_KEY, process.env.QIWI_PUBLIC_KEY);
const port = parseInt(process.env.PORT, 10) || 3000;

app.get("/pay", async (_req, res) => {
  const bill = await p2p.createBill({
    amount: { value: 10, currency: P2P.Currency.RUB },
    expirationDateTime: P2P.formatLifetime(2)
  });

  const url = P2P.patchPayUrl(bill.payUrl, {
    successUrl: `https://localhost:${port}/success`,
    paySource: P2P.PaySource.Card
  });

  res.redirect(url);
});

app.get("/success", (req, res) => {
  res.end("Спасибо за покупку!");
});

app.post(
  "/webhook/qiwi",
  p2p.notificationMiddleware({}, (req) => {
    req.body; // BillStatusData
  })
);

app.use((error, _req, _res, next) => {
  if (error instanceof P2PNotificationError) {
    console.log(error); // Кто-то отправил невалидное уведомление
  }

  return next();
});
