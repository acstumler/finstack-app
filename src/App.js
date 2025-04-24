import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your styling

// Importing pages/components
import CashFlowHub from './pages/CashFlowHub';
import FundingFinder from './pages/FundingFinder';
import Advisors from './pages/Advisors';
import Learn from './pages/Learn';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Importing the Home component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <h1>FinStack</h1> {/* Removed "App" from the title */}
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/cash-flow-hub" className="nav-link">Cash Flow Hub</Link></li>
              <li><Link to="/balance-sheet" className="nav-link">Balance Sheet Manager</Link></li>
              <li><Link to="/data-flow" className="nav-link">Data Flow</Link></li>
              <li><Link to="/funding-finder" className="nav-link">Funding Finder</Link></li>
              <li><Link to="/advisors" className="nav-link">Advisors/Compliance</Link></li>
              <li><Link to="/learn" className="nav-link">Learning Center</Link></li>
              <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cash-flow-hub" element={<CashFlowHub />} />
            <Route path="/funding-finder" element={<FundingFinder />} />
            <Route path="/advisors" element={<Advisors />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes here */}
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 FinStack. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
