import type { Locale } from '../i18n/locale';

export type PostTag = 'essay' | 'poetry' | 'journal';

export type LocalizedString = Record<Locale, string>;

export type BodyBlock = string | { quote: string };

export interface Post {
  slug: string;
  title: LocalizedString;
  date: string; // ISO date, e.g. '2026-08-18'
  tag: PostTag;
  location?: string;
  excerpt: LocalizedString;
  body: Record<Locale, BodyBlock[]>; // paragraphs/pull-quotes for essay/journal, lines for poetry
}

function blockText(block: BodyBlock): string {
  return typeof block === 'string' ? block : block.quote;
}

export function localize(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.en;
}

// Add new writing here. This will move to the API/DB once apps/api is wired up.
export const posts: Post[] = [
  {
    slug: 'ode-to-pain',
    title: { en: 'Ode to Pain', es: 'Oda al dolor' },
    date: '2026-08-19',
    tag: 'poetry',
    excerpt: { en: '', es: '' },
    body: {
      en: [
        'Thank the pain, that lets us know we’re striving forward',
        'Thank the pain, for life will be numbness without it',
        'Thank the pain, that’s how we know we’ve fallen',
        'Thank the pain, it reminds us of our fragility and weakness',
        'Thank the pain, its presence makes us stronger',
        'Thank the pain, on the days to come we will be ready to face it',
        'Thank the pain, that grants use lasting wisdom on dark days',
        'Thank the pain, the ultimate test to the soul and will',
        'Thank the pain, that gives the weak an opportunity to be strong and the strong the lesson to be humbled',
        'Thank the pain, that let’s us know we’re alive',
        'Thank the pain, there is no true joy without',
        'Thank the pain, no one can buy its way out of it',
        'Thank the pain, it teaches us patience',
        'Thank the pain, the coward will fold and the courageous will rise',
        'Thank the pain, the more we love the more it hurts',
      ],
      es: [
        'Agradece al dolor, que nos hace saber que avanzamos',
        'Agradece al dolor, porque sin él la vida sería insensibilidad',
        'Agradece al dolor, así sabemos que hemos caído',
        'Agradece al dolor, que nos recuerda nuestra fragilidad y debilidad',
        'Agradece al dolor, que su presencia nos fortalece',
        'Agradece al dolor, que en los días venideros estaremos preparados para enfrentarlo',
        'Agradece al dolor, que nos otorga sabiduría duradera en los días oscuros',
        'Agradece al dolor, la prueba definitiva para el alma y la voluntad',
        'Agradece al dolor, que da a los débiles la oportunidad de ser fuertes y a los fuertes la lección de la humildad',
        'Agradece al dolor, que nos hace saber que estamos vivos',
        'Agradece al dolor, sin él no hay verdadera alegría',
        'Agradece al dolor, nadie puede librarse de él',
        'Agradece al dolor, que nos enseña paciencia',
        'Agradece al dolor, el cobarde se rendirá y el valiente se alzará',
        'Agradece al dolor, cuanto más amamos, más duele',
      ],
    },
  },
];

export function sortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function postHref(post: Post): string {
  return post.tag === 'poetry' ? `/poem/${post.slug}` : `/essay/${post.slug}`;
}

export function wordCount(post: Post, locale: Locale): number {
  return post.body[locale]
    .map(blockText)
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readMinutes(post: Post, locale: Locale): number {
  return Math.max(1, Math.round(wordCount(post, locale) / 200));
}

export function formatDateCompact(iso: string): string {
  return iso.replaceAll('-', '.');
}

export function findPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function adjacentPosts(slug: string): { prev?: Post; next?: Post } {
  const list = sortedPosts();
  const index = list.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return { prev: list[index + 1], next: list[index - 1] };
}
