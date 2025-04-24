// src/components/FundingFinder/SearchTool.js

import React, { useState } from 'react';

const SearchTool = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    fundingType: "",
    industry: "",
    amount: "",
    location: "",
    deadline: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div>
      <h2>Find Funding</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Funding Type</label>
          <select name="fundingType" onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Loan">Loan</option>
            <option value="Grant">Grant</option>
            <option value="Investment">Investment</option>
          </select>
        </div>
        <div>
          <label>Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount Needed</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchTool;
