import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'; // Importing the existing styles

// Import Funding Finder components
import SearchTool from './components/FundingFinder/SearchTool';
import EligibilityChecker from './components/FundingFinder/EligibilityChecker';
import ResultsDisplay from './components/FundingFinder/ResultsDisplay';

// Import mock funding data
import fundingOptions from './data/fundingOptions';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [eligibilityResult, setEligibilityResult] = useState("");

  // Handle Search functionality
  const handleSearch = (searchQuery) => {
    const filteredFunding = fundingOptions.filter(funding => {
      return (
        (searchQuery.fundingType ? funding.type.includes(searchQuery.fundingType) : true) &&
        (searchQuery.industry ? funding.industry.includes(searchQuery.industry) : true) &&
        (searchQuery.amount ? funding.amount >= searchQuery.amount : true) &&
        (searchQuery.location ? funding.location.includes(searchQuery.location) : true) &&
        (searchQuery.deadline ? new Date(funding.deadline) <= new Date(searchQuery.deadline) : true)
      );
    });
    setSearchResults(filteredFunding);
  };

  // Handle Eligibility Check functionality
  const handleEligibilityCheck = (financialDetails) => {
    if (financialDetails.revenue < 1000000 && financialDetails.employees < 50) {
      setEligibilityResult("Eligible for Small Business Loan");
    } else {
      setEligibilityResult("Not eligible for Small Business Loan");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <h1>FinStack App</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/funding-finder" className="nav-link">Funding Finder</Link></li>
              {/* Add other links for your other features here */}
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Switch>
            <Route exact path="/" render={() => (
              <div className="card">
                <h2>Welcome to your Financial Dashboard</h2>
                <p>Explore the Funding Finder or other features of the app.</p>
                {/* Other features of your app can go here */}
              </div>
            )} />

            {/* Funding Finder Page */}
            <Route path="/funding-finder" render={() => (
              <div className="card funding-finder">
                <h2>Find Funding Opportunities</h2>
                <div className="funding-finder-form">
                  {/* Search Tool for Funding */}
                  <SearchTool onSearch={handleSearch} />

                  {/* Eligibility Checker */}
                  <EligibilityChecker onCheckEligibility={handleEligibilityCheck} />

                  {/* Eligibility Result */}
                  {eligibilityResult && <div className="eligibility-result">{eligibilityResult}</div>}

                  {/* Results Display */}
                  <ResultsDisplay results={searchResults} />
                </div>
              </div>
            )} />
          </Switch>
        </main>

        <footer>
          <p>&copy; 2025 FinStack. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
