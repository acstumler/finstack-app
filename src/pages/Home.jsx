// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-50 to-orange-100 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 text-center mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to FinStack
      </motion.h1>

      <p className="text-lg text-center max-w-2xl text-orange-900 mb-10">
        FinStack is your AI-powered financial command center—built for small business owners, CFOs, and advisors.
        Securely analyze financial data, uncover insights, access funding, and streamline decisions with confidence.
      </p>

      <motion.div
        className="flex gap-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/login')}
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-700 transition"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate('/login')}
          className="border border-orange-500 text-orange-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-100 transition"
        >
          Create Account
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
