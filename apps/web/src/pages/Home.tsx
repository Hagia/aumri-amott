import { Link } from 'react-router-dom';
import { formatDateCompact, postHref, sortedPosts } from '../content/posts';

export function Home() {
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
            Poems,
            <br />
            essays,
            <br />
            <span className="accent">notes to self</span>
          </h1>
        </div>
      </section>

      <section className="intro">
        <div className="wrap">
          <p className="intro-text">
            Sporadic inspiration, journaling nights and recurring ideas.
          </p>
          <div className="intro-links">
            <Link to="/writing" className="active">
              writing
            </Link>
            <a href="mailto:aumri.amott@gmail.com">contact</a>
          </div>
        </div>
      </section>

      <section>
        <div className="section-bar">
          <div className="wrap">
            <span>Recent writing</span>
            <Link to="/writing">all writing →</Link>
          </div>
        </div>
        <div className="post-list">
          {recent.map((post) => (
            <Link key={post.slug} to={postHref(post)} className="post-row">
              <span className="post-date">{formatDateCompact(post.date)}</span>
              <span className="post-title">{post.title}</span>
              <span className={`post-tag tag-${post.tag}`}>{post.tag}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
