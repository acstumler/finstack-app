import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <motion.div
      className="page pricing"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Transparent Pricing</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p>$0/mo</p>
          <ul>
            <li>Upload up to 1 file</li>
            <li>Basic KPI reports</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>$39/mo</p>
          <ul>
            <li>Unlimited uploads</li>
            <li>Advanced analytics</li>
            <li>Custom dashboards</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>Contact Us</p>
          <ul>
            <li>White-labeled solution</li>
            <li>Team-based access</li>
            <li>Dedicated onboarding</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
