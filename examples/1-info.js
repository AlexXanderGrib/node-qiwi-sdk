// const QIWI = require("qiwi-sdk");
const QIWI = require("..");

const qiwi = QIWI.Wallet.create(process.env.QIWI_TOKEN);

qiwi.personProfile.getCurrent().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
