import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FinancialChart from '../components/charts/FinancialChart';
import DateRangeFilter from '../components/DateRangeFilter';
import { useAuth } from '../firebase'; // Assuming you're using Firebase Authentication

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const { currentUser, logout } = useAuth(); // Using Firebase's Auth context
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    setUser(currentUser); // Setting user data when the component mounts
  }, [currentUser]);

  const handleDateRangeChange = (start, end) => {
    setDateRange({ startDate: start, endDate: end });
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (!user) {
    return (
      <div>
        <h2>You need to be logged in to view the dashboard</h2>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.displayName || user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      
      <div>
        <h3>Financial Performance</h3>
        <DateRangeFilter onChange={handleDateRangeChange} />
        <FinancialChart dateRange={dateRange} />
      </div>
      
      <div>
        <h3>Your Financial Overview</h3>
        {/* You can add more financial details here */}
      </div>
    </div>
  );
};

export default Dashboard;
