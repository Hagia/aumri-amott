import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { detectLocale, getUrlLocale, STORAGE_KEY } from './locale';
import type { Locale } from './locale';
import { translations } from './translations';
import type { Translations } from './translations';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'es' ? stored : null;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(
    () => getUrlLocale() ?? readStoredLocale() ?? detectLocale(),
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }

  // Catches a ?lang= link followed while the app is already mounted
  // (the initial useState above only runs once, on first load).
  useEffect(() => {
    function syncFromUrl() {
      const urlLocale = getUrlLocale();
      if (urlLocale) setLocale(urlLocale);
    }
    window.addEventListener('hashchange', syncFromUrl);
    return () => window.removeEventListener('hashchange', syncFromUrl);
  }, []);

  const value = useMemo(() => ({ locale, setLocale, t: translations[locale] }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
