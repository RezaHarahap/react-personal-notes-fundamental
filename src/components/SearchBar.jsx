import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, onKeywordChange, placeholder }) {
  return <label className="search-bar"><span className="sr-only">Cari berdasarkan judul</span><span aria-hidden="true">⌕</span><input type="search" value={keyword} onChange={(event) => onKeywordChange(event.target.value)} placeholder={placeholder} /></label>;
}

SearchBar.propTypes = { keyword: PropTypes.string.isRequired, onKeywordChange: PropTypes.func.isRequired, placeholder: PropTypes.string.isRequired };
export default SearchBar;
