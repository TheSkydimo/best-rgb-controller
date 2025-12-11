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

/**
 * Normalize a path so that:
 * - it always starts with a leading slash
 * - it never has a locale prefix baked in (callers should pass a locale‑agnostic path)
 * - it always ends with a trailing slash (for cleaner canonical URLs)
 */
export const normalizePath = (path: string): string => {
  if (!path) return "/";
  let value = path.trim();

  if (!value.startsWith("/")) {
    value = `/${value}`;
  }

  // Drop any trailing "index.html" fragments, keep the directory path
  if (value.endsWith("index.html")) {
    value = value.replace(/index\.html$/, "");
  }

  if (!value.endsWith("/")) {
    value = `${value}/`;
  }

  return value;
};

/**
 * Build a localized href for a given locale and locale‑agnostic path.
 * The path should already be normalized (see normalizePath).
 */
export const buildLocalizedHref = (locale: Locale, path: string): string => {
  const normalized = normalizePath(path);
  return locale === DEFAULT_LOCALE ? normalized : `/${locale}${normalized}`;
};

export interface LanguageLink {
  code: Locale;
  href: string;
  shortLabel: string;
  fullLabel: string;
}

/**
 * Build language switcher links for a specific, locale‑agnostic path.
 * Example: path = "/reviews/skydimo-review/" will produce:
 * - "/" for English
 * - "/zh/reviews/skydimo-review/" for Chinese
 * - "/ru/reviews/skydimo-review/" for Russian
 * - "/tr/reviews/skydimo-review/" for Turkish
 */
export const buildLanguageLinksForPath = (path: string): LanguageLink[] => {
  const normalized = normalizePath(path);

  return SUPPORTED_LOCALES.map((code) => ({
    code,
    href: buildLocalizedHref(code, normalized),
    shortLabel: localeLabels[code].short,
    fullLabel: localeLabels[code].native,
  }));
};

/**
 * Backwards‑compatible helper for pages that still want
 * language links pointing at the locale homepages.
 */
export const buildLanguageLinks = (): LanguageLink[] =>
  buildLanguageLinksForPath("/");

