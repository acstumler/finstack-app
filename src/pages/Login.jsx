// src/pages/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <section className="page-section">
      <h2>🔐 Login</h2>
      <p>Secure access for FinStack users.</p>
      <form style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label>
          <input type="email" placeholder="you@business.com" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px' }} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </section>
  );
};

export default Login;
