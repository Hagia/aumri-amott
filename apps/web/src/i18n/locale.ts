export type Locale = 'en' | 'es';

export const LOCALES: Locale[] = ['en', 'es'];

export const STORAGE_KEY = 'aumriamott:locale';

export const LANG_PARAM = 'lang';

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'es';
}

// With HashRouter, the query string for the current route lives inside
// location.hash (e.g. "#/poem/x?lang=es"), not location.search.
export function getUrlLocale(): Locale | null {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const queryIndex = hash.indexOf('?');
  if (queryIndex === -1) return null;
  const lang = new URLSearchParams(hash.slice(queryIndex + 1)).get(LANG_PARAM);
  return isLocale(lang) ? lang : null;
}

export function detectLocale(): Locale {
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
}
