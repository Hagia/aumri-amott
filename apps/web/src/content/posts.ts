export interface Post {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. '2026-08-18'
  excerpt: string;
  body: string;
}

// Add new writing here. This will move to the API/DB once apps/api is wired up.
export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: 'Hello, world',
    date: '2026-08-18',
    excerpt: 'The first entry — a placeholder until the real writing starts.',
    body: 'This is the first post. Replace this with your own writing.',
  },
];
