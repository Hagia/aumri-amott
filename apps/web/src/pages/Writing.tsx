import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { PostTag } from '../content/posts';
import { formatDateCompact, postHref, sortedPosts } from '../content/posts';

type Filter = PostTag | 'all';

const CHIPS: { key: Filter; label: string; className: string }[] = [
  { key: 'all', label: 'all', className: 'chip-all' },
  { key: 'poetry', label: 'poetry', className: 'chip-poetry' },
  { key: 'essay', label: 'essay', className: 'chip-essay' },
  { key: 'journal', label: 'journal', className: 'chip-journal' },
];

export function Writing() {
  const [filter, setFilter] = useState<Filter>('all');
  const all = sortedPosts();
  const rows = filter === 'all' ? all : all.filter((post) => post.tag === filter);

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="eyebrow">Writing</div>
          <h1 className="page-title">
            Everything,
            <br />
            newest first
          </h1>
          <div className="chips">
            {CHIPS.map((chip) => {
              const count =
                chip.key === 'all' ? all.length : all.filter((p) => p.tag === chip.key).length;
              return (
                <button
                  key={chip.key}
                  type="button"
                  className={`chip ${chip.className} ${filter === chip.key ? 'active' : ''}`}
                  onClick={() => setFilter(chip.key)}
                >
                  {chip.label} {count}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="writing-list">
        {rows.map((post) => (
          <Link key={post.slug} to={postHref(post)} className="post-row">
            <span className="post-date">{formatDateCompact(post.date)}</span>
            <span className="post-title-group">
              <span className="post-title">{post.title}</span>
              {post.excerpt && <span className="post-blurb">{post.excerpt}</span>}
            </span>
            <span className={`post-tag tag-${post.tag}`}>{post.tag}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
