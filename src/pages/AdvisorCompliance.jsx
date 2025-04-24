import React from 'react';

const AdvisorsCompliance = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Advisors & Compliance</h2>
      <p className="text-lg">
        Welcome to the Advisors & Compliance section. Here, small businesses can connect with financial advisors to address specific compliance issues, navigate complex regulations, or get expert advice on business operations.
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-medium">Our Expert Advisors</h3>
        <p className="mb-4">
          Explore the variety of advisors we offer, specializing in accounting, tax compliance, legal matters, and other financial services.
        </p>
        <ul className="list-disc pl-6">
          <li>Tax Compliance Advisors</li>
          <li>Financial Reporting Advisors</li>
          <li>Legal Compliance Advisors</li>
          <li>Investment and Funding Advisors</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-medium">Request an Advisor</h3>
        <p className="mb-4">
          If you need assistance with a specific issue, feel free to request a consultation with one of our expert advisors. Fill out the form below to get started:
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg">Your Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg">Email Address</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg">Tell us your issue</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Describe your compliance issue or question"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvisorsCompliance;
