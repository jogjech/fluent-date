interface Config {
  thresholds: [number, string, string][];
  nowPhrase: string;
  pastPhraseFormat: (quantity: number, unit: string) => string;
  futurePhraseFormat: (quantity: number, unit: string) => string;
  durationPhraseFormat: (quantity: number, unit: string) => string;
}

const enConfig: Config = {
  thresholds: [
    [31536000, "year", "years"],
    [2628000, "month", "months"], // 365 days / 12. This is to avoid showing 12 months
    [604800, "week", "weeks"],
    [86400, "day", "days"],
    [3600, "hour", "hours"],
    [60, "minute", "minutes"],
    [1, "second", "seconds"],
  ],
  nowPhrase: `just now`,
  pastPhraseFormat: (quantity: number, unit: string) => {
    return `${quantity} ${unit} ago`;
  },
  futurePhraseFormat: (quantity: number, unit: string) => {
    return `in ${quantity} ${unit}`;
  },
  durationPhraseFormat: (quantity: number, unit: string) => {
    return `${quantity} ${unit}`;
  },
};

const zhConfig: Config = {
  thresholds: [
    [31536000, "年", "年"],
    [2628000, "月", "月"], // 365 days / 12. This is to avoid showing 12 months
    [604800, "周", "周"],
    [86400, "天", "天"],
    [3600, "小时", "小时"],
    [60, "分钟", "分钟"],
    [1, "秒", "秒"],
  ],
  nowPhrase: `刚刚`,
  pastPhraseFormat: (quantity: number, unit: string) => {
    return `${quantity} ${unit}前`;
  },
  futurePhraseFormat: (quantity: number, unit: string) => {
    return `${quantity} ${unit}后`;
  },
  durationPhraseFormat: (quantity: number, unit: string) => {
    return `${quantity} ${unit}`;
  },
};

enum Language {
  EN,
  ZH,
}

const languageConfigFactory = (language: Language) => {
  switch (language) {
    case Language.EN:
      return enConfig;
    case Language.ZH:
      return zhConfig;
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

class FluentDate {
  language: Language;
  config: Config;

  constructor(language?: Language) {
    this.language = language === undefined ? Language.EN : language;
    this.config = languageConfigFactory(this.language);
  }

  relative(inputDate: number) {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - inputDate) / 1000);
    for (const threshold of this.config.thresholds) {
      if (elapsedSeconds < threshold[0]) continue;
      const quantity = Math.floor(elapsedSeconds / threshold[0]);
      const unit = quantity === 1 ? threshold[1] : threshold[2];
      return this.config.pastPhraseFormat(quantity, unit);
    }
    return this.config.nowPhrase;
  }
}

export { FluentDate, Language };
