import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // Correct import path from the styles folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-section">
        <h1>Welcome to FinStack</h1>
        <p className="tagline">The all-in-one financial platform for managing your small business.</p>
        
        <div className="buttons">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn">Create Account</button>
          </Link>
        </div>
      </div>

      <div className="main-features">
        <h2>Main Features</h2>
        <ul className="feature-list">
          <li>Manage your cash flow and financial statements easily.</li>
          <li>Find funding options based on your business data.</li>
          <li>Get access to expert advisors for complex financial issues.</li>
          <li>Learn key financial concepts with our educational tools.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
