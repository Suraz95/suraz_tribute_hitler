// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/National_Socialist_swastika_%28framed_in_red%29.svg/220px-National_Socialist_swastika_%28framed_in_red%29.svg.png" alt="Adolf Hitler Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#">Hitler</a>
        </li>
        <li className="nav-item">
          <a href="#early-life">Early Life</a>
        </li>
        <li className="nav-item">
          <a href="#rise-to-power">Rise to Power</a>
        </li>
        <li className="nav-item">
          <a href="#dictator">Dictator</a>
        </li>
        <li className="nav-item">
          <a href="#world-war-2">World War 2</a>
        </li>
        <li className="nav-item">
          <a href="#death">Death</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
