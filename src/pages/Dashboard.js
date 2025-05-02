import React, { useState, useEffect } from 'react';
import FinancialChart from '../components/charts/FinancialChart'; // Import the FinancialChart component
import DateRangeFilter from '../components/DateRangeFilter'; // Import the DateRangeFilter component
import { db } from '../firebase'; // Import your firebase setup

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  // Fetch real data from Firestore or your API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('financialData').get(); // Get data from 'financialData' collection
        const fetchedData = snapshot.docs.map(doc => doc.data()); // Map Firestore documents to data
        // Filter data based on the selected date range
        const filteredData = fetchedData.filter((entry) => {
          const entryDate = new Date(entry.date);
          const startDate = new Date(dateRange.startDate);
          const endDate = new Date(dateRange.endDate);

          if (!dateRange.startDate || !dateRange.endDate) return true;

          return entryDate >= startDate && entryDate <= endDate;
        });

        setData(filteredData); // Set filtered data
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, [dateRange]); // Refetch data when dateRange changes

  // Handle changes in the selected date range
  const handleDateChange = (newRange) => {
    setDateRange(newRange); // Update the date range state
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <DateRangeFilter onDateChange={handleDateChange} />
      <FinancialChart data={data} />
    </div>
  );
};

export default Dashboard;
