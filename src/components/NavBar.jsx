import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/finstack-logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="FinStack Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/funding">Funding</Link></li>
        <li><Link to="/cashflow">Cash Flow</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/advisors">Advisors</Link></li>
        <li><Link to="/compliance">Compliance</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li>
          <Link to="/login" className="login-btn">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
