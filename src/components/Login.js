import React, { useState } from 'react';
import { auth } from '../firebase';  // Import auth from firebase.js
import { signInWithEmailAndPassword } from 'firebase/auth';  // Firebase Authentication method

function Login() {
  const [email, setEmail] = useState('');    // State to hold the user's email
  const [password, setPassword] = useState('');  // State to hold the user's password
  const [error, setError] = useState('');    // State to store error messages

  // Function to handle the login process
  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    try {
      // Try signing in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');  // Log success message
    } catch (err) {
      setError(err.message);  // If there's an error, set the error state
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state on input change
          />
        </div>
        <div>
          <button type="submit">Login</button>  {/* Submit button */}
        </div>
      </form>
      {error && <p>{error}</p>}  {/* Display error message if there's an error */}
    </div>
  );
}

export default Login;
