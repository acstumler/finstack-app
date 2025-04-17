import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to <span className="brand">FinStack</span></h1>
        <p>Your all-in-one platform for managing small business finances.
           Track cash flow, find funding, forecast budgets, and get expert help – all in one place.</p>
        <div className="cta-buttons">
          <button onClick={() => navigate("/login")} className="btn-primary">
            Login
          </button>
          <button onClick={() => navigate("/signup")} className="btn-secondary">
            Create Account
          </button>
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2>What is FinStack?</h2>
        <p>
          FinStack is a next-gen financial insight tool built for small businesses,
          CFOs, advisors, and entrepreneurs. From real-time cash insights to funding
          connections and compliance tools, FinStack empowers you to stay ahead of your finances.
        </p>
      </motion.section>

      <motion.section
        className="footer-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>Ready to take control of your business finances?</p>
        <button onClick={() => navigate("/signup")} className="btn-primary">
          Get Started for Free
        </button>
      </motion.section>
    </div>
  );
}
