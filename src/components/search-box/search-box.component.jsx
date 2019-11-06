import React from 'react';
import PropTypes from 'prop-types';

import './search-box.style.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

SearchBox.prototype = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}
export default SearchBox;