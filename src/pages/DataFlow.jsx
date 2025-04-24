import React from 'react';

const DataFlow = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Data Flow</h2>
      <p>Import your financial documents such as bank statements, credit card statements, loan documents, and more.</p>
      
      <section className="import-area">
        <h3 className="text-2xl font-medium">Import Your Documents</h3>
        <button className="btn-primary">Import Bank Statements</button>
        <button className="btn-primary">Import Credit Card Statements</button>
        <button className="btn-primary">Import Loan Documents</button>
      </section>
    </div>
  );
};

export default DataFlow;
