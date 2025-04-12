// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/finstack-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <img src={logo} alt="FinStack Logo" className="logo-icon" />
        <Link to="/" className="logo-text">FinStack</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/cashflow">Cash Flow</Link></li>
        <li><Link to="/funding">Funding</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
