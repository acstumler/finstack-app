// App.js (Full File)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import CashFlow from './pages/CashFlow';
import Funding from './pages/Funding';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/cash-flow"
              element={
                <ProtectedRoute>
                  <CashFlow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/funding"
              element={
                <ProtectedRoute>
                  <Funding />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
