export type QuoteSourceType = 'podcast' | 'book' | 'other';

export interface Quote {
  slug: string;
  text: string; // kept verbatim — quotes aren't translated
  sourceType: QuoteSourceType;
  sourceTitle: string;
  author?: string;
  url?: string;
  dateAdded: string; // ISO date, when it was saved here
}

// Add new quotes here.
export const quotes: Quote[] = [
  {
    slug: 'many-dreams-die-while-suffering',
    text: 'many dreams die while suffering',
    sourceType: 'podcast',
    sourceTitle: 'The Joe Rogan Experience #1906',
    author: 'David Goggins',
    url: 'https://www.youtube.com/watch?v=AbDT2JTSnA8&t=7597s',
    dateAdded: '2026-08-23',
  },
];

export function sortedQuotes(): Quote[] {
  return [...quotes].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
}
