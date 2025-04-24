import React from 'react';
import './Home.css'; // Import your Home styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to FinStack</h1>
        <p className="tagline">The all-in-one financial platform for managing your small business.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Login</button>
          <button className="btn-primary">Create Account</button>
        </div>
      </div>

      <section className="features-description">
        <h2>Main Features</h2>
        <ul>
          <li>Manage your cash flow and financial statements easily.</li>
          <li>Find funding options based on your business data.</li>
          <li>Get access to expert advisors for complex financial issues.</li>
          <li>Learn key financial concepts with our educational tools.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
