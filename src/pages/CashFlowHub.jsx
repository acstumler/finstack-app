// src/pages/CashFlowHub.jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import transactionsData from '../data/sampleTransactions.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const CashFlowHub = () => {
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  useEffect(() => {
    const totalCash = transactions.reduce((acc, t) => acc + t.amount, 0);
    const flagged = [];

    if (totalCash < 1000) flagged.push('⚠️ Low cash warning: Your balance is under $1,000.');
    if (totalCash < 0) flagged.push('🚨 Negative cash balance detected. Immediate attention required.');
    if (totalCash > 100000) flagged.push('🎉 High cash balance: Consider reinvestment or saving options.');

    const largeExpenses = transactions.filter(t => t.amount < -500);
    if (largeExpenses.length > 0) flagged.push('⚠️ Large expense detected. Review recent outflows.');

    const frequentTransactions = transactions.length;
    if (frequentTransactions > 30) flagged.push('📊 High transaction volume this period. Monitor cash flow closely.');

    const inflows = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
    const outflows = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0);
    if (inflows < Math.abs(outflows)) flagged.push('📉 Spending exceeds income. Monitor burn rate and adjust budget.');

    if (transactions.length >= 3) {
      const lastThree = transactions.slice(-3).map(t => t.amount);
      if (lastThree[0] > lastThree[1] && lastThree[1] > lastThree[2]) {
        flagged.push('🔻 Consecutive cash flow decline detected over 3 periods.');
      }
    }

    setAlerts(flagged);
  }, [transactions]);

  const chartData = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: 'Cash Flow Over Time',
        data: transactions.map(t => t.amount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(0,0,0,0.05)' } },
    },
  };

  return (
    <section className="page-section">
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>💸 Cash Flow Hub</h2>

      {alerts.length > 0 && (
        <div className="alerts">
          {alerts.map((alert, idx) => (
            <p key={idx}>{alert}</p>
          ))}
        </div>
      )}

      <div className="chart">
        <Line data={chartData} options={chartOptions} />
      </div>
    </section>
  );
};

export default CashFlowHub;
