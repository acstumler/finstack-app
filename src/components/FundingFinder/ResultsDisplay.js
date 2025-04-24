// src/components/FundingFinder/ResultsDisplay.js

import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div>
      <h2>Funding Opportunities</h2>
      {results.length > 0 ? (
        results.map(funding => (
          <div key={funding.id}>
            <h3>{funding.name}</h3>
            <p>Amount: ${funding.amount}</p>
            <p>Eligibility: {funding.eligibility}</p>
            <p>Deadline: {funding.deadline}</p>
            <a href={funding.link}>Apply</a>
          </div>
        ))
      ) : (
        <p>No funding options match your criteria.</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
