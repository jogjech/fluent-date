# fluent-date

[![npm version](https://img.shields.io/npm/v/fluent-date.svg?style=flat-square)](https://www.npmjs.com/package/fluent-date)
[![npm downloads](https://img.shields.io/npm/dm/fluent-date.svg?style=flat-square)](https://www.npmjs.com/package/fluent-date)

支持 TypeScript，JavaScript 的多语言通顺时间翻译器

A multi-language (Chinese, English) fluent date parser with native TypeScript and JavaScript support.

Format a date to:

- just now
- 3 seconds ago
- 6 minutes ago
- 1 hour ago
- 2 weeks ago
- 4 months ago
- 5 years ago

支持中文：

- 刚刚
- 3 秒前
- 6 分钟前
- 1 小时前
- 2 周前
- 4 月前
- 5 年前

### Limitation

Those are the limitations for the latest version. Those features will be released in the future

1. Only support English and Chinese for now
2. Only support past dates (will be in the next version)
3. Only support built-in phrases. (Customization will be released soon)

## Install

```bash
$ npm install fluent-date
```

## Usage

### TypeScript

```typescript
import { FluentDate, Language } from "fluent-date";

// English
const enFd = new FluentDate(); // The default language is English

console.log(enFd.relative(Date.now() - 60 * 1000 + 1)); // 59 seconds ago
console.log(enFd.relative(Date.now())); // just now

// Chinese
const zhFd = new FluentDate(Language.ZH);
console.log(zhFd.relative(Date.now() - 7200 * 1000 + 1)); // 1 小时前
console.log(zhFd.relative(Date.now())); // 刚刚
```

### JavaScript

```javascript
const { FluentDate, Language } = require("fluent-date");

// English
const enFd = new FluentDate(); // The default language is English

console.log(enFd.relative(Date.now() - 60 * 1000 + 1)); // 59 seconds ago
console.log(enFd.relative(Date.now())); // just now

// Chinese
const zhFd = new FluentDate(Language.ZH);
console.log(zhFd.relative(Date.now() - 7200 * 1000 + 1)); // 1 小时前
console.log(zhFd.relative(Date.now())); // 刚刚
```

## Upcoming features

### 自定义时间尺度 Configurable time scale

### 多语言支持 Multi-language support

1. 中文 Chinese
2. 英文 English
3. 日文 Japanese (wip)
4. 佛文 Buddism（wip）

## Bug reports

Please open an issue describing your bug.

## Feature requests

Please open an issue for new feature requests.
