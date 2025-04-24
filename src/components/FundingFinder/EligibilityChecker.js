// src/components/FundingFinder/EligibilityChecker.js

import React, { useState } from 'react';

const EligibilityChecker = ({ onCheckEligibility }) => {
  const [financialDetails, setFinancialDetails] = useState({
    revenue: "",
    employees: "",
    stage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFinancialDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckEligibility(financialDetails);
  };

  return (
    <div>
      <h2>Check Eligibility</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Annual Revenue</label>
          <input
            type="number"
            name="revenue"
            value={financialDetails.revenue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Number of Employees</label>
          <input
            type="number"
            name="employees"
            value={financialDetails.employees}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Business Stage</label>
          <select
            name="stage"
            value={financialDetails.stage}
            onChange={handleChange}
          >
            <option value="">Select Stage</option>
            <option value="Startup">Startup</option>
            <option value="Established">Established</option>
          </select>
        </div>
        <button type="submit">Check Eligibility</button>
      </form>
    </div>
  );
};

export default EligibilityChecker;
