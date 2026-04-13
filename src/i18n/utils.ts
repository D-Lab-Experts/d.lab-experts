import { locales, defaultLocale, type Locale } from './ui';
import en from './en';
import pt from './pt';
import es from './es';

const dictionaries = { en, pt, es } as const;

// Single source of truth for the shape of translations.
// EN is authoritative — PT and ES must keep the same keys.
export type Translation = typeof en;

/**
 * Extract the active locale from a URL. Returns the default locale
 * when the first path segment isn't a recognized locale.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (locales as readonly string[]).includes(first)
    ? (first as Locale)
    : defaultLocale;
}

/**
 * Bind a locale and return a strongly-typed `t(key)` lookup that walks
 * the dictionary via dot-notation keys (e.g. `t('hero.title')`). Falls
 * back to the EN value if a key is missing in the requested locale —
 * safer than throwing while translations are still rolling out.
 */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale];
  const fallback = dictionaries[defaultLocale];

  return function t(key: TranslationKey): string {
    const fromLocale = resolve(dict, key);
    if (fromLocale !== undefined) return fromLocale;
    const fromFallback = resolve(fallback, key);
    if (fromFallback !== undefined) return fromFallback;
    // Missing keys are loud in dev so they're easy to catch in review.
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Missing translation for key "${key}"`);
    }
    return key;
  };
}

function resolve(obj: unknown, key: string): string | undefined {
  const parts = key.split('.');
  let cursor: unknown = obj;
  for (const part of parts) {
    if (cursor && typeof cursor === 'object' && part in (cursor as Record<string, unknown>)) {
      cursor = (cursor as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof cursor === 'string' ? cursor : undefined;
}

/**
 * Build the URL for the same page in a different locale. Used by the
 * LanguageSwitcher and hreflang link tags. Strips the current locale
 * prefix (if any) then re-prefixes for non-default locales.
 */
export function getLocalizedPath(pathname: string, locale: Locale): string {
  // Strip the leading locale segment if present.
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && (locales as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  const rest = segments.join('/');
  if (locale === defaultLocale) {
    return rest ? `/${rest}` : '/';
  }
  return rest ? `/${locale}/${rest}` : `/${locale}/`;
}

/**
 * Recursive dot-path key-union derived from the EN dictionary. Gives
 * autocomplete + compile-time errors in pages when a key is wrong.
 */
type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Paths<T, D extends number = 6> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: T[K] extends string
          ? K
          : Join<K, Paths<T[K], Prev[D]>>;
      }[keyof T]
    : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6];

export type TranslationKey = Paths<Translation>;
