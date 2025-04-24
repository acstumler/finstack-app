import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import CashFlowHub from './pages/CashFlowHub';
import BalanceSheetManager from './pages/BalanceSheetManager';
import DataFlow from './pages/DataFlow';
import FundingFinder from './pages/FundingFinder';
import AdvisorsCompliance from './pages/AdvisorsCompliance';
import LearningCenter from './pages/LearningCenter';
import Pricing from './pages/Pricing';
import SignUp from './pages/Signup';
import ContactUs from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Login Route */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* Protected Routes (only visible after login) */}
          {isLoggedIn && (
            <>
              <Route path="/cash-flow-hub" element={<CashFlowHub />} />
              <Route path="/balance-sheet-manager" element={<BalanceSheetManager />} />
              <Route path="/data-flow" element={<DataFlow />} />
              <Route path="/funding-finder" element={<FundingFinder />} />
              <Route path="/advisors-compliance" element={<AdvisorsCompliance />} />
              <Route path="/learning-center" element={<LearningCenter />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </>
          )}

          {/* Signup Route */}
          <Route path="/signup" element={<SignUp />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
