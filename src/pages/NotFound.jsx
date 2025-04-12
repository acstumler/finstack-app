// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="page-section" style={{ textAlign: 'center' }}>
      <h2>🚫 404 - Page Not Found</h2>
      <p>The page you're looking for doesn’t exist or has been moved.</p>
      <Link to="/">
        <button style={{ marginTop: '1rem' }}>Go Home</button>
      </Link>
    </section>
  );
};

export default NotFound;
