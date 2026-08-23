import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import type { PostTag } from '../content/posts';
import { formatDateCompact, localize, postHref, sortedPosts } from '../content/posts';

type Filter = PostTag | 'all';

const CHIP_ORDER: { key: Filter; className: string }[] = [
  { key: 'all', className: 'chip-all' },
  { key: 'poetry', className: 'chip-poetry' },
  { key: 'essay', className: 'chip-essay' },
  { key: 'journal', className: 'chip-journal' },
];

export function Writing() {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>('all');
  const all = sortedPosts();
  const rows = filter === 'all' ? all : all.filter((post) => post.tag === filter);

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="eyebrow">{t.writing.eyebrow}</div>
          <h1 className="page-title">
            {t.writing.titleLine1}
            <br />
            {t.writing.titleLine2}
          </h1>
          <div className="chips">
            {CHIP_ORDER.map((chip) => {
              const count =
                chip.key === 'all' ? all.length : all.filter((p) => p.tag === chip.key).length;
              const label = chip.key === 'all' ? t.writing.all : t.tags[chip.key];
              return (
                <button
                  key={chip.key}
                  type="button"
                  className={`chip ${chip.className} ${filter === chip.key ? 'active' : ''}`}
                  onClick={() => setFilter(chip.key)}
                >
                  {label} {count}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="writing-list">
        {rows.map((post) => {
          const excerpt = localize(post.excerpt, locale);
          return (
            <Link key={post.slug} to={postHref(post)} className="post-row">
              <span className="post-date">{formatDateCompact(post.date)}</span>
              <span className="post-title-group">
                <span className="post-title">{localize(post.title, locale)}</span>
                {excerpt && <span className="post-blurb">{excerpt}</span>}
              </span>
              <span className={`post-tag tag-${post.tag}`}>{t.tags[post.tag]}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
