// Locale registry for the whole site. The site is English-primary;
// PT-BR and ES are first-class alternates routed under /pt/ and /es/.
// Display labels appear in the LanguageSwitcher exactly as below.
export const locales = ['en', 'pt', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
  es: 'ES',
};

// html lang attribute — full BCP 47 tags. Keeps hreflang and assistive
// tech happy with a proper region subtag for Portuguese.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
  es: 'es',
};
