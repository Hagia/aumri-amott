import { Link, Navigate, useParams } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import {
  adjacentPosts,
  findPost,
  localize,
  postHref,
  readMinutes,
  wordCount,
} from '../content/posts';

export function EssayPost() {
  const { locale, t } = useLocale();
  const { slug = '' } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/writing" replace />;

  const year = post.date.slice(0, 4);
  const monthDay = post.date.slice(5).replace('-', '.');
  const { prev, next } = adjacentPosts(post.slug);
  const body = post.body[locale];

  return (
    <article>
      <div className="essay-body">
        <div className="essay-meta">
          {year}
          <br />
          {monthDay}
          <br />
          <br />
          {post.location && (
            <>
              {post.location}
              <br />
              <br />
            </>
          )}
          <span className={`tag-${post.tag}`}>{t.tags[post.tag]}</span>
          <br />
          {wordCount(post, locale)} {t.reading.words}
          <br />
          {readMinutes(post, locale)} {t.reading.minRead}
        </div>
        <div>
          <h1 className="essay-title">{localize(post.title, locale)}</h1>
          <div className="essay-rule" />
          {body.map((block, i) =>
            typeof block === 'string' ? (
              <p key={i}>{block}</p>
            ) : (
              <blockquote key={i} className="essay-pull">
                {block.quote}
              </blockquote>
            ),
          )}
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
