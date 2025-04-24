import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input'; // Corrected import to use named import
import Button from '../components/ui/Button';

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
      navigate('/dashboard');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-teal-50 p-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-teal-700">Create an Account</h2>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
