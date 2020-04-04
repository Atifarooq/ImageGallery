import React from 'react';

const RadioPill = props => {
  
  const { name, title } = props;

  return (
    <div className="radiopill">
      <input type="radio" className="radiopill__control" {...props} />
      <label htmlFor={name} className="radiopill__label">{title}</label>
    </div>
  );
};

export default RadioPill;
