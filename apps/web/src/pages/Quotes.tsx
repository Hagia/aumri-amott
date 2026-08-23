import { useLocale } from '../i18n/LocaleContext';
import { formatDateCompact } from '../content/posts';
import { sortedQuotes } from '../content/quotes';

export function Quotes() {
  const { t } = useLocale();
  const rows = sortedQuotes();

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="eyebrow">{t.quotes.eyebrow}</div>
          <h1 className="page-title">
            {t.quotes.titleLine1}
            <br />
            {t.quotes.titleLine2}
          </h1>
        </div>
      </div>

      <div className="quotes-list">
        {rows.map((quote) => (
          <article key={quote.slug} className="quote-card">
            <blockquote className={`quote-text tone-${quote.sourceType}`}>
              “{quote.text}”
            </blockquote>
            <div className="quote-meta">
              <span>
                {formatDateCompact(quote.dateAdded)}
                {' — '}
                {quote.author ? `${quote.author}, ` : ''}
                {quote.sourceTitle}
              </span>
              <span className="quote-meta-right">
                <span className={`quote-source-tag tone-${quote.sourceType}`}>
                  {t.sourceTypes[quote.sourceType]}
                </span>
                {quote.url && (
                  <a href={quote.url} target="_blank" rel="noreferrer">
                    {t.quotes.source}
                  </a>
                )}
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
