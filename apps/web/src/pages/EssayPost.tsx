import { Link, Navigate, useParams } from 'react-router-dom';
import { adjacentPosts, findPost, postHref, readMinutes, wordCount } from '../content/posts';

export function EssayPost() {
  const { slug = '' } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/writing" replace />;

  const year = post.date.slice(0, 4);
  const monthDay = post.date.slice(5).replace('-', '.');
  const { prev, next } = adjacentPosts(post.slug);

  return (
    <article>
      <div className="reading-topbar">
        <div className="wrap">
          <Link to="/writing">← writing</Link>
          <span className={`tag-${post.tag}`}>
            {post.tag} · {readMinutes(post)} min
          </span>
        </div>
      </div>

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
          <span className={`tag-${post.tag}`}>{post.tag}</span>
          <br />
          {wordCount(post)} words
        </div>
        <div>
          <h1 className="essay-title">{post.title}</h1>
          <div className="essay-rule" />
          {post.body.map((block, i) =>
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
          <span>{prev ? <Link to={postHref(prev)}>← {prev.title}</Link> : <Link to="/writing">← writing</Link>}</span>
          <span>{next ? <Link to={postHref(next)}>{next.title} →</Link> : <Link to="/writing">writing →</Link>}</span>
        </div>
      </div>
    </article>
  );
}
