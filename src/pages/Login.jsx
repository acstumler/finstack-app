// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔐 Replace this with Firebase Auth logic
    if (email === 'master@finstack.com' && password === 'masterkey') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Try again or use the master key.');
    }
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </motion.div>
  );
};

export default Login;
