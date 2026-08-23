import { useLocale } from '../i18n/LocaleContext';
import { LOCALES } from '../i18n/locale';

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="lang-switch">
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={code === locale ? 'active' : ''}
          onClick={() => setLocale(code)}
          aria-label={code === 'en' ? 'Switch to English' : 'Cambiar a español'}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
