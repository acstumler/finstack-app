// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password);
      navigate('/cashflow');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Create Your FinStack Account</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSignup}>
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
