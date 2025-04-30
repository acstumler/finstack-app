import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To handle errors

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Firebase sign-up method
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('User signed up successfully');
    } catch (error) {
      setError(error.message); // Handle errors like weak password, invalid email
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;
