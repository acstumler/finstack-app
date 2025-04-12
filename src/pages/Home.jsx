// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Wallet, BarChart3, GraduationCap, Users, ShieldCheck, MessageSquare } from 'lucide-react';
import '../styles/Home.css';

const features = [
  { icon: <Wallet size={24} />, text: 'Real-Time Cash Flow Monitoring' },
  { icon: <Wrench size={24} />, text: 'Funding Finder (Grants, Loans, Matchmaking)' },
  { icon: <BarChart3 size={24} />, text: 'Budget Manager with Forecasting' },
  { icon: <GraduationCap size={24} />, text: 'Financial Learning Center' },
  { icon: <Users size={24} />, text: 'Advisor Access and Office Hours' },
  { icon: <ShieldCheck size={24} />, text: 'Compliance Toolkit and Reminders' },
  { icon: <MessageSquare size={24} />, text: 'Community Forum for Peer Support' },
];

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Next-Gen Financial Tools built for small businesses</h1>
      </motion.div>

      <motion.div
        className="feature-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {features.map((item, idx) => (
          <motion.div className="feature-card" key={idx} whileHover={{ scale: 1.03 }}>
            <div className="icon">{item.icon}</div>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
