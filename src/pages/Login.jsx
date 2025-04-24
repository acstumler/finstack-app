import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you should add your authentication logic
    // For now, let's assume any credentials are valid for testing

    if (email && password) {
      setIsLoggedIn(true); // Set user as logged in
      navigate('/'); // Redirect to the Home page or dashboard
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
