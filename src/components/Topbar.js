import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar topbar--sticky">
      <NavLink className="topbar__brand" to="/">
        <img src={logo} alt="logo" className="tobar__brand__logo" /><b>IMG</b><i>allery</i>
      </NavLink>
    </div>
  );
}

export default Topbar;
