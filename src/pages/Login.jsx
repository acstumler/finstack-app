// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/Login.css';

const MASTER_EMAIL = 'master@finstack.app';
const MASTER_PASSWORD = 'masterkey';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (email === MASTER_EMAIL && password === MASTER_PASSWORD) {
      localStorage.setItem('masterKey', 'true');
      navigate('/cashflow');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/cashflow');
    } catch (err) {
      setError('Invalid credentials or user not found.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login to FinStack</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <p className="note">Use master@finstack.app / masterkey for full access</p>
      </form>
    </div>
  );
};

export default Login;
