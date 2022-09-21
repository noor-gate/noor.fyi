import React from 'react';
import style from './Nav.module.css';
import {
    NavLink,
  } from "react-router-dom";

function Nav() {
  return (
    <div className={style.cont}>
      <div className="links">
      <NavLink to="/">About</NavLink> 
          <NavLink to="/skills">Skills</NavLink> 
        <NavLink to="/projects">Projects</NavLink> 
        <NavLink to="/etc">Now</NavLink> 
        <a href="/noorsawhneycv.pdf">CV</a>
      </div>
    </div>
  );
}

export default Nav;