import {
  buildLanguageLinks,
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

export const buildPageData = (locale: Locale, site?: URL): PageData => {
  const copy = getTranslations(locale);
  const languageOptions = buildLanguageLinks();

  const head: PageHeadData = {
    canonical: buildAbsoluteUrl(getLocaleHref(locale), site),
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

