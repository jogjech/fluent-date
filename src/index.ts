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
    const elapsedSeconds = (now - inputDate) / 1000;
    console.log(`${elapsedSeconds} seconds elapsed`);
    return "3 days ago";
  }
}

export { FluentDate, Language };
