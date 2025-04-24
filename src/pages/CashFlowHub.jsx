import React from 'react';

const CashFlowHub = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Cash Flow & Financial Statements</h2>
      <p>Your one-stop hub for managing your small business' cash flow, financial statements, and more.</p>

      <section className="financial-statements">
        <h3 className="text-2xl font-medium">Financial Statements</h3>
        <p>Create and print financial statements like Income Statements, Cash Flow Statements, and more.</p>
        <button className="btn-primary">Create Statement</button>
      </section>

      <section className="balance-sheet">
        <h3 className="text-2xl font-medium">Balance Sheet Manager</h3>
        <p>Manage and track your business' assets, liabilities, and equity with ease.</p>
        <button className="btn-primary">Create Balance Sheet</button>
      </section>
    </div>
  );
};

export default CashFlowHub;
