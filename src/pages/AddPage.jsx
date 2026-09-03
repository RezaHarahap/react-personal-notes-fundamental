import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddPage({ onAdd }) {
  const [title, setTitle] = useState(''); const [body, setBody] = useState(''); const navigate = useNavigate(); const maxTitle = 50;
  const submit = (event) => { event.preventDefault(); if (!title.trim() || !body.trim()) return; addNote({ title: title.trim(), body: body.trim() }); onAdd(); navigate('/'); };
  return <section className="page page--narrow"><Link className="back-link" to="/">← Kembali ke catatan</Link><div className="form-heading"><p className="eyebrow">Tangkap idemu.</p><h1>Buat catatan baru</h1><p>Tak perlu sempurna—tulis dahulu, rapikan kemudian.</p></div><form className="note-form" onSubmit={submit}><label>Judul <span>{title.length}/{maxTitle}</span><input autoFocus required maxLength={maxTitle} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Contoh: Rencana belajar React" /></label><label>Isi catatan<textarea required rows="10" value={body} onChange={(event) => setBody(event.target.value)} placeholder="Mulai menulis di sini..." /></label><div className="form-actions"><Link className="button button--ghost" to="/">Batal</Link><button className="button button--primary" type="submit" disabled={!title.trim() || !body.trim()}>Simpan catatan</button></div></form></section>;
}
AddPage.propTypes = { onAdd: PropTypes.func.isRequired };
export default AddPage;
