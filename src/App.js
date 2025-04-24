import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import your styling

// Importing pages/components
import Budget from './pages/Budget';
import CashFlow from './pages/CashFlow';
import CashFlowHub from './pages/CashFlowHub';
import Community from './pages/Community';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Funding from './pages/Funding';
import Advisors from './pages/Advisors';
import FundingFinder from './pages/FundingFinder';
import Home from './pages/Home'; // Importing the Home component
import Learn from './pages/Learn';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <h1>FinStack App</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/budget" className="nav-link">Budget Manager</Link></li>
              <li><Link to="/cash-flow" className="nav-link">Cash Flow</Link></li>
              <li><Link to="/cash-flow-hub" className="nav-link">Cash Flow Hub</Link></li>
              <li><Link to="/community" className="nav-link">Community</Link></li>
              <li><Link to="/compliance" className="nav-link">Compliance</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              <li><Link to="/features" className="nav-link">Features</Link></li>
              <li><Link to="/funding" className="nav-link">Funding Finder</Link></li>
              <li><Link to="/advisors" className="nav-link">Advisors</Link></li>
              <li><Link to="/learn" className="nav-link">Learning Center</Link></li>
              <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
              <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/cash-flow" element={<CashFlow />} />
            <Route path="/cash-flow-hub" element={<CashFlowHub />} />
            <Route path="/community" element={<Community />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/advisors" element={<Advisors />} />
            <Route path="/funding-finder" element={<FundingFinder />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signup" element={<Signup />} />
            {/* Catch all route for non-existent pages */}
            <Route path="*" element={<NotFound />} />
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
