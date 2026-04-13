import { locales, defaultLocale, type Locale } from './ui';
import en from './en';
import pt from './pt';

const dictionaries = { en, pt } as const;

// EN is authoritative — PT must keep the same keys.
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
 * Bind a locale and return a strongly-typed `t(key)` lookup. Falls
 * back to the EN value if a key is missing in the requested locale —
 * safer than throwing while translations are rolling out.
 */
export function useTranslations(locale: Locale = defaultLocale) {
  const dict = dictionaries[locale];
  const fallback = dictionaries[defaultLocale];

  return function t(key: TranslationKey): string {
    const fromLocale = resolve(dict, key);
    if (fromLocale !== undefined) return fromLocale;
    const fromFallback = resolve(fallback, key);
    if (fromFallback !== undefined) return fromFallback;
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
 * LanguageSwitcher and hreflang link tags.
 */
export function getLocalizedPath(pathname: string, locale: Locale): string {
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
