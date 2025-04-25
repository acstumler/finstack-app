import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Import Home page
import Login from './pages/Login';
import Signup from './pages/Signup';
import DataFlow from './pages/DataFlow';
import CashFlow from './pages/CashFlow';
import FundingFinder from './pages/FundingFinder';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/data-flow" component={DataFlow} />
          <Route path="/cash-flow" component={CashFlow} />
          <Route path="/funding-finder" component={FundingFinder} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
