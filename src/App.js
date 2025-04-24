import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Switch>
          {/* Home Route */}
          <Route path="/" exact component={Home} />
          
          {/* Specific Pages */}
          <Route path="/cash-flow-hub" component={CashFlowHub} />
          <Route path="/balance-sheet-manager" component={BalanceSheetManager} />
          <Route path="/data-flow" component={DataFlow} />
          <Route path="/funding-finder" component={FundingFinder} />
          <Route path="/advisors-compliance" component={AdvisorsCompliance} />
          <Route path="/learning-center" component={LearningCenter} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactUs} />

          {/* 404 Not Found */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
