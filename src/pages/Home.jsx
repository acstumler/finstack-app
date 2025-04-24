import React from 'react';
import './Home.css'; // Import your Home styling

const Home = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to FinStack</h1>
      <p>Your all-in-one platform for managing small business finances. Track cash flow, find funding, forecast budgets, and get expert help – all in one place.</p>
      <div className="cta-buttons">
        <button className="btn-primary">Login</button>
        <button className="btn-primary">Create Account</button>
      </div>
    </div>
  );
};

export default Home;
