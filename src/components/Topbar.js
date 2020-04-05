import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="flex topbar topbar--sticky">
      <NavLink className="flex topbar__brand" to="/" aria-label="Logo, Click to goto Home">
        <img src={logo} alt="logo" className="tobar__brand__logo" /><b>IMG</b><i>allery</i>
      </NavLink>
    </div>
  );
}

export default Topbar;
