import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const notes = getActiveNotes().filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
  return <section className="page"><div className="hero"><div><p className="eyebrow">Pikiranmu, tertata.</p><h1>Catatan aktif</h1><p>Simpan ide, pengetahuan, dan hal penting dalam satu ruang yang tenang.</p></div><Link className="button button--primary" to="/notes/new"><span aria-hidden="true">＋</span> Catatan baru</Link></div><SearchBar keyword={keyword} onKeywordChange={(value) => setSearchParams(value ? { keyword: value } : {})} placeholder="Cari judul catatan..." /><div className="section-heading"><h2>{keyword ? `Hasil untuk “${keyword}”` : 'Semua catatan'}</h2><span>{notes.length} catatan</span></div><NoteList notes={notes} emptyMessage="Tidak ada catatan" /></section>;
}
export default HomePage;
