import { Link, Navigate, useParams } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import { adjacentPosts, findPost, formatDateCompact, localize, postHref } from '../content/posts';

export function PoemPost() {
  const { locale, t } = useLocale();
  const { slug = '' } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/writing" replace />;

  const { prev, next } = adjacentPosts(post.slug);
  const lines = post.body[locale];

  return (
    <article className="poem-page">
      <div className="poem-content">
        <div className="poem-date">{formatDateCompact(post.date)}</div>
        <h1 className="poem-title">{localize(post.title, locale)}</h1>
        <div className="poem-rule" />
        <div className="poem-lines">
          {lines.map((line, i) => (
            <span key={i}>
              {typeof line === 'string' ? line : line.quote}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>

      <div className="reading-nav">
        <div className="wrap">
          <span>
            {prev ? (
              <Link to={postHref(prev)}>← {localize(prev.title, locale)}</Link>
            ) : (
              <Link to="/writing">{t.reading.backToWriting}</Link>
            )}
          </span>
          <span>
            {next ? (
              <Link to={postHref(next)}>{localize(next.title, locale)} →</Link>
            ) : (
              <Link to="/writing">{t.reading.writingForward}</Link>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
