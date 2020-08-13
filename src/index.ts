interface Config {
  thresholds: [number, string, string][];
  smallerThanScalePhrase: string;
  pastPhraseFormat: (quantity: number, unit: string) => string;
  futurePhraseFormat: (quantity: number, unit: string) => string;
  durationPhraseFormat: (quantity: number, unit: string) => string;
}

const config: Config = {
  thresholds: [
    [31536000, "year", "years"],
    [2628000, "month", "months"], // 365 days / 12. This is to avoid showing 12 months
    [604800, "week", "weeks"],
    [86400, "day", "days"],
    [3600, "hour", "hours"],
    [60, "minute", "minutes"],
    [1, "second", "seconds"],
  ],
  smallerThanScalePhrase: `just now`,
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

enum Language {
  ZH,
  EN,
  JP,
}

class FluentDate {
  language: Language;

  constructor(language?: Language) {
    this.language = language || Language.EN;
  }

  relative(inputDate: number) {
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - inputDate) / 1000);
    for (const threshold of config.thresholds) {
      if (elapsedSeconds < threshold[0]) continue;
      const quantity = Math.floor(elapsedSeconds / threshold[0]);
      const unit = quantity === 1 ? threshold[1] : threshold[2];
      return config.pastPhraseFormat(quantity, unit);
    }
    return config.smallerThanScalePhrase;
  }
}

export { FluentDate, Language };
