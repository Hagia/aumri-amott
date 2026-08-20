import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { EssayPost } from './pages/EssayPost';
import { Home } from './pages/Home';
import { PoemPost } from './pages/PoemPost';
import { Writing } from './pages/Writing';
import './App.css';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
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
    </HashRouter>
  );
}

export default App;
