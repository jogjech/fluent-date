const { FluentDate, Language } = require("../../lib/index.js");

const enFd = new FluentDate(Language.EN);
const zhFd = new FluentDate(Language.ZH);

console.log(enFd.relative(Date.now() - 60 * 1000 + 1));
console.log(enFd.relative(Date.now()));

console.log(zhFd.relative(Date.now() - 7200 * 1000 + 1));
console.log(zhFd.relative(Date.now()));
