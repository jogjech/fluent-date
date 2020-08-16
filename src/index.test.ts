import { FluentDate, Language } from "./index";

test("create default FluentDate", () => {
  const fluentDate = new FluentDate();
  expect(fluentDate.language).toBe(Language.EN);
});

test("create Chinese FluentDate", () => {
  const fluentDate = new FluentDate(Language.ZH);
  expect(fluentDate.language).toBe(Language.ZH);
});
