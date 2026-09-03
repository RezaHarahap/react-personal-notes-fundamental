import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

function DetailPage({ onChange }) {
  const { id } = useParams(); const navigate = useNavigate(); const note = getNote(id);
  if (!note) return <section className="page not-found"><span>404</span><h1>Catatan tidak ditemukan</h1><p>ID catatan pada alamat ini tidak tersedia.</p><Link className="button button--primary" to="/">Kembali ke beranda</Link></section>;
  const remove = () => { if (window.confirm(`Hapus catatan “${note.title}”? Tindakan ini tidak dapat dibatalkan.`)) { deleteNote(note.id); onChange(); navigate(note.archived ? '/archives' : '/'); } };
  const toggleArchive = () => { const wasArchived = note.archived; if (wasArchived) unarchiveNote(note.id); else archiveNote(note.id); onChange(); navigate(wasArchived ? '/archives' : '/'); };
  return <article className="page page--narrow detail-page"><Link className="back-link" to={note.archived ? '/archives' : '/'}>← Kembali ke {note.archived ? 'arsip' : 'catatan'}</Link><div className="detail-page__meta"><span>{note.archived ? 'Diarsipkan' : 'Catatan aktif'}</span><time dateTime={note.createdAt}>{showFormattedDate(note.createdAt)}</time></div><h1>{note.title}</h1><p className="detail-page__body">{note.body}</p><div className="detail-actions"><button className="button button--ghost" onClick={toggleArchive}>{note.archived ? '↩ Batal arsip' : '▣ Arsipkan'}</button><button className="button button--danger" onClick={remove}>♲ Hapus</button></div></article>;
}
DetailPage.propTypes = { onChange: PropTypes.func.isRequired };
export default DetailPage;
