import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Home = () => {
  return (
    <div>
      <h1>Welcome to FinStack</h1>
      <p>Your go-to platform for financial management.</p>

      {/* Links to Login and Signup */}
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
