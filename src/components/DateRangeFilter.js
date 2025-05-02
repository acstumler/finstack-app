import React, { useState } from 'react';

const DateRangeFilter = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleApplyFilter = () => {
    if (startDate && endDate) {
      // Pass the selected date range to the parent component
      onDateChange({ startDate, endDate });
    }
  };

  return (
    <div>
      <h3>Filter by Date Range</h3>
      <div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleApplyFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default DateRangeFilter;
