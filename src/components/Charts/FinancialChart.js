import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register necessary chart.js components
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const FinancialChart = ({ data }) => {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    if (data && data.length > 0) {
      const chartLabels = data.map(item => item.date);
      const chartValues = data.map(item => item.value);

      // Prepare the chart data structure
      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: 'Financial Data',
            data: chartValues,
            borderColor: '#4bc0c0', // Custom color
            fill: false,
            tension: 0.1,
          }
        ]
      });
    }
  }, [data]);

  return (
    <div className="chart-container">
      <h3>Financial Trend</h3>
      <Line data={chartData} options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Financial Data Over Time'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month', // Adjust according to your data (day, week, month, etc.)
              tooltipFormat: 'll'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            },
            ticks: {
              beginAtZero: true,
              stepSize: 1000, // Adjust step size depending on data scale
            }
          }
        }
      }} />
    </div>
  );
};

export default FinancialChart;
