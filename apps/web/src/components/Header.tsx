import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-name">
        M. Hernandez
      </Link>
      <nav className="site-nav">
        <Link to="/writing">writing</Link>
      </nav>
    </header>
  );
}
