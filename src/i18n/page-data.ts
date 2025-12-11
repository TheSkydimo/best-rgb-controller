import {
  buildLanguageLinksForPath,
  buildLocalizedHref,
  getLocaleHref,
  type LanguageLink,
  type Locale,
} from "~/i18n/config";
import {
  getTranslations,
  type TranslationContent,
} from "~/i18n/translations";

export interface PageHeadData {
  canonical: string;
  image: string;
  alternates: Array<{ code: Locale; href: string }>;
}

export interface PageData {
  copy: TranslationContent;
  languageOptions: LanguageLink[];
  head: PageHeadData;
}

const buildAbsoluteUrl = (path: string, site?: URL): string =>
  site ? new URL(path, site).toString() : path;

/**
 * Build all page‑level i18n data.
 *
 * @param locale - active locale for this page
 * @param site   - Astro site URL (for absolute URLs)
 * @param path   - locale‑agnostic path of the current page,
 *                 e.g. "/reviews/skydimo-review/".
 *                 If omitted, we fall back to locale homepages
 *                 to keep behaviour backwards‑compatible.
 */
export const buildPageData = (
  locale: Locale,
  site?: URL,
  path?: string,
): PageData => {
  const copy = getTranslations(locale);
  const languageOptions = path
    ? buildLanguageLinksForPath(path)
    : // Fallback to locale homepages for existing callers
      buildLanguageLinksForPath("/");

  const head: PageHeadData = {
    canonical: buildAbsoluteUrl(
      path ? buildLocalizedHref(locale, path) : getLocaleHref(locale),
      site,
    ),
    image: buildAbsoluteUrl("og-image.png", site),
    alternates: languageOptions.map((option) => ({
      code: option.code,
      href: buildAbsoluteUrl(option.href, site),
    })),
  };

  return {
    copy,
    languageOptions,
    head,
  };
};

