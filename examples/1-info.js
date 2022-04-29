// const QIWI = require("qiwi-sdk");
const QIWI = require("..");

const wallet = QIWI.Wallet.create(process.env.QIWI_TOKEN);

wallet.personProfile.getCurrent().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
