// const QIWI = require("qiwi-sdk");
const QIWI = require("../..");

const wallet = new QIWI.Personal(process.env.QIWI_TOKEN);

wallet.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }
