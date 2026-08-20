export type Locale = 'en' | 'es';

export const LOCALES: Locale[] = ['en', 'es'];

export const STORAGE_KEY = 'aumriamott:locale';

export function detectLocale(): Locale {
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
}
