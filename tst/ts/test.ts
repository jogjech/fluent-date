import { FluentDate, Language } from "../../lib/index";

const enFd = new FluentDate();
const zhFd = new FluentDate(Language.ZH);

console.log(enFd.relative(Date.now() - 60 * 1000));

console.log(zhFd.relative(Date.now() - 7200 * 1000));
