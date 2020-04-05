import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Media = ({ label, icon, count }) => {
  return (
    <div className="media">
        <h4><FontAwesomeIcon icon={faSearch} /> {label}</h4>
        <label className="media__label">{count}</label>
    </div>
  );
}

export default Media;
