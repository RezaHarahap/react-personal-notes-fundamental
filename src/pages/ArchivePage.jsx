import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const notes = getArchivedNotes().filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
  return <section className="page"><div className="hero"><div><p className="eyebrow">Disimpan untuk nanti.</p><h1>Arsip catatan</h1><p>Temukan kembali catatan yang sudah tidak aktif tanpa kehilangannya.</p></div></div><SearchBar keyword={keyword} onKeywordChange={(value) => setSearchParams(value ? { keyword: value } : {})} placeholder="Cari di dalam arsip..." /><div className="section-heading"><h2>{keyword ? `Hasil untuk “${keyword}”` : 'Semua arsip'}</h2><span>{notes.length} catatan</span></div><NoteList notes={notes} emptyMessage="Arsip kosong" /></section>;
}
export default ArchivePage;
