import React, { useCallback, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [, setRevision] = useState(0);
  const refresh = useCallback(() => setRevision((value) => value + 1), []);

  return (
    <div className="app-container">
      <header className="app-header">
        <Link className="brand" to="/" aria-label="Ruang Catatan - beranda">
          <span className="brand__mark" aria-hidden="true">R</span>
          <span>Ruang Catatan</span>
        </Link>
        <nav className="navigation" aria-label="Navigasi utama">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/" end>Catatan</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/archives">Arsip</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/new" element={<AddPage onAdd={refresh} />} />
          <Route path="/notes/:id" element={<DetailPage onChange={refresh} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="app-footer">Dibuat dengan React · Catatan tersimpan selama sesi berlangsung</footer>
    </div>
  );
}

export default App;
