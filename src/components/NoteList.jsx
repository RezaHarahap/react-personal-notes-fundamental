import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, emptyMessage }) {
  if (notes.length === 0) {
    return <div className="empty-state" role="status"><span aria-hidden="true">✦</span><h2>{emptyMessage}</h2><p>Coba gunakan kata kunci lain atau buat catatan baru.</p></div>;
  }
  return <div className="notes-grid">{notes.map((note) => <NoteItem key={note.id} note={note} />)}</div>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
  emptyMessage: PropTypes.string.isRequired,
};
export default NoteList;
