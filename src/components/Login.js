import React, { useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth

// Get the master key from environment variable
const masterKey = process.env.REACT_APP_MASTER_KEY;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enteredMasterKey, setEnteredMasterKey] = useState(''); // For capturing master key input
  const [error, setError] = useState(''); // To handle errors

  const handleLogin = async (e) => {
    e.preventDefault();

    // If the entered master key matches the stored one, bypass Firebase login
    if (enteredMasterKey === masterKey) {
      console.log('Master key accepted. You are logged in!');
      // Optionally, handle successful master key login (store in state, localStorage, etc.)
      return;
    }

    // Firebase login method if the master key isn't entered
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully');
    } catch (error) {
      setError(error.message); // Handle errors like wrong credentials
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
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
        
        {/* Master Key Input */}
        <input
          type="text"
          value={enteredMasterKey}
          onChange={(e) => setEnteredMasterKey(e.target.value)}
          placeholder="Enter master key (for bypass)"
        />
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
