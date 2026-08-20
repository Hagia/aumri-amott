import { Link, Navigate, useParams } from 'react-router-dom';
import { adjacentPosts, findPost, formatDateCompact, postHref } from '../content/posts';

export function PoemPost() {
  const { slug = '' } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/writing" replace />;

  const { prev, next } = adjacentPosts(post.slug);

  return (
    <article className="poem-page">
      <div className="reading-topbar">
        <div className="wrap">
          <Link to="/writing">← writing</Link>
          <span className="tag-poetry">poetry</span>
        </div>
      </div>

      <div className="poem-content">
        <div className="poem-date">{formatDateCompact(post.date)}</div>
        <h1 className="poem-title">{post.title}</h1>
        <div className="poem-rule" />
        <div className="poem-lines">
          {post.body.map((line, i) => (
            <span key={i}>
              {typeof line === 'string' ? line : line.quote}
              {i < post.body.length - 1 && <br />}
            </span>
          ))}
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
