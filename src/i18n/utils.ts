import en from './en';

// Single English dictionary. `useTranslations()` keeps the same call
// shape components were already using, so the transition to EN-only is
// invisible at the call site.
export type Translation = typeof en;

export function useTranslations() {
  return function t(key: TranslationKey): string {
    const value = resolve(en, key);
    if (value !== undefined) return value;
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
