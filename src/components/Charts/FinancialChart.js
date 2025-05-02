import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FinancialChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [], // Will hold the date or time period labels
    datasets: [
      {
        label: 'Cash Flow',
        data: [], // Will hold the data points (financial values)
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    if (data) {
      // Here we populate chart data based on the data passed as a prop
      setChartData({
        labels: data.map((item) => item.date), // Assuming data is an array of objects with 'date' and 'value'
        datasets: [
          {
            ...chartData.datasets[0],
            data: data.map((item) => item.value),
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      <h2>Financial Dashboard</h2>
      <Line data={chartData} />
    </div>
  );
};

export default FinancialChart;
