import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Media = () => {
  return (
    <div className="media">
        <h4><FontAwesomeIcon icon={faSearch} /> Views</h4>
        <label className="media__label">1,230</label>
    </div>
  );
}

export default Media;
