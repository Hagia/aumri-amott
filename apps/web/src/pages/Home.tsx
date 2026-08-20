import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { formatDateCompact, localize, postHref, sortedPosts } from '../content/posts';

export function Home() {
  const { locale, t } = useLocale();
  const recent = sortedPosts().slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-meta">
            <span>Mauricio Hernandez</span>
            <span>aumriamott.co</span>
          </div>
          <h1 className="hero-title">
            {t.home.heroLine1}
            <br />
            {t.home.heroLine2}
            <br />
            <span className="accent">{t.home.heroAccent}</span>
          </h1>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <p className="intro-text">{t.home.intro}</p>
          <div className="intro-links">
            <Link to="/writing" className="active">
              {t.home.writing}
            </Link>
            <a href="mailto:aumri.amott@gmail.com">{t.home.contact}</a>
          </div>
        </div>
      </section>

      <section>
        <div className="section-bar">
          <div className="wrap">
            <span>{t.home.recentWriting}</span>
            <Link to="/writing">{t.home.allWriting}</Link>
          </div>
        </div>
        <div className="post-list">
          {recent.map((post) => (
            <Link key={post.slug} to={postHref(post)} className="post-row">
              <span className="post-date">{formatDateCompact(post.date)}</span>
              <span className="post-title">{localize(post.title, locale)}</span>
              <span className={`post-tag tag-${post.tag}`}>{t.tags[post.tag]}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
