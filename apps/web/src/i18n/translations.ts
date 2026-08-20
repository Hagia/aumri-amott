import type { Locale } from './locale';
import type { PostTag } from '../content/posts';

export const translations = {
  en: {
    nav: { writing: 'writing' },
    home: {
      heroLine1: 'Poems,',
      heroLine2: 'essays,',
      heroAccent: 'notes to self',
      intro: 'Sporadic inspiration, journaling nights and recurring ideas.',
      writing: 'writing',
      contact: 'contact',
      recentWriting: 'Recent writing',
      allWriting: 'all writing →',
    },
    writing: {
      eyebrow: 'Writing',
      titleLine1: 'Everything,',
      titleLine2: 'newest first',
      all: 'all',
    },
    tags: { essay: 'essay', poetry: 'poetry', journal: 'journal' } satisfies Record<
      PostTag,
      string
    >,
    reading: {
      backToWriting: '← writing',
      writingForward: 'writing →',
      words: 'words',
      minRead: 'min read',
    },
    footer: { email: 'email' },
  },
  es: {
    nav: { writing: 'escritos' },
    home: {
      heroLine1: 'Poemas,',
      heroLine2: 'ensayos,',
      heroAccent: 'notas para mí',
      intro: 'Inspiración esporádica, noches de escritura e ideas recurrentes.',
      writing: 'escritos',
      contact: 'contacto',
      recentWriting: 'Escritos recientes',
      allWriting: 'todos los escritos →',
    },
    writing: {
      eyebrow: 'Escritos',
      titleLine1: 'Todo,',
      titleLine2: 'lo más reciente primero',
      all: 'todos',
    },
    tags: { essay: 'ensayo', poetry: 'poesía', journal: 'diario' } satisfies Record<
      PostTag,
      string
    >,
    reading: {
      backToWriting: '← escritos',
      writingForward: 'escritos →',
      words: 'palabras',
      minRead: 'min de lectura',
    },
    footer: { email: 'correo' },
  },
} satisfies Record<Locale, unknown>;

export type Translations = (typeof translations)['en'];
