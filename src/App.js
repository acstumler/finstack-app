// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import CashFlowHub from './pages/CashFlowHub';
import Funding from './pages/Funding';
import Budget from './pages/Budget';
import Learn from './pages/Learn';
import Advisors from './pages/Advisors';
import Compliance from './pages/Compliance';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/cashflow" element={<CashFlowHub />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/advisors" element={<Advisors />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
