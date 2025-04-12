// src/pages/FundingFinder.jsx
import React, { useState } from 'react';

const sampleFundingData = [
  {
    id: 1,
    name: "Small Business Innovation Grant",
    type: "Grant",
    industry: "Tech",
    location: "USA",
    amount: "$10,000",
    eligibility: "Less than 50 employees, founded within last 5 years"
  },
  {
    id: 2,
    name: "Startup Growth Loan Program",
    type: "Loan",
    industry: "Any",
    location: "Global",
    amount: "$50,000",
    eligibility: "Revenue under $1M, business credit score required"
  },
  {
    id: 3,
    name: "Women-Owned Business Grant",
    type: "Grant",
    industry: "Any",
    location: "USA",
    amount: "$15,000",
    eligibility: "Must be 51% women-owned and based in the US"
  }
];

const FundingFinder = () => {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [filtered, setFiltered] = useState(sampleFundingData);

  const handleSearch = () => {
    const results = sampleFundingData.filter(fund => {
      const matchIndustry = industry ? fund.industry.toLowerCase().includes(industry.toLowerCase()) || fund.industry === "Any" : true;
      const matchLocation = location ? fund.location.toLowerCase().includes(location.toLowerCase()) || fund.location === "Global" : true;
      return matchIndustry && matchLocation;
    });
    setFiltered(results);
  };

  return (
    <div className="page-section">
      <h2>💸 Funding Finder</h2>
      <p>Search grants, loans, and programs tailored for small businesses.</p>

      <div className="filter-form">
        <input
          type="text"
          placeholder="Industry (e.g. Tech, Retail)"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (e.g. USA, Global)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>🔍 Search</button>
      </div>

      <div className="funding-results">
        {filtered.map((f) => (
          <div key={f.id} className="card">
            <h3>{f.name}</h3>
            <p><strong>Type:</strong> {f.type}</p>
            <p><strong>Amount:</strong> {f.amount}</p>
            <p><strong>Location:</strong> {f.location}</p>
            <p><strong>Industry:</strong> {f.industry}</p>
            <p><strong>Eligibility:</strong> {f.eligibility}</p>
          </div>
        ))}
        {filtered.length === 0 && <p>No funding programs match your criteria.</p>}
      </div>
    </div>
  );
};

export default FundingFinder;
