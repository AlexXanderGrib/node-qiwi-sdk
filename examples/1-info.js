// const QIWI = require("qiwi-sdk");
const QIWI = require("..");

const qp = new QIWI.Personal(process.env.QIWI_TOKEN);

qp.getPersonProfile().then(console.log);

// => { contractInfo: {...}, authInfo: {...}, userInfo: {...} }