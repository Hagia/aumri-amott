import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';

export function Header() {
  const { t } = useLocale();

  return (
    <header className="site-header">
      <Link to="/" className="site-name">
        M. Hernandez
      </Link>
      <nav className="site-nav">
        <Link to="/writing">{t.nav.writing}</Link>
        <Link to="/quotes">{t.nav.quotes}</Link>
      </nav>
    </header>
  );
}
