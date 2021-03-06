/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */

const { name, repository, version } = require("../package.json");

export const VERSION: string = version;
export const USER_AGENT = `${name}/${version} (+https://npmjs.com/package/${name}) NodeJS_QIWI_SDK (+${repository.url})`;
