export const SUPPORTED_LOCALES = ["en", "zh", "ru", "tr"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const localeLabels: Record<
  Locale,
  { short: string; full: string; native: string }
> = {
  en: { short: "EN", full: "English", native: "English" },
  zh: { short: "中文", full: "Chinese", native: "简体中文" },
  ru: { short: "RU", full: "Russian", native: "Русский" },
  tr: { short: "TR", full: "Turkish", native: "Türkçe" },
};

export const isSupportedLocale = (value?: string): value is Locale => {
  if (!value) return false;
  return (SUPPORTED_LOCALES as ReadonlyArray<string>).includes(value);
};

export const getLocaleHref = (locale: Locale): string =>
  locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;

export interface LanguageLink {
  code: Locale;
  href: string;
  shortLabel: string;
  fullLabel: string;
}

export const buildLanguageLinks = (): LanguageLink[] =>
  SUPPORTED_LOCALES.map((code) => ({
    code,
    href: getLocaleHref(code),
    shortLabel: localeLabels[code].short,
    fullLabel: localeLabels[code].native,
  }));

