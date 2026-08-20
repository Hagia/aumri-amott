import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { LocaleProvider } from './i18n/LocaleContext';
import { EssayPost } from './pages/EssayPost';
import { Home } from './pages/Home';
import { PoemPost } from './pages/PoemPost';
import { Writing } from './pages/Writing';
import './App.css';

function AppShell() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="app">
      {!isHome && <Header />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/essay/:slug" element={<EssayPost />} />
          <Route path="/poem/:slug" element={<PoemPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LocaleProvider>
      <HashRouter>
        <ScrollToTop />
        <AppShell />
      </HashRouter>
    </LocaleProvider>
  );
}

export default App;
