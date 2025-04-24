import React, { useState } from 'react';

const CashFlowHub = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [forecastMonths, setForecastMonths] = useState(3); // Default to 3-month forecast

  // Function to handle creating a Cash Flow Statement
  const handleCreateStatement = () => {
    console.log("Creating Cash Flow Statement with Income: ", income, " Expenses: ", expenses);
  };

  // Function to forecast cash flow for a given number of months
  const handleForecastCashFlow = () => {
    const monthlyIncome = income / 12;
    const monthlyExpenses = expenses / 12;
    console.log(`Forecast for ${forecastMonths} months:`);
    console.log(`Expected cash inflow: $${monthlyIncome * forecastMonths}`);
    console.log(`Expected cash outflow: $${monthlyExpenses * forecastMonths}`);
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Cash Flow Hub</h2>
      <p>Manage your business' cash flow, financial statements, and more.</p>

      {/* Cash Flow Statement */}
      <section className="financial-statements">
        <h3 className="text-2xl font-medium">Create Cash Flow Statement</h3>
        <p>Enter your income and expenses below to generate your financial statement.</p>
        <div className="form-group">
          <label>Annual Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your income"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Annual Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="Enter your expenses"
            className="input-field"
          />
        </div>
        <button className="btn-primary" onClick={handleCreateStatement}>Create Statement</button>
      </section>

      {/* Cash Flow Forecasting */}
      <section className="cash-flow-forecast">
        <h3 className="text-2xl font-medium">Cash Flow Forecast</h3>
        <p>Estimate your cash flow for the next few months.</p>
        <div className="form-group">
          <label>Months to Forecast</label>
          <input
            type="number"
            value={forecastMonths}
            onChange={(e) => setForecastMonths(e.target.value)}
            placeholder="Enter number of months"
            className="input-field"
          />
        </div>
        <button className="btn-primary" onClick={handleForecastCashFlow}>Forecast Cash Flow</button>
      </section>

      {/* Cash Flow Ratios (Operating Cash Flow Ratio, Free Cash Flow, etc.) */}
      <section className="cash-flow-ratios">
        <h3 className="text-2xl font-medium">Cash Flow Ratios</h3>
        <p>Calculate key ratios to assess your financial health.</p>
        {/* Placeholder for ratio calculation components */}
        <div className="form-group">
          <label>Operating Cash Flow Ratio</label>
          {/* Example placeholder calculation */}
          <input type="text" value="Calculated Value" readOnly className="input-field" />
        </div>
        <div className="form-group">
          <label>Free Cash Flow</label>
          {/* Example placeholder calculation */}
          <input type="text" value="Calculated Value" readOnly className="input-field" />
        </div>
      </section>
    </div>
  );
};

export default CashFlowHub;
