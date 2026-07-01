// Locale registry. PT-BR is the primary/default voice (lives at the
// domain root); English is a first-class alternate served under /en.
// Display labels appear verbatim in the LanguageSwitcher.
export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
};

export const localeShort: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
};

// html lang attribute — full BCP 47 tags.
export const htmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
};

// og:locale values for Open Graph.
export const ogLocale: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
};
