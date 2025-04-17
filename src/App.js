import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CashFlowHub from './pages/CashFlowHub';
import Funding from './pages/Funding';
import Budget from './pages/Budget';
import Learn from './pages/Learn';
import Advisors from './pages/Advisors';
import Compliance from './pages/Compliance';
import Community from './pages/Community';
import NotFound from './pages/NotFound';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Allow master key access without login
  const masterEmail = 'master@finstack.ai';
  if (currentUser?.email === masterEmail) return children;

  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />

              {/* Protected FinStack Modules */}
              <Route path="/cashflow" element={
                <ProtectedRoute>
                  <CashFlowHub />
                </ProtectedRoute>
              } />
              <Route path="/funding" element={
                <ProtectedRoute>
                  <Funding />
                </ProtectedRoute>
              } />
              <Route path="/budget" element={
                <ProtectedRoute>
                  <Budget />
                </ProtectedRoute>
              } />
              <Route path="/learn" element={
                <ProtectedRoute>
                  <Learn />
                </ProtectedRoute>
              } />
              <Route path="/advisors" element={
                <ProtectedRoute>
                  <Advisors />
                </ProtectedRoute>
              } />
              <Route path="/compliance" element={
                <ProtectedRoute>
                  <Compliance />
                </ProtectedRoute>
              } />
              <Route path="/community" element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              } />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
