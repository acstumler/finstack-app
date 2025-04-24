import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch

// Import your pages
import Home from './pages/Home';
import CashFlowHub from './pages/CashFlowHub';
import BalanceSheetManager from './pages/BalanceSheetManager';
import DataFlow from './pages/DataFlow';
import FundingFinder from './pages/FundingFinder';
import AdvisorsCompliance from './pages/AdvisorsCompliance';
import LearningCenter from './pages/LearningCenter';
import Pricing from './pages/Pricing';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ContactUs from './pages/Contact';
import NotFound from './pages/NotFound';  // A 404 page for unmatched routes

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Specific Pages */}
          <Route path="/cash-flow-hub" element={<CashFlowHub />} />
          <Route path="/balance-sheet-manager" element={<BalanceSheetManager />} />
          <Route path="/data-flow" element={<DataFlow />} />
          <Route path="/funding-finder" element={<FundingFinder />} />
          <Route path="/advisors-compliance" element={<AdvisorsCompliance />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
