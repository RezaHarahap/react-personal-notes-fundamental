import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

function NoteItem({ note }) {
  return (
    <article className="note-card">
      <div className="note-card__meta"><span>{note.archived ? 'Arsip' : 'Aktif'}</span><time dateTime={note.createdAt}>{showFormattedDate(note.createdAt)}</time></div>
      <h2><Link to={`/notes/${note.id}`}>{note.title}</Link></h2>
      <p>{note.body}</p>
      <Link className="text-link" to={`/notes/${note.id}`} aria-label={`Baca catatan ${note.title}`}>Baca catatan <span aria-hidden="true">→</span></Link>
    </article>
  );
}

NoteItem.propTypes = { note: PropTypes.shape({ id: PropTypes.string.isRequired, title: PropTypes.string.isRequired, body: PropTypes.string.isRequired, createdAt: PropTypes.string.isRequired, archived: PropTypes.bool.isRequired }).isRequired };
export default NoteItem;
