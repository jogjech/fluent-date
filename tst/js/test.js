const { FluentDate } = require("../../lib/index.js");

const enFd = new FluentDate();
const zhFd = new FluentDate("zh");

console.log(enFd.relative(Date.now() - 60 * 1000));

console.log(zhFd.relative(Date.now() - 7200 * 1000));
