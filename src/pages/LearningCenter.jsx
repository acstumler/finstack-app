// /src/pages/LearningCenter.jsx
import React from 'react';

const LearningCenter = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Learning Center</h2>
      <p className="text-lg">
        Welcome to the Learning Center! Here, you can find valuable resources to help you understand key financial concepts, such as cash flow management, budgeting, and more.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-medium">Topics Covered</h3>
        <ul className="list-disc pl-6">
          <li>Understanding Cash Flow</li>
          <li>How to Create a Budget</li>
          <li>Basic Accounting Principles</li>
          <li>Improving Your Profit Margins</li>
          <li>Fundamentals of Small Business Financing</li>
        </ul>
      </div>
    </div>
  );
};

export default LearningCenter;
