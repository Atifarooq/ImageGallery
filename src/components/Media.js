import React from 'react';

const Media = ({ label, count }) => {
  return (
    <div className="flex media">
        <h4>{label}</h4>
        <label className="media__label">{count}</label>
    </div>
  );
}

export default Media;
