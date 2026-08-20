import { useLocale } from '../i18n/LocaleContext';
import { LanguageSwitch } from './LanguageSwitch';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Mauricio Hernandez — aumriamott.co</span>
        <div className="footer-right">
          <span className="footer-links">
            <a href="mailto:aumri.amott@gmail.com">{t.footer.email}</a>
          </span>
          <LanguageSwitch />
        </div>
      </div>
    </footer>
  );
}
