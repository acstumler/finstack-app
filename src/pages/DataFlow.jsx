import React, { useState } from 'react';
import { PlaidLink } from 'react-plaid-link';

const DataFlow = () => {
  const [publicToken, setPublicToken] = useState(null);
  const [status, setStatus] = useState('');  // Track success or failure of Plaid Link
  const [loading, setLoading] = useState(false);  // Track loading state

  // This function is called when Plaid Link completes successfully
  const onSuccess = (public_token) => {
    setPublicToken(public_token); // Store the public token from Plaid
    setStatus('Linking Successful!');
    setLoading(true);

    // Send public token to the backend to exchange it for an access token and fetch transactions
    fetch('/api/plaid', {
      method: 'POST',
      body: JSON.stringify({ public_token }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Plaid Data received:', data);
        // Process and display the received data (transactions, etc.)
        setLoading(false);
        setStatus('Linking and data fetch successful!');
      })
      .catch((error) => {
        console.error('Error linking bank account:', error);
        setStatus('Error linking account.');
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Data Flow</h2>
      <p>Link your bank account to sync your financial data with FinStack.</p>

      {/* Plaid Link Button */}
      <PlaidLink
        clientName="FinStack"
        env={process.env.REACT_APP_PLAID_ENV}  // Access Plaid environment from .env
        product={['transactions']}  // Enable the Transactions product
        publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}  // Use Plaid public key from environment variable
        onSuccess={onSuccess}  // Trigger onSuccess when Plaid Link completes
      >
        Link Your Bank Account
      </PlaidLink>

      {/* Status Message */}
      {publicToken && <p>{status}</p>}
      
      {/* Loading Indicator */}
      {loading && <p>Loading... Please wait while we fetch your financial data.</p>}

      {/* Optionally, display any additional status or errors */}
      {!publicToken && !loading && <p>Click the button to link your bank account.</p>}
    </div>
  );
};

export default DataFlow;
