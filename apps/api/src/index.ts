import express from 'express';
import mongoose from 'mongoose';
import type { Post } from '@aumri-amott/shared';

const app = express();
const port = process.env.PORT ?? 3001;
const mongoUri = process.env.MONGODB_URI;

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// Placeholder — replace with a real Mongoose model once posts move off the
// static array in apps/web/src/content/posts.ts.
app.get('/posts', (_req, res) => {
  const posts: Post[] = [];
  res.json(posts);
});

async function main() {
  if (mongoUri) {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } else {
    console.warn('MONGODB_URI not set — starting without a database connection');
  }

  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}

main().catch((err) => {
  console.error('Failed to start API', err);
  process.exit(1);
});
