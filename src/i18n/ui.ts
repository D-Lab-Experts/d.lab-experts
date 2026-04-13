// Locale registry. English is the primary/default voice; PT-BR is a
// first-class alternate for Brazilian partners. Display labels appear
// verbatim in the LanguageSwitcher.
export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
};

// html lang attribute — full BCP 47 tags.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
};
