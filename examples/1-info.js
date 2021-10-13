// const QIWI = require("qiwi-sdk");
const QIWI = require("..");

const qiwi = new QIWI.Personal(process.env.QIWI_TOKEN);

qiwi.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }