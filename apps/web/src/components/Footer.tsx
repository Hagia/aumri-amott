export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Mauricio Hernandez — aumriamott.co</span>
        <span className="footer-links">
          <a href="mailto:aumri.amott@gmail.com">email</a>
        </span>
      </div>
    </footer>
  );
}
