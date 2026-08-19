import { posts } from './content/posts';
import './App.css';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function App() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="page">
      <header className="site-header">
        <h1>Aumri Amott</h1>
        <p className="tagline">Writing, published here.</p>
      </header>

      <main>
        {sorted.map((post) => (
          <article key={post.slug} className="post">
            <h2>{post.title}</h2>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </main>

      <footer className="site-footer">
        <p>aumriamott.co</p>
      </footer>
    </div>
  );
}

export default App;
