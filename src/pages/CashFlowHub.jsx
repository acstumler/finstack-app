import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const CashFlowHub = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [forecastMonths, setForecastMonths] = useState(3);
  const [uploadedData, setUploadedData] = useState(null);

  // Handle file upload using react-dropzone
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'text/csv') {
      // Process CSV file
      parseCSV(file);
    } else {
      alert('Please upload a CSV file');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const parseCSV = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const lines = fileContent.split('\n');
      const parsedData = lines.map((line) => {
        const [date, type, amount] = line.split(',');
        return { date, type, amount: parseFloat(amount) };
      });
      setUploadedData(parsedData);
      calculateCashFlow(parsedData);
    };
    reader.readAsText(file);
  };

  const calculateCashFlow = (data) => {
    const incomeData = data.filter((item) => item.type === 'income');
    const expensesData = data.filter((item) => item.type === 'expense');

    const totalIncome = incomeData.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expensesData.reduce((acc, curr) => acc + curr.amount, 0);

    setIncome(totalIncome);
    setExpenses(totalExpenses);
  };

  const handleForecastCashFlow = () => {
    const monthlyIncome = income / 12;
    const monthlyExpenses = expenses / 12;
    console.log(`Forecast for ${forecastMonths} months:`);
    console.log(`Expected cash inflow: $${monthlyIncome * forecastMonths}`);
    console.log(`Expected cash outflow: $${monthlyExpenses * forecastMonths}`);
  };

  // Chart data
  const lineChartData = {
    labels: uploadedData ? uploadedData.map((item) => item.date) : [],
    datasets: [
      {
        label: 'Income',
        data: uploadedData ? uploadedData.filter(item => item.type === 'income').map(item => item.amount) : [],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Expenses',
        data: uploadedData ? uploadedData.filter(item => item.type === 'expense').map(item => item.amount) : [],
        borderColor: '#f44336',
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#4caf50', '#f44336'],
        hoverOffset: 4,
      },
    ],
  };

  const barChartData = {
    labels: ['Forecast'],
    datasets: [
      {
        label: 'Income Forecast',
        data: [income * forecastMonths],
        backgroundColor: '#4caf50',
      },
      {
        label: 'Expenses Forecast',
        data: [expenses * forecastMonths],
        backgroundColor: '#f44336',
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Cash Flow Hub</h2>
      <p>Manage your business' cash flow, financial statements, and more.</p>

      {/* File Upload Section */}
      <section className="file-upload">
        <h3 className="text-2xl font-medium">Upload Bank Statement (CSV)</h3>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag & drop a CSV file here, or click to select one</p>
        </div>
      </section>

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
        <button className="btn-primary" onClick={handleForecastCashFlow}>Create Statement</button>
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

      {/* Visualizing Data */}
      <section className="charts">
        <h3 className="text-2xl font-medium">Cash Flow Visualization</h3>
        <div className="chart-container">
          <Line data={lineChartData} />
        </div>
        <div className="chart-container">
          <Pie data={pieChartData} />
        </div>
        <div className="chart-container">
          <Bar data={barChartData} />
        </div>
      </section>
    </div>
  );
};

export default CashFlowHub;
