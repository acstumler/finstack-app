import React, { useState } from 'react';
import SearchTool from './components/FundingFinder/SearchTool';
import EligibilityChecker from './components/FundingFinder/EligibilityChecker';
import ResultsDisplay from './components/FundingFinder/ResultsDisplay';
import fundingOptions from './data/fundingOptions';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [eligibilityResult, setEligibilityResult] = useState("");

  // Handle Search based on user input in the Search Tool
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

  // Handle eligibility check based on user business details
  const handleEligibilityCheck = (financialDetails) => {
    // Example eligibility check logic
    if (financialDetails.revenue < 1000000 && financialDetails.employees < 50) {
      setEligibilityResult("Eligible for Small Business Loan");
    } else {
      setEligibilityResult("Not eligible for Small Business Loan");
    }
  };

  return (
    <div>
      <h1>Welcome to the Funding Finder</h1>

      {/* Search Tool for filtering funding options */}
      <SearchTool onSearch={handleSearch} />

      {/* Eligibility Checker for determining user's eligibility for funding */}
      <EligibilityChecker onCheckEligibility={handleEligibilityCheck} />

      {/* Display eligibility result */}
      {eligibilityResult && <p>{eligibilityResult}</p>}

      {/* Display the filtered search results */}
      <ResultsDisplay results={searchResults} />
    </div>
  );
};

export default App;
